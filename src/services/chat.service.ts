"use server"

import prisma from "@/lib/prisma";
import { TResponse } from "@/types/response";
import { getUser } from "./user.service";
import { revalidatePath } from "next/cache";

export async function createChat({ firstMessage }: { firstMessage: string }): Promise<TResponse> {
    try {
        const user = await getUser();

        if (!firstMessage?.trim() || !user?.id) {
            return {
                success: false,
                message: 'Missing required fields.',
            }
        };

        // Generate a title — simple example, you can make it fancier
        const title = firstMessage.length > 30 ? firstMessage.slice(0, 30) + '...' : firstMessage;

        // Use transaction for atomicity
        const result = await prisma.$transaction(async (tx) => {
            const chat = await tx.chat.create({
                data: {
                    title,
                    description: firstMessage.length > 60 ? firstMessage.slice(0, 60) + '...' : firstMessage,
                    user_id: user.id,
                },
            });

            // Save first message as the first Message too
            const message = await tx.message.create({
                data: {
                    chat_id: chat.id,
                    role: 'user',
                },
            });

            // Create the text part for the message
            await tx.messagePart.create({
                data: {
                    message_id: message.id,
                    type: 'text',
                    text: firstMessage,
                },
            });

            return chat;
        });

        return {
            success: true,
            message: 'Chat created successfully.',
            data: result
        }
    } catch (error) {
        console.error('Error creating chat:', error);
        return {
            success: false,
            message: 'Failed to create chat.',
        }
    }
}

// save message
export async function saveMessage({ chat_id, content, role }: { chat_id: string, content: string; role: 'user' | 'assistant' }): Promise<TResponse> {
    if (!content || !role) {
        return {
            success: false,
            message: 'Missing required fields.',
        }
    }

    try {
        const result = await prisma.$transaction(async (tx) => {
            // Create the message
            const message = await tx.message.create({
                data: {
                    chat_id,
                    role,
                },
            });

            // Create the text part for the message
            await tx.messagePart.create({
                data: {
                    message_id: message.id,
                    type: 'text',
                    text: content,
                },
            });

            return message;
        });

        return {
            success: true,
            message: 'Message saved successfully.',
            data: result
        }
    } catch (error) {
        console.error('Error saving message:', error);
        return {
            success: false,
            message: 'Failed to save message.',
        }
    }
}

// Get messages with parts for a chat
export async function getChatMessages(chat_id: string) {
    try {
        const messages = await prisma.message.findMany({
            where: { chat_id },
            include: {
                parts: {
                    orderBy: { createdAt: 'asc' }
                }
            },
            orderBy: { createdAt: 'asc' }
        });

        return messages;
    } catch (error) {
        console.error('Error fetching chat messages:', error);
        return [];
    }
}

// get single chat message
export async function getChat(chat_id: string): Promise<TResponse> {
    try {
        if (!chat_id) {
            return {
                success: false,
                message: 'Chat ID is required.',
                data: []
            }
        }

        const messages = await prisma.message.findMany({
            where: {
                chat_id
            },
            include: {
                parts: {
                    orderBy: { createdAt: 'asc' }
                }
            },
            orderBy: {
                createdAt: 'asc'
            }
        });

        return {
            success: true,
            message: 'Chat loaded successfully.',
            data: messages
        }
    } catch (error) {
        console.error('Error loading chat:', error);
        return {
            success: false,
            message: 'Failed to load chat.',
            data: []
        }
    }
}

// get all chats of user
export async function getChats(): Promise<TResponse> {
    const user = await getUser();

    if (!user?.id) {
        return {
            success: false,
            message: 'Missing required fields.',
        }
    };

    const chats = await prisma.chat.findMany({
        where: {
            user_id: user.id
        },
        orderBy: {
            created_at: 'desc'
        }
    });

    return {
        success: true,
        message: 'Chats loaded successfully.',
        data: chats
    }
}

// delete chat 
export async function deleteChat(chat_id: string): Promise<TResponse> {
    // delete chat and message in transaction
    const chat = await prisma.$transaction([
        prisma.message.deleteMany({
            where: {
                chat_id
            }
        }),
        prisma.chat.delete({
            where: {
                id: chat_id,
                user_id: (await getUser())?.id
            }
        })
    ])

    revalidatePath('/chat');

    return {
        success: true,
        message: 'Chat deleted successfully.',
        data: chat
    }
}
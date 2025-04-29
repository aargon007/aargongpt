"use server"

import prisma from "@/lib/prisma";
import { TResponse } from "@/types/response";
import { getUser } from "./user.service";

export async function createChat({ firstMessage }: { firstMessage: string }): Promise<TResponse> {
    const user = await getUser();

    if (!firstMessage || !user?.id) {
        return {
            success: false,
            message: 'Missing required fields.',
        }
    };

    // Generate a title — simple example, you can make it fancier
    const title = firstMessage.length > 20 ? firstMessage.slice(0, 20) + "..." : firstMessage;

    const chat = await prisma.chat.create({
        data: {
            title,
            description: firstMessage,
            user_id: user.id,
        },
    });

    // Save first message as the first Message too
    await prisma.message.create({
        data: {
            chat_id: chat.id,
            content: firstMessage,
            role: 'user',
        },
    });

    return {
        success: true,
        message: 'Chat created successfully.',
        data: chat
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

    const message = await prisma.message.create({
        data: {
            chat_id,
            content,
            role,
        },
    });

    return {
        success: true,
        message: 'Message saved successfully.',
        data: message
    }
}

// load chat
export async function getChat(chat_id: string): Promise<TResponse> {
    const chat = await prisma.message.findMany({
        where: {
            chat_id
        },
        orderBy: {
            createdAt: 'asc'
        }
    });

    return {
        success: true,
        message: 'Chat loaded successfully.',
        data: chat
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
        }
    });

    return {
        success: true,
        message: 'Chats loaded successfully.',
        data: chats
    }
}
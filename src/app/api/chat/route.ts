import gettoken from '@/lib/gettoken';
import prisma from '@/lib/prisma';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const user = await gettoken();
    // Extract the `messages` from the body of the request
    const { messages, id } = await req.json();

    console.log('chat id', id); // can be used for persisting the chat

    // Call the language model
    const result = streamText({
        model: openai('gpt-4o'),
        messages,
        async onFinish({ text, toolCalls, toolResults, usage, finishReason, response }) {
            // console.log(response);
            // console.log('finish reason', finishReason);
            // console.log('usage', usage);
            // console.log('toolCalls', toolCalls);
            // console.log('toolResults', toolResults);
            // Persist the assistant's reply as a new Message
            if (id) {
                await prisma.message.create({
                    data: {
                        content: text,
                        role: 'assistant',
                        chat_id: id,
                    },
                });
            }
        },
    });

    // Respond with the stream
    return result.toDataStreamResponse();
}

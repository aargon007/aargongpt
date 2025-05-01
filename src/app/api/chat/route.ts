import gettoken from '@/lib/gettoken';
import prisma from '@/lib/prisma';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
    const user = await gettoken();
    // Extract the `messages` from the body of the request
    const { messages, id } = await req.json();

    //console.log('chat id', id);

    // Call the language model
    const result = streamText({
        model: openai("o4-mini"),
        system:
            'You are a helpful assistant. Respond to the user in Markdown format.',
        messages,
        async onFinish({ text, toolCalls, toolResults, usage, finishReason, response }) {
            // console.log(response);
            // console.log('finish reason', finishReason);
            console.log('usage', usage);
            // console.log('toolCalls', toolCalls);
            // console.log('toolResults', toolResults);
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
        onError(error) {
            console.error(error);
        }
    });

    // Respond with the stream
    return result.toDataStreamResponse();
}

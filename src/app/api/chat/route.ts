import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import gettoken from '@/lib/gettoken';
import prisma from '@/lib/prisma';

import { google } from '@ai-sdk/google';


// Allow streaming responses up to 60 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
    const user = await gettoken();
    // Extract the \`messages\` from the body of the request
    const { messages, id } = await req.json();

    // Call the language model using Google Gemini
    const result = streamText({
        model: google('gemini-2.0-flash'), // Use a Gemini model, e.g., 'gemini-pro'
        system: 'You are a helpful assistant. Respond to the user in Markdown format.',
        messages,
        async onFinish({ text, toolCalls, toolResults, usage, finishReason, response }) {
            console.log('usage', usage);
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

// Allow streaming responses up to 30 seconds
// export const maxDuration = 60;

// export async function POST(req: Request) {
//     const user = await gettoken();
//     // Extract the `messages` from the body of the request
//     const { messages, id } = await req.json();

//     // gpt-4.1 June 2024
//     //

//     // Call the language model
//     const result = streamText({
//         model: openai("gpt-4.1"),
//         system:
//             'You are a helpful assistant. Respond to the user in Markdown format.',
//         messages,
//         async onFinish({ text, toolCalls, toolResults, usage, finishReason, response }) {
//             // console.log(response);
//             // console.log('finish reason', finishReason);
//             console.log('usage', usage);
//             // console.log('toolCalls', toolCalls);
//             // console.log('toolResults', toolResults);
//             if (id) {
//                 await prisma.message.create({
//                     data: {
//                         content: text,
//                         role: 'assistant',
//                         chat_id: id,
//                     },
//                 });
//             }
//         },
//         onError(error) {
//             console.error(error);
//         }
//     });

//     // Respond with the stream
//     return result.toDataStreamResponse();
// }

'use client';

import React from 'react';
import { LuCopy } from 'react-icons/lu';
import { formatDistanceToNow } from 'date-fns';
import { MemoizedMarkdown } from './MarkdownPreview';
import { UIMessage } from 'ai';

// Helper function to extract text content from UIMessage parts
const getTextContent = (message: UIMessage): string => {
    if (message.parts && Array.isArray(message.parts)) {
        const textPart = message.parts.find(part => part.type === 'text');
        return textPart?.text || '';
    }
    // Fallback for legacy content field
    return (message as any).content || '';
};

const MessageCard = ({ message }: { message: UIMessage; streaming?: boolean }) => {
    const { role } = message;
    const content = getTextContent(message);
    const createdAt = (message as any).createdAt;
    const timeAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

    return (
        <div className='p-4 border border-noble-500 rounded-[16px] flex flex-col md:flex-row justify-between items-start gap-6'>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-green-400 to-blue-500 font-bold text-white">
                {role === 'user' ? 'U' : 'A'}
            </div>

            <div className='w-full py-2'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-base font-bold text-white'>
                        {role === 'user' ? 'You' : 'AI'} {timeAgo && <span className='pl-4 text-noble-400 text-sm font-medium'>{timeAgo}</span>}
                    </h3>
                    <div className='text-noble-400 hover:text-noble-300 cursor-pointer h-8 w-8'>
                        <LuCopy size={16} />
                    </div>
                </div>

                <div className='mt-3 text-base text-noble-100 prose prose-invert max-w-none'>
                    {role === 'user' && content}
                    {role === 'assistant' &&
                        <MemoizedMarkdown
                            id={message.id}
                            content={content}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default MessageCard;
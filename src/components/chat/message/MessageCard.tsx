'use client';

import React from 'react';
import { Message } from 'ai';
import { LuCopy } from 'react-icons/lu';
import { formatDistanceToNow } from 'date-fns';
import { MemoizedMarkdown } from './MarkdownPreview';

const MessageCard = ({ message, streaming }: { message: Message; streaming?: boolean }) => {
    const { content, role, createdAt } = message;
    const timeAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

    console.log(message);
    
    return (
        <div className='p-4 border border-noble-500 rounded-[16px] flex flex-col md:flex-row justify-between items-start gap-6'>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-blue-500 font-bold text-white">
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
'use client';

import React from 'react';
import { LuCopy } from 'react-icons/lu';
import { formatDistanceToNow } from 'date-fns';
import { MemoizedMarkdown } from './MarkdownPreview';
import { TMessage } from '@/types/chat';
import { renderMessagePart } from '@/utils/chat/renderMessagePart';

const MessageCard = ({ message }: { message: TMessage; streaming?: boolean }) => {
    const { role, createdAt, parts } = message;
    const timeAgo = createdAt ? formatDistanceToNow(new Date(createdAt), { addSuffix: true }) : '';

    // Get text content for assistant messages (for markdown rendering)
    const textContent = parts?.find(part => part.type === 'text')?.text || '';

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
                    {role === 'user' && parts && (
                        <div className="space-y-2">
                            {parts.map((part, index) => renderMessagePart(part, index))}
                        </div>
                    )}
                    {role === 'assistant' && (
                        <div className="space-y-2">
                            {parts && parts.length > 1 ? (
                                // Multiple parts - render each separately
                                parts.map((part, index) => {
                                    if (part.type === 'text') {
                                        return (
                                            <MemoizedMarkdown
                                                key={index}
                                                id={`${message.id}-${index}`}
                                                content={part.text || ''}
                                            />
                                        );
                                    }
                                    return renderMessagePart(part, index);
                                })
                            ) : (
                                // Single text part - use existing markdown rendering
                                <MemoizedMarkdown
                                    id={message.id}
                                    content={textContent}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MessageCard;
'use client';

import React from 'react';
import { LuCopy } from 'react-icons/lu';
import { formatDistanceToNow } from 'date-fns';
import { MemoizedMarkdown } from './MarkdownPreview';
import { TMessage } from '@/types/chat';


// Helper function to render different types of message parts
const renderMessagePart = (part: any, index: number) => {
    switch (part.type) {
        case 'text':
            return (
                <div key={index} className="text-part">
                    {part.text}
                </div>
            );
        case 'image':
            return (
                <div key={index} className="image-part">
                    <img
                        src={part.image}
                        alt="Message image"
                        className="max-w-full h-auto rounded-lg"
                    />
                </div>
            );
        case 'file':
            return (
                <div key={index} className="file-part p-2 border border-noble-600 rounded">
                    <span>📎 File: {part.data?.name || part.name || 'Unknown file'}</span>
                </div>
            );
        case 'tool-call':
        case 'tool_call':
            return (
                <div key={index} className="tool-call-part p-2 bg-blue-900/20 border border-blue-600 rounded">
                    <span>🔧 Tool Call: {part.toolName || part.data?.name || 'Unknown tool'}</span>
                    {part.args && (
                        <pre className="mt-1 text-sm text-blue-200">{JSON.stringify(part.args, null, 2)}</pre>
                    )}
                </div>
            );
        case 'tool-result':
        case 'tool_result':
            return (
                <div key={index} className="tool-result-part p-2 bg-green-900/20 border border-green-600 rounded">
                    <span>✅ Tool Result</span>
                    {part.result && <pre className="mt-1 text-sm text-green-200">{JSON.stringify(part.result, null, 2)}</pre>}
                    {part.data && <pre className="mt-1 text-sm text-green-200">{JSON.stringify(part.data, null, 2)}</pre>}
                </div>
            );
        case 'reasoning':
            return (
                <div key={index} className="reasoning-part p-2 bg-purple-900/20 border border-purple-600 rounded">
                    <span>🧠 Reasoning</span>
                    {part.reasoning && <div className="mt-1 text-sm text-purple-200">{part.reasoning}</div>}
                </div>
            );
        default:
            // For any other part types, try to display them generically
            return (
                <div key={index} className="generic-part p-2 bg-gray-900/20 border border-gray-600 rounded">
                    <div className="flex items-center gap-2">
                        <span className="font-medium">📄 {part.type}</span>
                    </div>
                    {part.text && <div className="mt-1 text-sm">{part.text}</div>}
                    {part.content && <div className="mt-1 text-sm">{part.content}</div>}
                    {part.data && (
                        <details className="mt-1">
                            <summary className="text-xs text-gray-400 cursor-pointer">Show data</summary>
                            <pre className="mt-1 text-xs text-gray-300">{JSON.stringify(part.data, null, 2)}</pre>
                        </details>
                    )}
                </div>
            );
    }
};

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
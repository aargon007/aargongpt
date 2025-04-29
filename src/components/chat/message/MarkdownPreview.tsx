'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
    markdownContent: string;
    streaming?: boolean; // New
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdownContent, streaming }) => {
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const handleCopy = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(code);
            setTimeout(() => setCopiedCode(null), 2000); // Reset after 2 seconds
        } catch (error) {
            console.error('Copy failed', error);
        }
    };

    return (
        <div className="markdown w-full md:pr-10">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, className, children, ...props }) {
                        const code = String(children).trim();
                        const language = className?.replace('language-', '') || '';

                        if (language && !streaming) {
                            // Full highlighting after stream ends
                            return (
                                <div className="relative group">
                                    <div className='flex justify-between items-center text-sm py-px px-5 bg-noble-600'>
                                        <p>{language}</p>
                                        <button onClick={() => handleCopy(code)}>
                                            {copiedCode === code ? 'Copied!' : 'Copy'}
                                        </button>
                                    </div>

                                    <SyntaxHighlighter
                                        language={language}
                                        style={oneDark}
                                        PreTag="div"
                                        customStyle={{
                                            padding: '2rem',
                                            borderRadius: 'none',
                                            borderBottomRightRadius: '0.5rem',
                                            borderBottomLeftRadius: '0.5rem',
                                            overflowX: 'auto',
                                            backgroundColor: '#1F2937',
                                            marginTop: '0',
                                        }}
                                    >
                                        {code}
                                    </SyntaxHighlighter>
                                </div>
                            );
                        }

                        // During streaming, just use a simple <code>
                        return (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {markdownContent}
            </ReactMarkdown>

        </div>
    );
};

export default MarkdownPreview;

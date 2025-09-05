'use client';

import { memo, useMemo, useState, lazy, Suspense } from 'react';
import { marked } from 'marked';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

// Lazy load syntax highlighter to improve initial bundle size
const SyntaxHighlighter = lazy(() =>
    import('react-syntax-highlighter').then(module => ({
        default: module.Prism
    }))
);

// Lazy load the theme
const oneDarkTheme = lazy(() =>
    import('react-syntax-highlighter/dist/esm/styles/prism').then(module => ({
        default: module.oneDark
    }))
);

function parseMarkdownIntoBlocks(markdown: string): string[] {
    try {
        const tokens = marked.lexer(markdown);
        return tokens.map(token => token.raw);
    } catch (error) {
        console.error('Error parsing markdown:', error);
        return [markdown]; // Fallback to original content
    }
}

// Code block skeleton component
function CodeBlockSkeleton() {
    return (
        <div className="relative group">
            <div className='flex justify-between items-center text-sm py-px px-5 bg-noble-600'>
                <div className="h-4 w-16 bg-noble-500 rounded animate-pulse"></div>
                <div className="h-4 w-12 bg-noble-500 rounded animate-pulse"></div>
            </div>
            <div className="p-8 bg-gray-800 rounded-b-lg">
                <div className="space-y-2">
                    <div className="h-4 bg-noble-500 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-noble-500 rounded w-1/2 animate-pulse"></div>
                    <div className="h-4 bg-noble-500 rounded w-5/6 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

const MemoizedMarkdownBlock = memo(
    ({ content }: { content: string }) => {
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

                            if (language) {
                                // Full highlighting after stream ends with lazy loading
                                return (
                                    <div className="relative group">
                                        <div className='flex justify-between items-center text-sm py-px px-5 bg-noble-600'>
                                            <p>{language}</p>
                                            <button
                                                onClick={() => handleCopy(code)}
                                                className="text-noble-300 hover:text-white transition-colors"
                                            >
                                                {copiedCode === code ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>

                                        <Suspense fallback={<CodeBlockSkeleton />}>
                                            <Suspense fallback={<CodeBlockSkeleton />}>
                                                <SyntaxHighlighter
                                                    language={language}
                                                    style={oneDarkTheme}
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
                                                    showLineNumbers={code.split('\n').length > 10}
                                                    wrapLines={true}
                                                    wrapLongLines={true}
                                                >
                                                    {code}
                                                </SyntaxHighlighter>
                                            </Suspense>
                                        </Suspense>
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
                    {content}
                </ReactMarkdown>
            </div>
        );
    },
    (prevProps, nextProps) => {
        if (prevProps.content !== nextProps.content) return false;
        return true;
    },
);

MemoizedMarkdownBlock.displayName = 'MemoizedMarkdownBlock';

export const MemoizedMarkdown = memo(
    ({ content, id }: { content: string; id: string }) => {
        const blocks = useMemo(() => parseMarkdownIntoBlocks(content), [content]);

        return blocks.map((block, index) => (
            <MemoizedMarkdownBlock content={block} key={`${id}-block_${index}`} />
        ));
    },
);

MemoizedMarkdown.displayName = 'MemoizedMarkdown';
// Helper function to render different types of message parts
export const renderMessagePart = (part: any, index: number) => {
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
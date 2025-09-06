// Helper function to convert message parts to text content
const getMessageContent = (message: any): string => {
    if (message.parts && Array.isArray(message.parts)) {
        const textPart = message.parts.find((part: any) => part.type === 'text');
        return textPart?.text || '';
    }
    // Fallback for old content field
    return message.content || '';
};
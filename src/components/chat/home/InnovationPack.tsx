'use client';

import { motion } from 'framer-motion';
import { LuCode, LuFileText, LuLightbulb, LuMessageSquare } from 'react-icons/lu';

interface ExamplePrompt {
    id: string;
    text: string;
    icon: React.ReactNode;
}

export default function InnovationPack() {
    const examplePrompts: ExamplePrompt[] = [
        {
            id: '1',
            text: 'Explain quantum computing like I\'m 5',
            icon: <LuLightbulb size={16} />
        },
        {
            id: '2',
            text: 'Write a Python function to sort a list',
            icon: <LuCode size={16} />
        },
        {
            id: '3',
            text: 'Help me write a professional email',
            icon: <LuFileText size={16} />
        },
        {
            id: '4',
            text: 'What are the latest trends in AI?',
            icon: <LuMessageSquare size={16} />
        },
    ];

    const handlePromptClick = (prompt: string) => {
        const event = new CustomEvent('promptSelected', { detail: { prompt } });
        window.dispatchEvent(event);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] h-full p-6 max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        AargonGPT
                    </span>
                </h1>
                <p className="text-xl text-noble-300">
                    How can I help you today?
                </p>
            </motion.div>

            {/* Example Prompts */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl"
            >
                {examplePrompts.map((prompt, index) => (
                    <motion.button
                        key={prompt.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePromptClick(prompt.text)}
                        className="flex items-center gap-3 p-4 bg-noble-800 hover:bg-noble-700 border border-noble-600 hover:border-noble-500 rounded-xl text-left transition-all duration-200 group"
                    >
                        <div className="text-noble-400 group-hover:text-green-400 transition-colors">
                            {prompt.icon}
                        </div>
                        <span className="text-noble-200 group-hover:text-white transition-colors">
                            {prompt.text}
                        </span>
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LuCode, LuFileText, LuLightbulb, LuPalette, LuSparkles, LuRocket, LuBrain, LuTrendingUp } from 'react-icons/lu';

interface PromptCard {
    id: string;
    title: string;
    description: string;
    prompt: string;
    icon: React.ReactNode;
    category: string;
    gradient: string;
}

export default function InnovationPack() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = [
        { id: 'all', name: 'All', icon: <LuSparkles size={16} /> },
        { id: 'creative', name: 'Creative', icon: <LuPalette size={16} /> },
        { id: 'development', name: 'Development', icon: <LuCode size={16} /> },
        { id: 'content', name: 'Content', icon: <LuFileText size={16} /> },
        { id: 'strategy', name: 'Strategy', icon: <LuBrain size={16} /> },
    ];

    const promptCards: PromptCard[] = [
        {
            id: '1',
            title: 'UI/UX Design Review',
            description: 'Get expert feedback on your design concepts',
            prompt: 'Please review this UI/UX design and provide detailed feedback on usability, accessibility, and visual hierarchy. Suggest improvements for better user experience.',
            icon: <LuPalette size={20} />,
            category: 'creative',
            gradient: 'from-pink-500 to-purple-600'
        },
        {
            id: '2',
            title: 'Code Architecture Review',
            description: 'Analyze and improve your code structure',
            prompt: 'Review this code architecture and suggest improvements for scalability, maintainability, and performance. Include best practices and design patterns.',
            icon: <LuCode size={20} />,
            category: 'development',
            gradient: 'from-blue-500 to-cyan-600'
        },
        {
            id: '3',
            title: 'Content Strategy',
            description: 'Create compelling content for your audience',
            prompt: 'Help me create a comprehensive content strategy for [your topic]. Include content pillars, target audience analysis, and distribution channels.',
            icon: <LuFileText size={20} />,
            category: 'content',
            gradient: 'from-green-500 to-emerald-600'
        },
        {
            id: '4',
            title: 'Business Innovation',
            description: 'Generate innovative business ideas',
            prompt: 'Generate innovative business ideas for [your industry]. Focus on emerging trends, market gaps, and technological opportunities.',
            icon: <LuLightbulb size={20} />,
            category: 'strategy',
            gradient: 'from-yellow-500 to-orange-600'
        },
        {
            id: '5',
            title: 'API Documentation',
            description: 'Create comprehensive API documentation',
            prompt: 'Help me create detailed API documentation including endpoints, request/response examples, authentication, and error handling.',
            icon: <LuCode size={20} />,
            category: 'development',
            gradient: 'from-indigo-500 to-purple-600'
        },
        {
            id: '6',
            title: 'Marketing Campaign',
            description: 'Design effective marketing campaigns',
            prompt: 'Create a comprehensive marketing campaign for [your product/service]. Include target audience, messaging, channels, and success metrics.',
            icon: <LuRocket size={20} />,
            category: 'strategy',
            gradient: 'from-red-500 to-pink-600'
        },
        {
            id: '7',
            title: 'Brand Identity',
            description: 'Develop a strong brand identity',
            prompt: 'Help me develop a comprehensive brand identity including brand values, personality, voice, visual guidelines, and positioning strategy.',
            icon: <LuPalette size={20} />,
            category: 'creative',
            gradient: 'from-purple-500 to-pink-600'
        },
        {
            id: '8',
            title: 'Market Analysis',
            description: 'Analyze market trends and opportunities',
            prompt: 'Conduct a detailed market analysis for [your industry/product]. Include competitor analysis, market size, trends, and opportunities.',
            icon: <LuTrendingUp size={20} />,
            category: 'strategy',
            gradient: 'from-teal-500 to-blue-600'
        },
    ];

    const filteredCards = selectedCategory === 'all'
        ? promptCards
        : promptCards.filter(card => card.category === selectedCategory);

    const handlePromptClick = (prompt: string) => {
        // This will be handled by the parent component
        const event = new CustomEvent('promptSelected', { detail: { prompt } });
        window.dispatchEvent(event);
    };

    return (
        <div className="p-6 md:p-12 max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-12"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Welcome to{' '}
                    <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        AargonGPT
                    </span>
                </h1>
                <p className="text-lg text-noble-300 max-w-2xl mx-auto">
                    Supercharge your creativity and productivity with AI-powered assistance.
                    Choose from our curated prompts or start your own conversation.
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-2 mb-8"
            >
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category.id
                                ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg'
                                : 'bg-noble-600 text-noble-300 hover:bg-noble-500 hover:text-white'
                            }`}
                    >
                        {category.icon}
                        {category.name}
                    </button>
                ))}
            </motion.div>

            {/* Prompt Cards Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
                {filteredCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePromptClick(card.prompt)}
                        className="group cursor-pointer"
                    >
                        <div className="h-full bg-noble-800 rounded-xl border border-noble-600 p-6 hover:border-noble-500 transition-all duration-200 hover:shadow-xl">
                            {/* Icon with gradient background */}
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                <div className="text-white">
                                    {card.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-noble-300 text-sm leading-relaxed">
                                {card.description}
                            </p>

                            {/* Category badge */}
                            <div className="mt-4 pt-4 border-t border-noble-700">
                                <span className="text-xs font-medium text-noble-400 uppercase tracking-wide">
                                    {card.category}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Quick Start Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <div className="bg-gradient-to-r from-noble-800 to-noble-700 rounded-xl p-6 border border-noble-600">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        Ready to get started?
                    </h3>
                    <p className="text-noble-300 mb-4">
                        Type your message below or click on any prompt above to begin your AI-powered conversation.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-noble-400">
                        <LuSparkles size={16} />
                        <span>Powered by advanced AI technology</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

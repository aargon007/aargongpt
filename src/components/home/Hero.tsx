import React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-day-blue-900/20 to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                        Build AI-Powered Applications with <span className="primaryGradient">AargonGPT</span>
                    </h1>
                    <p className="text-xl text-noble-300 mb-10 max-w-2xl mx-auto">
                        Leverage the power of Vercel AI SDK to create intelligent, responsive, and engaging AI experiences for
                        your users.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button isActive href='/login' className='hover:opacity-85'>
                            Get Started
                            <LuArrowRight size={18} />
                        </Button>
                        <Button isActive className='hover:opacity-85'>
                            View Documentation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-b from-heisenberg-blue-500/20 to-transparent blur-3xl rounded-full"></div>
        </section>
    );
};

export default Hero;
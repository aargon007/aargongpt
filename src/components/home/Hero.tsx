import { LuArrowRight } from 'react-icons/lu';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-20">
            <div className="from-day-blue-900/10 absolute inset-0 bg-linear-to-b to-transparent"></div>
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        Revolutionize Conversations with{' '}
                        <span className="primaryGradient">AargonGPT</span>{' '}
                    </h1>
                    <p className="mx-auto mb-10 max-w-2xl text-xl text-noble-300">
                        AI-powered chatbot built with Next.js and OpenAI’s GPT —
                        smart, fast, and human-like.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button
                            isActive
                            href="/login"
                            className="hover:opacity-85"
                        >
                            Get Started
                            <LuArrowRight size={18} />
                        </Button>
                        <Button isActive className="hover:opacity-85">
                            View Documentation
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="from-heisenberg-blue-900/5 absolute -bottom-16 left-1/2 h-64 w-full max-w-6xl -translate-x-1/2 transform rounded-full bg-linear-to-b to-transparent blur-3xl"></div>
        </section>
    );
};

export default Hero;

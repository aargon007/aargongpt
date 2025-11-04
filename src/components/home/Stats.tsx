import React from 'react';

const Stats = () => {
    
    return (
        <section className="relative border-y border-noble-700 bg-noble-800/50 py-16 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-2xl font-bold text-white">
                        Trusted by Thousands Worldwide</h2>
                    <p className="text-noble-300">
                        Join a growing community of satisfied users
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="text-center">
                        <div className="mb-3 text-4xl font-bold text-stem-green-400">50K+</div>
                        <div className="text-noble-300">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="mb-3 text-4xl font-bold text-stem-green-400">2M+</div>
                        <div className="text-noble-300">Conversations</div>
                    </div>
                    <div className="text-center">
                        <div className="mb-3 text-4xl font-bold text-stem-green-400">4.8★</div>
                        <div className="text-noble-300">User Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="mb-3 text-4xl font-bold text-stem-green-400">24/7</div>
                        <div className="text-noble-300">Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
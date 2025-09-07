import React from 'react';

// Code block skeleton component
const CodeBlockSkeleton = () => {
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
};

export default CodeBlockSkeleton;
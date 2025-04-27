import type React from 'react';
import { LuArrowRight } from 'react-icons/lu';

interface FeatureCardProps {
    title: string;
    icon: React.ReactNode;
}

export default function FeatureCard({ title, icon }: FeatureCardProps) {
    return (
        <button className="btnGradient flex h-12 w-full items-center justify-between rounded-[12px] px-4">
            <span className="text-sm text-noble-200">{title}</span>
            <LuArrowRight size={16} className="text-noble-400" />
        </button>
    );
}

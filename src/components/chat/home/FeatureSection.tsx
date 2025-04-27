import type React from 'react';
import { LuArrowRight } from 'react-icons/lu';
import FeatureCard from './FeatureCard';

interface FeatureSectionProps {
    title: string;
    icon: React.ReactNode;
    features: string[];
}

export default function FeatureSection({
    title,
    icon,
    features,
}: FeatureSectionProps) {
    return (
        <div>
            <div className="mb-8 flex flex-col items-center justify-center space-y-2">
                <div className="btnGradient flex h-12 w-12 items-center justify-center rounded-full shadow">
                    {icon}
                </div>
                <h3 className="font-semibold text-white">{title}</h3>
            </div>

            <div className="space-y-2">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature}
                        icon={<LuArrowRight size={16} />}
                    />
                ))}
            </div>
        </div>
    );
}

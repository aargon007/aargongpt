import type React from "react"
import FeatureCard from "./FeatureCard"
import { LuArrowRight } from "react-icons/lu"

interface FeatureSectionProps {
    title: string
    icon: React.ReactNode
    features: string[]
}

export default function FeatureSection({ title, icon, features }: FeatureSectionProps) {
    return (
        <div>
            <div className="flex flex-col justify-center items-center mb-8 space-y-2">
                <div className="w-12 h-12 rounded-full btnGradient flex items-center justify-center shadow">
                    {icon}
                </div>
                <h3 className="text-white font-semibold">
                    {title}
                </h3>
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
    )
}

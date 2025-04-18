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
            <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">{icon}</div>
                <h3 className="text-white font-medium">{title}</h3>
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

import type React from "react"
import { LuArrowRight } from "react-icons/lu"

interface FeatureCardProps {
    title: string
    icon: React.ReactNode
}

export default function FeatureCard({ title, icon }: FeatureCardProps) {
    return (
        <button className="bg-gray-900 hover:bg-gray-800 rounded-lg p-3 flex items-center justify-between w-full">
            <span className="text-gray-300 text-sm">{title}</span>
            <LuArrowRight size={16} className="text-gray-500" />
        </button>
    )
}

import type React from "react"
import { LuArrowRight } from "react-icons/lu"

interface FeatureCardProps {
    title: string
    icon: React.ReactNode
}

export default function FeatureCard({ title, icon }: FeatureCardProps) {
    return (
        <button className="btnGradient rounded-[12px] h-12 px-4 flex items-center justify-between w-full">
            <span className="text-noble-200 text-sm">{title}</span>
            <LuArrowRight size={16} className="text-noble-400" />
        </button>
    )
}

import { LuCode, LuFileText, LuLightbulb, LuPalette } from "react-icons/lu"
import FeatureSection from "./FeatureSection"

export default function InnovationPack() {
    const sections = [
        {
            title: "Creative Assets",
            icon: <LuPalette className="text-green-400" size={18} />,
            features: ["UI wireframe", "Brochure design", "Social media", "Brand guidelines"],
        },
        {
            title: "Developer Tools",
            icon: <LuCode className="text-blue-400" size={18} />,
            features: ["API Integration", "Test automation", "DB optimization", "Code review"],
        },
        {
            title: "Content Creation",
            icon: <LuFileText className="text-purple-400" size={18} />,
            features: ["Product description", "E-mail copy", "Whitepaper", "Press release"],
        },
        {
            title: "Idea Generation",
            icon: <LuLightbulb className="text-yellow-400" size={18} />,
            features: ["Hashtag ideas", "Brainstorming", "Trend analysis", "Social media posts"],
        },
    ]

    return (
        <div className="p-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Innovation Starter Pack</h2>
                <p className="text-gray-400">
                    Kickstart your innovation process with our comprehensive selection of predefined prompts.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((section, index) => (
                    <FeatureSection
                        key={index}
                        title={section.title}
                        icon={section.icon}
                        features={section.features}
                    />
                ))}
            </div>
        </div>
    )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { LuArrowDown, LuCreditCard, LuPlus, LuSearch, LuSettings } from "react-icons/lu"
import { RiArrowDownSLine } from "react-icons/ri"
import Button from "../ui/Button"

interface Project {
    id: string
    name: string
    color: string
}

export default function Sidebar() {
    const [projects, setProjects] = useState<Project[]>([
        { id: "orbital", name: "Orbital Oddysey", color: "bg-gray-500" },
        { id: "digital", name: "Digital Product Launch", color: "bg-red-500" },
        { id: "brand", name: "Brand Refresh", color: "bg-orange-500" },
        { id: "social", name: "Social Media Strategy", color: "bg-blue-500" },
    ])

    return (
        <aside className="w-80 h-[calc(100vh-24px)] rounded-[20px] bg-noble-800 flex-col overflow-hidden hidden md:flex">
            {/* Organization */}
            <div className="p-5 border-b border-noble-700 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                        M
                    </div>
                    <div>
                        <h2 className="text-white font-semibold mb-1">MyTeam</h2>
                        <p className="text-stem-green-500 text-xs font-medium">1 members</p>
                    </div>
                </div>
                <button className="text-noble-400 hover:text-white text-xl">
                    <RiArrowDownSLine />
                </button>
            </div>

            {/* General section */}
            <div className="py-6 px-2 border-b border-noble-700">
                <h3 className="text-noble-400 font-semibold text-xs pl-3 mb-6">
                    GENERAL
                </h3>
                <div className="space-y-2">
                    <Button>
                        <LuSearch size={18} />
                        <span>Search</span>
                        <span className="ml-auto text-xs bg-gray-800 px-1.5 py-0.5 rounded">⌘ S</span>
                    </Button>
                    <Link
                        href="#"
                        className="flex items-center space-x-3 px-2 py-1.5 rounded-md text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                        <LuCreditCard size={18} />
                        <span>Billing</span>
                    </Link>
                </div>
            </div>

            {/* Projects section */}
            <div className="p-4 flex-1 overflow-y-auto">
                <h3 className="text-xs text-gray-500 font-medium mb-2">PROJECTS</h3>
                <nav className="space-y-1">
                    {projects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className={`flex items-center space-x-3 px-2 py-1.5 rounded-md text-gray-400 hover:bg-gray-900 hover:text-white ${project.id === "orbital" ? "bg-gray-900 text-white" : ""
                                }`}
                        >
                            <div className={`w-3 h-3 rounded ${project.color}`}></div>
                            <span>{project.name}</span>
                        </Link>
                    ))}
                    <Link
                        href="#"
                        className="flex items-center space-x-3 px-2 py-1.5 rounded-md text-gray-400 hover:bg-gray-900 hover:text-white"
                    >
                        <LuPlus size={18} className="text-gray-500" />
                        <span className="text-gray-500">Add new project</span>
                    </Link>
                </nav>
            </div>

            {/* User profile */}
            <div className="p-4 border-t border-gray-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                        RL
                    </div>
                    <div>
                        <h2 className="text-white font-medium">Ryan Lee</h2>
                        <p className="text-gray-400 text-xs">Premium</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                        <LuSettings size={16} />
                    </button>
                </div>
            </div>
        </aside>
    )
}

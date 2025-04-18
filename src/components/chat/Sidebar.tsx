"use client"

import { useState } from "react"
import { LuCreditCard, LuSearch, LuSettings } from "react-icons/lu"
import { RiArrowDownSLine } from "react-icons/ri"
import { BiPlusCircle } from "react-icons/bi"
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
            <div className="py-5 px-2 border-b border-noble-700">
                <h3 className="text-noble-400 font-semibold text-xs pl-3 mb-5">
                    GENERAL
                </h3>
                <div className="space-y-2">
                    <Button>
                        <LuSearch size={18} className="text-noble-400"/>
                        <span>Search</span>
                        <span className="ml-auto text-xs bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center px-2 py-1 rounded text-noble-300">⌘ S</span>
                    </Button>

                    <Button>
                        <LuCreditCard size={18} className="text-noble-400"/>
                        <span className="mr-auto">Billing</span>
                    </Button>
                </div>
            </div>

            {/* Projects section */}
            <div className="py-5 px-2 flex-1 overflow-y-auto">
                <h3 className="text-noble-400 font-semibold text-xs pl-3 mb-5">
                    PROJECTS
                </h3>
                <nav className="space-y-2">
                    {projects.map((project) => (
                        <Button
                            key={project.id}
                            href="/"
                        >
                            <div className={`w-5 h-5 rounded ${project.color}`}></div>
                            <span className="mr-auto">{project.name}</span>
                        </Button>
                    ))}
                    <Button>
                        <BiPlusCircle size={18} className="text-noble-400" />
                        <span className="text-noble-400 mr-auto">
                            Add new project
                        </span>
                    </Button>
                </nav>
            </div>

            {/* User profile */}
            <div className="m-2 h-16 p-4 rounded-[16px] bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                        RL
                    </div>
                    <div>
                        <h2 className="text-white font-semibold">Ryan Lee</h2>
                        <p className="text-stem-green-500 font-medium text-xs">Premium</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="text-noble-400 hover:text-white">
                        <LuSettings size={16} />
                    </button>
                </div>
            </div>
        </aside>
    )
}

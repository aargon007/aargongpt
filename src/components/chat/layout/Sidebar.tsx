"use client"

import { useEffect, useState } from "react"
import { BiPlusCircle } from "react-icons/bi"
import { RiArrowDownSLine } from "react-icons/ri"
import { LuCreditCard, LuSearch, LuSettings } from "react-icons/lu"
import { useSidebarStore } from "@/hooks/sidebarStore"
import Button from "@/components/ui/Button"
import SettingsModal from "../SettingsModal"
import { useModalStore } from "@/hooks/modalStore"

export default function Sidebar({ user }: any) {
    const { isOpen, close, toggle } = useSidebarStore();
    const { openModal } = useModalStore((state) => state);
    const [isMounted, setIsMounted] = useState(false);

    // Handle escape key to close sidebar on mobile
    useEffect(() => {
        setIsMounted(true)

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") close()
        }

        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [close])

    // Handle body scroll lock when sidebar is open on mobile
    useEffect(() => {
        if (!isMounted) return

        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen, isMounted])

    const projects = [
        { id: "orbital", name: "Orbital Oddysey", color: "bg-gray-500" },
        // { id: "digital", name: "Digital Product Launch", color: "bg-red-500" },
        // { id: "brand", name: "Brand Refresh", color: "bg-orange-500" },
        // { id: "social", name: "Social Media Strategy", color: "bg-blue-500" },
    ];

    return (
        <>
            {/* Backdrop overlay for mobile */}
            <div
                className={`fixed inset-0 z-40 bg-noble-900/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={close}
                aria-hidden="true"
            />

            {/* Sidebar */}
            <aside
                className={`fixed md:sticky top-0 left-0 z-50 md:z-0 h-full w-64 md:w-80 bg-noble-800 flex flex-col overflow-hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                    } md:rounded-[20px] shadow-xl md:shadow-none`}
            >
                {/* Organization */}
                <div className="p-5 border-b border-noble-700 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
                            A
                        </div>
                        <div>
                            <h2 className="text-white font-semibold mb-1">
                                MyTeam
                            </h2>
                            <p className="text-stem-green-500 text-xs font-medium">
                                1 members
                            </p>
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
                            <LuSearch size={18} className="text-noble-400" />
                            <span>Search</span>
                            <span className="ml-auto text-xs bg-[url('/gradient.png')] bg-cover bg-no-repeat bg-center px-2 py-1 rounded text-noble-300">⌘ S</span>
                        </Button>

                        <Button>
                            <LuCreditCard size={18} className="text-noble-400" />
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
                            {user?.first_name?.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-white font-semibold">
                                {user?.first_name} {user?.last_name ?? ""}
                            </h2>
                            <p className="text-stem-green-500 font-medium text-xs">
                                Free
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button
                         className="text-noble-400 hover:text-noble-300 transition-all"
                         onClick={()=> openModal('settings')}
                         >
                            <LuSettings size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            <SettingsModal user={user} />
        </>
    )
}

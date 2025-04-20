"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { LuUser, LuMail, LuLock, LuLogOut, LuChevronRight, LuCheck } from "react-icons/lu"
import Modal from "../ui/Modal"
import { useModalStore } from "@/hooks/modalStore"

interface User {
    id: string
    first_name: string
    last_name: string
    email: string
    avatar_url?: string
}

interface SettingsModalProps {
    user: User
}

export default function SettingsModal({ user }: SettingsModalProps) {
    const isOpen = useModalStore((state) => state.modals['settings']);
    const { closeModal } = useModalStore((state) => state);

    const [activeTab, setActiveTab] = useState<"profile" | "password">("profile")
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordChanged, setPasswordChanged] = useState(false)

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would implement the actual password change logic
        console.log("Password change requested", { currentPassword, newPassword, confirmPassword })

        // Simulate success
        setPasswordChanged(true)
        setTimeout(() => {
            setPasswordChanged(false)
            setCurrentPassword("")
            setNewPassword("")
            setConfirmPassword("")
        }, 3000)
    }

    const handleLogout = () => {
        closeModal('settings')
        // onLogout()
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => closeModal('settings')}
            title="Settings"
            maxWidth="2xl"
        >
            <div className="flex flex-col md:flex-row gap-6 min-h-[60vh]">
                {/* Sidebar */}
                <div className="w-full md:w-64 space-y-1">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${activeTab === "profile"
                            ? "bg-noble-700 text-white"
                            : "text-noble-300 hover:bg-noble-700/50 hover:text-white"
                            }`}
                    >
                        <LuUser size={18} />
                        <span>Profile</span>
                        {activeTab === "profile" && <LuChevronRight size={18} className="ml-auto" />}
                    </button>
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${activeTab === "password"
                            ? "bg-noble-700 text-white"
                            : "text-noble-300 hover:bg-noble-700/50 hover:text-white"
                            }`}
                    >
                        <LuLock size={18} />
                        <span>Password</span>
                        {activeTab === "password" && <LuChevronRight size={18} className="ml-auto" />}
                    </button>
                    <div className="pt-4 mt-4 border-t border-noble-700">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 p-3 rounded-lg text-left text-red-power-600 hover:bg-red-power-600/10 transition-colors"
                        >
                            <LuLogOut size={18} />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 border-l border-noble-700 pl-6">
                    {activeTab === "profile" && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-heisenberg-blue-500 to-stem-green-500 flex items-center justify-center text-white text-2xl font-bold">
                                        {user.first_name.charAt(0)}
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-noble-700 border border-noble-600 flex items-center justify-center text-white hover:bg-noble-600 transition-colors">
                                        +
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {user.first_name} {user.last_name}
                                    </h3>
                                    <p className="text-noble-300 text-sm">Update your profile picture</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-noble-300 mb-1">
                                            First name
                                        </label>
                                        <input type="text" id="firstName" className="inputField" defaultValue={user.first_name} />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-noble-300 mb-1">
                                            Last name
                                        </label>
                                        <input type="text" id="lastName" className="inputField" defaultValue={user.last_name} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-noble-300 mb-1">
                                        Email address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <LuMail className="text-noble-400" size={16} />
                                        </div>
                                        <input type="email" id="email" className="inputField" defaultValue={user.email} readOnly />
                                    </div>
                                    <p className="mt-1 text-xs text-noble-400">
                                        Your email address is used for login and cannot be changed.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <button className="primaryButton">Save changes</button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "password" && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-white">Change password</h3>
                                <p className="text-noble-300 text-sm">Update your password to keep your account secure.</p>
                            </div>

                            {passwordChanged ? (
                                <div className="bg-stem-green-900/20 border border-stem-green-700/30 rounded-lg p-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-stem-green-500/20 flex items-center justify-center">
                                        <LuCheck className="text-stem-green-500" size={16} />
                                    </div>
                                    <p className="text-stem-green-500">Password changed successfully!</p>
                                </div>
                            ) : (
                                <form onSubmit={handlePasswordChange} className="space-y-4">
                                    <div>
                                        <label htmlFor="currentPassword" className="block text-sm font-medium text-noble-300 mb-1">
                                            Current password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <LuLock className="text-noble-400" size={16} />
                                            </div>
                                            <input
                                                type="password"
                                                id="currentPassword"
                                                className="inputField"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="newPassword" className="block text-sm font-medium text-noble-300 mb-1">
                                            New password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <LuLock className="text-noble-400" size={16} />
                                            </div>
                                            <input
                                                type="password"
                                                id="newPassword"
                                                className="inputField"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-noble-300 mb-1">
                                            Confirm new password
                                        </label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <LuLock className="text-noble-400" size={16} />
                                            </div>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                className="inputField"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {newPassword && confirmPassword && newPassword !== confirmPassword && (
                                            <p className="mt-1 text-xs text-red-power-600">Passwords do not match.</p>
                                        )}
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="primaryButton"
                                            disabled={!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword}
                                        >
                                            Update password
                                        </button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </Modal>
    )
}

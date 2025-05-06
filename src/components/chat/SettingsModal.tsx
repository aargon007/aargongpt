'use client';

import { useModalStore } from '@/hooks/modalStore';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import {
    LuCheck,
    LuChevronRight,
    LuLock,
    LuLogOut,
    LuMail,
    LuUser,
} from 'react-icons/lu';
import InputField from '../ui/input-field';
import Modal from '../ui/Modal';
import { User } from '@prisma/client';

interface SettingsModalProps {
    user: User;
}

export default function SettingsModal({ user }: SettingsModalProps) {
    const isOpen = useModalStore((state) => state.modals['settings']);
    const { closeModal } = useModalStore((state) => state);

    const [activeTab, setActiveTab] = useState('profile');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would implement the actual password change logic
        console.log('Password change requested', {
            currentPassword,
            newPassword,
            confirmPassword,
        });

        // Simulate success
        setPasswordChanged(true);
        setTimeout(() => {
            setPasswordChanged(false);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }, 3000);
    };

    const handleLogout = () => {
        closeModal('settings');
        // onLogout()
    };

    const tabs = [
        {
            id: 'profile',
            name: 'Profile',
            icon: <LuUser size={18} />,
        },
        {
            id: 'password',
            name: 'Password',
            icon: <LuLock size={18} />,
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => closeModal('settings')}
            title="Settings"
            maxWidth="2xl"
        >
            <div className="flex min-h-[60vh] flex-col gap-6 md:flex-row">
                {/* Sidebar */}
                <div className="w-full space-y-1 md:w-64">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'flex w-full items-center gap-3 rounded p-3 text-left text-white transition-colors',
                                activeTab === tab.id
                                    ? 'btnGradient'
                                    : 'hover:btnGradient',
                            )}
                        >
                            {tab.icon}
                            <span>{tab.name}</span>
                            {activeTab === tab.id && (
                                <LuChevronRight size={18} className="ml-auto" />
                            )}
                        </button>
                    ))}
                    <div className="mt-4 pt-4">
                        <button
                            onClick={handleLogout}
                            className="hover:bg-red-power-600/10 flex w-full items-center gap-3 rounded-lg p-3 text-left text-red-power-600 transition-colors"
                        >
                            <LuLogOut size={18} />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 pl-6">
                    {activeTab === 'profile' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-heisenberg-blue-500 to-stem-green-500 text-2xl font-bold text-white">
                                        {user.first_name.charAt(0)}
                                    </div>
                                    <button className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-noble-500 text-white transition-colors hover:bg-noble-600">
                                        <div className="mb-1">+</div>
                                    </button>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {user.first_name} {user.last_name}
                                    </h3>
                                    <p className="text-sm text-noble-300">
                                        Update your profile picture
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <InputField
                                        type="text"
                                        label="First name"
                                        placeholder="First name"
                                        value={user.first_name}
                                        onChange={(e) => { }}
                                    />

                                    <InputField
                                        type="text"
                                        label="Last name"
                                        placeholder="Last name"
                                        value={user?.last_name || ''}
                                        onChange={(e) => { }}
                                    />
                                </div>

                                <div>
                                    <InputField
                                        type="email"
                                        label="Email"
                                        placeholder="Email"
                                        value={user.email}
                                        onChange={(e) => { }}
                                        icon={
                                            <LuMail
                                                size={18}
                                                className="text-noble-400"
                                            />
                                        }
                                        readOnly
                                    />
                                    <p className="mt-1 text-xs text-noble-400">
                                        Your email address is used for login and
                                        cannot be changed.
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <button className="primaryButton">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'password' && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-white">
                                    Change password
                                </h3>
                                <p className="text-sm text-noble-300">
                                    Update your password to keep your account
                                    secure.
                                </p>
                            </div>

                            {passwordChanged ? (
                                <div className="bg-stem-green-900/20 border-stem-green-700/30 flex items-center gap-3 rounded-lg border p-4">
                                    <div className="bg-stem-green-500/20 flex h-8 w-8 items-center justify-center rounded-full">
                                        <LuCheck
                                            className="text-stem-green-500"
                                            size={16}
                                        />
                                    </div>
                                    <p className="text-stem-green-500">
                                        Password changed successfully!
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handlePasswordChange}
                                    className="space-y-4"
                                >
                                    <InputField
                                        type="password"
                                        label="Current password"
                                        placeholder="Current password"
                                        value={currentPassword}
                                        onChange={(e) =>
                                            setCurrentPassword(e.target.value)
                                        }
                                        icon={
                                            <LuLock
                                                size={18}
                                                className="text-noble-400"
                                            />
                                        }
                                    />

                                    <InputField
                                        type="password"
                                        label="New password"
                                        placeholder="New password"
                                        value={newPassword}
                                        onChange={(e) =>
                                            setNewPassword(e.target.value)
                                        }
                                        icon={
                                            <LuLock
                                                size={18}
                                                className="text-noble-400"
                                            />
                                        }
                                    />

                                    <InputField
                                        type="password"
                                        label="Confirm password"
                                        placeholder="Confirm password"
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        icon={
                                            <LuLock
                                                size={18}
                                                className="text-noble-400"
                                            />
                                        }
                                        error={
                                            newPassword &&
                                                confirmPassword &&
                                                newPassword !== confirmPassword
                                                ? 'Passwords do not match'
                                                : undefined
                                        }
                                    />

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="primaryButton"
                                            disabled={
                                                !currentPassword ||
                                                !newPassword ||
                                                !confirmPassword ||
                                                newPassword !== confirmPassword
                                            }
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
    );
}

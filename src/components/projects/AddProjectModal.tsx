"use client";

import React, { useState } from 'react';
import { useModalStore } from '@/hooks/modalStore';
import Modal from '../ui/Modal';
import { cn } from '@/utils/cn';
import Spinner from '../ui/Spinner';
import InputField from '../ui/input-field';
import { createProject } from '@/services/project.service';
import { toast } from 'sonner';

const AddProjectModal = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#131619');
    const [isLoading, setIsLoading] = useState(false);
    const isOpen = useModalStore((state) => state.modals?.profile);
    const { closeModal } = useModalStore((state) => state);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const formDataObj = new FormData(form);

        try {
            const r = await createProject(formDataObj);

            if (r.success) {
                toast.success(r.message);
                setIsLoading(false);
                closeModal('profile');
            }
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => closeModal('profile')}
            title="Add New Project"
            maxWidth="xl"
        >
            <div className="min-h-auto h-full">
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-2 gap-4 mb-6 items-stretch'>
                        <InputField
                            label="Project Name"
                            placeholder="Project Name"
                            type="text"
                            className="w-full"
                            value={name}
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="space-y-3">
                            <label className="mb-3 block text-sm font-medium text-noble-300">
                                Project Color
                            </label>
                            <div className="relative">
                                <input
                                    className='inputField pl-4'
                                    autoComplete="off"
                                    type='color'
                                    value={color}
                                    name='color'
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={cn(
                            'primaryButton',
                            isLoading && 'pointer-events-none opacity-50'
                        )}
                    >
                        {isLoading ? <Spinner /> : 'Confirm'}
                    </button>

                </form>
            </div>
        </Modal>
    );
};

export default AddProjectModal;
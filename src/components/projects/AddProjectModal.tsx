import React from 'react';
import { useModalStore } from '@/hooks/modalStore';
import Modal from '../ui/Modal';
import InputField from '../ui/input-field';
import { cn } from '@/utils/cn';
import Spinner from '../ui/Spinner';
import { LuRainbow } from 'react-icons/lu';

const AddProjectModal = () => {
    const [name, setName] = React.useState('');
    const [color, setColor] = React.useState('#131619');
    const [isLoading, setIsLoading] = React.useState(false);
    const isOpen = useModalStore((state) => state.modals?.profile);
    const { closeModal } = useModalStore((state) => state);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => closeModal('profile')}
            title="Add New Project"
            maxWidth="xl"
        >
            <div className="min-h-auto h-full">
                <form action="">
                    <div className='grid grid-cols-2 gap-4 mb-6 items-stretch'> 
                        <InputField
                            label="Project Name"
                            placeholder="Project Name"
                            type="text"
                            className="w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <InputField
                            label="Project Color"
                            placeholder="Project Color"
                            type="color"
                            style={{alignContent:"stretch"}}
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
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
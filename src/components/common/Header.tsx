import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {

    return (
        <div className='h-20 flex justify-between items-center px-[100px]'>
            {/* logo and title */}
            <div className='flex items-center justify-center gap-4'>
                <Image src="/icon.png" alt="logo" width={50} height={50} />
                <h2 className='font-bold uppercase text-white text-xl'>
                    aargongpt
                </h2>
            </div>

            {/* nav items  */}
            <div className='flex items-center justify-center gap-4 text-noble-300'>
                <Link href="/">Home</Link>
                <Link href="/chat">Chat</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>

            {/* auth buttons */}
            <div className='flex items-center justify-center gap-4'>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </div>
        </div>
    );
};

export default Header;
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import React from 'react';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100dvh-80px)]">{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;

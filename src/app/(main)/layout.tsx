import React from 'react';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {/* <Header /> */}
            <main className="min-h-screen">{children}</main>
            {/* <Footer /> */}
        </>
    );
};

export default MainLayout;

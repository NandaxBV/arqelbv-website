import { ReactNode } from 'react';

import { Footer, NavigationBar } from '@/components';


interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <NavigationBar/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;

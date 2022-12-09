import { useCallback, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import scrollToElement from 'scroll-to-element';

import { Layout } from '@/containers';
import { HomeView } from '@/views';


function App() {
    const handleScrollOnLoad = useCallback(() => {
        if (!location.hash || location.hash === '#') return;
        scrollToElement(location.hash, { offset: -20 });
    }, []);

    useEffect(() => {
        handleScrollOnLoad();
    }, []);

    return (
        <BrowserRouter>
            <Layout>
                <HomeView/>
            </Layout>
        </BrowserRouter>
    );
}

export default App;

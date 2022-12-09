import { useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'classnames';

import { Jumbotron } from '@/components';

import AboutSection from './AboutSection';
import OperationsSection from './OperationsSection';
import ContactSection from './ContactSection';


function Home() {
    const { hash } = useLocation();

    const sections = useRef([
        { id: 'about', section: AboutSection },
        { id: 'operations', section: OperationsSection },
        { id: 'contact', section: ContactSection }
    ]);

    const isBlurred = useCallback((compare: string) => {
        if (!hash) return false;
        return hash === '#' || hash !== `#${compare}`;
    }, [ hash ]);

    return (
        <>
            <Jumbotron/>

            {sections.current.map(section => (
                <div key={section.id} className={clsx('transition-opacity duration-500', { 'opacity-30': isBlurred(section.id) })}>
                    <section.section/>
                </div>
            ))}
        </>
    );
}

export default Home;

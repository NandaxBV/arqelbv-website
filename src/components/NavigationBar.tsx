import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import clsx from 'classnames';

import navigation from '@/content/navigation';


export function NavigationBar() {
    const { hash } = useLocation();

    const [ hasScrolled, setHasScrolled ] = useState(false);

    useScrollPosition(({ currPos: curr }) => {
        setHasScrolled(curr.y < -50);
    }, []);

    return (
        <>
            <div className="fixed z-40 w-full bg-gray-50 shadow-2xl">
                <nav className={clsx('w-full h-20 p-3 flex justify-center lg:justify-between md:w-11/12 lg:w-4/5 m-auto transition-all duration-500', { 'h-16': hasScrolled })}>
                    <a href="#" className="flex h-full items-start gap-4">
                        <img
                            src="/assets/monogram.png"
                            className="block h-full self-center object-contain sm:hidden xl:block"
                            alt="Arqel B.V. Monogram"
                        />
                        <img
                            src="/assets/text-dark.png"
                            className="hidden h-2/3 self-center xl:block"
                            alt="Arqel B.V. Text"
                        />
                        <img
                            src="/assets/text-primary.png"
                            className="hidden h-2/3 self-center sm:block xl:hidden"
                            alt="Arqel B.V. Text"
                        />
                    </a>
                    <ul className="hidden gap-12 justify-end self-center text-xl font-extrabold uppercase lg:flex font-[Kanit]">
                        {navigation.map(link =>
                            <li
                                key={link.href}
                                className={clsx(
                                    'border-b-4 border-y-transparent transition-all duration-300 hover:border-b-secondary',
                                    { 'border-b-secondary': hash === link.href }
                                )}
                            >
                                <a href={link.href}>{link.text}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="h-16"/>
        </>
    );
}

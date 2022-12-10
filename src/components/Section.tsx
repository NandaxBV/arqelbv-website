import { ReactNode } from 'react';
import clsx from 'classnames';


export interface SectionProps {
    id: string,
    title: string;
    dark?: boolean;
    children: ReactNode;
}

export function Section({ id, title, dark = false, children }: SectionProps) {
    return (
        <section id={id} className={clsx('relative', [ dark ? 'bg-primary' : 'bg-gray-50' ])}>
            <img
                src="/assets/shapes-square.jpg"
                alt="Square Shapes"
                className={clsx('absolute h-full object-cover saturate-0 mix-blend-multiply', {
                    'right-0 rotate-180 opacity-10 w-1/2': !dark,
                    'opacity-50 w-1/3': dark
                })}
                title="Image by vector_corp on Freepik"
            />
            <div className="container relative z-20 mx-auto max-w-6xl py-16">
                <h2 className={clsx(
                    'text-5xl font-semibold text-center uppercase font-[Work Sans]',
                    [ dark ? 'text-white' : 'text-primary' ]
                )}>
                    {title}
                </h2>

                <div className={clsx(
                    'mx-auto my-6 w-12 h-2 rounded-xl',
                    [ dark ? 'bg-tertiary' : 'bg-secondary' ]
                )}/>

                <div className={clsx(
                    'text-lg p-4',
                    [ dark ? 'text-white' : 'text-primary' ]
                )}>
                    {children}
                </div>
            </div>
        </section>
    );
}

import { Section } from '@/components';
import HomeContent from '@/content/home';


function OperationsSection() {
    return (
        <Section id="operations" title="Operations" dark>
            <div className="flex flex-wrap justify-center gap-12">
                {HomeContent.operations.map(operation => (
                    <div key={operation.name} className="flex h-56 w-56 flex-col items-center justify-center gap-2 rounded-lg shadow-lg transition-transform duration-300 bg-secondary hover:scale-110">
                        <a
                            href={operation.href}
                            target={operation.href === '#' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                        >
                            <img
                                src={operation.image}
                                alt={operation.name}
                                className="w-full rounded object-contain shadow-lg"
                            />
                        </a>

                        <div className="my-0.5"/>

                        <h4 className="font-bold text-2xl font-[Work Sans]">
                            {operation.name}
                        </h4>

                        <p className="text-sm">
                            {operation.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default OperationsSection;

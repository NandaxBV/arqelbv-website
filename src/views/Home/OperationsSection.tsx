import { Section } from '@/components';
import HomeContent from '@/content/home';


function OperationsSection() {
    return (
        <Section id="operations" title="Operations" dark>
            <div className="flex flex-wrap justify-center gap-12">
                {HomeContent.operations.map(o => (
                    <div key={o.name} className="flex h-56 w-56 flex-col items-center justify-center gap-2 rounded-lg shadow-lg transition-transform duration-300 bg-secondary hover:scale-110">
                        <a href={o.href} target={o.href === '#' ? '_self' : '_blank'} rel="noopener noreferrer" className="cursor-pointer">
                            <img src={o.image} alt={o.name} className="w-full rounded object-contain shadow-lg"/>
                        </a>
                        <div className="my-0.5"/>
                        <h4 className="font-bold text-2xl font-[Kanit]">{o.name}</h4>
                        <p className="text-sm">{o.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default OperationsSection;

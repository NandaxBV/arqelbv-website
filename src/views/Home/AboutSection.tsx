import { Section } from '@/components';
import HomeContent from '@/content/home';


function AboutSection() {
    return (
        <Section id="about" title="About">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
                <div className="col-span-2 self-center text-xl font-medium md:col-span-3">
                    {HomeContent.about.description.map(line => (
                        <p key={line.slice(0, 10)} className="mb-3 text-left">{line}</p>
                    ))}
                </div>
                <div className="col-span-2 self-center md:col-span-1">
                    <a href="https://thijmenmaus.nl" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/assets/thijmen.jpeg"
                            alt="Director Arqel B.V."
                            className="mx-auto rounded-lg w-full shadow-md max-w-[200px] object-contain"
                        />
                    </a>
                </div>
            </div>
        </Section>
    );
}

export default AboutSection;

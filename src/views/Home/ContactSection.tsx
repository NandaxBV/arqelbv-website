import { Section } from '@/components';
import HomeContent from '@/content/home';


function ContactSection() {
    return (
        <Section id="contact" title="Contact">
            <div className="mx-auto grid grid-cols-1 gap-8 text-2xl text-tertiary md:grid-cols-3">
                {HomeContent.contact.map(f => (
                    <a
                        key={f.text}
                        href={f.encoded ? undefined : f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row justify-center gap-2">
                        <f.icon className="self-center"/>
                        <span className="font-[Poppins] font-extrabold">
                            {f.encoded ? atob(f.text) : f.text}
                        </span>
                    </a>
                ))}
            </div>
        </Section>
    );
}

export default ContactSection;

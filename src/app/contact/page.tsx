import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12">
                <header className="mb-24 flex flex-col gap-6 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em]">Contact</h1>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12">
                    <div className="flex flex-col gap-16">
                        <div className="flex flex-col gap-8 text-sm uppercase tracking-[0.15em] leading-relaxed text-white/70">
                            <div>
                                <strong className="block text-white mb-2 font-medium tracking-[0.2em]">ROUL Group Studio</strong>
                                A-2/20 Prateek Apartments<br />
                                Paschim Vihar<br />
                                New Delhi – 110063<br />
                                India
                            </div>

                            <div className="h-[1px] w-12 bg-[#262626]" />

                            <div className="flex flex-col gap-2">
                                <a href="mailto:info@roulgroup.com" className="hover:text-white transition-colors block w-fit">info@roulgroup.com</a>
                                <a href="tel:+919999214143" className="hover:text-white transition-colors block w-fit">+91 99992 14143</a>
                            </div>
                        </div>

                        <div className="w-full aspect-[4/3] relative border border-[#262626]">
                            {/* Grayscale Google Map Iframe */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5828452445124!2d77.09892187515286!3d28.67220557564344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0442eeb94dd7%3A0xe53df40ce38d17b!2sPrateek%20Apartments!5e0!3m2!1sen!2sus!4v1714574971253!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 lg:pl-12 lg:border-l border-[#262626]">
                        <h2 className="text-xl font-light tracking-[0.2em] uppercase mb-4">Project Inquiry</h2>
                        <ContactForm />
                    </div>
                </section>
            </div>
        </main>
    );
}

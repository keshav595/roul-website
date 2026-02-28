import Image from "next/image";

export default function Atelier() {
    return (
        <main className="min-h-screen bg-black pt-32">
            <div className="container mx-auto px-6 lg:px-12">
                <header className="mb-24 flex flex-col gap-6 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em]">Atelier Living</h1>
                    <p className="text-sm leading-loose text-white/50 tracking-widest uppercase">
                        Curating experiential residential environments through structural minimalism and atmospheric lighting.
                    </p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#262626] border-y border-[#262626]">
                    <div className="bg-black py-24 lg:pr-12 lg:border-r lg:border-[#262626] flex flex-col justify-center">
                        <h2 className="text-2xl font-light uppercase tracking-widest mb-8">The Studio Philosophy</h2>
                        <p className="text-sm leading-loose text-white/60 font-light tracking-wide mb-12">
                            Our atelier functions as a laboratory for high-end residential living. We study how light moves across materials throughout the day, ensuring that the spaces we build are not simply lived in, but experienced.
                        </p>
                        <div className="relative aspect-[4/3] w-full arch-mask">
                            <Image
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
                                alt="Studio Space"
                                fill
                                className="object-cover img-hover-scale"
                            />
                        </div>
                    </div>

                    <div className="bg-black py-24 lg:pl-12 flex flex-col gap-12 lg:gap-0 justify-between">
                        <div className="relative aspect-[3/4] w-full mb-12 order-first lg:order-none">
                            <Image
                                src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3"
                                alt="Material Selection"
                                fill
                                className="object-cover img-hover-scale"
                            />
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/40 leading-loose border-l border-white/20 pl-6">
                            &quot;We strip away the unnecessary, leaving only the essential geometry and the profound silence it creates.&quot;
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}

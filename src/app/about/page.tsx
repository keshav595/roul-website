export default function About() {
    return (
        <main className="min-h-screen bg-black flex items-center justify-center relative px-6 py-32">
            {/* Central framing lines for editorial look */}
            <div className="absolute inset-y-12 left-12 w-[1px] bg-[#262626] hidden md:block" />
            <div className="absolute inset-y-12 right-12 w-[1px] bg-[#262626] hidden md:block" />
            <div className="absolute inset-x-12 top-12 h-[1px] bg-[#262626] hidden md:block" />
            <div className="absolute inset-x-12 bottom-12 h-[1px] bg-[#262626] hidden md:block" />

            <div className="max-w-4xl text-center flex flex-col items-center gap-12 z-10 relative">
                <h1 className="text-2xl font-light uppercase tracking-[0.4em] text-white/50">About</h1>

                <p className="text-xl md:text-3xl lg:text-4xl leading-relaxed font-light tracking-wide">
                    ROUL Architects is a Delhi based design studio crafting luxury residences and interior environments across India and globally.
                </p>

                <div className="w-[1px] h-24 bg-white/30 mt-8"></div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-[10px] tracking-[0.2em] uppercase text-white/50 mt-12 w-full max-w-2xl border-t border-[#262626] pt-12">
                    <div className="flex flex-col gap-2">
                        <span className="text-white text-lg">10+</span>
                        Years Experience
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white text-lg">50+</span>
                        Luxury Residences
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white text-lg">12</span>
                        Global Awards
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white text-lg">01</span>
                        Single Vision
                    </div>
                </div>
            </div>
        </main>
    );
}

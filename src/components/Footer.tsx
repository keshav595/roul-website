export function Footer() {
    return (
        <footer className="border-t border-[#262626] py-12 md:py-24 text-center">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center gap-8">
                <h2 className="text-2xl font-medium tracking-[0.25em] uppercase text-white/90">ROUL</h2>
                <div className="flex gap-8 text-xs tracking-widest uppercase text-white/50">
                    <span>A-2/20 Prateek Apartments, New Delhi</span>
                    <span className="hidden md:inline">|</span>
                    <a href="mailto:info@roulgroup.com" className="hover:text-white transition-colors">info@roulgroup.com</a>
                </div>
                <p className="text-[10px] tracking-widest uppercase text-white/30 mt-8">
                    © {new Date().getFullYear()} ROUL Architects. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

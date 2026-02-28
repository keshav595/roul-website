export function ProcessTimeline() {
    const steps = [
        { title: "Concept", description: "Understanding vision and spatial requirements." },
        { title: "Design", description: "Detailed architectural and interior schematics." },
        { title: "Execution", description: "Precision craftsmanship and site management." },
        { title: "Delivery", description: "Handover of the experiential environment." }
    ];

    return (
        <div className="w-full relative py-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[1px] bg-[#262626]" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                {steps.map((step, index) => (
                    <div key={step.title} className="flex flex-col relative group">
                        {/* Connecting Line (Mobile) */}
                        {index !== steps.length - 1 && (
                            <div className="md:hidden absolute left-5 top-12 w-[1px] h-full bg-[#262626] -z-10" />
                        )}

                        <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-8">
                            <div className="w-10 h-10 rounded-full border border-[#262626] bg-black flex items-center justify-center shrink-0 group-hover:border-white transition-colors duration-500">
                                <span className="text-[10px] tracking-widest text-white/50 group-hover:text-white transition-colors">0{index + 1}</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-sm font-medium tracking-[0.2em] uppercase">{step.title}</h4>
                                <p className="text-xs text-white/40 leading-relaxed md:max-w-[200px]">{step.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

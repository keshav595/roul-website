import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
];

export default function Interiors() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em] mb-4">Interiors</h1>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/50">A curation of internal volumes and textures.</p>
                </header>

                {/* Grid-based gallery layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                    {images.map((src, i) => (
                        <div key={i} className="relative aspect-square w-full bg-[#111] overflow-hidden group">
                            <Image
                                src={src}
                                alt={`Interior image ${i + 1}`}
                                fill
                                className="object-cover img-hover-scale opacity-80 group-hover:opacity-100 transition-all duration-700"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

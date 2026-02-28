"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const filters = ["All", "Residences", "Interiors", "Facades", "Rooftops"];

const projects = [
    { id: 1, title: "The Arch Residence", category: "Architecture", filter: "Residences", url: "/portfolio/arch-residence", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { id: 2, title: "Minimalist Haven", category: "Interiors", filter: "Interiors", url: "/portfolio/minimalist-haven", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3" },
    { id: 3, title: "Horizon Estate", category: "Architecture", filter: "Residences", url: "/portfolio/horizon-estate", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" },
    { id: 4, title: "Skyline Terrace", category: "Rooftop Experiential", filter: "Rooftops", url: "/portfolio/skyline-terrace", img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2" },
    { id: 5, title: "Glass Pavilion", category: "Facades", filter: "Facades", url: "/portfolio/glass-pavilion", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, title: "Editorial Light", category: "Interiors", filter: "Interiors", url: "/portfolio/editorial-light", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68" }
];

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = projects.filter(
        p => activeFilter === "All" || p.filter === activeFilter
    );

    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="container mx-auto px-6 lg:px-12">

                <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#262626] pb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em]">Portfolio</h1>

                    <div className="flex flex-wrap gap-6 text-[10px] tracking-[0.2em] uppercase">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "hover-underline pb-2 transition-colors",
                                    activeFilter === filter ? "text-white" : "text-white/40 hover:text-white/80"
                                )}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 transition-all duration-500">
                    {filteredProjects.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            category={project.category}
                            imageUrl={project.img}
                            href={project.url}
                            className={cn("animate-in fade-in zoom-in-95 duration-700", idx % 3 === 1 ? "md:mt-16" : "")}
                            isArch={project.filter === "Residences"}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}

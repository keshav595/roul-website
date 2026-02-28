"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 z-0 origin-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop"
            alt="ROUL Architecture Hero"
            fill
            className="object-cover opacity-80"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40 z-10" />

        <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center gap-12 mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 uppercase tracking-[0.2em]"
          >
            <h1 className="text-3xl md:text-5xl lg:text-[5rem] leading-tight font-light">Timeless Architecture</h1>
            <h2 className="text-3xl md:text-5xl lg:text-[5rem] leading-tight font-light text-white/80">Luxe Interiors</h2>
            <h3 className="text-3xl md:text-5xl lg:text-[5rem] leading-tight font-light text-white/50">Iconic Estates</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/contact">
              <Button className="border-white text-white hover:bg-white hover:text-black">
                Start a Project
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Design Philosophy Split Layout */}
      <section className="py-32 md:py-48 relative border-t border-[#262626] bg-black z-20">
        <div className="container mx-auto px-6 lg:px-12 relative flex">
          {/* Vertical Grid Lines */}
          <div className="absolute inset-y-0 left-12 w-[1px] bg-[#1a1a1a] hidden lg:block" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#1a1a1a] hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full relative z-10">
            <div className="flex flex-col justify-center gap-12 lg:pr-12">
              <h2 className="text-3xl md:text-4xl font-light uppercase tracking-widest leading-relaxed">
                Minimal Massing.<br />
                <span className="text-white/50">Experiential Zones.</span>
              </h2>
              <p className="text-sm leading-loose text-white/60 font-light max-w-md tracking-wide">
                ROUL Architects is a Delhi based design studio crafting luxury residences and interior environments across India and globally. We translate contemporary luxury through symmetrical layouts, vertical lighting lines, and timeless material palettes.
              </p>
              <div>
                <Link href="/about" className="uppercase tracking-[0.2em] text-[10px] pb-2 hover-underline inline-block text-white/80 hover:text-white transition-colors">
                  Discover Our Philosophy
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] lg:aspect-auto h-full min-h-[500px] w-full arch-mask">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Philosophy"
                fill
                className="object-cover img-hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Masonry Grid */}
      <section className="py-32 relative border-t border-[#262626] bg-black z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-24 border-b border-[#262626] pb-8">
            <h2 className="text-2xl font-light uppercase tracking-[0.2em]">Selected Works</h2>
            <Link href="/portfolio" className="uppercase tracking-[0.2em] text-[10px] hover-underline text-white/50 hover:text-white transition-colors">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            <ProjectCard
              title="The Arch Residence"
              category="Architecture"
              imageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              href="/portfolio/arch-residence"
              className="md:mt-12"
              isArch={true}
            />
            <ProjectCard
              title="Minimalist Haven"
              category="Interiors"
              imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
              href="/portfolio/minimalist-haven"
              className="lg:mt-32"
            />
            <ProjectCard
              title="Horizon Estate"
              category="Architecture"
              imageUrl="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              href="/portfolio/horizon-estate"
              className="md:-mt-12 lg:mt-0"
            />
          </div>
        </div>
      </section>

      {/* Atelier Living Section & Interior Experience */}
      <section className="bg-black z-20 relative border-t border-[#262626]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link href="/atelier" className="group relative aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-[#262626]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070&auto=format&fit=crop"
              alt="Atelier Living"
              fill
              className="object-cover img-hover-scale opacity-50 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="
absolute inset-0
bg-black/40

lg:bg-black/50
lg:group-hover:bg-transparent

transition-colors duration-700
" />
            <h2 className="
relative z-10
text-xl md:text-2xl lg:text-3xl
font-light tracking-[0.2em] uppercase

opacity-100 translate-y-0

lg:opacity-0 lg:-translate-y-4
lg:group-hover:opacity-100
lg:group-hover:translate-y-0

transition-all duration-700
">
              Atelier Living
            </h2>
          </Link>
          <Link href="/interiors" className="group relative aspect-square md:aspect-[4/3] flex items-center justify-center overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
              alt="Interiors"
              fill
              className="object-cover img-hover-scale opacity-50 group-hover:opacity-100 transition-opacity duration-700"
              priority
            />
            <div className="
absolute inset-0
bg-black/40

lg:bg-black/50
lg:group-hover:bg-transparent

transition-colors duration-700
" />
            <h2 className="
relative z-10
text-xl md:text-2xl lg:text-3xl
font-light tracking-[0.2em] uppercase

opacity-100 translate-y-0

lg:opacity-0 lg:-translate-y-4
lg:group-hover:opacity-100
lg:group-hover:translate-y-0

transition-all duration-700
">
              Interiors
            </h2>
          </Link>
        </div>
      </section>

      {/* Process Timeline */}
      <div className="relative z-20 bg-black">
        <ProcessTimeline />
      </div>

    </main>
  );
}

"use client";

import Image from "next/image";
export function generateStaticParams() {
  return [
    { slug: "arch-residence" },
    { slug: "minimalist-haven" },
    { slug: "horizon-estate" },
  ];
}

import Link from "next/link";
import { Button } from "@/components/Button";
import { use } from "react";

export default function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const title = resolvedParams.slug.replace("-", " ");

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Image */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt={title}
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-12 w-full container mx-auto px-6 lg:px-12 z-10">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.2em] capitalize">
            {title}
          </h1>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 border-b border-[#262626]">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col gap-8 text-[10px] tracking-[0.2em] uppercase text-white/50">
            <div>
              <span className="block text-white mb-2">Location</span>
              New Delhi, India
            </div>
            <div>
              <span className="block text-white mb-2">Category</span>
              Architecture & Interiors
            </div>
            <div>
              <span className="block text-white mb-2">Year</span>
              2025
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-light tracking-[0.2em] uppercase mb-8">
              Concept Narrative
            </h2>
            <p className="text-sm leading-loose text-white/60 font-light max-w-2xl tracking-wide">
              Translating luxury residential architecture into a digital form.
              This project utilizes symmetrical massing, vertical lines, and a
              cinematic approach to light and shadow. The spaces flow
              continuously, providing an experiential journey through minimal
              yet deeply textured environments.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Detail"
                fill
                className="object-cover img-hover-scale"
              />
            </div>
            <div className="flex flex-col gap-12">
              <div className="relative aspect-square w-full md:mt-24">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
                  alt="Interior"
                  fill
                  className="object-cover img-hover-scale arch-mask"
                />
              </div>
              <p className="text-xs leading-loose text-white/50 tracking-widest uppercase md:max-w-sm">
                Material selection relies on monochromatic palettes, employing
                textures rather than colors to define hierarchy and visual
                interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Render */}
      <section className="w-full relative h-[60vh] md:h-[80vh] border-y border-[#262626]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
          alt="Wide View"
          fill
          className="object-cover"
        />
      </section>

      {/* Inquiry CTA */}
      <section className="py-32 bg-black text-center">
        <h2 className="text-3xl font-light uppercase tracking-[0.2em] mb-12">
          Inspired to Start?
        </h2>
        <Link href="/contact">
          <Button className="border-white text-white hover:bg-white hover:text-black">
            Inquire About A Project
          </Button>
        </Link>
      </section>
    </main>
  );
}

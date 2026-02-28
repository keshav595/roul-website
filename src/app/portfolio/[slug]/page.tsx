import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export function generateStaticParams() {
  return [
    { slug: "arch-residence" },
    { slug: "minimalist-haven" },
    { slug: "horizon-estate" },
  ];
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const title = params?.slug ? params.slug.replace(/-/g, " ") : "Project";

  return (
    <main className="min-h-screen bg-black">
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

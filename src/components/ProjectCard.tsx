import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    category: string;
    imageUrl: string;
    href: string;
    className?: string;
    isArch?: boolean;
}

export function ProjectCard({ title, category, imageUrl, href, className, isArch }: ProjectCardProps) {
    return (
        <Link href={href} className={cn("group block overflow-hidden", className)}>
            <div className={cn("relative w-full aspect-[3/4] overflow-hidden bg-[#111]", isArch && "arch-mask")}>
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover img-hover-scale"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="mt-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-xl font-medium tracking-wider uppercase">{title}</h3>
                <p className="text-xs tracking-widest text-white/50 uppercase">{category}</p>
                <div className="w-12 h-[1px] bg-white mt-2 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
            </div>
        </Link>
    );
}

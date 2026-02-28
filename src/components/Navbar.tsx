"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Atelier", href: "/atelier" },
    { name: "Interiors", href: "/interiors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-[100] transition-all duration-700",
                scrolled ? "bg-black py-4 border-b border-[#262626]" : "bg-transparent py-8"
            )}
        >
            <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
                {/* Left: White ROUL Logo */}
                <Link href="/" className="text-white text-2xl font-medium tracking-[0.25em] uppercase hover:opacity-70 transition-opacity">
                    ROUL
                </Link>

                {/* Right: Links & CTA */}
                <div className="hidden lg:flex items-center gap-12">
                    <nav className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-white/80 hover:text-white text-[11px] uppercase tracking-[0.15em]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <Button className="border-white text-white hover:bg-white hover:text-black px-6 py-3 text-[10px]">
                        Start a Project
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="lg:hidden bg-black border-t border-[#262626] px-6 py-6 flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-sm uppercase tracking-[0.15em]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header >
    );
}

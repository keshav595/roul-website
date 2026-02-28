"use client";

import { Button } from "./Button";
import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => setStatus("success"), 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-white/50">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="bg-transparent border-b border-[#262626] py-3 text-sm focus:outline-none focus:border-white transition-colors rounded-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] tracking-[0.2em] uppercase text-white/50">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="bg-transparent border-b border-[#262626] py-3 text-sm focus:outline-none focus:border-white transition-colors rounded-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-white/50">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        className="bg-transparent border-b border-[#262626] py-3 text-sm focus:outline-none focus:border-white transition-colors rounded-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="project" className="text-[10px] tracking-[0.2em] uppercase text-white/50">Project Type</label>
                    <select
                        id="project"
                        className="bg-transparent border-b border-[#262626] py-3 text-sm focus:outline-none focus:border-white transition-colors text-white rounded-none appearance-none"
                    >
                        <option value="residence" className="bg-black">Residence</option>
                        <option value="interior" className="bg-black">Interior</option>
                        <option value="facade" className="bg-black">Facade</option>
                        <option value="rooftop" className="bg-black">Rooftop</option>
                        <option value="other" className="bg-black">Other</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-white/50">Message</label>
                <textarea
                    id="message"
                    rows={4}
                    required
                    className="bg-transparent border-b border-[#262626] py-3 text-sm focus:outline-none focus:border-white transition-colors resize-none rounded-none"
                ></textarea>
            </div>

            <Button type="submit" className="self-start mt-4" disabled={status === "submitting"}>
                {status === "success" ? "Inquiry Sent" : status === "submitting" ? "Sending..." : "Submit Inquiry"}
            </Button>
        </form>
    );
}

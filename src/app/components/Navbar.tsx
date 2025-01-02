'use client'
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";


export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between gap-10 max-w-2xl mx-auto px-4 py-5">
            <div className="flex w-full justify-between items-center">
                <Link href="/" className="text-5xl  font-bold">
                    UJK <span className="text-[#5e376c]">blogs</span>
                </Link>
                <ModeToggle /> 
            </div>
            {/* Divider (optional, if needed) */}
            {/* <div className="bg-red-900 h-[2px] w-[280px] mx-auto mt-2"></div> */}
        </nav>
    );
}
"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [isProgramMobileOpen, setIsProgramMobileOpen] = useState(false);
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-google">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-800">
                    Les Raudhotul Ilmi
                </Link>

                <div className="hidden md:flex space-x-7">
                    <Link href="/profil" className="text-gray-800 font-medium hover:text-blue-600 transition">Tentang Kami</Link>
                    
                    <div className="relative group">
                        <button className="flex items-center text-gray-800 font-medium group-hover:text-blue-600 transition focus:outline-none">
                            Program
                            <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top top-full">
                            <div className="py-2 flex flex-col">
                                <Link href="/program/kelas_reguler" className="px-4 py-2 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition">Kelas Reguler</Link>
                                <Link href="/program/les_privat" className="px-4 py-2 text-gray-800 font-medium hover:bg-blue-50 hover:text-blue-600 transition">Les Privat</Link>
                                
                            </div>
                        </div>
                    </div>
                   


                    <Link href="/gambar" className="text-gray-800 font-medium hover:text-blue-600 transition">Galeri</Link>
                    <Link href="/ppdb" className="text-gray-800 font-medium hover:text-blue-600 transition">Pendaftaran</Link>
                    <Link href="/kontak" className="text-gray-800 font-medium hover:text-blue-600 transition">Kontak</Link>
                </div>
                <button className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)}
                    </svg>

                </button>

            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 h-screen overflow-y-auto">
                    <div className="flex flex-col space-y-4 px-4 py-6">
                        <Link href="/profil" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Tentang Kami</Link>
                        <div>
                            <button onClick={() => setIsProgramMobileOpen(!isProgramMobileOpen)} className="flex items-center justify-between w-full text-gray-800 font-medium hover:text-blue-600 focus:outline-none">
                                Program 
                                <svg className={`w-4 h-4 transform transition-transform ${isProgramMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProgramMobileOpen && (
                                <div className="mt-2 ml-4 border-l-2 border-gray-200 flex flex-col space-y-3 pl-4">
                                    <Link href="/program/kelas_reguler" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Kelas Reguler</Link>
                                    <Link href="/program/les_privat" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Les Privat</Link>
                                
                                </div>
                            )}

                        </div>

                        <Link href="/galeri" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Galeri</Link>
                        <Link href="/ppdb" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Pendaftaran</Link>
                        <Link href="/kontak" onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-blue-600">Kontak</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
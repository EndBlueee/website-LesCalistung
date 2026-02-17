import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 font-google">

            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 ">

                <div className="">
                    <h3 className="text-xl font-bold mb-4">Les Calistung</h3>
                    <p className="text-gray-400 max-w-sm">Membangung generasi masa depan yang cerdas, ceria, dan berakhlak mulia</p>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-bold mb-4">Menu</h3>
                    <div className="flex flex-col space-y-2">
                        <Link href="/profil" className="text-gray-400 hover:text-white transition">Tentang Kami</Link>
                        <Link href="/program/kelas_reguler" className="text-gray-400 hover:text-white transition">Kelas Reguler</Link>
                        <Link href="/program/les_privat" className="text-gray-400 hover:text-white transition">Les Privat</Link>
                        <Link href="/gambar" className="text-gray-400 hover:text-white transition">Galeri</Link>
                        <Link href="/ppdb" className="text-gray-400 hover:text-white transition">Pendaftaran</Link>
                        <Link href="/kontak" className="text-gray-400 hover:text-white transition">Kontak</Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
                    <div className="flex justify-start items-center gap-3">
                        <FaMapMarkerAlt className="text-2xl text-white" />
                        <p className="text-gray-400">Jl. Serua raya, Depok</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <FaWhatsapp className="text-2xl text-white" />
                        <p className="text-gray-400">0987-2323-0934</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <FaEnvelope className="text-2xl text-white" />
                        <p className="text-gray-400">gmail@gmail.com</p>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
                    <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                    <div className="flex space-x-4 items-center ">

                    <Link href="https" target="_blank">
                        <div className="relative h-8 w-8 flex items-center justify-center">
                            <FaInstagram className="text-3xl text-white hover:text-gray-400 transition" />
                        </div>
                    </Link>
                    <Link href="https" target="_blank">
                        <div className="relative h-8 w-8 flex items-center justify-center">
                            <FaFacebook className="text-3xl text-white hover:text-gray-400 transition" />
                        </div>
                    </Link>
                    <Link href="https" target="_blank">
                        <div className="relative h-8 w-8 flex items-center justify-center">
                            <FaYoutube className="text-3xl text-white hover:text-gray-400 transition" />
                        </div>
                    </Link>



                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Les Calistung. All rights reserved.
            </div>
        </footer>
    )
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import Card from "@/components/card";

const daftarGambar = [
  "/fotoo.webp",
  "/fotoo1.webp",
  "/fotoo2.webp",
  "/fotoo3.jpeg",
];

export default function Home() {

  const [indexGambar, setIndexGambar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexGambar((prevIndex) =>
        prevIndex === daftarGambar.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <main className="flex flex-col w-full min-h-screen">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 ">
          {daftarGambar.map((src, index) => (
            <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === indexGambar ? "opacity-100" : "opacity-0"}`}>

              <Image
                src={src}
                alt={`slide background ${index + 1}`}
                fill
                className="object-cover object-right"
                quality={100}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-blue-50 via-blue-50/90 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-20">

          <div className="max-w-2xl px-4">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl text-blue-800 leading-tight font-bold">Membangun generasi Cerdas & Berkarakter</h1>
              <p className="text-gray-500 text-lg">Les Calistung Raudhatul Ilmi adalah tempat terbaik untuk buah hati Anda Belajar, Bermain,
                dan Berkembang dengan metode pembelajaran terbaik
              </p>

              <div className="flex gap-4">
                <Link href="/kontak" className="bg-blue-600 text-white rounded-lg px-6 py-4 hover:bg-blue-700 transition">Daftar Sekarang</Link>
                <Link href="/profil" className="border border-blue-600 px-6 py-4 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">Lihat Profil</Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="px-5 mb-15 text-center max-w-3xl mx-auto ">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Kenapa Harus <span className="text-blue-800">Raudhatul Ilmi?</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-6">
                <Image
                  src="/bachelor.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Siap Masuk SD</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kurikulum kami dirancang khusus untuk memperkuat kemampuan dasar (Calistung) dan adaptasi lingkungan</p>
            </div>
            <div className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6">
                <Image
                  src="/puzzle.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-3">Pendekatan Personal</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kecepatan belajar tiap anak unik. Materi disampaikan sesuai daya tangkap mereka, bukan sekadar mengejar target</p>
            </div>
            <div className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6">
                <Image
                  src="/balloons.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-3">Belajar Yang Menyenangkan</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kami tumbuhkan cinta belajar sejak dini. Metode seru dan interaktif membuat anak merasa seperti sedang bermain.</p>
            </div>
            <div className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6">
                <Image
                  src="/real-time.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-3">Solusi Praktis</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Serahkan pada ahlinya. Tak perlu pusing mengajar sendiri atau repot antar-jemput. Guru kami siap datang ke rumah.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4 items-center mb-12">
            <h1 className="text-gray-800 text-4xl md:text-5xl font-bold text-center">Pilih Cara Belajar <span className="text-blue-600">Favoritmu</span></h1>
            <p className="text-slate-600 text-lg max-w-2xl text-center">
              Kami menyediakan metode belajar yang fleksibel sesuai kebutuhan perkembangan buah hati Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 h-64 w-full rounded-lg flex justify-center items-center shadow-sm mb-8">

              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="/fotoo1.webp"
                  alt="Icon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:col-span-2 bg-linear-to-bl from-blue-100 to-white h-64 w-full rounded-lg border border-gray-100 flex justify-between items-center p-8 shadow-sm hover:shadow-md transition">
              <div className="max-w-md">

                <h1 className="text-gray-800 text-3xl mb-3 font-bold ">Les Reguler</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">Belajar tatap muka Senin-Jumat dengan suasana kelas yang seru. Fokus pada sosialisasi & disiplin.</p>
                <Link href="" className="text-blue-600 font-semibold hover:underline">Selengkapnya </Link>
              </div>
            </div>


            <div className="md:col-span-2 bg-linear-to-tr from-orange-100 to-white h-64 w-full rounded-lg border border-gray-100 flex justify-between items-center p-8 shadow-sm hover:shadow-md transition">

              <div className="max-w-md md:pl-6">

                <h1 className="text-gray-800 text-3xl mb-3 font-bold ">Les Privat</h1>
                <p className="text-gray-600 mb-6">Layanan eksklusif guru datang ke rumah. Solusi bagi orang tua sibuk
                  yang ingin anaknya fokus belajar secara intensif 1-on-1.</p>
                <Link href="" className="text-blue-600 font-semibold hover:underline">Selengkapnya </Link>

              </div>
            </div>
            <div className="bg-blue-50 h-64 w-full rounded-lg flex justify-center items-center shadow-sm">

              <div className="relative h-64 w-full overflow-hidden ">
                <Image
                  src="/fotoo.webp"
                  alt="Icon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kata Meraka <span className="text-blue-300">Tentang Kami</span></h1>  
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-blue-100 opacity-50" />
             
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed mt-9">"Awalnya si Kakak takut banget kalau disuruh baca. Setelah 2 bulan di sini, malah dia yang minta dibacain buku terus. Terima kasih Miss!"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image src="/fotoo.webp" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold ">Bunda Anisa</h4>
                  <p className="text-gray-500 text-sm">Wali Murid TK B</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-blue-100 opacity-50" />
              <div className="flex gap-1 text-yellow-400 mb-6 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">"Awalnya si Kakak takut banget kalau disuruh baca. Setelah 2 bulan di sini, malah dia yang minta dibacain buku terus. Terima kasih Miss!"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image src="/fotoo.webp" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold ">Bunda Anisa</h4>
                  <p className="text-gray-500 text-sm">Wali Murid TK B</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 relative shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-blue-100 opacity-50" />
              <div className="flex gap-1 text-yellow-400 mb-6 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed">"Awalnya si Kakak takut banget kalau disuruh baca. Setelah 2 bulan di sini, malah dia yang minta dibacain buku terus. Terima kasih Miss!"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image src="/fotoo.webp" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold ">Bunda Anisa</h4>
                  <p className="text-gray-500 text-sm">Wali Murid TK B</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-white">500+</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Siswa Terbantu</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-white">50+</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Guru Terbaik</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-white">4.9</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Rating</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-bold text-white">5 Th</h3>
                <p className="text-blue-200 text-sm uppercase tracking-wider font-semibold">Pengalaman</p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-4 flex justify-center">


          <div className="relative w-300 h-80 md:h-120 bg-blue-50 rounded-xl overflow-hidden shadow-xl m-0 mb-10 z-0">
            <Image
              src="/fotoo.webp"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-center items-start h-full px-20 space-y-4">
              <h1 className="text-white text-5xl font-bold">Siap Memberikan yang <br /> Terbaik?</h1>
              <p className="text-lg mb-6 max-w-2xl">Bergabunglah bersama kami sekarang dan mewujudkan impian buah hati Anda</p>
              <Link href="" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full ">Hubungi Kami</Link>
            </div>
          </div>
        </div>

      </section>
    </main >



  );
}


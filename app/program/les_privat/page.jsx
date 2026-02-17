"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/fadein";
import { StaggerContainer, StaggerItem } from "@/components/staggerwrapper";
import Link from "next/link";
import { BsPersonCheckFill, BsClockFill, BsHouseDoorFill, BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";



export default function LesPrivat() {

  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "Berapa lama durasi jam belajar privat?",
      answer: "Durasi belajar privat mengikuti program yang dipilih. Umumnya 60–90 menit per sesi dan bisa disesuaikan dengan kebutuhan anak."
    },
    {
      question: "Berapa lama target perubahan perkembangan anak?",
      answer: "Perubahan biasanya terlihat bertahap sesuai konsistensi belajar. Kami akan evaluasi berkala dan memberi laporan perkembangan kepada Orang Tua."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <main className="font-google">
      <section>
          <div className="relative w-full h-48 sm:h-56 md:h-110 mb-10 md:mb-12">
            <Image
              src="/privat/foto-privat-10.webp"
              alt="Banner Profil"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/40 px-4 text-center">
        <FadeIn duration={0.9}>
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold font-google">Program Les Privat</h1>
        </FadeIn>
            </div>
          </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem className="w-full">
              <div className="relative h-56 sm:h-72 md:h-80 w-full">
                <Image
                  src="/privat/foto-privat-1.webp"
                  alt="Program Kelas Reguler"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </StaggerItem>
            <StaggerItem className="w-full">
              <div className="flex flex-col justify-start h-full">
                <h1 className="text-gray-800 font-semibold text-2xl md:text-4xl mb-6 md:mb-8 max-w-lg">Layanan Pendidikan Privat Eksklusif di Kenyamanan Rumah Anda</h1>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Kami menghadirkan pengalaman belajar yang kondusif tanpa harus meninggalkan rumah. Melalui metode One-on-One Tutoring, pengajar kami berfokus penuh pada perkembangan spesifik Ananda, memastikan materi tersampaikan dengan efektif dalam suasana yang aman dan personal.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <section className="py-14 md:py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h1 className="text-gray-800 font-semibold text-2xl sm:text-4xl mb-8 md:mb-15">Keunggulan Home Visit Kami</h1>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem>
              <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
                <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                  <BsPersonCheckFill className="text-blue-500 text-4xl" />
                </div>
                <h2 className="text-gray-800 font-semibold text-lg sm:text-xl">Personalisasi 1-on-1</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Materi dan kecepatan belajar disesuaikan 100% dengan daya tangkap anak. tidak perlu menunggu teman lain</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
                <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                  <BsHouseDoorFill className="text-blue-500 text-4xl" />
                </div>
                <h2 className="text-gray-800 font-semibold text-lg sm:text-xl ">Kenyamanan</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Anak belajar di lingkungan rumahnya sendiri, membuat mereka lebih rileks dan berani bertanya.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
                <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                  <BsClockFill className="text-blue-500 text-4xl" />
                </div>
                <h2 className="text-gray-800 font-semibold text-lg sm:text-xl ">Fleksibilitas Waktu</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Waktu les dapat disesuaikan dengan agenda kelaurga, memberikan kenyamanan tanpa mengganggu rutinitas harian</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <FadeIn>
              <div className="h-full flex flex-col justify-start">
                <h1 className="text-gray-800 font-semibold text-2xl sm:text-4xl mb-6 md:mb-10">Standar Profesionalisme Pengajar</h1>
                <StaggerContainer className="space-y-5" viewport={{ once: true, amount: 0.1 }}>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                      <div>
                        <h3 className="text-gray-800 font-semibold mb-1">Terverifikasi & Profesional</h3>
                        <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Lulusan Sarjana yang kompeten dan berpengalaman. Siap membimbing dengan sabar serta menyesuaikan metode ajar agar anak merasa nyaman.</p>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                      <div>
                        <h3 className="text-gray-800 font-semibold mb-1">Etika Terjaga</h3>
                        <p className="text-gray-500 font-light leading-7 mb-2 text-sm sm:text-base">Kami menjunjung tinggi etika sopan santun saat berkunjung ke rumah Anda dan memastikan lingkungan belajar yang aman dan mendukung.</p>
                      </div>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-start gap-4">
                      <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                      <div>
                        <h3 className="text-gray-800 font-semibold mb-1">Komunikasi Terbuka</h3>
                        <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">kami percaya pada komunikasi transparan dengan orang tua untuk memastikan perkembangan anak sesuai ekspetasi.</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <div className="relative h-80 sm:h-96 md:h-112.5 w-full">

                <div className="absolute h-56 sm:h-72 md:h-90 w-64 sm:w-80 md:w-md top-0 right-0 md:right-4 z-0 rounded-sm overflow-hidden">
                  <Image
                    src="/privat/foto-privat-2.webp"
                    alt="Program Kelas Reguler"
                    fill
                    className="object-cover "
                  />
                </div>
                <div className="absolute bottom-0 sm:bottom-4 md:bottom-7 left-0 sm:left-1 w-48 sm:w-56 md:w-60 h-44 sm:h-52 md:h-58 z-10 rounded-sm overflow-hidden">
                  <Image
                    src="/privat/foto-privat-3.webp"
                    alt="Program Kelas Reguler"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </section>

      <section className="py-14 md:py-20 bg-blue-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h1 className="font-semibold text-2xl sm:text-4xl mb-8 md:mb-15 text-white">Jangkauan Wilayah Layanan</h1>
          </FadeIn>
          <StaggerContainer className="divide-y divide-white/50" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem>
          <div className="border-t border-white/50"></div>
              <div className="py-8 px-2">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                  <h1 className="text-white font-semibold text-xl md:col-span-3">Serua</h1>
                  <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Mencakup area keseluruhan wilayah serua</p>
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className="rounded-2xl text-white">
                      <FaMapLocationDot size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8 px-2">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                  <h1 className="text-white font-semibold text-xl md:col-span-3">Pondok Petir</h1>
                  <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Area Curug, Reni Jaya dan Bojongsari.</p>
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className=" rounded-2xl text-white">
                      <FaMapLocationDot size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="py-8 px-2">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
                  <h1 className="text-white font-semibold text-xl md:col-span-3">Gunung Sindur</h1>
                  <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Area Rawa Kalong dan Parung</p>
                  <div className="md:col-span-1 flex justify-start md:justify-end">
                    <div className="rounded-2xl text-white">
                      <FaMapLocationDot size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>




      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-19">
          <FadeIn>
            <h1 className="text-gray-800 font-semibold text-2xl sm:text-4xl mb-8 md:mb-15">Program Les Privat</h1>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 justify-items-center" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem className="h-full w-full sm:w-80 md:w-92">
              <div className="h-full w-full bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden ">
                <Image
                  src={"/privat/foto-privat-4.jpeg"}
                  fill
                  alt="Program Les Privat"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between mb-2 items-center">
                  <h1 className="text-xl text-gray-800 font-semibold ">Privat Calistung</h1>
                  <span className="text-blue-500 font-light leading-7 text-sm px-2 ">Usia 3 - 7 Tahun </span>
                </div>
                <p className="text-gray-500 font-light leading-7 text-sm mb-2">Fokus pada pengenalan huruf membaca, menulis dan menghitung.</p>
                <ul className="space-y-3 mb-6 text-sm font-light text-gray-500">

                  <li className="flex items-start gap-3">

                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Mengenal Huruf & Angka</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Melancarkan Membaca</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Menulis</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Berhitung Dasar</span>
                  </li>

                </ul>
                
              </div>
            </div>
            </StaggerItem>
            <StaggerItem className="h-full w-full sm:w-80 md:w-92">
              <div className="h-full w-full bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden">
                <Image
                  src={"/privat/foto-privat-5.jpeg"}
                  fill
                  alt="Program Les Privat"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-xl text-gray-800 font-semibold ">Privat Mengaji</h1>
                  <span className="text-blue-500 font-light text-sm px-2 "> Min. Usia 3 Tahun </span>
                </div>
                <p className="text-gray-500 font-light leading-7 text-sm mb-2">Belajar membaca Al-Qur'an dari Iqra hingga lancar (Tahsin).</p>
                <ul className="space-y-3 mb-6 text-sm font-light text-gray-500">

                  <li className="flex items-start gap-3">

                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Membaca Iqra / Al-Qur'an (Tahsin)</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Hafalan Surat Pendek (Juz Amma)</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Praktik Wudhu & Sholat</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Doa Harian </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Dinnul Islam</span>
                  </li>

                </ul>
                
              </div>
            </div>
            </StaggerItem>
            <StaggerItem className="h-full w-full sm:w-80 md:w-92">
              <div className="h-full w-full bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden">
                <Image
                  src={"/privat/foto-privat-6.jpeg"}
                  fill
                  alt="Program Les Privat"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>

              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-xl text-gray-800 font-semibold ">Mapel Sekolah SD</h1>
                  <span className="text-blue-500 font-light text-sm px-2">Kelas 1 - 6 SD </span>
                </div>
                <p className="text-gray-500 font-light leading-7 text-sm mb-2">Membantu anak memahami PR Sekolah, persiapan ulangan harian/PTS/PAS, dan mendalami materi sulit.</p>
                <ul className="space-y-3 mb-6 text-sm font-light text-gray-500">

                  <li className="flex items-start gap-3">

                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Pendampingan PR Sekolah</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Persiapan Ulangan (PH/PTS/PAS)</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Review Materi Sulit</span>
                  </li>


                </ul>
                
              </div>
            </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h1 className="text-gray-800 font-semibold text-2xl sm:text-4xl mb-8 md:mb-15">Paket Les Privat</h1>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-15 justify-items-center" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem className="h-full w-full sm:w-80 md:w-92">
              <div className="h-full w-full bg-white shadow-lg rounded-lg p-8 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-gray-500 mb-6 md:mb-16">Paket 2x per Minggu</h3>
                <h1 className="text-blue-500 text-3xl sm:text-4xl mb-6 md:mb-15 font-bold">Rp 300.000 <span className="text-gray-500 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-gray-500 text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 60 Menit per sesi</p>
                  </div>
                  
                </div>
                <div className="mt-auto pt-8">
                  <Link href="/ppdb?paket=2x#les-privat" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>
            </StaggerItem>
            <StaggerItem className="h-full w-full sm:w-80 md:w-94">
              <div className="h-full w-full bg-blue-600 shadow-lg rounded-lg p-8 sm:p-10 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-white mb-6 md:mb-17">Paket 3x per Minggu</h3>
                <h1 className="text-white text-3xl sm:text-4xl mb-6 md:mb-15 font-bold">Rp 400.000 <span className="text-gray-200 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-white text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/ppdb?paket=3x#les-privat" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>
            </StaggerItem>
            <StaggerItem className="h-full w-full sm:w-80 md:w-92">
              <div className="h-full w-full bg-white shadow-lg rounded-lg p-8 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-gray-500 mb-6 md:mb-16">Paket 4x per Minggu</h3>
                <h1 className="text-blue-500 text-3xl sm:text-4xl mb-6 md:mb-15 font-bold">Rp 500.000 <span className="text-gray-500 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-gray-500 text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/ppdb?paket=4x#les-privat" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h1 className="text-gray-800 font-semibold text-center text-2xl sm:text-4xl mb-8 md:mb-15">Pertanyaan Umum</h1>
          </FadeIn>
          <StaggerContainer className="space-y-4" viewport={{ once: true, amount: 0.1 }}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className={` border rounded-xl transition-all duration-300 ${openIndex === index ? "border-blue-500 bg-white" : "border-gray-200 bg-white hover:border-blue-300"}`}>
                  <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-4 sm:p-6 text-left focus:outline-none gap-4">
                    <h3 className={`font-semibold text-base sm:text-lg ${openIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                      {faq.question}
                    </h3>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-4 sm:p-6 pt-0 text-gray-600 leading-relaxed text-sm border-t border-gray-100/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="mt-12 md:mt-15">
        <div className="relative w-full h-80 sm:h-96 md:h-125">
          <Image
            src="/privat/foto-privat-7.webp"
            fill
            alt="foto"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">

            <FadeIn>
              <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl mb-4 max-w-3xl leading-tight">Siap Membantu Anak Meraih Prestasi Terbaiknya?</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-blue-100 text-sm sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl font-light">Dapatkan jadwal fleksibel dan guru terbaik datang kerumah</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 ">
                <Link href="/kontak" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 px-6 rounded-3xl shadow-lg ">Hubungi</Link>
                <Link href="/ppdb#les-privat" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-3xl transition-all">Daftar</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>



  )

}

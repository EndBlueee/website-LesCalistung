"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaChevronDown, } from "react-icons/fa";
import {
  BsMoonStarsFill, BsPaletteFill, BsCheckCircleFill, BsPalette, BsBusFront, BsMortarboard, BsFillBackpackFill
  , BsPersonCheckFill, BsBookHalf, BsPencilSquare
} from "react-icons/bs";
import FadeIn from "@/components/fadein";
import { StaggerContainer, StaggerItem, ScaleUpWrapper } from "@/components/staggerwrapper";
import { motion } from "framer-motion";




export default function kelasReguler() {

  const [openIndex, setOpenIndex] = useState(null)
const faqs = [
    {
      question: "Berapa jumlah siswa dalam satu kelas?",
      answer: "Setiap kelas kami batasi agar proses belajar lebih fokus. Untuk kelas reguler, jumlah siswa disesuaikan dengan kapasitas kelas dan usia anak."
    },
    {
      question: "Berapa jumlah guru yang mengajar?",
      answer: "Total pengajar untuk program kelas reguler ada 3 guru."
    },
    {
      question: "Apakah ada PR (pekerjaan rumah)?",
      answer: "PR diberikan secara ringan dan menyenangkan, sesuai usia anak. Tujuannya untuk penguatan materi tanpa membebani."
    },
    {
      question: "Apakah ada syarat khusus atau dokumen yang dibutuhkan?",
      answer: "Tidak ada syarat khusus. Cukup mengisi formulir pendaftaran dan data anak. Jika ada dokumen tambahan yang diperlukan, tim kami akan menginformasikan."
    },
    {
      question: "Berapa lama durasi jam belajarnya?",
      answer: "Durasi belajar hingga 1 jam 30 menit."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  const jadwalPagi = [
    { time: "07.30 - 07.40", title: "Classical", desc: "Baris berbaris, ikrar, dan senam ceria." },
    { time: "07.40 - 07.50", title: "Character Building", desc: "Doa Harian & Adab." },
    { time: "07.50 - 08.30", title: "Core Learning", desc: "Sesi Calistung Intensif." },
    { time: "08.30 - 09.00", title: "Fun Review", desc: "Ulas Materi & Pulang." },
  ];

  // DATA JADWAL S
  const jadwalSiang = [
    { time: "09.00 - 09.10", title: "Classical", desc: "Baris berbaris, ikrar, dan senam ceria." },
    { time: "09.10 - 09.20", title: "Character Building", desc: "Doa Harian & Adab." },
    { time: "09.20 - 10.10", title: "Core Learning", desc: "Sesi Calistung Intensif." }, // Contoh data tambahan
    { time: "10.10 - 10.30", title: "Fun Review", desc: "Ulas Materi & Pulang." }, // Contoh data tambahan
  ];
  return (
    <main className="font-google">
      <section>
        <div className="relative w-full h-64 md:h-110 mb-12">
          <Image
            src="/reguler/foto-reguler-1.webp"
            alt="Banner Profil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black/40 ">
            <FadeIn delay={0.1}>
              <h1 className="text-white text-xl md:text-5xl font-semibold">Program Kelas Reguler</h1>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <FadeIn duration={0.8}>
              <div className="flex flex-col justify-start h-full order-2 md:order-1">
                <h1 className="text-gray-900 font-bold text-2xl md:text-4xl mb-4 md:mb-8 leading-snug">Bangun Kedisiplinan & Sosialisasi Sejak Dini</h1>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base text-justify md:text-left">Program Kelas Reguler dirancang khusus untuk menyimulasikan suasana sekolah formal. melalui pertemuan rutin Senin-Jumat, Ananda tidak hanya belajar calistung, tetapi juga melatih kemandirian, berinteraksi dengan teman sebaya, dan beradaptasi dengan rutinitas bangun pagi layaknya siswa SD</p>
              </div>
            </FadeIn>
            <FadeIn duration={0.8} delay={0.2}>
              <div className="relative h-64 md:h-80 w-full order-1 md:order-2">
                <Image
                  src="/reguler/foto-reguler-2.webp"
                  alt="Program Kelas Reguler"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="mb-10 md:mb-16">
              <h1 className="text-gray-900 font-bold text-2xl md:text-4xl text-center">Lingkup Materi Pembelajaran</h1>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem>
              <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-300 w-full md:w-28 h-24 md:h-auto flex justify-center items-center shrink-0">
                  <FaBookOpen className="h-10 w-10 md:h-12 md:w-12 text-white"></FaBookOpen>
                </div>
                <div className="p-5">
                  <h2 className="text-gray-800 mb-2 font-bold text-lg">Literasi & Numerasi</h2>
                  <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Menggunakan metode yang fleksibel untuk membaca tanpa mengeja dan konsep angka yang konkret untuk berhitung.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-300 w-full md:w-28 h-24 md:h-auto flex justify-center items-center shrink-0">
                  <BsMoonStarsFill className="h-10 w-10 md:h-12 md:w-12 text-white"></BsMoonStarsFill>
                </div>
                <div className="p-5">
                  <h2 className="text-gray-800 font-bold text-lg mb-2">Tahfidz & Adab</h2>
                  <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Hafalan surat pendek Juz Amma harian dan pembiasaan adab sopan santun kepada orang tua serta guru.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-blue-300 w-full md:w-28 h-24 md:h-auto flex justify-center items-center shrink-0">
                  <BsPaletteFill className="h-10 w-10 md:h-12 md:w-12 text-white"></BsPaletteFill>
                </div>
                <div className="p-5">
                  <h2 className="text-gray-800 font-bold mb-2 text-lg">Seni & Motorik</h2>
                  <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Melatih fokus dan kesiapan menulis melalui kegiatan seni kreatif yang merangsang imajinasi anak.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between gap-10">

            <FadeIn duration={0.8} className="w-full ">
              <div className="w-full">
                <div className="border-b border-gray-200 space-y-4 pb-4">
                  <h1 className="text-gray-900 font-bold text-2xl md:text-4xl">Target Kompetensi Lulusan</h1>
                  <p className="order-1 md:order-2 text-gray-500 font-light leading-7 text-sm sm:text-base mb-6">Mencetak lulusan yang tidak hanya siap belajar, tetapi juga mandiri dan berakhlak mulia menuju gerbang SD.</p>
                </div>
              
                
                <StaggerContainer className="text-gray-600 text-sm font-light grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <StaggerItem>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <BsFillBackpackFill size={50} className="bg-blue-300 p-3 text-white rounded-lg shrink-0" />
                      <h1 className="font-medium">Kesiapan Masuk SD</h1>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <BsPersonCheckFill size={50} className="bg-blue-300 p-3 text-white rounded-lg shrink-0" />
                      <h1 className="font-medium">Karakter Mandiri</h1>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <BsBookHalf size={50} className="bg-blue-300 p-3 text-white rounded-lg shrink-0" />
                      <h1>Hafalan Surat Pendek</h1>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <BsPencilSquare size={50} className="bg-blue-300 p-3 text-white rounded-lg shrink-0" />
                      <h1>Kemampuan Calistung</h1>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </FadeIn>
            <FadeIn duration={0.8} delay={0.4} direction="left" className="w-full ">
              <div className="relative w-full h-64 md:h-92 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/reguler/foto-reguler-3.webp"
                  fill
                  alt="foto"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Judul Utama */}
          <FadeIn>
            <h1 className="text-gray-900 font-bold text-2xl md:text-4xl text-center mb-10 md:mb-16">
              Jadwal Kegiatan Harian
            </h1>
          </FadeIn>

          <div className="relative">


            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="hidden md:block absolute left-1/2 top-0 w-1 bg-linear-to-b from-blue-400 via-purple-300 to-orange-400 transform -translate-x-1/2 rounded-full z-0"
            ></motion.div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-16 relative">


              <div className="text-center md:text-right md:pr-16 flex flex-col justify-center mb-8 md:mb-0">
                <FadeIn direction="right" duration={0.8} delay={0.2}>
                  <h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Kelas Sesi <br />
                    <span className="text-blue-600">Pertama</span>
                  </h1>
                  <div className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold self-center md:self-end">
                    07.30 - 09.00 WIB
                  </div>
                </FadeIn>
              </div>


              <div className="md:pl-16">
                <StaggerContainer viewport={{ once: true, amount: 0.3 }} className="space-y-4 md:space-y-8">
                  {jadwalPagi.map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="relative group">

                        <div className="hidden md:block absolute top-6 -left-17 z-10">
                          <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-150 transition-transform duration-300"></div>
                        </div>

                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-2 border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                          <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded mb-2">
                            {item.time}
                          </span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h4>
                          <p className="text-gray-500 font-light leading-7 text-sm sm:text-base mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">


              <div className="md:pr-16 order-2 md:order-1">
                <StaggerContainer viewport={{ once: true, amount: 0.3 }} className="space-y-4 md:space-y-8">
                  {jadwalSiang.map((item, index) => (
                    <StaggerItem key={index}>
                      <div className="relative group">

                        <div className="hidden md:block absolute top-6 -right-17 z-10">
                          <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md group-hover:scale-150 transition-transform duration-300"></div>
                        </div>


                        <div className="bg-white p-4 md:p-6 rounded-lg border-l-4 md:border-l-0 md:border-r-2 border-orange-500 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 md:text-right">
                          <span className="inline-block bg-orange-50 text-orange-700 text-xs font-bold px-2 py-1 rounded mb-2">
                            {item.time}
                          </span>
                          <h4 className="text-lg md:text-xl font-bold text-gray-800">{item.title}</h4>
                          <p className="text-gray-500 font-light leading-7 text-sm sm:text-base mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>


              <div className="text-center md:text-left md:pl-16 flex flex-col justify-center mb-4 md:mb-0 order-1 md:order-2">
                <FadeIn direction="left" duration={0.8} delay={0.2}>
                  <h1 className="text-3xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Kelas Sesi <br />
                    <span className="text-orange-500">Kedua</span>
                  </h1>
                  <div className="inline-block mt-3 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold self-center md:self-start">
                    09.00 - 10.30 WIB
                  </div>
                </FadeIn>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="text-center md:text-left w-full md:w-auto mb-8 md:mb-16">
              <h1 className="text-gray-900 font-bold text-2xl md:text-4xl">Lingkungan Belajar Kondusif</h1>
              <p className="text-gray-500 font-light leading-7 text-sm sm:text-base mt-2 max-w-md mx-auto md:mx-0">
                Kami merancang setiap sudut sekolah untuk keamanan dan kenyamanan eksplorasi si kecil.
              </p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem>
              <div className="relative w-full h-64 md:h-80 border overflow-hidden rounded-lg">
                <Image
                  src="/reguler/foto-reguler-4.webp"
                  fill
                  alt="foto"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative w-full h-64 md:h-80 border overflow-hidden rounded-lg">
                <Image
                  src="/reguler/foto-reguler-5.webp"
                  fill
                  alt="foto"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="mb-10 md:mb-16 space-y-2 md:space-y-4 max-w-lg text-center md:text-left mx-auto md:mx-0">
              <h1 className="text-gray-900 font-bold text-2xl md:text-4xl">Program Kegiatan Penunjang</h1>
              <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Membangun rasa percaya diri dan keberanian anak untuk tampil di depan umum.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10" viewport={{ once: true, amount: 0.1 }}>
            <StaggerItem>
              <div className="relative w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <BsPalette size={50} className="text-blue-500 mb-4" />
                <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2">Pentas Kreativitas</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Membangun rasa percaya diri dan keberanian anak untuk tampil di depan umum.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <BsBusFront size={50} className="text-blue-500 mb-4" />
                <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2">Outing Class</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Eksplorasi lingkungan sebagai sarana rekreasi edukatif guna memperluas wawasan siswa.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <BsMortarboard size={50} className="text-blue-500 mb-5" />
                <h2 className="text-gray-600 text-lg md:text-xl font-bold mb-2">Wisuda</h2>
                <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Momen apresiasi puncak atas pencapaian belajar sebagai tanda kesiapan masuk SD.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16 space-y-2 md:space-y-4">
              <h1 className="text-gray-900 font-bold text-2xl md:text-4xl ">Biaya Pendidikan Terjangkau</h1>
              <p className="text-gray-500 font-light leading-7 text-sm sm:text-base max-w-xl mx-auto">Biaya hemat, manfaat maksimal. Dukung potensi emas si kecil tumbuh optimal bersama kami.</p>
            </div>
          </FadeIn>
          <StaggerContainer viewport={{ once: true, amount: 0.1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <StaggerItem>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg relative group">
                  <div className="border-b border-gray-200 pb-6 mb-6 space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Pendaftaran</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-gray-900">Rp 900rb</span>
                      <span className="text-gray-400 font-light">/siswa</span>
                    </div>
                    <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Investasi awal untuk pendaftaran dan fasilitas pendukung belajar pertama kali</p>
                  </div>
                  <div className="mt-5">
                    <ul className="text-gray-500 text-sm text-left space-y-3">
                      <li className="flex items-center gap-3">
                        <BsCheckCircleFill className="text-blue-200 shrink-0" />
                        <span>Seragam Olahraga</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BsCheckCircleFill className="text-blue-200 shrink-0" />
                        <span>Buku Baca Jilid 1,2 dan 3</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BsCheckCircleFill className="text-blue-200 shrink-0" />
                        <span>Buku Tabungan</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <BsCheckCircleFill className="text-blue-200 shrink-0" />
                        <span>SPP Bulan Juli</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="bg-blue-600 p-6 md:p-8 rounded-2xl shadow-2xl text-white relative transform md:-translate-y-4 md:hover:-translate-y-6 transition-all duration-300">
                  <div className="border-b border-gray-300 space-y-2 pb-6 mb-6">
                    <p className="text-xl md:text-2xl font-bold text-white">SPP Bulanan</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Rp 65rb<span className="text-base font-light text-gray-200"> /bulan</span></h2>
                    <p className="text-gray-200 font-light">Biaya bulanan yang terjangkau untuk mendukung perkembangan anak</p>
                  </div>
                  
                  <Link href="/ppdb#form-kelas-reguler" className="block w-full text-center bg-white text-blue-700 py-3 md:py-4 rounded-xl font-bold hover:bg-yellow-50 transition-colors shadow-lg">
                    Daftar Sekarang
                  </Link>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>



      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h1 className="text-gray-900 font-bold text-2xl md:text-4xl text-center mb-8 md:mb-15">Pertanyaan Umum</h1>
          </FadeIn>
          <StaggerContainer className="space-y-4" viewport={{ once: true, amount: 0.1 }}>
            {faqs.map((faq, index) => (
              <StaggerItem key={index}>
                <div className={` border rounded-xl transition-all duration-300 ${openIndex === index ? "border-blue-500 bg-white" : "border-gray-200 bg-white hover:border-blue-300"}`}>
                  <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                    <h3 className={`font-semibold text-lg ${openIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                      {faq.question}
                    </h3>
                    <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed text-sm border-t border-gray-100/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      <section className="mt-10 md:mt-15">
        <div className="relative w-full h-80 md:h-125">
          <Image
            src="/reguler/foto-reguler-6.webp"
            fill
            alt="foto"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
            <FadeIn>
              <h2 className="text-white font-bold text-3xl md:text-5xl mb-4 max-w-3xl leading-tight">Belajar Lebih Seru dan Efektif di Kelas Reguler</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-blue-100 text-sm sm:text-lg md:text-xl mb-6 md:mb-8 max-w-2xl font-light">Pahami materi sekolah dengan kurikulum terstruktur dan diskusi interaktif bersama teman sebaya.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <Link href="/kontak" className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 px-6 rounded-3xl shadow-lg text-center">Tanya Program</Link>
                <Link href="/ppdb#form-kelas-reguler" className="w-full md:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-3xl transition-all text-center">Daftar Sekarang</Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>



    </main>



  )

}

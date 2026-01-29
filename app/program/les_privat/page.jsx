"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsPersonCheckFill, BsClockFill, BsHouseDoorFill, BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";



export default function LesPrivat() {

  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    {
      question: "Dimana lokasi les privat ini?",
      answer: "Kantor pusat kami berada di Serua, Ciputat. Namun untuk layanan Home Visit, guru kami siap datang ke rumah Anda di area Pamulang, Ciputat, Bintaro, dan sekitarnya."
    },
    {
      question: "Apakah jadwalnya bisa fleksibel?",
      answer: "Sangat bisa! Jadwal belajar ditentukan berdasarkan kesepakatan antara Orang Tua dan Guru. Jika berhalangan hadir, jadwal bisa diganti di hari lain (reschedule)."
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "Saat ini kami sedang mengadakan promo GRATIS biaya pendaftaran untuk 20 pendaftar pertama bulan ini. Segera daftar sebelum kuota habis!"
    },
    {
      question: "Bagaimana kualifikasi pengajarnya?",
      answer: "Seluruh pengajar kami adalah lulusan S1 dari universitas terkemuka (UI, UIN, UNJ) yang telah lolos seleksi ketat, wawancara, dan pelatihan metode ajar ramah anak."
    },
    {
      question: "Apakah bisa ganti guru jika anak tidak cocok?",
      answer: "Tentu saja. Kenyamanan anak adalah prioritas kami. Jika dalam 2 sesi pertama anak merasa kurang cocok, kami akan mencarikan guru pengganti tanpa biaya tambahan."
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
        <div className="relative w-full h-64 md:h-110 mb-12">
          <Image
            src="/fotoo2.webp"
            alt="Banner Profil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-blue-900/40 ">
            <h1 className="text-white text-5xl font-semibold font-google">Program Les Privat</h1>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="relative h-80 w-full">
              <Image
                src="/fotoo1.webp"
                alt="Program Kelas Reguler"
                fill
                className="object-cover rounded-md shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-start h-full">
              <h1 className="text-gray-800 font-semibold text-3xl mb-8 max-w-lg">Layanan Pendidikan Privat Eksklusif di Kenyamanan Rumah Anda</h1>
              <p className="text-gray-500 font-light leading-7">Kami menghadirkan pengalaman belajar yang kondusif tanpa harus meninggalkan rumah. Melalui metode One-on-One Tutoring, pengajar kami berfokus penuh pada perkembangan spesifik Ananda, memastikan materi tersampaikan dengan efektif dalam suasana yang aman dan personal.</p>


            </div>

          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-gray-800 font-semibold text-3xl mb-15">Keunggulan Home Visit Kami</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
              <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                <BsPersonCheckFill className="text-blue-500 text-4xl" />
              </div>
              <h2 className="text-gray-800 font-semibold text-xl">Personalisasi 1-on-1</h2>
              <p className="text-gray-500 font-light leading-7">Materi dan kecepatan belajar disesuaikan 100% dengan daya tangkap anak. tidak perlu menunggu teman lain</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
              <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                <BsHouseDoorFill className="text-blue-500 text-4xl" />
              </div>
              <h2 className="text-gray-800 font-semibold text-xl ">Kenyamanan</h2>
              <p className="text-gray-500 font-light leading-7">Anak belajar di lingkungan rumahnya sendiri, membuat mereka lebih rileks dan berani bertanya.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8 h-full space-y-3 border border-gray-200">
              <div className="bg-white border border-blue-500  rounded-full p-4 inline-flex justify-center items-center w-16 h-16 ">
                <BsClockFill className="text-blue-500 text-4xl" />
              </div>
              <h2 className="text-gray-800 font-semibold text-xl ">Fleksibilitas Waktu</h2>
              <p className="text-gray-500 font-light leading-7">Waktu les dapat disesuaikan dengan agenda kelaurga, memberikan kenyamanan tanpa mengganggu rutinitas harian</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="h-full flex flex-col justify-start">
              <h1 className="text-gray-800 font-semibold text-3xl mb-10">Standar Profesionalisme Pengajar</h1>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="text-gray-800 font-semibold mb-1">Terverifikasi & Profesional</h3>
                    <p className="text-gray-500 font-light leading-7 text-sm">Lulusan Sarjana yang kompeten dan berpengalaman. Siap membimbing dengan sabar serta menyesuaikan metode ajar agar anak merasa nyaman.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="text-gray-800 font-semibold mb-1">Etika Terjaga</h3>
                    <p className="text-gray-500 font-light leading-7 mb-2 text-sm">Kami menjunjung tinggi etika sopan santun saat berkunjung ke rumah Anda dan memastikan lingkungan belajar yang aman dan mendukung.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BsCheckCircleFill className="text-blue-500 text-xl mt-1 shrink-0" />
                  <div>
                    <h3 className="text-gray-800 font-semibold mb-1">Komunikasi Terbuka</h3>
                    <p className="text-gray-500 font-light leading-7 text-sm">kami percaya pada komunikasi transparan dengan orang tua untuk memastikan perkembangan anak sesuai ekspetasi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-112.5 w-full">

              <div className="absolute h-90 w-md top-0 right-4 z-0 rounded-sm overflow-hidden">
                <Image
                  src="/fotoo1.webp"
                  alt="Program Kelas Reguler"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="absolute bottom-7 left-1 w-60 h-58 z-10 rounded-sm overflow-hidden">
                <Image
                  src="/fotoo2.webp"
                  alt="Program Kelas Reguler"
                  fill
                  className="object-cover "
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-20 bg-blue-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="font-semibold text-3xl mb-15 text-white">Jangkauan Wilayah Layanan</h1>
          <div className="border-t border-white/50"></div>
          <div className="py-8 border-b border-white/50 px-2">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
              <h1 className="text-white font-semibold text-xl md:col-span-3">Serua</h1>
              <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Mencakup area Perumahan Taman Serua, Gg. H Sa'al , Hingga Batas Serua</p>
              <div className="md:col-span-1 flex justify-end">
                <div className="rounded-2xl text-white">
                  <FaMapLocationDot size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 border-b border-white/50 px-2">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
              <h1 className="text-white font-semibold text-xl md:col-span-3">Pamulang</h1>
              <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Area Pamulang Barat, Pamulang Timur, Witana Harja dan sekitarnya.</p>
              <div className="md:col-span-1 flex justify-end">
                <div className=" rounded-2xl text-white">
                  <FaMapLocationDot size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 border-b border-white/50 px-2">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">
              <h1 className="text-white font-semibold text-xl md:col-span-3">Gunung Sindur</h1>
              <p className="text-white text-sm font-light md:col-span-8 max-w-sm md:translate-x-12">Melayani Area Gunung Sindur sekitar</p>
              <div className="md:col-span-1 flex justify-end">
                <div className="rounded-2xl text-white">
                  <FaMapLocationDot size={40} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      <section className="py-12">
        <div className="container mx-auto px-19">

          <h1 className="text-gray-800 font-semibold text-3xl mb-15">Program Les Privat</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 justify-items-center">
            <div className="h-full w-92 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden ">
                <Image
                  src={"/fotoo.webp"}
                  fill
                  alt="Program Les Privat"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between mb-2 items-center">
                  <h1 className="text-xl text-gray-800 font-semibold ">Privat Calistung</h1>
                  <span className="text-blue-500 font-light leading-7 text-sm px-2 ">Usia 4 - 6 Tahun </span>
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
                    <span>Menulis Rapi & Dikte</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Berhitung Dasar</span>
                  </li>

                </ul>
                <div className="mt-auto pt-6 border-t">
                  <Link href="" className="block w-full bg-blue-500 px-2 py-3 text-sm hover:bg-blue-600 rounded-lg font-bold text-center transition-all ">Pilih Paket</Link>
                </div>
              </div>
            </div>
            <div className="h-full w-92 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden">
                <Image
                  src={"/fotoo2.webp"}
                  fill
                  alt="Program Les Privat"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              </div>
              <div className="p-5 flex flex-col grow">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="text-xl text-gray-800 font-semibold ">Privat Mengaji</h1>
                  <span className="text-blue-500 font-light text-sm px-2 ">Usia 4 - 6 Tahun </span>
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
                    <span>Doa Harian & Adab Islami</span>
                  </li>

                </ul>
                <div className="mt-auto pt-6 border-t">
                  <Link href="" className="block w-full bg-blue-500 px-2 py-3 text-sm hover:bg-blue-600 rounded-lg font-bold text-center transition-all ">Pilih Paket</Link>
                </div>
              </div>
            </div>
            <div className="h-full w-92 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col overflow-hidden group">
              <div className="relative h-60 w-full shrink-0 overflow-hidden">
                <Image
                  src={"/fotoo1.webp"}
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

                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                    <span>Matematika, IPA, B.Inggris, Tematik</span>
                  </li>

                </ul>
                <div className="mt-auto pt-6 border-t ">
                  <Link href="" className="block w-full bg-blue-500 px-2 py-3 text-sm hover:bg-blue-600 rounded-lg font-bold text-center transition-all ">Pilih Paket</Link>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">

          <h1 className="text-gray-800 font-semibold text-3xl mb-15">Paket Les Privat</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-15 justify-items-center">
            <div className="h-126 w-92 bg-white shadow-lg rounded-lg p-8 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-gray-500 mb-16">Paket 2x per Minggu</h3>
                <h1 className="text-blue-500 text-4xl mb-15 font-bold">Rp 500.000 <span className="text-gray-500 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-gray-500 text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                </div>
                <div className="mt-auto pt-8">
                  <Link href="/profil" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>
            <div className="h-132 w-94 bg-blue-600 shadow-lg rounded-lg p-10 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-white mb-17">Paket 2x per Minggu</h3>
                <h1 className="text-white text-4xl mb-15 font-bold">Rp 500.000 <span className="text-gray-200 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-white text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/profil" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>
            <div className="h-126 w-92 bg-white shadow-lg rounded-lg p-8 flex flex-col border border-gray-200">

              <div className="grow flex flex-col">
                <h3 className="text-gray-500 mb-16">Paket 2x per Minggu</h3>
                <h1 className="text-blue-500 text-4xl mb-15 font-bold">Rp 500.000 <span className="text-gray-500 text-sm">/bulan</span></h1>
                <div className="space-y-2 text-gray-500 text-sm font-extralight">

                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Durasi 30 Menit per sesi</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsCheckCircle size={16} />
                    <p>Flexible scheduling</p>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/profil" className="block w-full bg-blue-400 hover:bg-blue-400 text-white text-sm font-semibold px-2 py-3 text-center rounded-lg transition-all">Daftar</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-gray-800 font-semibold text-center text-3xl mb-15">Pertanyaan Umum</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={` border rounded-xl transition-all duration-300 ${openIndex === index ? "border-blue-500 bg-white" : "border-gray-200 bg-white hover:border-blue-300"}`}>
                <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center p-6 text-left focus:outline-none">
                  <h3 className={`font-semibold text-lg ${openIndex === index ? "text-blue-600" : "text-gray-800"}`}>
                    {faq.question}
                  </h3>
                  <FaChevronDown className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-500" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm border-t border-gray-100/50">

                    {faq.answer}
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>
      <section className="mt-15">
        <div className="relative w-full h-96 md:h-125">
          <Image
            src="/fotoo1.webp"
            fill
            alt="foto"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">

            <h2 className="text-white font-bold text-3xl md:text-5xl mb-4 max-w-3xl leading-tight">Siap Membantu Anak Meraih Prestasi Terbaiknya?</h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl font-light">Dapatkan jadwal fleksibel dan guru terbaik datang kerumah</p>
            <div className="flex flex-col md:flex-row gap-4 ">
              <Link href="" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-3 px-6 rounded-3xl shadow-lg ">Hubungi</Link>
              <Link href="" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-6 rounded-3xl transition-all">Daftar</Link>
            </div>
          </div>
        </div>
      </section>



      

    </main>



  )

}
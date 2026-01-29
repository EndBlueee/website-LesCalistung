"use client";


import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaChevronDown } from "react-icons/fa";
import { BsMoonStarsFill, BsPaletteFill, BsCheckCircle } from "react-icons/bs";




export default function kelasReguler() {

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

  const jadwalPagi = [
    { time: "07.00 - 07.15", title: "Classical", desc: "Baris berbaris, ikrar, dan senam ceria." },
    { time: "07.15 - 07.30", title: "Character Building", desc: "Doa Harian & Adab." },
    { time: "07.30 - 08.15", title: "Core Learning", desc: "Sesi Calistung Intensif." },
    { time: "08.15 - 08.30", title: "Fun Review", desc: "Ulas Materi & Pulang." },
  ];

  // DATA JADWAL SIANG
  const jadwalSiang = [
    { time: "13.00 - 13.15", title: "Classical Siang", desc: "Semangat siang, baris, dan doa." },
    { time: "13.15 - 14.00", title: "Core Learning", desc: "Kegiatan inti calistung sore." },
    { time: "14.00 - 14.15", title: "Break", desc: "Istirahat & Snack Time." }, // Contoh data tambahan
    { time: "14.15 - 14.30", title: "Fun Review", desc: "Persiapan Pulang." }, // Contoh data tambahan
  ];
  return (
    <main className="font-google">
      <section>
        <div className="relative w-full h-64 md:h-110 mb-12">
          <Image
            src="/fotoo1.webp"
            alt="Banner Profil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-blue-900/40 ">
            <h1 className="text-white text-5xl font-semibold">Program Kelas Reguler</h1>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="flex flex-col justify-start h-full">
              <h1 className="text-gray-800 font-semibold text-3xl mb-8 max-w-lg">Bangun Kedisiplinan & Sosialisasi Sejak Dini</h1>
              <p className="text-gray-500 font-light leading-7">Program Kelas Reguler dirancang khusus untuk menyimulasikan suasana sekolah formal. melalui pertemuan rutin Senin-Jumat, Ananda tidak hanya belajar calistung, tetapi juga melatih kemandirian, berinteraksi dengan teman sebaya, dan beradaptasi dengan rutinitas bangun pagi layaknya siswa SD</p>

            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/fotoo.webp"
                alt="Program Kelas Reguler"
                fill
                className="object-cover rounded-md shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-gray-800 font-semibold text-3xl mb-15">Lingkup Materi Pembelajaran</h1>
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex bg-white shadow-lg max-w-xl rounded-lg overflow-hidden">
              <div className="bg-blue-300 w-28 flex justify-center items-center shrink-0">
                <FaBookOpen className="h-12 w-12 text-white"></FaBookOpen>
              </div>
              <div className="p-5">
                <h2 className="text-gray-800 mb-2 text-lg">Literasi & Numerasi</h2>
                <p className="text-gray-500 font-light leading-7">Fokus utama pada penguasaan membaca, menulis, dan berhitung. mulai dari mengenal huruf/angka, mengeja suku kata, hingga operasi hitung sederhana dan membaca kalimat lancar.</p>
              </div>
            </div>


            <div className="flex bg-white shadow-lg max-w-xl rounded-lg overflow-hidden">
              <div className="bg-blue-300 w-26 flex justify-center items-center shrink-0">
                <BsMoonStarsFill className="h-12 w-12 text-white"></BsMoonStarsFill>
              </div>
              <div className="p-5">
                <h2 className="text-gray-800 mb-2">Pendidikan Karakter & Agama</h2>
                <p className="text-gray-500 font-light leading-7">Pembiasaan nilai-nilai islami melalui hafalan surat pendek (Juz Amma),doa harian, praktik wudhu & sholat Dhuha, serta penanaman adab sopan santun kepada orang tua dan guru.</p>
              </div>
            </div>


            <div className="md:col-span-2 flex justify-center">

              <div className="flex bg-white shadow-lg max-w-xl rounded-lg  overflow-hidden">
                <div className="bg-blue-300 w-26 flex justify-center items-center shrink-0">
                  <BsPaletteFill className="h-12 w-12 text-white"></BsPaletteFill>
                </div>
                <div className="p-5">

                  <h2 className="text-gray-800 mb-2">Motorik & Kreativitas</h2>
                  <p className="text-gray-500 font-light leading-7">Melatih ketangkasan tangan dan daya imajinasi sebagai penyeimbangan otak kanan. Kegiatannya meliputi mewarnai, menggunting, menempel, serta permainan edukatif yang seru.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-2xl text-gray-600 font-semibold mb-16 text-center tracking-wide uppercase">
          Jadwal Kegiatan Harian
        </h1>

        <div className="relative">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-300 to-orange-400 transform -translate-x-1/2 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 mb-16 relative">
            
            <div className="text-center md:text-right md:pr-16 flex flex-col justify-center mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Kelas Sesi <br />
                <span className="text-blue-600">Pertama</span>
              </h1>
              <div className="inline-block mt-3 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold md:self-end self-center">
                07.00 - 08.30 WIB
              </div>
            </div>

            
            <div className="md:pl-16 space-y-8">
              {jadwalPagi.map((item, index) => (
                <div key={index} className="relative group">
                  
                  <div className="hidden md:block absolute top-6 -left-[4.25rem] z-10">
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  
                  <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1 rounded mb-2">
                      {item.time}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 relative">
            
            
            <div className="md:pr-16 space-y-8 order-2 md:order-1">
              {jadwalSiang.map((item, index) => (
                <div key={index} className="relative group">
                  
                  <div className="hidden md:block absolute top-6 -right-[4.25rem] z-10">
                    <div className="w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  
                  <div className="bg-white p-6 rounded-xl border-l-4 md:border-l-0 md:border-r-4 border-orange-500 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 md:text-right">
                    <span className="inline-block bg-orange-50 text-orange-700 text-xs font-bold px-2 py-1 rounded mb-2">
                      {item.time}
                    </span>
                    <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center md:text-left md:pl-16 flex flex-col justify-center mb-8 md:mb-0 order-1 md:order-2">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Kelas Sesi <br />
                <span className="text-orange-500">Kedua</span>
              </h1>
              <div className="inline-block mt-3 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold md:self-start self-center">
                13.00 - 14.30 WIB
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-gray-800 font-semibold text-center text-3xl mb-15">Jadwal Kegiatan</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8 text-center bg-blue-600 py-3 rounded-lg border border-blue-200">
                <h2 className="text-xl font-bold text-white">Kelas Sesi 1</h2>
                <p className="text-white text-sm">Pukul 07.00 - 08.30 WIB</p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-xs sm:text-sm">
                      07:00 - 07:15
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-center">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Clasical</h3>
                    <p className="text-gray-500 font-light ">bernyanyi, game, random</p>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-xs sm:text-sm">
                      <h2>
                        07:15 - 07:30
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Karakter Building</h3>
                    <p className="text-gray-500 font-light ">Doa Harian</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">
                      <h2>
                        07:30 - 08:15
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Core Learning</h3>
                    <p className="text-gray-500 font-light ">Sesi Calistung</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">
                      <h2>
                        08:15 - 08:30
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Fun Review</h3>
                    <p className="text-gray-500 font-light ">Ulas Materi & Pulang</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-8 text-center bg-green-600 py-3 rounded-lg border border-blue-200 shrink-0">
                <h2 className="text-xl font-semibold text-white">Kelas Sesi 2</h2>
                <p className="text-white text-sm">Pukul 08.30 - 10.00 WIB</p>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">

                      08:30 - 08:45
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Clasical</h3>
                    <p className="text-gray-500 font-light ">Membaca</p>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">
                      <h2>
                        08:45 - 09:00
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Karakter Building</h3>
                    <p className="text-gray-500 font-light ">Doa Harian</p>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">
                      <h2>
                        09:00 - 09:45
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Core Learning</h3>
                    <p className="text-gray-500 font-light ">Sesi Calistung</p>
                  </div>
                </div>
                <div className="flex gap-4 ">
                  <div className="w-30 bg-white shadow-sm rounded-lg border border-gray-200 shrink-0 flex flex-col justify-center items-center">
                    <div className="font-bold text-gray-500 flex justify-center items-center h-full text-sm">
                      <h2>
                        09:45 - 10:00
                      </h2>
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200 shrink-0">
                    <h3 className="text-gray-800 font-semibold text-lg mb-1">Fun & Review</h3>
                    <p className="text-gray-500 font-light ">Ulas Materi & Pulang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Investasi Pendidikan</h2>
            <p className="text-gray-600 mt-2">
              Biaya terjangkau untuk kualitas pendidikan terbaik bagi Ananda.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">

            {/* KARTU 1: PENDAFTARAN */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex-1 text-center">
              <h3 className="text-gray-500 font-bold uppercase tracking-wide text-sm mb-2">Biaya Pendaftaran</h3>
              <div className="text-4xl font-bold text-gray-800 mb-4">
                Rp 100<span className="text-xl text-gray-500">rb</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Dibayarkan satu kali diawal masuk (Lifetime Membership)</p>
              <hr className="border-gray-100 mb-6" />
              <ul className="text-left text-gray-600 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Administrasi Data Siswa
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Penempatan Kelas
                </li>
              </ul>
            </div>

            {/* KARTU 2: SPP BULANAN (HIGHLIGHT) */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-500 flex-1 text-center relative transform md:-translate-y-4">
              {/* Badge Popular */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                Biaya Bulanan
              </div>

              <h3 className="text-gray-500 font-bold uppercase tracking-wide text-sm mb-2 mt-2">SPP / Bulan</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">
                Rp 150<span className="text-xl text-gray-500">rb</span>
              </div>
              <p className="text-gray-500 text-sm mb-6">Investasi rutin untuk kegiatan belajar mengajar</p>
              <hr className="border-gray-100 mb-6" />
              <ul className="text-left text-gray-600 space-y-3 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Pertemuan Senin - Jumat
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Modul Pembelajaran
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span> Laporan Perkembangan
                </li>
              </ul>
            </div>

          </div>

          {/* LINK KE PPDB UNTUK RINCIAN LENGKAP */}
          <div className="text-center mt-10">
            <p className="text-gray-600 text-sm">
              Ingin melihat rincian total biaya masuk (Seragam & Buku)?
              <a href="/ppdb" className="text-blue-600 font-bold hover:underline ml-1">
                Lihat Rincian Lengkap di Halaman PPDB →
              </a>
            </p>
          </div>

        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* HEADER SECTION */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Persyaratan Pendaftaran
            </h2>
            <p className="text-gray-600">
              Berikut adalah beberapa persyaratan sederhana untuk bergabung di kelas reguler Raudhatul Ilmi.
            </p>
          </div>

          {/* CONTENT WRAPPER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* KOLOM 1: KUALIFIKASI SISWA (Icon User/Anak) */}
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                  {/* Icon Smile/User */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Kualifikasi Siswa</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                  <span className="text-gray-700">Usia minimal <strong>4 - 6 Tahun</strong> (Untuk Kelas Persiapan SD).</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                  <span className="text-gray-700">Sehat jasmani dan rohani.</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                  <span className="text-gray-700">Bersedia mengikuti tata tertib kegiatan belajar di Raudhatul Ilmi.</span>
                </li>
              </ul>
            </div>

            {/* KOLOM 2: ADMINISTRASI (Icon Dokumen) */}
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {/* Icon File/Document */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Berkas Administrasi</h3>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Mengisi Formulir Pendaftaran
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Fotokopi Akta Kelahiran (1 Lembar)
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Fotokopi Kartu Keluarga / KK (1 Lembar)
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Pas Foto 3x4 Berwarna (2 Lembar)
                </li>
              </ul>
            </div>

          </div>

          {/* NOTE KECIL DI BAWAH */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              *Berkas dokumen dapat disusulkan setelah pendaftaran online.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-gray-800 font-semibold text-center text-3xl mb-15">Persyaratan</h1>
          <div className="flex items-center justify-center ">

            <div className="flex gap-10">
              <div className="h-80 w-70 bg-white p-5 rounded-lg">
                <h3 className="text-gray-800 text-lg mb-3">Persyaratan</h3>
                <p className="text-gray-500 font-light">Usia Peserta: 4-6 tahun</p>
              </div>
              <div className="h-80 w-70 bg-white p-5 rounded-lg">
                <h3 className="text-gray-800 text-lg mb-3">Persyaratan</h3>
                <p className="text-gray-500 font-light">Usia Peserta: 4-6 tahun</p>
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
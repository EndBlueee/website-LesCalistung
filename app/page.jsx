"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FadeIn from "@/components/fadein";
import { StaggerContainer, StaggerItem, ScaleUpWrapper } from "@/components/staggerwrapper";


const daftarGambar = [
  "/beranda/gambar-beranda-1.webp",
  "/beranda/foto-beranda-2.webp",
  "/beranda/foto-beranda-3.webp",
  "/beranda/foto-beranda-4.webp",
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


  const DATA_TESTIMONI = [
    {
      quote: "Awalnya si Kakak takut banget kalau disuruh baca. Setelah 2 bulan di sini, malah dia yang minta dibacain buku terus. Terima kasih kak!",
      name: "Bunda Anisa",
      role: "Wali Murid Les Calistung",
      image: "/fotoo.webp"
    },
    {
      quote: "Metode belajarnya sangat menyenangkan. Anak saya jadi tidak merasa terbebani saat belajar calistung.",
      name: "Ayah Budi",
      role: "Wali Murid Les Calistung",
      image: "/fotoo1.webp"
    },
    {
      quote: "Sangat terbantu dengan guru yang datang ke rumah. Jadwal fleksibel dan progres anak sangat terlihat.",
      name: "Mama Rara",
      role: "Program Privat",
      image: "/fotoo2.webp"
    },
    {
      quote: "Anak saya jadi lebih percaya diri di sekolah. Nilai matematikanya meningkat pesat.",
      name: "Bunda Citra",
      role: "Program Privat",
      image: "/fotoo3.jpeg"
    }
  ];

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const oneSetWidth = container.scrollWidth / 3;
      container.scrollLeft = oneSetWidth;
    }
  }, []);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild.clientWidth + 24;
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstElementChild.clientWidth + 24;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const handleInfiniteScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const oneSetWidth = container.scrollWidth / 3;

      if (container.scrollLeft >= 2 * oneSetWidth - 20) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = oneSetWidth;
        container.style.scrollBehavior = 'smooth';
      }

      else if (container.scrollLeft <= 20) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = oneSetWidth;
        container.style.scrollBehavior = 'smooth';
      }
    }
  };
  return (
    <main className="flex flex-col w-full min-h-screen font-google overflow-x-hidden">

      {/*Section Hero*/}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          {daftarGambar.map((src, index) => (
            <div key={src} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === indexGambar ? "opacity-100" : "opacity-0"}`}>

              <Image
                src={src}
                alt={`slide background ${index + 1}`}
                fill
                className="object-cover object-center md:object-right"
                quality={100}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10 bg-linear-to-t md:bg-linear-to-r from-black/70 md:from-black/80 via-black/20 to-black/20" />
        
        <div className="container mx-auto px-4 relative z-20 pt-24 md:pt-0 pb-20 md:pb-0">

          <div className="max-w-6xl px-0 md:px-4 mx-auto mt-5 md:mt-5">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <FadeIn delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl text-white leading-[1.1] sm:leading-[1.08] font-bold drop-shadow-sm font-google">Sahabat <br /><span className="text-4xl md:text-6xl">Belajar Anak Sholeh</span></h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-white/90 text-sm sm:text-base md:text-xl leading-relaxed max-w-[60vh] md:max-w-[80vh] mx-auto md:mx-0">Membangun generasi yang unggul dalam prestasi akademik dan kokoh dalam nilai-nilai Islam.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
                  <Link href="/kontak" className="w-full sm:w-auto bg-blue-600 text-white rounded-lg py-3 px-4 md:px-6 md:py-4 hover:bg-blue-700 transition">Daftar Sekarang</Link>
                  <Link href="/profil" className="w-full sm:w-auto border border-white py-3 px-4 md:px-6 md:py-4 text-white rounded-lg hover:bg-blue-600 hover:border-blue-600 transition">Lihat Profil</Link>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/*Section keunggulan*/}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="px-5 mb-15 text-center max-w-3xl mx-auto ">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Kenapa Harus <span className="text-blue-800">Raudhatul Ilmi?</span>
              </h1>
            </div>
          </FadeIn>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <FadeIn delay={0.1} className="h-full flex flex-col items-center p-2">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-6 mx-auto">
                <Image
                  src="/bachelor.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Siap Masuk SD</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kurikulum kami dirancang khusus untuk memperkuat kemampuan dasar (Calistung) dan adaptasi lingkungan</p>
            </FadeIn>

            <FadeIn delay={0.2} className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 mx-auto">
                <Image
                  src="/puzzle.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 md:mb-3">Pendekatan Personal</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kecepatan belajar tiap anak unik. Materi disampaikan sesuai daya tangkap mereka, bukan sekadar mengejar target</p>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 mx-auto">
                <Image
                  src="/balloons.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 md:mb-3">Belajar Yang Menyenangkan</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Kami tumbuhkan cinta belajar sejak dini. Metode seru dan interaktif membuat anak merasa seperti sedang bermain.</p>
            </FadeIn>
            <FadeIn delay={0.4} className="h-full flex flex-col items-center p-2 ">
              <div className="relative h-16 md:h-20 w-16 md:w-20 mb-4 md:mb-6 mx-auto">
                <Image
                  src="/real-time.png"
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 md:mb-3">Solusi Praktis</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Serahkan pada ahlinya. Tak perlu pusing mengajar sendiri atau repot antar-jemput. Guru kami siap datang ke rumah.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*Section program unggulan*/}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="flex flex-col space-y-4 items-center mb-12">
            <h1 className="text-gray-800 text-4xl md:text-5xl font-bold text-center">Pilih Cara Belajar <span className="text-blue-600">Favoritmu</span></h1>
            <p className="text-slate-600 text-lg max-w-2xl text-center">
              Kami menyediakan metode belajar yang fleksibel sesuai kebutuhan perkembangan buah hati Anda.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <FadeIn direction="right" delay={0.1} className="bg-orange-50 h-64 w-full rounded-lg flex justify-center items-center shadow-sm mb-0 md:mb-8">

              <div className="relative h-64 w-full overflow-hidden rounded-xl">
                <Image
                  src="/beranda/foto-beranda-5.webp"
                  alt="Icon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="md:col-span-2 bg-linear-to-bl from-blue-100 to-white h-64 w-full rounded-lg border border-gray-100 flex justify-between items-center p-8 shadow-sm hover:shadow-md transition">
              <div className="max-w-md">

                <h1 className="text-gray-800 text-3xl mb-3 font-bold ">Les Reguler</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">Belajar tatap muka Senin-Jumat dengan suasana kelas yang seru. Fokus pada sosialisasi & disiplin.</p>
                <Link href="/program/kelas_reguler" className="text-blue-600 font-semibold hover:underline">Selengkapnya </Link>
              </div>
            </FadeIn>


            <FadeIn direction="right" delay={0.3} className="md:col-span-2 bg-linear-to-tr from-orange-100 to-white h-64 w-full rounded-lg border border-gray-100 flex justify-between items-center p-8 shadow-sm hover:shadow-md transition">

              <div className="max-w-md">

                <h1 className="text-gray-800 text-3xl mb-3 font-bold ">Les Privat</h1>
                <p className="text-gray-600 mb-6">Layanan eksklusif guru datang ke rumah. Solusi bagi orang tua sibuk
                  yang ingin anaknya fokus belajar secara intensif 1-on-1.</p>
                <Link href="/program/les_privat" className="text-blue-600 font-semibold hover:underline">Selengkapnya </Link>

              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4} className="bg-blue-50 h-64 w-full rounded-lg flex justify-center items-center shadow-sm">

              <div className="relative h-64 w-full overflow-hidden ">
                <Image
                  src="/beranda/foto-beranda-6.jpeg"
                  alt="Icon"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*section sosial proof*/}
      <section className="py-12 md:py-20 relative ">
        <div className="absolute bg-blue-900 top-0 w-full md:w-[75%] h-full md:h-[70%] rounded-xl left-1/2 -translate-x-1/2 overflow-hidden -z-10">
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Kata Meraka <span className="text-blue-300">Tentang Kami</span></h1>
          </FadeIn>

          <div className="relative group ">
            <button onClick={scrollLeft} className="hidden md:flex absolute left-0 top-1/1 -translate-y-1/2 -translate-x-4 z-20 bg-white text-blue-50 p-4 rounded-full shadow-lg hover:bg-blue-50 transition hover:scale-110 cursor-pointer">
              <FaChevronLeft className="text-gray-800" />
            </button>

            <StaggerContainer ref={scrollContainerRef}
              onScroll={handleInfiniteScroll}
              className="flex gap-4 md:gap-6 mb-12 md:mb-20 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory pb-4 md:pb-8 scrollbar-hide scroll-smooth">
              {[...DATA_TESTIMONI, ...DATA_TESTIMONI, ...DATA_TESTIMONI].map((item, index) => (
                <StaggerItem
                  key={index}
                  className="min-w-[85%] md:min-w-100 snap-center bg-white border border-gray-200 rounded-xl p-6 md:p-8 relative shadow-xl">
                  <FaQuoteLeft className="absolute top-4 right-6 w-5 md:w-7 text-4xl md:text-6xl text-blue-100" />
                  <p className="text-gray-600 mb-6 md:mb-8 relative z-10 leading-relaxed mt-6 md:mt-9 text-sm md:text-base min-h-20 md:min-h-25">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold text-sm md:text-base">{item.name}</h4>
                      <p className="text-gray-500 text-xs md:text-sm">{item.role}</p>

                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <button onClick={scrollRight} className="hidden md:flex absolute right-0 top-1/1 -translate-y-1/2 translate-x-4 z-20 bg-white text-blue-50 p-4 rounded-full shadow-lg hover:bg-blue-50 transition hover:scale-110">
              <FaChevronRight className="text-gray-800" />
            </button>

          </div>

        </div>

        <div className="container mx-auto border-t border-blue-800 pt-8 md:pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-8 text-center">
            <FadeIn delay={0.2} className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold text-white md:text-gray-800">500+</h3>
              <p className="text-gray-300 md:text-gray-600 text-xs md:text-sm uppercase tracking-wider font-semibold">Siswa Terbantu</p>
            </FadeIn>
            <FadeIn delay={0.4} className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold text-white md:text-gray-800">50+</h3>
              <p className="text-gray-300 md:text-gray-600 text-xs md:text-sm uppercase tracking-wider font-semibold">Guru Terbaik</p>
            </FadeIn>
            <FadeIn delay={0.6} className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold text-white md:text-gray-800">4.9</h3>
              <p className="text-gray-300 md:text-gray-600 text-xs md:text-sm uppercase tracking-wider font-semibold">Rating</p>
            </FadeIn>
            <FadeIn delay={0.8} className="space-y-1 md:space-y-2">
              <h3 className="text-3xl md:text-5xl font-bold text-white md:text-gray-800">5 T</h3>
              <p className="text-gray-300 md:text-gray-600 text-xs md:text-sm uppercase tracking-wider font-semibold">Pengalaman</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*section terakhir*/}
      <section className="py-12">
        <div className="container mx-auto px-4 flex justify-center">


          <ScaleUpWrapper className="relative w-full h-auto min-h-100 md:h-130 bg-blue-50 rounded-xl overflow-hidden shadow-xl m-0 mb-10 z-0">
            <Image
              src="/beranda/foto-beranda-6.webp"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            <div className="relative z-10 flex flex-col justify-center items-start h-full p-8 md:px-20 space-y-4">
              <FadeIn delay={0.3} className="space-y-6 w-full text-center md:text-left">
                <h1 className="text-white text-3xl md:text-5xl font-bold">Siap Memberikan yang <br /> Terbaik?</h1>
                <p className="text-base md:text-lg max-w-2xl">Bergabunglah bersama kami sekarang dan mewujudkan impian buah hati Anda</p>
                <div className="pt-2">
                  <Link href="/kontak" className="md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full ">Hubungi Kami</Link>
                </div>
              </FadeIn>
            </div>
          </ScaleUpWrapper>
        </div>

      </section>
    </main >



  );
}

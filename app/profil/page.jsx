import Image from "next/image";
import { FaBullseye, FaRocket, FaHeart } from "react-icons/fa";
import FadeIn from "@/components/fadein";
import { StaggerContainer, StaggerItem } from "@/components/staggerwrapper";

export default function Profil() {
  return (
    <main className="min-h-screen font-google">
      <section>
              <div className="relative w-full h-64 md:h-110 mb-12">
                <Image
                  src="/profil/foto-profil-1.jpeg"
                  alt="Banner Profil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-black/40 ">
                  <FadeIn delay={0.1}>
                    <h1 className="text-white text-xl md:text-5xl font-semibold">Tentang Kami</h1>
                  </FadeIn>
                </div>
              </div>
            </section>
      

      <section className="container mx-auto px-4 mb-14 md:mb-20">
        <StaggerContainer viewport={{ once: true, amount: 0.5 }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <StaggerItem duration={2} delay={0.5}>
            <div className="relative w-full sm:w-[85%] h-full md:h-[80%] aspect-4/3 md:aspect-square overflow-hidden shadow-xl group mx-auto rounded-2xl">
              <Image
                src="/profil/foto-profil-2.jpeg"
                alt="foto"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </StaggerItem>
            <div className="space-y-6">
          <StaggerItem>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
                Sejarah <span className="text-blue-800">Raudhatul Ilmi</span>
              </h2>

              <div className="text-gray-500 font-light leading-7 text-sm sm:text-base space-y-4 text-justify md:text-left">
                <p>
                  Didirikan pada tahun 2010,<span className="font-semibold text-gray-800">Les Calistung Raudhatul Ilmi</span>  bermula dari sebuah visi sederhana: menciptakan lingkungan belajar yang menyenangkan dan bebas tekanan bagi anak-anak usia dini.
                </p>
                <p>Dengan pendekatan yang inovatif dan berfokus pada perkembangan holistik, kami telah membantu ribuan anak mengembangkan keterampilan dasar membaca, menulis dan berhitung. </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 sm:p-6 rounded-r-lg mt-6">
                <p className="text-blue-900 font-semibold italic text-base sm:text-lg">"Mencerdaskan Generasi dengan Hati, Membangun Karakter Sejak Dini.</p>
              </div>
          </StaggerItem>
            </div>
        </StaggerContainer>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

            <StaggerContainer viewport={{ once: true, amount: 0.5 }} className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <StaggerItem>
                <div className="relative ">
                  <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
                  <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 font-bold leading-tight">
                    Visi & Misi <br />
                    <span className="text-blue-800">Raudhatul Ilmi</span>
                  </h2>
                  <div className="">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">Visi Kami</h3>
                    <p className="text-gray-600 text-base sm:text-lg max-w-md font-semibold leading-relaxed">Komitmen kami dalam membangun pondasi pendidikan terbaik untuk masa depan buah hati Anda.</p>
                  </div>
                </div>
              </StaggerItem>
              <div className="space-y-6">
                <StaggerItem>
                  <div className="bg-yellow-300 p-5 sm:p-6 rounded-md flex gap-4 items-start max-w-lg">
                    <div className="flex flex-col justify-start">
                      <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                        01
                      </div>
                    </div>
                    <div>
                      <h1 className="text-gray-800 font-bold text-base sm:text-lg mb-1">Metode Fun Learnig</h1>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menyelenggarakan pembelajaran yang aktif, inovatif, dan menyenangkan agar anak mencintai proses belajar.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-orange-300 p-5 sm:p-6 rounded-md flex gap-4 items-start max-w-lg">
                    <div className="flex flex-col justify-start">
                      <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                        02
                      </div>
                    </div>
                    <div>
                      <h1 className="text-gray-800 font-bold text-base sm:text-lg mb-1">Pendidikan Karakter</h1>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menanamkan nilai-nilai moral, kedisiplinan, dan sopan santun sejak dini sebagai pondasi utama.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-red-300 p-5 sm:p-6 rounded-md flex gap-4 items-start max-w-lg ">
                    <div className="flex flex-col justify-start">
                      <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                        03
                      </div>
                    </div>
                    <div>
                      <h1 className="text-gray-800 font-bold text-base sm:text-lg mb-1">Lingkungan Kondusif</h1>
                      <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menciptakan suasana belajar yang aman, nyaman, dan mendukung tumbuh kembang potensi anak secara maksimal.</p>
                    </div>
                  </div>
                </StaggerItem>
              </div>
            </StaggerContainer>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">

          <FadeIn>
            <div className="flex flex-col items-center text-center mb-12  ">
              <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
              <h1 className="text-2xl md:text-4xl text-gray-500 font-bold">Tim Pengajar <span className="text-blue-600"> Terbaik Kami</span></h1>
            </div>
          </FadeIn>
        </div>
        <StaggerContainer viewport={{ once: true, amount: 0.1 }} className="flex flex-wrap justify-center gap-20">
          <StaggerItem className="flex flex-col items-center w-full sm:w-auto">

            <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-100 group">

              <div className="absolute bottom-0 inset-x-0 h-[70%] bg-purple-300 z-0 rounded-[2.5rem] shadow-xl transition-transform duration-300">
              </div>

              <div className="relative z-10 w-full h-full flex items-end justify-center -left-2 ">

                <div className="relative w-[95%] h-full">
                  <Image
                    src="/profil/foto-guru-1.webp"
                    alt="Guru Pop Out"
                    fill

                    className="object-contain object-bottom drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Maryati S. pd</h3>
              <p className="text-purple-500 font-medium text-sm sm:text-base">Kepala Les Calistung</p>
            </div>
          </StaggerItem>

          <StaggerItem className="flex flex-col items-center w-full sm:w-auto">
            <div className="relative w-64 sm:w-72 md:w-80 h-80 sm:h-96 md:h-100 group">

              <div className="absolute bottom-0 inset-x-0 h-[70%] bg-orange-300 z-0 rounded-[2.5rem] shadow-xl transition-transform duration-300">

              </div>

              <div className="relative z-10 w-full h-full flex items-end justify-center">

                <div className="relative w-[84%] h-full">
                  <Image
                    src="/profil/foto-guru-2.webp"
                    alt="Guru Pop Out"
                    fill

                    className="object-contain object-bottom drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Anastasya Putri</h3>
              <p className="text-purple-500 font-medium text-sm sm:text-base">Staf Guru</p>
            </div>
          </StaggerItem>

          
        </StaggerContainer>
      </section>
    </main >
  );
}

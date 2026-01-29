import Image from "next/image";
import { FaBullseye, FaRocket, FaHeart } from "react-icons/fa";

export default function Profil() {
  return (
    <main className="min-h-screen font-google">
      <section>
        <div className="relative w-full h-64 md:h-110 mb-12">
          <Image
            src="/fotoo1.webp"
            alt="Banner Profil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-blue-900/40 ">
            <h1 className="text-white text-5xl font-bold">Tentang Kami</h1>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative w-[85%] h-full md:h-[80%] aspect-5/3 md:aspect-square overflow-hidden shadow-xl group mx-auto rounded-2xl">
            <Image
              src="/fotoo2.webp"
              alt="foto"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
              <p className="text-blue-600 font-bold uppercase text-sm">Sejak 2013</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              Sejarah Perjalanan <span className="text-blue-800">Raudhatul Ilmi</span>
            </h2>

            <div className="text-gray-500 leading-7 font-light md:text-lg space-y-4 text-justify md:text-left">

              <p>
                Didirikan pada tahun 2010,<span className="font-semibold text-gray-800">Les Calistung Raudhatul Ilmi</span>  bermula dari sebuah visi sederhana: menciptakan lingkungan belajar yang menyenangkan dan bebas tekanan bagi anak-anak usia dini.
              </p>
              <p>Dengan pendekatan yang inovatif dan berfokus pada perkembangan holistik, kami telah membantu ribuan anak mengembangkan keterampilan dasar membaca, menulis dan berhitung. </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
              <p className="text-blue-900 font-semibold italic text-lg">"Mencerdaskan Generasi dengan Hati, Membangun Karakter Sejak Dini.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="relative h-screen flex items-center justify-center p-6 mx-auto">
          <Image
            src="/fotoo.webp"
            alt="background visi misi"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative ">
                <span className="h-1 w-12 bg-blue-600 rounded-full"></span>
                <p className="text-white font-bold uppercase text-sm">Sejak 2013</p>
                <h2 className="text-5xl text-white mb-6 font-bold leading-tight">
                  Visi & Misi <br />
                  <span>Raudhatul Ilmi</span>
                </h2>
                <div className="">
                  <h3 className="text-xl font-bold mb-2 text-blue-200">Visi Kami</h3>
                  <p className="text-white text-lg max-w-md font-bold leading-relaxed">Komitmen kami dalam membangun pondasi pendidikan terbaik untuk masa depan buah hati Anda.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-yellow-300 p-6 rounded-md flex gap-4 items-start max-w-lg">
                  <div className="flex flex-col justify-start">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                      01
                    </div>
                  </div>
                  <div>
                    <h1 className="text-gray-800 font-bold text-lg mb-1">Metode Fun Learnig</h1>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menyelenggarakan pembelajaran yang aktif, inovatif, dan menyenangkan agar anak mencintai proses belajar.</p>
                  </div>
                </div>
                <div className="bg-orange-300 p-6 rounded-md flex gap-4 items-start max-w-lg">
                  <div className="flex flex-col justify-start">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                      02
                    </div>
                  </div>
                  <div>
                    <h1 className="text-gray-800 font-bold text-lg mb-1">Pendidikan Karakter</h1>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menanamkan nilai-nilai moral, kedisiplinan, dan sopan santun sejak dini sebagai pondasi utama.</p>
                  </div>
                </div>
                <div className="bg-red-300 p-6 rounded-md flex gap-4 items-start max-w-lg ">
                  <div className="flex flex-col justify-start">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600 font-bold">
                      03
                    </div>
                  </div>
                  <div>
                    <h1 className="text-gray-800 font-bold text-lg mb-1">Lingkungan Kondusif</h1>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md">Menciptakan suasana belajar yang aman, nyaman, dan mendukung tumbuh kembang potensi anak secara maksimal.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-100 ">
        <div className="container mx-auto px-4">

          <div className="flex flex-col items-center text-center mb-12  ">
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
            <h1 className="text-3xl md:text-5xl text-gray-500 font-bold">Tim Pengajar <span className="text-blue-600"> Terbaik Kami</span></h1>

          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12">

          <div className="flex flex-col items-center">

            <div className="relative w-80 md:w-80 h-100 group">

              <div className="absolute bottom-0 inset-x-0 h-[75%] bg-purple-300 z-0 rounded-[2.5rem] shadow-xl transition-transform duration-300">
              </div>

              <div className="relative z-10 w-full h-full flex items-end justify-center">

                <div className="relative w-[95%] h-full">
                  <Image
                    src="/guru1.png"
                    alt="Guru Pop Out"
                    fill

                    className="object-contain object-bottom drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-1">
              <h3 className="text-2xl font-bold text-gray-800">Ms. Maryati S. pd</h3>
              <p className="text-purple-500 font-medium">Kepala Les Calistung</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-80 md:w-80 h-100 group">

              <div className="absolute bottom-0 inset-x-0 h-[75%] bg-red-300 z-0 rounded-[2.5rem] shadow-xl transition-transform duration-300">

              </div>

              <div className="relative z-10 w-full h-full flex items-end justify-center">

                <div className="relative w-[95%] h-full">
                  <Image
                    src="/guru2.png"
                    alt="Guru Pop Out"
                    fill

                    className="object-contain object-bottom drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-1">
              <h3 className="text-2xl font-bold text-gray-800">Ms. Juwai</h3>
              <p className="text-purple-500 font-medium">Staf Guru</p>
            </div>
          </div>

          <div className="flex flex-col items-center">

            <div className="relative w-80 md:w-80 h-100 group">

              <div className="absolute bottom-0 inset-x-0 h-[75%] bg-orange-300 z-0 rounded-[2.5rem] shadow-xl transition-transform duration-300">

              </div>

              <div className="relative z-10 w-full h-full flex items-end justify-center">

                <div className="relative w-[95%] h-full">
                  <Image
                    src="/guru3.png"
                    alt="Guru Pop Out"
                    fill

                    className="object-contain object-bottom drop-shadow-2xl transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 text-center space-y-1">
              <h3 className="text-2xl font-bold text-gray-800">Ms. Annas</h3>
              <p className="text-purple-500 font-medium">Staf Guru</p>
            </div>
          </div>
        </div>
      </section>







    </main >
  );
}
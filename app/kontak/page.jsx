import Image from "next/image";
import { BsTelephoneFill, BsGeoAltFill, BsInstagram } from "react-icons/bs";

export default function Kontak() {
  return (
    <main className="font-google">
      <section>
        <div className="relative w-full h-48 sm:h-56 md:h-110 mb-10 md:mb-12">
          <Image
            src="/kontak/foto-kontak-1.jpeg"
            alt="Banner Profil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black/20 px-4 text-center">
            <h1 className="text-white text-3xl md:text-5xl font-bold">Hubungi Kami</h1>
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:justify-between gap-10 items-start">
            <div className="space-y-4 md:w-2/2">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Mari Diskusikan Potensi <br /> Ananda</h1>
              <hr className="border-t-2 border-gray-300" />
              <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Punya pertanyaan seputar kurikulum, biaya, atau jadwal pendaftaran?
                Tim kami siap membantu Ayah & Bunda untuk menemukan program belajar terbaik
                yang sesuai dengan kebutuhan unik putra-putri Anda.</p>
              <p className="text-gray-500 font-light leading-7 text-sm sm:text-base">Silakan hubungi kami melalui kontak yang tersedia atau datang langsung
                ke lokasi kami untuk konsultasi tatap muka.</p>
              <div className="flex items-center gap-3 px-6">
                <h3 className="font-bold text-blue-700">Jam Operasional:</h3>
                <p className="text-sm text-blue-800">Senin - Sabtu: 08.00 - 16.00 WIB</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:w-1/2">
              <div className="flex items-center justify-start gap-4">
                <div className="border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                  <BsTelephoneFill className="w-8 h-8 text-blue-500" />
                </div>
                <div className="space-y-1 text-left">
                  <p className="text-blue-500 text-sm">Telephon: <span className="text-gray-500">0895635777179</span></p>
                  <p className="text-blue-500 text-sm">WhatsApp: <span className="text-gray-500">0895635777179</span></p>
                  <p className="text-blue-500 text-sm">Email: <span className="text-gray-500">Calistung@gmail.com</span></p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                  <BsGeoAltFill className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-left">
                  <p className="text-blue-500 text-sm">Alamat:</p>
                  <span className="text-gray-500 block max-w-xs text-sm leading-7">Jl. Serua Raya, RT02/RW01, Kelurahan Serua, Kecamatan Bojongsari, Kota Depok 16517</span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4">
                <div className="border border-blue-500 rounded-full w-20 h-20 flex items-center justify-center shrink-0">
                  <BsInstagram className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-center">
                  <p className="text-blue-500 text-sm">Sosial Media:</p>
                  <a href="#" className="text-gray-500 block max-w-xs text-sm leading-7 hover:text-blue-500">@RaudhatulIlmi</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="map-section" className="pb-14 md:pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Wrapper div untuk efek shadow yang lebih bagus */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.234674751765!2d106.7445773759277!3d-6.363673662253303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef42f2777161%3A0xc4788321c833446c!2sKelurahan%20Serua!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-75 md:h-112.5" // Responsive height map
            >
            </iframe>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            *Klik peta untuk membuka aplikasi Google Maps
          </p>
        </div>
      </section>
    </main >
  )
}

import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="bg-white font-google">

      {/* --- SECTION 1: HERO HEADER --- */}
      <section className="py-20 bg-blue-50 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
            Dokumentasi Kegiatan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Merekam Jejak <span className="text-yellow-500">Keceriaan</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Setiap hari adalah petualangan baru. Lihat bagaimana anak-anak belajar, bermain, dan bertumbuh di lingkungan yang menyenangkan.
          </p>
        </div>
      </section>


      {/* --- SECTION 2: VIDEO HIGHLIGHT (VIRTUAL TOUR) --- */}
      <section className="container mx-auto px-4 -mt-10 mb-20 relative z-10">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
           {/* Thumbnail Video */}
           <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all z-10"></div>
           <Image 
             src="/fotoo.webp" 
             alt="Video Tour" 
             fill 
             className="object-cover"
           />
           
           {/* Tombol Play */}
           <div className="absolute inset-0 flex items-center justify-center z-20">
             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-600 ml-1">
                   <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                 </svg>
               </div>
             </div>
           </div>
           
           {/* Label Video */}
           <div className="absolute bottom-6 left-6 z-20 text-white">
             <p className="font-bold text-lg">🎥 Virtual Tour Sekolah</p>
             <p className="text-sm opacity-90">Lihat keseharian kami dalam 2 menit</p>
           </div>
        </div>
      </section>


      {/* --- SECTION 3: GALERI FOTO (GRID) --- */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          
          {/* Filter Tombol (Hanya Visual Layout) */}
          {/* Untuk fungsi filter aktif, nanti perlu pakai useState React */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
             <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md">Semua</button>
             <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">📚 Belajar</button>
             <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">🎨 Kreativitas</button>
             <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">🏫 Fasilitas</button>
             <button className="px-6 py-2 bg-white text-gray-600 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">🌳 Outing</button>
          </div>

          {/* Grid Layout (Masonry-ish menggunakan Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Foto 1 (Vertical/Portrait) */}
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image 
                src="/fotoo.webp" 
                alt="Kegiatan Belajar" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Belajar Membaca Bersama</p>
              </div>
            </div>

            {/* Foto 2 (Square) */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden group">
              <Image 
                src="/fotoo1.webp" 
                alt="Main Puzzle" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Melatih Logika dengan Puzzle</p>
              </div>
            </div>

            {/* Foto 3 (Vertical) */}
            <div className="relative h-96 rounded-2xl overflow-hidden group">
              <Image 
                src="/fotoo2.webp" 
                alt="Guru Mengajar" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Suasana Kelas Privat</p>
              </div>
            </div>

            {/* Foto 4 (Landscape - Span 2 Columns di Desktop) */}
            <div className="relative h-64 md:col-span-2 rounded-2xl overflow-hidden group">
              <Image 
                src="/fotoo.webp" 
                alt="Foto Bersama" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Keseruan Field Trip ke Taman</p>
              </div>
            </div>

             {/* Foto 5 (Square) */}
             <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image 
                src="/fotoo1.webp" 
                alt="Fasilitas Ruang" 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Ruang Kelas Nyaman & AC</p>
              </div>
            </div>

          </div>

          {/* Tombol Load More (Opsional) */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors">
              Muat Lebih Banyak Foto
            </button>
          </div>

        </div>
      </section>


      {/* --- SECTION 4: CTA FINAL --- */}
      <section className="py-20 bg-yellow-400 relative overflow-hidden">
        {/* Pattern Background Sederhana */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-6">
            Ingin Si Kecil Tampil Ceria Seperti Mereka?
          </h2>
          <p className="text-yellow-900/80 text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan keluarga besar kami. Lingkungan yang suportif adalah kunci kepercayaan diri anak.
          </p>
          <a href="/kontak" className="inline-block px-10 py-4 bg-white text-yellow-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Daftar Sekarang
          </a>
        </div>
      </section>

    </main>
  );
}
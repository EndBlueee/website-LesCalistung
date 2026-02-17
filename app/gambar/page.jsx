import Image from "next/image";

const galleryItems = [
  {
    src: "/galeri/foto-galeri-1.jpeg",
    alt: "Kegiatan Belajar",
  },
  {
    src: "/galeri/foto-galeri-3.jpeg",
    alt: "Main Puzzle",
  },
  {
    src: "/galeri/foto-galeri-4.jpeg",
    alt: "Guru Mengajar",

  },
  {
    src: "/galeri/foto-galeri-5.jpeg",
    alt: "Foto Bersama",

  },
  {
    src: "/galeri/foto-galeri-2.jpeg",
    alt: "Fasilitas Ruang",

  },
  {
    src: "/galeri/foto-galeri-6.webp",
    alt: "Anak Belajar Menulis"
  },
  {
    src: "/galeri/foto-galeri-7.webp",
    alt: "Anak Bermain Edukatif",
  
  },
  {
    src: "/galeri/foto-galeri-10.jpeg",
    alt: "Sesi Kelas Interaktif",
  },
  {
    src: "/galeri/foto-galeri-9.jpeg",
    alt: "Kegiatan Kelompok Anak",
  },
  {
    src: "/galeri/foto-galeri-11.webp",
    alt: "Kegiatan Kelompok Anak",
  },
  {
    src: "/galeri/foto-galeri-12.webp",
    alt: "Kegiatan Kelompok Anak",
  },
  {
    src: "/galeri/foto-galeri-13.webp",
    alt: "Kegiatan Kelompok Anak",
  },
  {
    src: "/galeri/foto-galeri-14.webp",
    alt: "Kegiatan Kelompok Anak",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 font-google">
      <section className="px-4 pb-8 pt-20 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="mb-2 block text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Dokumentasi Kegiatan
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-slate-800 md:text-5xl">
            Galeri <span className="text-yellow-500">Keceriaan</span>
          </h1>
          <p className="text-base text-slate-600 md:text-lg">
            Kumpulan momen belajar, bermain, dan bertumbuh bersama di lingkungan yang hangat.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl p-4 md:p-8">
          <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={`${item.src}-${index}`}
                className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

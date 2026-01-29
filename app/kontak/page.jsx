export default function Kontak() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 text-black font-google">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">Hubungi Kami</h1>
                <div className="mx-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-blue-800 mb-4">Alamat Sekolah</h3>
                            <p className="text=gray-600 mb-2 text-black">Jl. Serua raya, No. 100,<br /> Kecamatan Bojongsari, Depok</p>
                            <p className="text-gray-600">
                                <span className="font-semibold"> Whatshapp:</span> 0895-6357-77179
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold"> Email:</span> calistung@gmail.com
                            </p>
                        </div>
                        <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3021823082613!2d106.73852432848761!3d-6.367027899599789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef43bda87ab7%3A0x27312a285c993087!2sJl.%20H.%20Muhari%2031-52%2C%20Serua%2C%20Kec.%20Bojongsari%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016517!5e0!3m2!1sid!2sid!4v1768553774530!5m2!1sid!2sid"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-blue-600 mb-6">Kirim Pesan</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-600">Nama Orang Tua</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Masukan nama Anda" />
                            </div>
                            <div>
                                <label className="block text-gray-600">Nomor Whatshapp</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="0895xxx" />
                            </div>
                            <div>
                                <label className="block text-gray-600">Pesan / Pertanyaan</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                                    placeholder="Tulisa pesan Anda di sini" >
                                </textarea>
                            </div>
                            <button
                            type="button"
                            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Kenapa Memilih Raudhatul Ilmi</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mt-2 mb-4">
              Lebih Dari Sekedar Les, Sehangat Sekolah
            </h2>
            <p className="text-gray-600 text-lg">
              Kami mengkombinasikan fokus akademik privat dengan lingkungan sosial sekolah yang menyenangkan untuk tumbuh kembang optimal.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-blue-600 group-hover:text-white transition">
                🔍
              </div>
              <h3 className="text-xl font-bold text-blue-900 mt-3">Fokus & Intensif</h3>
              <p className="text-gray-600 leading-relaxed">
                Kelas kecil (Max 1:10). Guru lebih fokus memperhatikan perkembangan bakat dan kesulitan setiap anak secara personal.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-orange-600 group-hover:text-white transition">
                🎓
              </div>
              <h3 className="text-xl font-bold text-blue-900 mt-3">Garansi Siap SD</h3>
              <p className="text-gray-600 leading-relaxed">
                Kurikulum terstruktur agar anak lancar membaca, menulis dan berhitung tanpa beban, sebagai fondasi kuat menuju SD.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-pink-600 group-hover:text-white transition">
                🥰
              </div>
              <h3 className="text-xl font-bold text-blue-900 mt-3">lingkungan Ceria</h3>
              <p className="text-gray-600 leading-relaxed">
                Tetap Merasakan serunya sekolah. Ada senam pagi, dan bermain bersama teman untuk melatih sosial.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:translate-y-2 transition duration-300 group">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:bg-green-600 group-hover:text-white transition">
                🕌
              </div>
              <h3 className="text-xl font-bold text-blue-900 mt-3">Karakter Islami</h3>
              <p className="text-gray-600 leading-relaxed">
                Pembiasaan doa harian, adab sopan santun, dan hafalan surat pendek sejak usia dini.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Rutinitas Harian</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jadwal yang padat namun menyenangkan. 2 jam yang efektif untuk membangun kecerdasan intelektual dan spiritual.
            </p>
          </div>

          {/* Container Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Garis Tengah (Hanya muncul di Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* --- ITEM 1: SESI PERTAMA --- */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24">
              {/* Bagian Kiri (Teks di Desktop) */}
              <div className="order-2 md:order-1 w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-md border border-gray-100 md:text-right">
                <span className="inline-block bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full mb-2">
                  08.00 - 09.00 WIB
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Fokus Akademik (Calistung)</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dimulai dengan baris-berbaris dan doa pagi. Dilanjutkan sesi privat membaca, menulis, dan berhitung bersama guru. 
                  Otak anak masih segar untuk menyerap materi baru.
                </p>
              </div>

              {/* Ikon Tengah */}
              <div className="order-1 md:order-2 z-10 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-4 md:mb-0">
                <span className="text-2xl">🧠</span>
              </div>

              {/* Bagian Kanan (Kosong di Desktop agar Zigzag) */}
              <div className="order-3 w-full md:w-5/12"></div>
            </div>

            {/* --- ITEM 2: SESI KEDUA --- */}
            <div className="relative flex flex-col md:flex-row items-center justify-between">
              {/* Bagian Kiri (Kosong di Desktop) */}
              <div className="order-2 md:order-1 w-full md:w-5/12"></div>

              {/* Ikon Tengah */}
              <div className="order-1 md:order-2 z-10 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-4 md:mb-0">
                <span className="text-2xl">🎨</span>
              </div>

              {/* Bagian Kanan (Teks di Desktop) */}
              <div className="order-3 w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-left">
                <span className="inline-block bg-orange-100 text-orange-700 text-sm font-bold px-3 py-1 rounded-full mb-2">
                  09.00 - 10.00 WIB
                </span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Fun & Spiritual</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Istirahat makan bekal bersama (melatih adab makan). Dilanjutkan dengan Mengaji (Iqra), hafalan surat pendek, 
                  aktivitas kreativitas (mewarnai/kerajinan), dan doa pulang.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      
        </div>
    )
}
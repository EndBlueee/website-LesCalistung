import Image from "next/image";

export default function Profil() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 text-black">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                    Tentang Kami
                </h1>
                
                <div className="w-full space-y-4 mt-10 px-6">

                    <div className="flex justify-between items-center max-w-7xl mx-auto mt-20">
                        <div className="relative w-full md:w-1/3 aspect-square">
                            <Image
                                src="/foto2.webp"
                                alt="foto"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="space-y-4 flex flex-col items-start justify-between pb-10">

                            <h2 className="text-3xl font-bold text-blue-800">
                                Sejarah Raudhatul Ilmi
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-2xl">
                                Didirikan pada tahun 2010, Les Calistung Raudhatul Ilmi bermula dari sebuah visi untuk menciptakan lingkungan belajar yang menyenangkan bagi anak-anak. Dengan pendekatan yang inovatif dan berfokus pada perkembangan holistik, kami telah membantu ribuan anak mengembangkan keterampilan dasar mereka dalam membaca, menulis, dan berhitung. Seiring berjalannya waktu, kami terus beradaptasi dengan metode pembelajaran terbaru untuk memastikan bahwa setiap anak mendapatkan pengalaman belajar yang terbaik.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center max-w-7xl mx-auto mt-20">
                        <div className="space-y-4 flex flex-col items-start justify-between pb-10">

                            <h2 className="text-3xl font-bold text-blue-800">
                                Visi & Misi
                            </h2>
                            <ul className="list-disc list0inside text-gray-600 space-y-2">
                                <li>Mencetak Generasi yang cerdas secara Intelektual dan spiritual.</li>
                                <li>Menyediakan lingkungan belajar yang aman, nyaman, dan menyenangkan.</li>
                                <li>Mengembangkan bakat dan minat anak sejak usia dini.</li>
                            </ul>
                        </div>
                        <div className="relative w-full md:w-1/3 aspect-square">
                            <Image
                                src="/foto2.webp"
                                alt="foto"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
}
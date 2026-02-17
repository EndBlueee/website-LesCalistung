"use client";

import React, { useEffect, useState } from "react"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import FadeIn from "@/components/fadein";
import { StaggerContainer, StaggerItem } from "@/components/staggerwrapper";

export default function pendaftaran() {
    const searchParams = useSearchParams();
    // REVISI STATE: Memecah tempat dan tanggal lahir agar lebih rapi
    const [regData, setRegData] = useState({
        namaSiswa: "",
        jenisKelamin: "",
        tempatLahir: "",    // Baru
        tanggalLahir: "",   // Baru
        whatsapp: "",
        namaOrtu: "",
        alamat: ""
    });
    const [regErrors, setRegErrors] = useState({});

    const [privatData, setPrivatData] = useState({
        namaSiswa: "",
        whatsappOrtu: "",
        program: "",
        paket: "",
        alamat: ""
    });
    const [privatErrors, setPrivatErrors] = useState({});

    const waNumber = "6283806184245"; // Ganti dengan nomor Admin yang benar

    // Config Harga Paket Les Privat
    const paketPrices = {
        "2x": 300000,
        "3x": 400000,
        "4x": 500000
    };
    const paketLabels = {
        "2x": "2x per minggu (8 sesi/bulan)",
        "3x": "3x per minggu (12 sesi/bulan)",
        "4x": "4x per minggu (16 sesi/bulan)"
    };

    // Config Gelombang Sekolah Reguler
    const gelombangConfig = [
        {
            id: 1,
            range: "Jan - Feb",
            diskon: 10
        },
        {
            id: 2,
            range: "Mar - Apr",
            diskon: 3
        },
        {
            id: 3,
            range: "Mei - Jun",
            diskon: 0
        }
    ];

    // Config Harga Normal (Pendaftaran sudah termasuk semua item)
    const normalPrice = 900000;
    const rincianItems = [
        "SPP Bulan Juli",
        "Seragam",
        "Buku Tabungan",
        "Buku Baca"
    ];

    // Logika Penentuan Gelombang Otomatis
    const currentMonth = new Date().getMonth(); // 0=Jan
    const currentGelombang =
        currentMonth <= 1
            ? gelombangConfig[0]
            : currentMonth <= 3
                ? gelombangConfig[1]
                    : gelombangConfig[2];

    const formatRupiah = (value) => `Rp ${value.toLocaleString("id-ID")}`;
    
    const gelombangBadgeClass =
        currentGelombang.id === 1
            ? "bg-green-500"
            : currentGelombang.id === 2
                ? "bg-orange-500"
                : "bg-blue-500";

    const diskonNominalDisplay = Math.round((normalPrice * currentGelombang.diskon) / 100);
    const totalBiayaDisplay = normalPrice - diskonNominalDisplay;

    const handleRegChange = (key) => (e) => {
        const value = e.target.value;
        setRegData((prev) => ({ ...prev, [key]: value }));
        setRegErrors((prev) => ({ ...prev, [key]: value ? "" : prev[key] }));
    };

    const handlePrivatChange = (key) => (e) => {
        const value = e.target.value;
        setPrivatData((prev) => ({ ...prev, [key]: value }));
        setPrivatErrors((prev) => ({ ...prev, [key]: value ? "" : prev[key] }));
    };

    useEffect(() => {
        const paket = searchParams.get("paket");
        if (paket && ["2x", "3x", "4x"].includes(paket)) {
            setPrivatData((prev) => ({ ...prev, paket }));
        }
    }, [searchParams]);

    const buildWaLink = (message) => {
        // encodeURIComponent penting agar spasi dan enter terbaca di WA
        return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    };

    // --- REVISI LOGIKA KIRIM WA SEKOLAH REGULER ---
    const handleRegSubmit = () => {
        const errors = {};
        if (!regData.namaSiswa) errors.namaSiswa = "Nama siswa wajib diisi.";
        if (!regData.jenisKelamin) errors.jenisKelamin = "Jenis kelamin wajib dipilih.";
        if (!regData.tempatLahir) errors.tempatLahir = "Tempat lahir wajib diisi.";
        if (!regData.tanggalLahir) errors.tanggalLahir = "Tanggal lahir wajib diisi.";
        if (!regData.whatsapp) errors.whatsapp = "No. WhatsApp wajib diisi.";
        if (!regData.namaOrtu) errors.namaOrtu = "Nama wali wajib diisi.";
        if (!regData.alamat) errors.alamat = "Alamat wajib diisi.";

        setRegErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const diskonNominal = diskonNominalDisplay;
        const totalBiaya = totalBiayaDisplay;
        
        // Format Tanggal Lahir agar enak dibaca
        const formattedDate = regData.tanggalLahir ? new Date(regData.tanggalLahir).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) : "-";

        let text = `Halo Admin, saya ingin mendaftarkan siswa baru untuk *Kelas Reguler*. Mohon dicek datanya:\n\n`;
        
        text += `📋 *BIODATA SISWA*\n`;
        text += `Nama: ${regData.namaSiswa || "-"}\n`;
        text += `L/P: ${regData.jenisKelamin || "-"}\n`;
        text += `TTL: ${regData.tempatLahir || "-"}, ${formattedDate}\n`; // Gabungan Tempat & Tanggal
        
        text += `👤 *DATA ORANG TUA*\n`;
        text += `Nama Wali: ${regData.namaOrtu || "-"}\n`;
        text += `WA: ${regData.whatsapp || "-"}\n`;
        text += `Alamat: ${regData.alamat || "-"}\n\n`;

        text += `💰 *RINCIAN BIAYA (Gelombang ${currentGelombang.id})*\n`;
        text += `*TOTAL: ${formatRupiah(totalBiaya)}*\n\n`;

        text += `Mohon dikirimkan *Nomor Rekening* untuk penyelesaian pembayaran tersebut. Terima kasih. 🙏`;

        window.open(buildWaLink(text), "_blank");
    };

    // --- REVISI LOGIKA KIRIM WA LES PRIVAT ---
    const handlePrivatSubmit = () => {
        const errors = {};
        if (!privatData.namaSiswa) errors.namaSiswa = "Nama siswa wajib diisi.";
        if (!privatData.whatsappOrtu) errors.whatsappOrtu = "No. WhatsApp wajib diisi.";
        if (!privatData.program) errors.program = "Program wajib dipilih.";
        if (!privatData.paket) errors.paket = "Paket wajib dipilih.";
        if (!privatData.alamat) errors.alamat = "Alamat wajib diisi.";

        setPrivatErrors(errors);
        if (Object.keys(errors).length > 0) return;

        const paketLabel = paketLabels[privatData.paket] || "-";
        
        let text = `Halo Kak, saya berminat daftar *Les Privat* ke rumah. 👇\n\n`;
    
        text += `👤 *DATA SISWA*\n`;
        text += `Nama: ${privatData.namaSiswa || "-"}\n`;
        text += `WA Ortu: ${privatData.whatsappOrtu || "-"}\n`;
        text += `📍 Lokasi: ${privatData.alamat || "-"}\n\n`;

        text += `📦 *PAKET YANG DIAMBIL*\n`;
        text += `• Program: ${privatData.program || "-"}\n`;
        text += `• Pilihan: *${paketLabel}*\n\n`;

        text += `💰 *PEMBAYARAN*\n`;
        text += `Mohon info *Total Harga* untuk paket tersebut.\n`;
        text += `Jika jadwal guru tersedia, mohon kirimkan *Nomor Rekening* untuk pembayaran paketnya. Terima kasih. 🙏`;

        window.open(buildWaLink(text), "_blank");
    };

    return (
        <main className="font-google">
            {/* --- Bagian Banner --- */}
            <section>
                <FadeIn duration={0.9}>
                    <div className="relative w-full h-64 md:h-110 mb-12">
                        <Image
                            src="/daftar/foto-pendaftaran-1.webp"
                            alt="Banner Profil"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 text-center px-4">
                            <h1 className="text-white text-3xl md:text-5xl font-semibold font-google leading-tight">Pendaftaran</h1>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* --- Bagian Alur Pendaftaran (Responsive) --- */}
            <section className="py-10 md:py-20">
                <div className="mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="mb-8 md:mb-16 text-center">
                            <h1 className="text-gray-800 font-bold text-2xl md:text-4xl">Alur Pendaftaran Didik Baru</h1>
                        </div>
                    </FadeIn>
                    
                    {/* Container Alur: Vertikal di HP, Horizontal di Desktop */}
                    <div className="relative flex flex-col md:flex-row justify-between items-start w-full gap-6 md:gap-2">

                        {/* Garis Horizontal (Desktop Only) */}
                        <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-blue-600 -translate-y-1/2 -z-10 rounded-full"></div>

                        {/* Garis Vertikal (Mobile Only) */}
                        <div className="block md:hidden absolute left-1/2 top-6 bottom-6 w-1 bg-blue-600 -translate-x-1/2 -z-10 rounded-full"></div>

                        {/* --- Item 1: Pendaftaran --- */}
                        <StaggerItem className="flex flex-col items-center md:items-center w-full md:w-auto z-10">
                            {/* Tampilan Mobile (Grid Kiri-Tengah-Kanan) */}
                            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-6 md:hidden">
                                <div className="text-right">
                                    <h1 className="text-gray-800 font-bold text-base">Pendaftaran</h1>
                                    <p className="text-gray-600 text-sm mt-1">Isi formulir biodata.</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0 justify-self-center"></div>
                                <div></div>
                            </div>
                            
                            {/* Tampilan Desktop */}
                            <div className="hidden md:flex h-32 w-full items-end justify-center pb-4"></div>
                            <div className="hidden md:block w-15 h-15 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0"></div>
                            <div className="hidden md:flex h-32 w-full items-start justify-center pt-4">
                                <div className="text-center w-40">
                                    <h1 className="text-gray-800 font-bold text-sm">Pendaftaran</h1>
                                    <p className="text-gray-600 text-xs mt-1">Isi formulir biodata.</p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* --- Item 2: Observasi --- */}
                        <StaggerItem className="flex flex-col items-center md:items-center w-full md:w-auto z-10 mt-0">
                             {/* Mobile */}
                            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-6 md:hidden">
                                <div></div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0 justify-self-center"></div>
                                <div className="text-left">
                                    <h1 className="text-gray-800 font-bold text-base">Observasi</h1>
                                    <p className="text-gray-600 text-sm mt-1">Bertemu guru & psikolog.</p>
                                </div>
                            </div>

                            {/* Desktop */}
                            <div className="hidden md:flex h-32 w-full items-end justify-center pb-4">
                                <div className="text-center w-40">
                                    <h1 className="text-gray-800 font-bold text-base">Observasi</h1>
                                    <p className="text-gray-600 text-sm mt-1">Bertemu guru & psikolog.</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-15 h-15 bg-white rounded-full border-4 border-blue-600 shadow-md z-10 shrink-0"></div>
                            <div className="hidden md:flex h-32 w-full items-start justify-center pt-4"></div>
                        </StaggerItem>

                        {/* --- Item 3: Administrasi --- */}
                        <StaggerItem className="flex flex-col items-center md:items-center w-full md:w-auto z-10 mt-0">
                            {/* Mobile */}
                            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-6 md:hidden">
                                <div className="text-right">
                                    <h1 className="text-gray-800 font-bold text-base">Administrasi</h1>
                                    <p className="text-gray-600 text-sm mt-1">Pembayaran SPP awal.</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0 justify-self-center"></div>
                                <div></div>
                            </div>
                            {/* Desktop */}
                            <div className="hidden md:flex h-32 w-full items-end justify-center pb-4"></div>
                            <div className="hidden md:block w-15 h-15 bg-white rounded-full border-4 border-blue-600 shadow-md z-10 shrink-0"></div>
                            <div className="hidden md:flex h-32 w-full items-start justify-center pt-4">
                                <div className="text-center w-40">
                                    <h1 className="text-gray-800 font-bold text-base">Administrasi</h1>
                                    <p className="text-gray-600 text-sm mt-1">Pembayaran SPP awal.</p>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* --- Item 4: Seragam --- */}
                        <StaggerItem className="flex flex-col items-center md:items-center w-full md:w-auto z-10 mt-0">
                            {/* Mobile */}
                            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-6 md:hidden">
                                <div></div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0 justify-self-center"></div>
                                <div className="text-left">
                                    <h1 className="text-gray-800 font-bold text-base">Seragam</h1>
                                    <p className="text-gray-600 text-sm mt-1">Pengukuran baju.</p>
                                </div>
                            </div>
                             {/* Desktop */}
                            <div className="hidden md:flex h-32 w-full items-end justify-center pb-4">
                                <div className="text-center w-40">
                                    <h1 className="text-gray-800 font-bold text-base">Seragam</h1>
                                    <p className="text-gray-600 text-sm mt-1">Pengukuran baju.</p>
                                </div>
                            </div>
                            <div className="hidden md:block w-15 h-15 bg-white rounded-full border-4 border-blue-600 shadow-md z-10 shrink-0"></div>
                            <div className="hidden md:flex h-32 w-full items-start justify-center pt-4"></div>
                        </StaggerItem>

                        {/* --- Item 5: Resmi Siswa --- */}
                        <StaggerItem className="flex flex-col items-center md:items-center w-full md:w-auto z-10 mt-0">
                            {/* Mobile */}
                            <div className="grid w-full grid-cols-[1fr_auto_1fr] items-start gap-6 md:hidden">
                                <div className="text-right">
                                    <h1 className="text-gray-800 font-bold text-base">Resmi Siswa</h1>
                                    <p className="text-gray-600 text-sm mt-1">Selamat bergabung!</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-md shrink-0 justify-self-center"></div>
                                <div></div>
                            </div>
                            {/* Desktop */}
                            <div className="hidden md:flex h-32 w-full items-end justify-center pb-4"></div>
                            <div className="hidden md:block w-15 h-15 bg-white rounded-full border-4 border-blue-600 shadow-md z-10 shrink-0"></div>
                            <div className="hidden md:flex h-32 w-full items-start justify-center pt-4">
                                <div className="text-center w-40">
                                    <h1 className="text-gray-800 font-bold text-base">Resmi Siswa</h1>
                                    <p className="text-gray-600 text-sm mt-1">Selamat bergabung!</p>
                                </div>
                            </div>
                        </StaggerItem>

                    </div>
                </div>
            </section>

            {/* --- Syarat & Ketentuan --- */}
            <section className="py-10 md:py-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="h-auto bg-blue-700 shadow-lg rounded-lg flex flex-col md:flex-row justify-between overflow-hidden relative p-6 md:p-10">
                        <div className="flex-1">
                            <h2 className="text-white font-bold text2xl md:text-4xl mb-4 md:mb-6">Persyaratan & Ketentuan</h2>
                            <ol className="list-decimal pl-5 space-y-2 md:space-y-4 text-sm md:text-base">
                                <li className="text-white">Akta Kelahiran: 1 Lembar Fotokopi.</li>
                                <li className="text-white">Kartu Keluarga (KK): 1 Lembar Fotokopi.</li>
                                <li className="text-white">KTP Orang Tua: 1 Lembar Fotokopi KTP Ayah & Ibu.</li>
                                <li className="text-white">Pas Foto: 2 Lembar ukuran 3x4</li>
                            </ol>
                        </div>
                        <BsFillFileEarmarkTextFill size={120} className="hidden md:block relative top-10 left-0 text-white/70 shrink-0" />
                    </div>
                </div>
            </section>

            {/* --- Gelombang Pendaftaran --- */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-8 md:mb-16">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Gelombang Pendaftaran</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        <div className="text-white rounded-lg shadow-lg p-6 md:p-8 bg-green-500">
                            <h1 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-5 text-center">Gelombang 1</h1>
                            <p className="text-white text-xl md:text-2xl text-center font-semibold">Januari - Februari <span>Disk 10%</span></p>
                        </div>
                        <div className="text-white rounded-lg shadow-lg p-6 md:p-8 bg-orange-500">
                            <h1 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-5 text-center">Gelombang 2</h1>
                            <p className="text-white text-xl md:text-2xl text-center font-semibold">Maret - April <span>Disk 3% </span></p>
                        </div>
                        <div className="text-white rounded-lg shadow-lg p-6 md:p-8 bg-blue-500">
                            <h1 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-5 text-center">Gelombang 3</h1>
                            <p className="text-white text-xl md:text-2xl text-center font-semibold">Mei - Juni <span>Harga Normal</span></p>
                        </div>
                        
                    </div>
                </div>
            </section>
            
            {/* --- Form Pendaftaran Kelas Reguler --- */}
            <section id="form-kelas-reguler" className="py-10 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-6 md:mb-10 text-center">
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
                            Form Pendaftaran Kelas Reguler
                        </h1>
                    </div>

                    <div className="border border-gray-300 rounded-xl p-6 md:p-10 shadow-sm">

                        {/* REVISI: Header Rincian Biaya */}
                        <div className="text-black mb-6 border-b pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <h2 className="text-lg md:text-2xl font-bold">Rincian Biaya (Estimasi Awal)</h2>
                            <span className={`${gelombangBadgeClass} text-white px-3 py-1 rounded-full text-sm font-semibold w-fit`}>
                                Gelombang {currentGelombang.id}
                            </span>
                        </div>

                        {/* REVISI: Tampilan Biaya sebagai KARTU STATIS (Bukan Input) */}
                        <div className="grid grid-cols-1 gap-4 md:gap-5 mb-8 md:mb-10">
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex flex-col justify-center text-center">
                                <span className="text-gray-500 text-sm mb-1">Total Bayar</span>
                                <span className="text-gray-800 font-bold text-lg">{formatRupiah(totalBiayaDisplay)}</span>
                                <span className="text-gray-500 text-xs mt-1">Periode {currentGelombang.range}</span>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Rincian yang sudah termasuk:</h3>
                            <div className="flex flex-wrap gap-2">
                                {rincianItems.map((item) => (
                                    <span
                                        key={item}
                                        className="text-xs md:text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="text-black mb-4 md:mb-6">
                            <h2 className="text-lg md:text-2xl font-bold">Data Diri Siswa</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Nama Lengkap Siswa</label>
                                <input
                                    type="text"
                                    placeholder="Nama sesuai akta"
                                    value={regData.namaSiswa}
                                    onChange={handleRegChange("namaSiswa")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${regErrors.namaSiswa ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                />
                                {regErrors.namaSiswa && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.namaSiswa}</p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Jenis Kelamin</label>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 h-12.5">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="jenis_kelamin"
                                            value="Laki-laki"
                                            checked={regData.jenisKelamin === "Laki-laki"}
                                            onChange={handleRegChange("jenisKelamin")}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        <span className="text-gray-800">Laki-Laki</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="jenis_kelamin"
                                            value="Perempuan"
                                            checked={regData.jenisKelamin === "Perempuan"}
                                            onChange={handleRegChange("jenisKelamin")}
                                            className="w-4 h-4 cursor-pointer"
                                        />
                                        <span className="text-gray-800">Perempuan</span>
                                    </label>
                                </div>
                                {regErrors.jenisKelamin && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.jenisKelamin}</p>
                                )}
                            </div>
                            
                            {/* REVISI: TTL Dipecah jadi 2 Input */}
                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Tempat Lahir</label>
                                <input
                                    type="text"
                                    placeholder="Contoh: Jakarta"
                                    value={regData.tempatLahir}
                                    onChange={handleRegChange("tempatLahir")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${regErrors.tempatLahir ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                />
                                {regErrors.tempatLahir && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.tempatLahir}</p>
                                )}
                            </div>
                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    value={regData.tanggalLahir}
                                    onChange={handleRegChange("tanggalLahir")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${regErrors.tanggalLahir ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                />
                                {regErrors.tanggalLahir && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.tanggalLahir}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">No. WhatsApp Aktif</label>
                                <input
                                    type="tel"
                                    placeholder="08123456789"
                                    value={regData.whatsapp}
                                    onChange={handleRegChange("whatsapp")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none bg-gray-50 focus:bg-white transition-all ${regErrors.whatsapp ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                />
                                {regErrors.whatsapp && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.whatsapp}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Nama Lengkap Orang Tua</label>
                                <input
                                    type="text"
                                    placeholder="Nama orang tua/wali"
                                    value={regData.namaOrtu}
                                    onChange={handleRegChange("namaOrtu")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${regErrors.namaOrtu ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                />
                                {regErrors.namaOrtu && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.namaOrtu}</p>
                                )}
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Alamat Tempat Tinggal</label>
                                <textarea
                                    placeholder="Tuliskan alamat lengkap..."
                                    value={regData.alamat}
                                    onChange={handleRegChange("alamat")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none h-32 bg-gray-50 focus:bg-white transition-all resize-none ${regErrors.alamat ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-blue-500"}`}
                                ></textarea>
                                {regErrors.alamat && (
                                    <p className="text-red-600 text-xs mt-1">{regErrors.alamat}</p>
                                )}
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
                            <button
                                type="button"
                                onClick={handleRegSubmit}
                                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Form Pendaftaran Les Privat --- */}
            <section id="les-privat" className="py-10 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="mb-6 md:mb-10 text-center">
                        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
                            Form Pendaftaran Les Privat
                        </h1>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 shadow-sm">
                        <div className="text-black mb-4 md:mb-6 border-b pb-3 md:pb-4">
                            <h2 className="text-lg md:text-2xl font-bold">Data Pendaftaran</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6">
                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Nama Lengkap Siswa</label>
                                <input
                                    type="text"
                                    placeholder="Masukan Nama"
                                    value={privatData.namaSiswa}
                                    onChange={handlePrivatChange("namaSiswa")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${privatErrors.namaSiswa ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"}`}
                                />
                                {privatErrors.namaSiswa && (
                                    <p className="text-red-600 text-xs mt-1">{privatErrors.namaSiswa}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">No. WhatsApp Orang Tua</label>
                                <input
                                    type="tel"
                                    placeholder="Masukan No. WhatsApp"
                                    value={privatData.whatsappOrtu}
                                    onChange={handlePrivatChange("whatsappOrtu")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none transition-all bg-gray-50 focus:bg-white ${privatErrors.whatsappOrtu ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"}`}
                                />
                                {privatErrors.whatsappOrtu && (
                                    <p className="text-red-600 text-xs mt-1">{privatErrors.whatsappOrtu}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Program</label>
                                <select
                                    value={privatData.program}
                                    onChange={handlePrivatChange("program")}
                                    className={`py-3 px-4 border rounded-lg bg-white focus:ring-2 outline-none cursor-pointer text-gray-800 ${privatErrors.program ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
                                >
                                    <option value="">Pilih Program</option>
                                    <option value="calistung">Calistung (Baca, Tulis, Hitung)</option>
                                    <option value="mengaji">Mengaji (Iqro & Al-Qur'an)</option>
                                    <option value="sd">Mapel SD (Semua Mata Pelajaran)</option>
                                </select>
                                {privatErrors.program && (
                                    <p className="text-red-600 text-xs mt-1">{privatErrors.program}</p>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Pilih Paket Les Privat</label>
                                <select
                                    value={privatData.paket}
                                    onChange={handlePrivatChange("paket")}
                                    className={`py-3 px-4 border rounded-lg bg-white focus:ring-2 outline-none cursor-pointer text-gray-800 ${privatErrors.paket ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-orange-500"}`}
                                >
                                    <option value="">Pilih Paket</option>
                                    <option value="2x">2x per minggu (8 sesi/bulan) - Rp 300.000</option>
                                    <option value="3x">3x per minggu (12 sesi/bulan) - Rp 400.000</option>
                                    <option value="4x">4x per minggu (16 sesi/bulan) - Rp 500.000</option>
                                </select>
                                {privatErrors.paket && (
                                    <p className="text-red-600 text-xs mt-1">{privatErrors.paket}</p>
                                )}
                            </div>

                            <div className="flex flex-col md:col-span-2">
                                <label className="font-semibold mb-2 text-sm text-gray-700">Alamat Tempat Tinggal</label>
                                <textarea
                                    placeholder="Tuliskan alamat lengkap..."
                                    value={privatData.alamat}
                                    onChange={handlePrivatChange("alamat")}
                                    className={`text-gray-800 py-3 px-4 border rounded-lg focus:ring-2 outline-none h-32 transition-all resize-none bg-gray-50 focus:bg-white ${privatErrors.alamat ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300 focus:ring-orange-500 focus:border-orange-500"}`}
                                ></textarea>
                                {privatErrors.alamat && (
                                    <p className="text-red-600 text-xs mt-1">{privatErrors.alamat}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
                            <button
                                type="button"
                                onClick={handlePrivatSubmit}
                                className="w-full sm:w-auto px-6 md:px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition duration-300"
                            >
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

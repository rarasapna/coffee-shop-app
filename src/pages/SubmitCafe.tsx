// src/pages/SubmitCafe.tsx
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function SubmitCafe() {
    const [formData, setFormData] = useState({
        cafeName: '',
        location: '',
        description: '',
        yourName: '',
        email: '',
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('sending');

        try {
            await emailjs.sendForm(
                'service_by7c1nl',          // ← ganti dengan Service ID real
                'template_egqw81f',         // ← ganti dengan Template ID real
                formRef.current!,
                'Q7ARZHI1Fqiy_dKhF'        // ← ganti dengan Public Key real (dari Account → API Keys)
            );

            setSubmitStatus('success');
            // Reset form setelah sukses
            setTimeout(() => {
                setFormData({
                    cafeName: '',
                    location: '',
                    description: '',
                    yourName: '',
                    email: '',
                });
            }, 4000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Rekomendasikan Kafe Favoritmu di Bali
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Bantu kami tambahkan spot ngopi terbaik! Isi form di bawah, tim NgopiKuy akan review dan tambahkan ke daftar.
                    </p>
                </div>

                {/* Form */}
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800/50 shadow-2xl">
                    {/* Nama Kafe */}
                    <div>
                        <label htmlFor="cafeName" className="block text-lg font-medium text-gray-200 mb-3">
                            Nama Kafe *
                        </label>
                        <input
                            type="text"
                            id="cafeName"
                            name="cafeName"
                            value={formData.cafeName}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
                            placeholder="Contoh: Revolver Espresso"
                        />
                    </div>

                    {/* Lokasi */}
                    <div>
                        <label htmlFor="location" className="block text-lg font-medium text-gray-200 mb-3">
                            Lokasi / Area *
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
                            placeholder="Contoh: Canggu, Pererenan, Ubud, Uluwatu"
                        />
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label htmlFor="description" className="block text-lg font-medium text-gray-200 mb-3">
                            Deskripsi Singkat / Alasan Rekomendasi *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={5}
                            required
                            className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
                            placeholder="Ceritakan kenapa kafe ini spesial, vibe-nya, menu andalan, dll..."
                        />
                    </div>

                    {/* Nama & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="yourName" className="block text-lg font-medium text-gray-200 mb-3">
                                Nama Kamu *
                            </label>
                            <input
                                type="text"
                                id="yourName"
                                name="yourName"
                                value={formData.yourName}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
                                placeholder="Nama panggilan atau nama asli"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-3">
                                Email (untuk konfirmasi) *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#1e1e1e] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 transition"
                                placeholder="email@kamu.com"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={submitStatus === 'sending'}
                        className={`w-full py-5 rounded-full font-bold text-lg transition shadow-lg
              ${submitStatus === 'sending'
                                ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                                : 'bg-amber-500 hover:bg-amber-400 text-black'}`}
                    >
                        {submitStatus === 'sending' ? 'Sedang Mengirim...' : 'Kirim Rekomendasi Kafe'}
                    </button>

                    {/* Status Message */}
                    {submitStatus === 'success' && (
                        <div className="text-center text-green-400 font-medium text-lg mt-4">
                            Terima kasih banyak! Rekomendasi kamu sudah terkirim ☕ Kami akan review secepatnya.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className="text-center text-red-400 font-medium text-lg mt-4">
                            Maaf, ada masalah saat mengirim. Coba lagi atau hubungi kami via Instagram.
                        </div>
                    )}
                </form>

                {/* Kembali ke Home */}
                <div className="text-center mt-12">
                    <Link
                        to="/"
                        className="text-amber-400 hover:text-amber-300 font-medium text-lg transition"
                    >
                        ← Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SubmitCafe;
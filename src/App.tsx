// src/App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { cafes } from './data/cafeData';
import CafeDetail from './pages/CafeDetail';
import type { Cafe } from './data/cafeData';
import SubmitCafe from './pages/SubmitCafe';
import { motion, AnimatePresence } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

// Reusable Cafe Card
function CafeCard({ cafe }: { cafe: Cafe }) {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/cafe/${cafe.id}`)}
      className="group bg-[#111] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
    >
      <div className="h-64 overflow-hidden relative">
        <motion.img
          src={cafe.image}
          alt={cafe.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          ⭐ {cafe.rating}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition">
          {cafe.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 flex items-center gap-1">
          📍 {cafe.location}
        </p>

        <div className="flex flex-wrap gap-2">
          {cafe.tags.map(tag => (
            <span
              key={tag}
              className="text-xs bg-[#1e1e1e] px-3 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {cafe.priceRange && (
          <p className="mt-4 text-sm text-amber-400">
            {cafe.priceRange} • {cafe.vibe || 'Cozy & Chill'}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Home
function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearch, setDebouncedSearch] = useState<string>('');
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchQuery), 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const query = debouncedSearch.toLowerCase().trim();

  const filteredCafes = cafes.filter(cafe => {
    if (!query) return true;

    const searchableText = `
      ${cafe.name}
      ${cafe.location}
      ${cafe.vibe ?? ''}
      ${cafe.shortDesc ?? ''}
      ${cafe.tags.join(' ')}
    `.toLowerCase();

    return searchableText.includes(query);
  });

  const startIndex = page * ITEMS_PER_PAGE;
  const visibleCafes = filteredCafes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filteredCafes.length / ITEMS_PER_PAGE);

  useEffect(() => {
    setPage(0);
  }, [debouncedSearch]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="relative min-h-screen bg-[#0a0a0a] flex items-center">

        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.15 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-[#f8f5f2] text-[#2d1f1a] rounded-3xl border border-white/10 shadow-2xl grid md:grid-cols-2 gap-12 px-10 py-9">

            <div className="flex flex-col justify-center">

              <motion.p variants={fadeUp} className="text-sm tracking-widest text-amber-600 mb-4">
                BALI COFFEE GUIDE
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
              >
                Discover Your
                Perfect Coffee Escape
              </motion.h1>

              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-10 max-w-md">
                Dari hidden gems sampai café ikonik, temukan spot ngopi terbaik
                di Bali sesuai vibe & mood kamu.
              </motion.p>

              <motion.div variants={fadeUp} className="flex gap-10 text-sm text-gray-500 py-8">
                <div>
                  <p className="text-2xl font-semibold text-[#2d1f1a]">50+</p>
                  <p>Cafés Curated</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#2d1f1a]">8 Areas</p>
                  <p>Across Bali</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-[#2d1f1a]">Real Reviews</p>
                  <p>No Paid Listings</p>
                </div>
              </motion.div>

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const section = document.getElementById("cafes");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#2d1f1a] text-white px-10 py-4 rounded-full shadow-lg"
              >
                Explore Cafés →
              </motion.button>
            </div>

            {/* Collage */}
            <motion.div variants={fadeUp} className="relative hidden md:flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                <img src="/1.jpg" className="absolute top-0 left-10 w-40 rounded-2xl shadow-lg" />
                <img src="/2.jpg" className="absolute top-20 right-0 w-48 rounded-2xl shadow-xl" />

                <img src="/3.jpg" className="absolute bottom-10 left-0 w-44 rounded-2xl shadow-md" />
                <img src="/4.jpg" className="absolute bottom-0 right-10 w-36 rounded-2xl shadow-lg" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* LIST */}
      <section id="cafes" className="max-w-7xl mx-auto px-6 py-24">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Curated Cafés in Bali
          </h2>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Cari kafe, lokasi, vibe..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-[#1e1e1e] px-5 py-3 pl-10 pr-12 rounded-full border border-gray-700 focus:outline-none focus:border-amber-500"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleCafes.map(cafe => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {filteredCafes.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center gap-6 mt-16">

            <button
              onClick={() => setPage(p => Math.max(p - 1, 0))}
              className="text-gray-400 hover:text-white transition"
            >
              ← Prev
            </button>

            <button
              onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))}
              className="text-amber-400 hover:text-amber-300 transition"
            >
              Next →
            </button>

          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#e9dfd7] py-24 text-center text-[#2d1f1a]">
        <h2 className="text-3xl font-bold mb-6">
          Punya Rekomendasi Kafe Favorit?
        </h2>

        <Link
          to="/submit-cafe"
          className="inline-block bg-amber-600 px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          Submit Kafe →
        </Link>
      </section>

      <footer className="bg-black py-10 text-center text-gray-500 text-sm">
        © 2026 NgopiKuy — Bali Coffee Guide
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cafe/:id" element={<CafeDetail />} />
      <Route path="/submit-cafe" element={<SubmitCafe />} />
    </Routes>
  );
}

export default App;

import { useParams } from 'react-router-dom';
import { cafes } from '../data/cafeData';

function CafeDetail() {
  const { id } = useParams<{ id: string }>();
  const cafe = cafes.find(c => c.id === Number(id));

  if (!cafe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white text-2xl font-medium">
        Cafe tidak ditemukan
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="group mb-10 inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors duration-200"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="font-medium">Kembali ke Daftar</span>
        </button>

        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={cafe.image}
            alt={cafe.name}
            className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-3xl shadow-2xl mb-8"
          />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {cafe.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-lg text-gray-300 mb-6">
            <span className="font-semibold text-amber-400">⭐ {cafe.rating}</span>
            <span>•</span>
            <span>{cafe.location}</span>
            <span>•</span>
            <span className="italic">{cafe.vibe}</span>
          </div>

          {cafe.priceRange && (
            <p className="text-xl text-amber-300 font-medium">
              💰 {cafe.priceRange}
            </p>
          )}
        </div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-amber-500/30 pb-4 inline-block">
            Tentang {cafe.name}
          </h2>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
            <p>
              {cafe.name} adalah salah satu spot ngopi paling ikonik di {cafe.location}.
              Dengan vibe <span className="text-amber-400 font-medium">{cafe.vibe.toLowerCase()}</span>,
              tempat ini paling cocok buat{" "}
              <span className="text-teal-500 font-medium">{cafe.bestFor.toLowerCase()}</span>.
              {cafe.workFriendly && (
                <> WiFi-nya kenceng dan nyaman buat {cafe.workDesc?.toLowerCase() || "kerja remote"}.</>
              )}
            </p>

            {cafe.shortDesc && (
              <p className="text-lg italic border-l-4 border-amber-500 pl-5 py-1">
                "{cafe.shortDesc}"
              </p>
            )}

            {cafe.openHours && (
              <p className="flex items-center gap-3 text-gray-200">
                <span className="text-2xl">🕒</span>
                Buka: <span className="font-medium">{cafe.openHours}</span>
              </p>
            )}
          </div>
        </section>

        {/* Personal Review */}
        {cafe.personalReview && (
          <section className="mb-16 bg-[#111111] p-8 rounded-3xl border border-gray-800/50 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6 text-amber-400">Review Pribadi</h2>
            <p className="text-gray-200 leading-relaxed italic">
              "{cafe.personalReview}"
            </p>
          </section>
        )}

        {/* Menu Highlights */}
        {cafe.menuHighlights && cafe.menuHighlights.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Menu yang Wajib Dicoba</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cafe.menuHighlights.map((menu, idx) => (
                <div
                  key={idx}
                  className="bg-[#111111] p-6 rounded-2xl border border-gray-800/50 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{menu.item}</h3>
                  <p className="text-amber-400 font-bold mb-2">{menu.price}</p>
                  {menu.desc && <p className="text-gray-400 text-sm">{menu.desc}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {cafe.galleryImages && cafe.galleryImages.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cafe.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={img}
                    alt={`${cafe.name} gallery ${idx + 1}`}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Location Map */}
        {cafe.googleMapsLink && (
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8">Lokasi</h2>
            <iframe
              src={cafe.googleMapsLink}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-3xl shadow-2xl"
            />
          </section>
        )}

        {/* External Reviews */}
        {cafe.externalReviewsLink && (
          <div className="text-center">
            <a
              href={cafe.externalReviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-semibold rounded-full transition shadow-lg hover:shadow-amber-500/30"
            >
              Baca Review Lengkapnya →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default CafeDetail;
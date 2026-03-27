// data/cafeData.ts

export interface Cafe {
    id: number;
    name: string;
    image: string;          // string path: '/assets/cafes/nama.jpg' → taruh di public/assets/cafes/
    location: string;       // e.g. "Canggu", "Pererenan", "Berawa" untuk filter bagus
    rating: number;
    tags: string[];
    priceRange: string;
    vibe: string;
    openHours?: string;
    shortDesc?: string;

    galleryImages?: string[]; // array path gambar tambahan '/assets/cafes/revolver-gallery1.jpg'
    menuHighlights?: { item: string; price: string; desc?: string }[]; // contoh menu populer
    personalReview?: string; // review pribadimu
    googleMapsLink?: string; // link embed atau search
    externalReviewsLink?: string; // link ke TripAdvisor/Google Reviews
    workFriendly: boolean;
    workDesc?: string; // optional, deskripsi khusus kalau work-friendly
    bestFor: string; // e.g. "Remote work & brunch", "Date santai & sunset", "Family gathering"
}



// export const cafes: Cafe[] = [
//     {
//         id: 1,
//         name: "Revolver Espresso",
//         image: "/assets/cafes/revolver.jpg",
//         location: "Canggu",
//         rating: 4.8,
//         tags: ["Specialty Coffee", "Cold Brew", "Aussie Style", "Instagrammable"],
//         priceRange: "Rp 60–120rb",
//         vibe: "Edgy Warehouse",
//         openHours: "07:00 - 22:00",
//         shortDesc: "Pionir specialty coffee di Bali, cold brew dan brunch Australia terbaik."
//         ,
//         galleryImages: [
//             "/assets/cafes/revolver-gallery1.jpg",
//             "/assets/cafes/revolver-gallery2.jpg",
//             "/assets/cafes/revolver-gallery3.jpg"
//         ],
//         menuHighlights: [
//             { item: "Crème Brûlée Iced Latte", price: "Rp 65rb", desc: "Signature cold brew dengan topping caramel" },
//             { item: "Truffle Mushroom Hash", price: "Rp 110rb", desc: "Brunch favorit dengan jamur truffle" },
//             { item: "Buttermilk Hotcakes", price: "Rp 95rb", desc: "Topped with vanilla crumble" }
//         ],
//         personalReview: "Tempat ini wajib dikunjungi kalau suka kopi strong dan vibe industrial. Cold brew-nya mantap banget, cocok buat work dari pagi. Lokasi hidden tapi worth it!",
//         googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.123456789!2d115.123456!3d-8.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd243abc123def%3A0x456789abcdef!2sRevolver+Espresso+Canggu!5e0!3m2!1sen!2sid!4v1698765432100",
//         externalReviewsLink: "https://www.tripadvisor.com/Restaurant_Review-g311298-d12345678-Reviews-Revolver_Espresso-Canggu_North_Kuta_Bali.html"
//     },
//     {
//         id: 2,
//         name: "The Shady Shack",
//         image: "/assets/cafes/shady-shack.jpg",
//         location: "Canggu",
//         rating: 4.9,
//         tags: ["Vegan", "Rice Field View", "Acai Bowl", "Healthy"],
//         priceRange: "Rp 80–150rb",
//         vibe: "Jungle Relaxed",
//         openHours: "07:30 - 20:00",
//         shortDesc: "Cafe vegan ikonik dengan view sawah, acai bowl legendaris.",
//         galleryImages: [
//             "/assets/cafes/shady-gallery1.jpg",
//             "/assets/cafes/shady-gallery2.jpg"
//         ],
//         menuHighlights: [
//             { item: "Cacao Dreams Acai Bowl", price: "Rp 95rb", desc: "Topped with granola, fruits & cacao" },
//             { item: "Nori Bowl", price: "Rp 110rb", desc: "Vegan poke bowl dengan nori & veggies" },
//             { item: "Sticky Bircher", price: "Rp 85rb", desc: "With grilled pineapple" }
//         ],
//         personalReview: "View sawahnya calming banget, cocok buat sarapan santai. Semua menu vegan dan fresh, acai bowl-nya juara! Harga worth it untuk kualitas.",
//         googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!... (ganti dengan embed real dari Google Maps)",
//         externalReviewsLink: "https://www.tripadvisor.com/Restaurant_Review-g311298-d10172982-Reviews-The_Shady_Shack-Canggu_North_Kuta_Bali.html"
//     },
//     {
//         id: 2,
//         name: "The Shady Shack",
//         image: "/assets/cafes/shady-shack.jpg",
//         location: "Denpasar",
//         rating: 4.9,
//         tags: ["Vegan", "Rice Field View", "Acai Bowl", "Healthy"],
//         priceRange: "Rp 80–150rb",
//         vibe: "Jungle Relaxed",
//         openHours: "07:30 - 20:00",
//         shortDesc: "Cafe vegan ikonik dengan view sawah, acai bowl legendaris.",
//         galleryImages: [
//             "/assets/cafes/shady-gallery1.jpg",
//             "/assets/cafes/shady-gallery2.jpg"
//         ],
//         menuHighlights: [
//             { item: "Cacao Dreams Acai Bowl", price: "Rp 95rb", desc: "Topped with granola, fruits & cacao" },
//             { item: "Nori Bowl", price: "Rp 110rb", desc: "Vegan poke bowl dengan nori & veggies" },
//             { item: "Sticky Bircher", price: "Rp 85rb", desc: "With grilled pineapple" }
//         ],
//         personalReview: "View sawahnya calming banget, cocok buat sarapan santai. Semua menu vegan dan fresh, acai bowl-nya juara! Harga worth it untuk kualitas.",
//         googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!... (ganti dengan embed real dari Google Maps)",
//         externalReviewsLink: "https://www.tripadvisor.com/Restaurant_Review-g311298-d10172982-Reviews-The_Shady_Shack-Canggu_North_Kuta_Bali.html"
//     },
//     {
//         id: 2,
//         name: "The Shady Shack",
//         image: "/assets/cafes/shady-shack.jpg",
//         location: "Sanur",
//         rating: 4.9,
//         tags: ["Vegan", "Rice Field View", "Acai Bowl", "Healthy"],
//         priceRange: "Rp 80–150rb",
//         vibe: "Jungle Relaxed",
//         openHours: "07:30 - 20:00",
//         shortDesc: "Cafe vegan ikonik dengan view sawah, acai bowl legendaris.",
//         galleryImages: [
//             "/assets/cafes/shady-gallery1.jpg",
//             "/assets/cafes/shady-gallery2.jpg"
//         ],
//         menuHighlights: [
//             { item: "Cacao Dreams Acai Bowl", price: "Rp 95rb", desc: "Topped with granola, fruits & cacao" },
//             { item: "Nori Bowl", price: "Rp 110rb", desc: "Vegan poke bowl dengan nori & veggies" },
//             { item: "Sticky Bircher", price: "Rp 85rb", desc: "With grilled pineapple" }
//         ],
//         personalReview: "View sawahnya calming banget, cocok buat sarapan santai. Semua menu vegan dan fresh, acai bowl-nya juara! Harga worth it untuk kualitas.",
//         googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!... (ganti dengan embed real dari Google Maps)",
//         externalReviewsLink: "https://www.tripadvisor.com/Restaurant_Review-g311298-d10172982-Reviews-The_Shady_Shack-Canggu_North_Kuta_Bali.html"
//     },
//     {
//         id: 3,
//         name: "Kynd Community",
//         image: "/assets/cafes/kynd.jpg",
//         location: "Seminyak",
//         rating: 4.7,
//         tags: ["Plant-Based", "Healthy", "Brunch", "WiFi Kenceng"],
//         priceRange: "Rp 70–130rb",
//         vibe: "Modern Healthy",
//         openHours: "07:00 - 21:00",
//         shortDesc: "Spot plant-based favorit, brunch sehat dan kopi berkualitas."
//     },
//     {
//         id: 4,
//         name: "Pison Coffee",
//         image: "/assets/cafes/pison.jpg",
//         location: "Ubud",
//         rating: 4.8,
//         tags: ["Specialty", "Croissant", "View Bagus", "Brunch"],
//         priceRange: "Rp 50–110rb",
//         vibe: "Cozy & Scenic",
//         openHours: "08:00 - 19:00",
//         shortDesc: "Croissant terbaik dan kopi specialty dengan view hijau Ubud."
//     },
//     {
//         id: 5,
//         name: "Suka Espresso",
//         image: "/assets/cafes/suka.jpg",
//         location: "Uluwatu",
//         rating: 4.7,
//         tags: ["Aussie Brunch", "Surf Vibe", "Coffee Strong"],
//         priceRange: "Rp 60–120rb",
//         vibe: "Laid-back Surf",
//         openHours: "07:00 - 20:00",
//         shortDesc: "Cafe ala Australia dengan kopi mantap di area Uluwatu."
//     },
//     // Tambahan real/populer 2026 (dari guide terkini: Canggu dominan)
//     {
//         id: 6,
//         name: "Blou Cafe",
//         image: "/assets/cafes/blou.jpg",
//         location: "Canggu",
//         rating: 4.9,
//         tags: ["Brunch", "American Style", "Healthy", "Instagrammable"],
//         priceRange: "Rp 80–150rb",
//         vibe: "Bright & Energetic",
//         openHours: "07:00 - 21:00",
//         shortDesc: "Cafe hits Canggu dengan brunch enak dan vibe cerah."
//     },
//     {
//         id: 7,
//         name: "Blacklist Coffee Roasters",
//         image: "/assets/cafes/blacklist.jpg",
//         location: "Canggu",
//         rating: 4.8,
//         tags: ["Specialty Coffee", "Roastery", "Minimalist"],
//         priceRange: "Rp 50–100rb",
//         vibe: "Industrial Cool",
//         openHours: "07:00 - 20:00",
//         shortDesc: "Roastery lokal dengan kopi fresh roast, favorit locals."
//     },
//     {
//         id: 8,
//         name: "Milk & Madu",
//         image: "/assets/cafes/milk-madu.jpg",
//         location: "Berawa",
//         rating: 4.6,
//         tags: ["Brunch", "Aussie", "Family Friendly", "Beach Vibe"],
//         priceRange: "Rp 70–130rb",
//         vibe: "Relaxed Aussie",
//         openHours: "07:00 - 22:00",
//         shortDesc: "Cafe klasik Bali dengan menu Australia, lokasi Berawa santai."
//     },
//     {
//         id: 9,
//         name: "The Avocado Factory",
//         image: "/assets/cafes/avocado-factory.jpg",
//         location: "Canggu",
//         rating: 4.7,
//         tags: ["Healthy", "Avocado Obsessed", "Smoothies", "Vegan Friendly"],
//         priceRange: "Rp 60–120rb",
//         vibe: "Fresh & Green",
//         openHours: "07:30 - 20:00",
//         shortDesc: "Spesialis avocado toast dan smoothie bowl sehat."
//     },
//     {
//         id: 10,
//         name: "Crate Cafe",
//         image: "/assets/cafes/crate.jpg",
//         location: "Canggu",
//         rating: 4.7,
//         tags: ["Brunch", "Smoothies", "Hipster", "WiFi Kenceng"],
//         priceRange: "Rp 70–140rb",
//         vibe: "Buzzing & Energetic",
//         openHours: "07:00 - 22:00",
//         shortDesc: "Cafe ikonik Canggu untuk brunch dan kerja remote."
//     }
//     // Kamu bisa tambah lagi dari foto sendiri di Kuta/Canggu, atau Unsplash dengan keyword "cafe Bali Canggu"
// ];

export const cafes: Cafe[] = [
    {
        id: 1,
        name: "Canvas Cafe Bali",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/5a/2a/b7/canvas-cafe.jpg?w=1400&h=-1&s=1",  // Link ke IG resmi untuk galeri foto
        location: "Sanur, Denpasar",
        rating: 4.7,
        tags: ["Specialty Coffee", "Brunch", "Cozy", "Healthy Options", "WiFi Kenceng"],
        priceRange: "Rp 30–160rb",
        vibe: "Modern Tropical",
        openHours: "07:00 - 19:00 WITA",
        shortDesc: "Cafe hits di Sanur dengan kopi berkualitas tinggi, brunch enak, dan suasana santai tropis. Salah satu terbaik di Denpasar area berdasarkan review 2026.",
        galleryImages: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/3b/95/photo2jpg.jpg?w=1400&h=-1&s=1",  // Tripadvisor punya banyak traveler photos
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/92/cd/a8/canvas-cafe.jpg?w=1100&h=-1&s=1",  // Contoh reel dengan interior & menu
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/81/8c/e3/canvas-cafe.jpg?w=1400&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0d/20/5b/img-20191117-101315-largejpg.jpg?w=800&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/a2/63/0a/lunch-menu.jpg?w=1400&h=-1&s=1",  // Foto chill vibes outdoor
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/63/3b/96/photo3jpg.jpg?w=1100&h=-1&s=1"  // Foto chill vibes outdoor

        ],
        menuHighlights: [
            { item: "Signature Latte", price: "Rp 55rb", desc: "Dengan single-origin beans lokal" },
            { item: "Avocado Toast", price: "Rp 85rb", desc: "Topped with poached eggs & chili flakes" },
            { item: "Acai Bowl", price: "Rp 95rb", desc: "Fresh fruits & granola" }
        ],
        personalReview: "Tempatnya nyaman banget buat kerja atau brunch santai di Sanur. Kopinya strong dan fresh, porsinya oke. Lebih calm dibanding area Canggu, cocok kalau lagi di Denpasar!",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1477.8619364355882!2d115.2579775088515!3d-8.674781807541072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241818dfd4cab%3A0xf4128cfe6f76b165!2sCanvas%20Cafe!5e0!3m2!1sid!2sid!4v1771419132058!5m2!1sid!2sid",
        externalReviewsLink: "https://maps.app.goo.gl/by7ZKF1rsbpfeYUm9",
        bestFor: "Remote work & brunch santai", // WiFi super fast, outlets banyak, indoor/outdoor nyaman buat laptop (dari review: "good place for working, fast wifi", "perfect for recharging and relaxing while working")
        workFriendly: true,
        workDesc: "WiFi kenceng, colokan melimpah, vibe tenang cocok buat WFH seharian."
    },
    {
        id: 2,
        name: "KROMA 1984 Madahuis",
        image: "/public/kroma.png",  // IG resmi dengan banyak foto aesthetic
        location: "Dauh Puri Kangin, Denpasar (Jl. Gajah Mada)",
        rating: 4.5,
        tags: ["Specialty Coffee", "Minimalist", "Instagrammable", "Local Roaster", "Vintage"],
        priceRange: "Rp 15 – 40rb",
        vibe: "Rustic Modern",
        openHours: "09:00 - 22:00 WITA",
        shortDesc: "Cafe kekinian di pusat Denpasar dengan desain vintage-rustic, kopi specialty mantap, dan spot WFC strategis.",
        galleryImages: [
            "/public/kroma1.png",
            "/public/kroma.png",
            "/public/kroma1.png",
            "/public/kroma.png"

        ],
        menuHighlights: [
            { item: "Mochahazel", price: "Rp 28rb", desc: "Bittersweet and nutty flavor" },
            { item: "Midnight Latte", price: "Rp 32rb", desc: "Silky vanilla latte with charcoal dust" },
            { item: "Tuna Puff", price: "Rp 25rb", desc: "Tuna Puff" }
        ],
        personalReview: "Hidden gem di tengah kota Denpasar! Kopinya top, tempatnya aesthetic rustic, cocok buat foto atau meeting santai. Worth it kalau lagi di area Gajah Mada.",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.20472251289!2d115.20885586635681!3d-8.662880011576034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241d3345845e1%3A0x33271448c8ad6b79!2sKROMA%201984%20Madahuis!5e0!3m2!1sid!2sid!4v1771419991922!5m2!1sid!2sid",
        externalReviewsLink: "https://maps.app.goo.gl/B8UbeQL31HJ2DJ87A",
        bestFor: "Ngopi produktif di pusat kota & WFC",
        workFriendly: true,
        workDesc: "Lokasi strategis, WiFi stabil, cocok remote work atau meeting santai di tengah Denpasar."
    },
    {
        id: 3,
        name: "The Crafe",
        image: "/public/crafe.png",
        location: "Denpasar (quiet corner area)",
        rating: 4.8,
        tags: ["Cozy", "Coffee Mocktail", "Local Favorite", "Comfort Food"],
        priceRange: "Rp 25–100rb",
        vibe: "Homey & Relaxed",
        openHours: "07:00 - 22:00 WITA",
        shortDesc: "Cafe kecil cozy favorit lokal, terkenal salted caramel latte dan coffee mocktail unik.",
        galleryImages: [
            "/public/crafe1.png",
            "/public/crafe2.png",
            "/public/crafe3.png",
            "/public/crafe.png"
        ],
        menuHighlights: [
            { item: "Salted Caramel Latte", price: "Rp 37rb", desc: "Creamy & addictive" },
            { item: "Crafe Coffee Shake", price: "Rp 39rb", desc: "Non-alcoholic fun drink" },
            { item: "Nashbille Chicken Burger", price: "Rp 50rb", desc: "Simple tapi flavorful" }
        ],
        personalReview: "Suasana homey kayak nongkrong di rumah temen. Kopi strong, cocok pagi atau setelah jalan-jalan. Spot lokal underrated tapi juara di Denpasar!",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.282763153925!2d115.2397768!3d-8.6646358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241caa83eac9b%3A0xd2e05af5f41e47db!2sThe%20crafe!5e0!3m2!1sid!2sid!4v1771422299050!5m2!1sid!2sid",
        externalReviewsLink: "https://maps.app.goo.gl/UN8rJqnGH8riCvB58",
        bestFor: "Chill ngopi & comfort food",
        workFriendly: true, // Ada review sebut strong WiFi & view bagus buat productive
        workDesc: "WiFi oke, suasana cozy buat ngobrol ringan sambil ngemil."
    },
    {
        id: 4,
        name: "Toko Seniman Denpasar",
        image: "https://www.senimancoffee.com/includes/uploads/SNM08569%20(1).jpg",  // IG resmi chain, termasuk branch Denpasar
        location: "Jl. Tukad Musi, Renon",
        rating: 4.8,
        tags: ["Specialty Coffee", "Roastery", "Indonesian Beans", "Artistic", "Creative"],
        priceRange: "Rp 50–75rb",
        vibe: "Artsy & Chill",
        openHours: "07:30 - 22:00 WITA",
        shortDesc: "Branch Denpasar dari Seniman Coffee legendaris, fokus beans Indonesia premium dan vibe seni.",
        galleryImages: [
            "https://www.senimancoffee.com/includes/uploads/IMG_0113-2.jpg",  // Galeri foto kopi & space
            "https://www.senimancoffee.com/includes/uploads/IMG_0037.jpg",  // Foto outdoor & interior Renon
            "https://www.senimancoffee.com/includes/uploads/s_renon_homepage.png"  // Foto branch Denpasar
        ],
        menuHighlights: [
            { item: "Cold Brew", price: "Rp 55rb", desc: "Smooth & bold" },
            { item: "Manual Brew", price: "Rp 60rb", desc: "Pilih origin lokal" },
            { item: "Pastries", price: "Rp 40rb", desc: "Pairing enak" }
        ],
        personalReview: "Kalau suka kopi Indonesia asli, ini wajib! Beans fresh roast, tempat artsy, cocok ngopi lama sambil kerja atau ngobrol. Branch Denpasar lebih accessible dari Ubud.",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1765491503766!2d115.22752400909576!3d-8.67475459133712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241d56eff4c9d%3A0x7e00d75cf4608690!2sSeniman%20Coffee%20Renon!5e0!3m2!1sid!2sid!4v1771422641420!5m2!1sid!2sid",
        externalReviewsLink: "https://maps.app.goo.gl/2U3Rn43KGDH1NYGV7",
        bestFor: "Kerja lama dengan laptop & kopi lokal",
        workFriendly: true,
        workDesc: "Punya WiFi memadai, ada colokan, pas buat WFC nyaman."
    },
    {
        id: 5,
        name: "Kopi Bhineka Djaja",
        image: "/public/bhineka.png",
        location: "Jl. Gajah Mada No.80, Denpasar",
        rating: 4.6,
        tags: ["Heritage", "Local Classic", "Nostalgic", "Indonesian Beans", "Affordable"],
        priceRange: "Rp 10 – 30rb",
        vibe: "Nostalgic & Traditional",
        openHours: "08:00 - 20:00 WITA",
        shortDesc: "Warung kopi legendaris sejak 1935 di jantung Denpasar. Kopi Bali autentik dengan suasana nostalgia khas old town.",
        galleryImages: [
            "/public/bhineka1.png",
            "/public/bhineka2.png",
            "/public/bhineka.png",
            "/public/bhineka3.png"
        ],
        menuHighlights: [
            { item: "Kopi Susu Gula Aren", price: "Rp 20rb", desc: "Signature manis khas Bali" },
            { item: "Kopi Hitam Tubruk", price: "Rp 15rb", desc: "Strong & traditional" },
            { item: "Es Kopi Susu", price: "Rp 22rb", desc: "Refreshing lokal favorite" }
        ],
        personalReview: "Tempat bersejarah yang masih asli! Kopinya kuat dan enak, suasananya nostalgic seperti nongkrong di warung lama. Cocok buat yang mau rasa kopi Bali sejati tanpa embel-embel kekinian.",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944. something!2d115.21!3d-8.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sKopi%20Bhineka%20Djaja",
        externalReviewsLink: "https://maps.app.goo.gl/yk71EByEDH1gAt929",
        bestFor: "Ngopi lokal autentik & nostalgia",
        workFriendly: false,
        workDesc: "Lebih cocok santai & ngobrol. WiFi ada tapi tidak stabil untuk kerja lama."
    },
    {
        id: 6,
        name: "Resident Coffee & Tea",
        image: "/public/resident.png",
        location: "Jl. Pemuda VI No.4, Renon, Denpasar",
        rating: 4.7,
        tags: ["Specialty Coffee", "Garden Courtyard", "Work-Friendly", "Pastries", "Modern"],
        priceRange: "Rp 25 – 55rb",
        vibe: "Calm & Artsy",
        openHours: "09:00 - 19:00 WITA",
        shortDesc: "Hidden gem di Renon dengan courtyard hijau, interior clean, dan banyak colokan. Pastry homemade juara.",
        galleryImages: [
            "/public/resident1.png",
            "/public/resident2.png",
            "/public/resident.png",
            "/public/resident3.png"
        ],
        menuHighlights: [
            { item: "Iced Cappuccino", price: "Rp 35rb", desc: "Smooth & creamy" },
            { item: "Signature Cheesecake / Cookies", price: "Rp 25-40rb", desc: "Freshly baked" },
            { item: "Matcha Latte", price: "Rp 32rb", desc: "Non-coffee option enak" }
        ],
        personalReview: "Salah satu terbaik buat WFC di Denpasar! Suasananya tenang dengan view hijau, colokan banyak, WiFi stabil, dan pastries-nya enak banget. Betah kerja berjam-jam.",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.2!2d115.22!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sResident%20Coffee",
        externalReviewsLink: "https://maps.app.goo.gl/b5fVER2B8H9ud7rr7",
        bestFor: "Remote work & productive ngopi",
        workFriendly: true,
        workDesc: "Banyak colokan, WiFi cepat, suasana calming cocok WFC lama atau meeting santai."
    },
    {
        id: 7,
        name: "Xavi Croissanterie",
        image: "/public/xavi.png",
        location: "Denpasar area (dekat Renon/Sanur)",
        rating: 4.8,
        tags: ["Croissant", "French Bakery", "Specialty Coffee", "Instagrammable", "Brunch"],
        priceRange: "Rp 30 – 70rb",
        vibe: "Elegant & Fresh",
        openHours: "07:30 - 18:00 WITA",
        shortDesc: "Croissanterie premium dengan kopi berkualitas. Croissant buttery dan fresh, cocok brunch atau coffee break.",
        galleryImages: [
            "/public/xavi1.png",
            "/public/xavi2.png",
            "/public/xavi.png",
            "/public/xavi3.png"
        ],
        menuHighlights: [
            { item: "Almond Croissant", price: "Rp 45rb", desc: "Buttery & flaky" },
            { item: "Flat White", price: "Rp 38rb", desc: "Smooth specialty" },
            { item: "Pain au Chocolat", price: "Rp 42rb", desc: "Classic favorite" }
        ],
        personalReview: "Croissant-nya juara di Denpasar! Kopinya juga enak, tempatnya clean dan aesthetic. Cocok buat morning coffee atau meeting ringan sambil ngemil pastry fresh.",
        googleMapsLink: "https://www.google.com/maps/embed?... (cek maps.app.goo.gl untuk Xavi Croissanterie Denpasar)",
        externalReviewsLink: "https://maps.app.goo.gl/XaviCroissanterie",
        bestFor: "Brunch & pastry lover",
        workFriendly: true,
        workDesc: "Suasana nyaman, WiFi oke, cocok kerja santai sambil ngemil."
    },
    {
        id: 8,
        name: "Simply Brew Coffee Roasters",
        image: "/public/simplybrew.png",
        location: "Jl. Bypass Ngurah Rai No.127A, Sanur, Denpasar Selatan",
        rating: 4.7,
        tags: ["Roastery", "Specialty Coffee", "Local Beans", "Relaxed", "Sanur"],
        priceRange: "Rp 35 – 65rb",
        vibe: "Modern & Breezy",
        openHours: "07:00 - 20:00 WITA",
        shortDesc: "Roastery di Sanur dengan biji kopi lokal premium. Suasana santai, cocok ngopi sambil lihat orang lewat.",
        galleryImages: [
            "/public/simply1.png",
            "/public/simply2.png",
            "/public/simplybrew.png",
            "/public/simply3.png"
        ],
        menuHighlights: [
            { item: "Cold Brew", price: "Rp 45rb", desc: "Smooth house blend" },
            { item: "Pour Over", price: "Rp 55rb", desc: "Single origin pilihan" },
            { item: "Avocado Toast", price: "Rp 50rb", desc: "Light bite enak" }
        ],
        personalReview: "Kopi fresh roast dan enak banget! Tempatnya breezy di Sanur, cocok buat ngopi santai atau WFC pagi hari. Roastery lokal yang recommended.",
        googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...Simply Brew Sanur",
        externalReviewsLink: "https://maps.app.goo.gl/SimplyBrewSanur",
        bestFor: "Specialty coffee & santai di Sanur",
        workFriendly: true,
        workDesc: "WiFi stabil, suasana relaxed cocok kerja atau meeting."
    },
    {
        id: 9,
        name: "Over the Moon Cafe",
        image: "/public/overthemoon.png",
        location: "Jl. Danau Tamblingan No.19, Sanur, Denpasar Selatan",
        rating: 4.6,
        tags: ["Cozy", "Brunch", "Coffee", "Sanur", "Relaxed"],
        priceRange: "Rp 40 – 80rb",
        vibe: "Chill Beachy",
        openHours: "08:00 - 22:00 WITA",
        shortDesc: "Cafe cozy di Sanur dengan menu brunch dan kopi enak. Suasana santai dekat pantai.",
        galleryImages: [
            "/public/over1.png",
            "/public/over2.png",
            "/public/overthemoon.png",
            "/public/over3.png"
        ],
        menuHighlights: [
            { item: "Salted Caramel Latte", price: "Rp 42rb", desc: "Creamy favorite" },
            { item: "Eggs Benedict", price: "Rp 65rb", desc: "Brunch classic" },
            { item: "Iced Mocha", price: "Rp 45rb", desc: "Refreshing" }
        ],
        personalReview: "Suasana cozy dan nyaman di Sanur. Kopi enak, makanannya juga oke. Cocok buat chill setelah jalan-jalan pantai atau kerja santai.",
        googleMapsLink: "https://www.google.com/maps/embed?...Over the Moon Sanur",
        externalReviewsLink: "https://maps.app.goo.gl/OverTheMoonSanur",
        bestFor: "Chill ngopi & brunch di Sanur",
        workFriendly: true,
        workDesc: "WiFi oke, tempat nyaman untuk WFC ringan."
    },

    {
    id: 11,
    name: "Hungry Bird Coffee Roaster",
    image: "/public/hungrybird.png",
    location: "Denpasar / Mengwi area",
    rating: 4.7,
    tags: ["Roastery", "Local Beans", "Strong Coffee", "Award-winning"],
    priceRange: "Rp 30 – 60rb",
    vibe: "Casual & Bold",
    openHours: "08:00 - 18:00 WITA",
    shortDesc: "Roastery dengan kopi strong dan lokal. Cocok buat pecinta kopi hitam yang intense.",
    galleryImages: [
        "/public/hungry1.png",
        "/public/hungry2.png",
        "/public/hungrybird.png",
        "/public/hungry3.png"
    ],
    menuHighlights: [
        { item: "Espresso", price: "Rp 35rb", desc: "Bold & intense" },
        { item: "Pour Over Single Origin", price: "Rp 50rb", desc: "Local beans" },
        { item: "Iced Latte", price: "Rp 40rb", desc: "Refreshing" }
    ],
    personalReview: "Kopi-nya strong dan enak, beans lokal fresh. Cocok buat yang suka rasa kopi murni tanpa manis berlebih.",
    googleMapsLink: "https://www.google.com/maps/embed?...Hungry Bird Denpasar",
    externalReviewsLink: "https://maps.app.goo.gl/HungryBird",
    bestFor: "Serious coffee lover",
    workFriendly: true,
    workDesc: "WiFi tersedia, cocok kerja sambil ngopi kopi kuat."
},
{
    id: 12,
    name: "Nataraka Bali",
    image: "/public/nataraka.png",
    location: "Jl. Dukuh I No.10, Kesiman Petilan, Denpasar Timur",
    rating: 4.6,
    tags: ["Work-Friendly", "Specialty Coffee", "Spacious", "Local Beans"],
    priceRange: "Rp 25 – 55rb",
    vibe: "Spacious & Productive",
    openHours: "09:00 - 23:00 WITA",
    shortDesc: "Cafe luas dengan fasilitas lengkap untuk kerja. Colokan di setiap meja dan WiFi cepat.",
    galleryImages: [
        "/public/ntaraka1.png",
        "/public/nataraka2.png",
        "/public/nataraka.png",
        "/public/nataraka3.png"
    ],
    menuHighlights: [
        { item: "Royal Hindia Latte", price: "Rp 40rb", desc: "Local blend" },
        { item: "Cold Brew", price: "Rp 45rb", desc: "Refreshing" },
        { item: "Light Meals", price: "Rp 50rb", desc: "Cocok WFC" }
    ],
    personalReview: "Super recommended buat WFC di Denpasar Timur! Tempat luas, colokan banyak, WiFi kencang. Kopi juga pakai beans lokal enak.",
    googleMapsLink: "https://www.google.com/maps/embed?...Nataraka Bali",
    externalReviewsLink: "https://maps.app.goo.gl/NatarakaBali",
    bestFor: "Remote work & productive session",
    workFriendly: true,
    workDesc: "Colokan di setiap meja, WiFi cepat, ruang indoor & outdoor luas."
},
{
    id: 13,
    name: "Revayah Coffee Bali",
    image: "/public/revayah.png",
    location: "Denpasar area",
    rating: 4.7,
    tags: ["Cozy", "Croissant", "Bowls", "Gather", "Modern"],
    priceRange: "Rp 30 – 65rb",
    vibe: "Friendly & Casual",
    openHours: "09:00 - 18:00 WITA (Senin-Sabtu)",
    shortDesc: "Cafe cozy dengan croissant, bowls, dan kopi enak. Cocok kumpul bareng teman.",
    galleryImages: [
        "/public/revayah1.png",
        "/public/revayah2.png",
        "/public/revayah.png",
        "/public/revayah3.png"
    ],
    menuHighlights: [
        { item: "Croissant", price: "Rp 35rb", desc: "Fresh baked" },
        { item: "Signature Latte", price: "Rp 38rb", desc: "Enak & creamy" },
        { item: "Acai Bowl", price: "Rp 55rb", desc: "Healthy option" }
    ],
    personalReview: "Tempatnya nyaman buat nongkrong atau kerja ringan. Croissant dan kopinya enak, vibe-nya ramah dan tidak terlalu ramai.",
    googleMapsLink: "https://www.google.com/maps/embed?...Revayah Coffee",
    externalReviewsLink: "https://maps.app.goo.gl/RevayahCoffee",
    bestFor: "Ngopi santai bareng teman",
    workFriendly: true,
    workDesc: "WiFi oke, suasana cozy cocok kerja atau gathering kecil."
},
{
    id: 14,
    name: "Kopitoko",
    image: "/public/kopitoko.png",
    location: "Sanur / Denpasar Selatan area",
    rating: 4.8,
    tags: ["Clean", "Specialty Coffee", "Minimalist", "Local Favorite"],
    priceRange: "Rp 25 – 50rb",
    vibe: "Clean & Simple",
    openHours: "08:00 - 20:00 WITA",
    shortDesc: "Coffee shop kecil clean dengan kopi enak. Favorit lokal yang underrated tapi kualitas tinggi.",
    galleryImages: [
        "/public/kopitoko1.png",
        "/public/kopitoko2.png",
        "/public/kopitoko.png",
        "/public/kopitoko3.png"
    ],
    menuHighlights: [
        { item: "Espresso Based", price: "Rp 35rb", desc: "Smooth" },
        { item: "Iced Coffee", price: "Rp 32rb", desc: "Refreshing" },
        { item: "Light Snacks", price: "Rp 30rb", desc: "Simple enak" }
    ],
    personalReview: "Kecil tapi kopinya juara! Tempat bersih, pelayanan ramah, cocok buat ngopi cepat atau kerja santai di Sanur/Denpasar.",
    googleMapsLink: "https://www.google.com/maps/embed?...Kopitoko",
    externalReviewsLink: "https://maps.app.goo.gl/Kopitoko",
    bestFor: "Clean coffee & quick stop",
    workFriendly: true,
    workDesc: "Suasana tenang, WiFi tersedia, cocok kerja ringan."
},
{
    id: 15,
    name: "Imadji Coffee",
    image: "/public/imadji.png",
    location: "Jl. Teuku Umar Barat No.7, Denpasar Barat",
    rating: 4.7,
    tags: ["Modern", "Specialty Coffee", "Cozy", "Local Favorite"],
    priceRange: "Rp 25 – 55rb",
    vibe: "Minimalist Modern",
    openHours: "08:00 - 22:00 WITA",
    shortDesc: "Cafe modern di Teuku Umar Barat dengan kopi specialty enak dan suasana nyaman. Banyak pilihan signature drink seperti Burries & Valtines.",
    galleryImages: [
        "/public/imadji1.png",
        "/public/imadji2.png",
        "/public/imadji.png",
        "/public/imadji3.png"
    ],
    menuHighlights: [
        { item: "Burries Coffee", price: "Rp 38rb", desc: "Signature creamy & nutty" },
        { item: "Valtines Latte", price: "Rp 40rb", desc: "Sweet & addictive" },
        { item: "Iced Cappuccino", price: "Rp 35rb", desc: "Smooth daily favorite" }
    ],
    personalReview: "Spot asyik di Teuku Umar Barat! Kopinya enak, tempatnya clean dan aesthetic. Cocok buat ngopi santai atau meeting ringan setelah kerja. Lokal banget tapi vibe kekinian.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0!2d115.20!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sImadji%20Coffee%20Teuku%20Umar",
    externalReviewsLink: "https://maps.app.goo.gl/ImadjiCoffeeTeukuUmar",
    bestFor: "Ngopi santai di Teuku Umar Barat",
    workFriendly: true,
    workDesc: "WiFi stabil, suasana nyaman untuk kerja ringan atau WFC sore hari."
},
{
    id: 16,
    name: "Mauve Cafe",
    image: "/public/mauve.png",
    location: "Jl. Teuku Umar No.200, Denpasar Barat",
    rating: 4.6,
    tags: ["Cozy", "Soft Cookies", "Coffee & Bakery", "Relaxed"],
    priceRange: "Rp 20 – 50rb",
    vibe: "Soft & Pastel",
    openHours: "09:00 - 21:00 WITA",
    shortDesc: "Cafe cozy dengan soft cookies homemade dan kopi enak. Suasana pastel yang bikin betah nongkrong lama.",
    galleryImages: [
        "/public/mauve1.png",
        "/public/mauve2.png",
        "/public/mauve.png",
        "/public/mauve3.png"
    ],
    menuHighlights: [
        { item: "Soft Cookies", price: "Rp 25rb", desc: "Homemade signature" },
        { item: "Signature Latte", price: "Rp 35rb", desc: "Creamy & flavorful" },
        { item: "Iced Coffee Series", price: "Rp 32rb", desc: "Refreshing options" }
    ],
    personalReview: "Tempatnya cute banget dengan vibe soft! Cookies-nya juara, kopi juga enak. Cocok buat afternoon coffee atau kerja sambil ngemil di Denpasar Barat.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1!2d115.21!3d-8.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sMauve%20Cafe",
    externalReviewsLink: "https://maps.app.goo.gl/MauveCafeTeukuUmar",
    bestFor: "Ngopi sambil ngemil bakery",
    workFriendly: true,
    workDesc: "WiFi oke, tempat nyaman untuk kerja santai atau kuliah online."
},
{
    id: 17,
    name: "Ruoms Coffee & Eatery",
    image: "/public/ruoms.png",
    location: "Jl. Teuku Umar Barat, Denpasar Barat",
    rating: 4.5,
    tags: ["Modern Minimalist", "Car Wash View", "Eatery", "Chill"],
    priceRange: "Rp 25 – 60rb",
    vibe: "Modern & Casual",
    openHours: "08:00 - 22:00 WITA",
    shortDesc: "Cafe modern minimalis di Teuku Umar Barat dengan area indoor-outdoor. Bisa ngopi sambil liat mobil dicuci (unique spot).",
    galleryImages: [
        "/public/ruoms1.png",
        "/public/ruoms2.png",
        "/public/ruoms.png",
        "/public/ruoms3.png"
    ],
    menuHighlights: [
        { item: "Signature Coffee", price: "Rp 35rb", desc: "House blend enak" },
        { item: "Light Meals / Eatery", price: "Rp 45-60rb", desc: "Cocok brunch" },
        { item: "Iced Latte", price: "Rp 38rb", desc: "Refreshing" }
    ],
    personalReview: "Konsep unik! Ngopi sambil nonton mobil dicuci sambil santai. Kopi enak, tempatnya modern dan bersih. Recommended buat yang lagi di Teuku Umar Barat.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0!2d115.20!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sRuoms%20Coffee",
    externalReviewsLink: "https://maps.app.goo.gl/RuomsCoffeeTeukuUmar",
    bestFor: "Chill ngopi dengan view unik",
    workFriendly: true,
    workDesc: "Suasana luas, WiFi tersedia, cocok WFC sambil santai."
},
{
    id: 18,
    name: "The Magendra – Coffee . Business . Hobby",
    image: "/public/magendra.png",
    location: "Jl. Teuku Umar Barat No.888, Denpasar Barat",
    rating: 4.6,
    tags: ["Community", "Business Hub", "Specialty Coffee", "Multi Purpose"],
    priceRange: "Rp 25 – 50rb",
    vibe: "Casual & Productive",
    openHours: "08:00 - 21:00 WITA",
    shortDesc: "Cafe yang menggabungkan coffee, business, dan hobby. Cocok buat meeting atau kerja sambil ngopi di Denpasar Barat.",
    galleryImages: [
        "/public/magendra1.png",
        "/public/magendra2.png",
        "/public/magendra.png",
        "/public/magendra3.png"
    ],
    menuHighlights: [
        { item: "Espresso Based", price: "Rp 32rb", desc: "Strong & smooth" },
        { item: "Signature Drink", price: "Rp 38rb", desc: "Creative menu" },
        { item: "Light Snacks", price: "Rp 30rb", desc: "Cocok meeting" }
    ],
    personalReview: "Lebih dari sekadar cafe biasa. Suasananya supportive buat bisnis atau hobby sambil ngopi. Kopi enak dan tempatnya nyaman untuk produktif di area Teuku Umar.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.1!2d115.21!3d-8.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sThe%20Magendra",
    externalReviewsLink: "https://maps.app.goo.gl/TheMagendraTeukuUmar",
    bestFor: "Meeting bisnis & productive ngopi",
    workFriendly: true,
    workDesc: "Banyak colokan, WiFi bagus, cocok WFC atau meeting kecil."
},
{
    id: 19,
    name: "9/11 Cafe & Concept Store",
    image: "/public/911cafe.png",
    location: "Jl. Teuku Umar Barat No.337, Denpasar Barat",
    rating: 4.5,
    tags: ["Concept Store", "Coffee", "Lifestyle", "Instagrammable"],
    priceRange: "Rp 25 – 60rb",
    vibe: "Modern Lifestyle",
    openHours: "09:00 - 22:00 WITA",
    shortDesc: "Cafe + concept store di Teuku Umar Barat. Kopi enak sambil bisa liat-liat barang lifestyle dan fashion.",
    galleryImages: [
        "/public/9111.png",
        "/public/9112.png",
        "/public/911cafe.png",
        "/public/9113.png"
    ],
    menuHighlights: [
        { item: "Signature Coffee", price: "Rp 35rb", desc: "House special" },
        { item: "Iced Drinks", price: "Rp 32rb", desc: "Variatif" },
        { item: "Light Meals", price: "Rp 45rb", desc: "Cocok nongkrong" }
    ],
    personalReview: "Keren! Bisa ngopi sambil shopping kecil-kecilan di concept store-nya. Tempatnya aesthetic dan cocok buat anak muda di Denpasar Barat.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0!2d115.20!3d-8.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2s9%2F11%20Cafe",
    externalReviewsLink: "https://maps.app.goo.gl/911CafeTeukuUmar",
    bestFor: "Ngopi + lifestyle browsing",
    workFriendly: true,
    workDesc: "Suasana santai, WiFi tersedia, cocok kerja sambil nongkrong."
},
{
    id: 21,
    name: "Anomali Coffee Ubud",
    image: "/public/anomali.png",
    location: "Central Ubud (dekat Monkey Forest area)",
    rating: 4.6,
    tags: ["Specialty Coffee", "Chain", "Work-Friendly", "Cakes", "Indonesian Roaster"],
    priceRange: "Rp 35 – 65rb",
    vibe: "Modern & Casual",
    openHours: "08:00 - 20:00 WITA",
    shortDesc: "Branch Anomali Coffee di Ubud dengan kopi specialty berkualitas tinggi dan banyak pilihan cake serta sweet treats.",
    galleryImages: [
        "/public/anomali1.png",
        "/public/anomali2.png",
        "/public/anomali.png",
        "/public/anomali3.png"
    ],
    menuHighlights: [
        { item: "Pour Over / Manual Brew", price: "Rp 50rb", desc: "Single origin pilihan" },
        { item: "Signature Cakes", price: "Rp 35rb", desc: "Tempting sweet treats" },
        { item: "Iced Latte", price: "Rp 40rb", desc: "Daily favorite" }
    ],
    personalReview: "Kopi-nya juara dan konsisten! Tempatnya nyaman dengan no-pressure table service, cocok buat kerja berjam-jam tanpa diganggu. Salah satu yang terbaik buat WFC di tengah Ubud.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...Anomali%20Coffee%20Ubud",
    externalReviewsLink: "https://maps.app.goo.gl/AnomaliUbud",
    bestFor: "Productive work & good coffee",
    workFriendly: true,
    workDesc: "WiFi stabil, banyak colokan, suasana santai cocok remote work lama. Review bilang perfect untuk digital nomad."
},
{
    id: 22,
    name: "Suka Espresso Ubud",
    image: "/public/suka.png",
    location: "Ubud (bright modern location)",
    rating: 4.8,
    tags: ["Specialty Coffee", "Aussie Style", "Brunch", "Modern", "Work-Friendly"],
    priceRange: "Rp 40 – 80rb",
    vibe: "Bright & Fresh",
    openHours: "07:30 - 18:00 WITA",
    shortDesc: "Cafe Aussie-inspired dengan kopi specialty enak, interior modern cerah, dan menu brunch yang variatif.",
    galleryImages: [
        "/public/suka1.png",
        "/public/suka2.png",
        "/public/suka.png",
        "/public/suka3.png"
    ],
    menuHighlights: [
        { item: "Flat White", price: "Rp 45rb", desc: "Smooth & creamy" },
        { item: "Avocado Toast / Brunch", price: "Rp 65rb", desc: "Aussie style" },
        { item: "Iced Coffee", price: "Rp 42rb", desc: "Refreshing" }
    ],
    personalReview: "Vibe-nya fresh dan modern! Kopi enak ala Aussie, brunch-nya juga top. Cocok buat morning coffee atau kerja santai di Ubud. Banyak yang bilang salah satu favorit baru di sini.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...Suka%20Espresso%20Ubud",
    externalReviewsLink: "https://maps.app.goo.gl/SukaEspressoUbud",
    bestFor: "Brunch & specialty coffee",
    workFriendly: true,
    workDesc: "WiFi oke, tempat cerah dan nyaman untuk WFC pagi-siang."
},
{
    id: 23,
    name: "Ubud Coffee Roastery",
    image: "/public/ubudroastery.png",
    location: "Ubud (sedikit off the main road)",
    rating: 4.8,
    tags: ["Roastery", "Specialty Coffee", "Local Beans", "Quiet", "High Quality"],
    priceRange: "Rp 30 – 60rb",
    vibe: "Clean & Focused",
    openHours: "08:00 - 18:00 WITA",
    shortDesc: "Roastery kecil dengan kopi specialty berkualitas tinggi, beans roasted in-house, dan suasana tenang jauh dari keramaian.",
    galleryImages: [
        "/public/ubudroastery1.png",
        "/public/ubudroastery2.png",
        "/public/ubudroastery.png",
        "/public/ubudroastery3.png"
    ],
    menuHighlights: [
        { item: "Espresso / Pour Over", price: "Rp 40-55rb", desc: "Bold & clean" },
        { item: "Single Origin", price: "Rp 50rb", desc: "Local beans pilihan" },
        { item: "Light Snacks", price: "Rp 35rb", desc: "Simple pairing" }
    ],
    personalReview: "Hidden gem buat coffee nerd! Kopi-nya super enak dan fresh, tempatnya bersih serta tenang. Cocok buat yang mau fokus ngopi atau kerja tanpa distraksi di Ubud.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...Ubud%20Coffee%20Roastery",
    externalReviewsLink: "https://maps.app.goo.gl/UbudCoffeeRoastery",
    bestFor: "Pure coffee experience",
    workFriendly: true,
    workDesc: "WiFi tersedia, suasana quiet cocok WFC atau kerja fokus."
},
{
    id: 24,
    name: "RÜSTERS Ubud",
    image: "/public/rusters.png",
    location: "Ubud (barn-style large space)",
    rating: 4.7,
    tags: ["Specialty Coffee", "Large Space", "Pastries", "Instagrammable", "View"],
    priceRange: "Rp 40 – 70rb",
    vibe: "Spacious Barn Style",
    openHours: "08:00 - 20:00 WITA",
    shortDesc: "Cafe ikonik dengan ruang besar bergaya barn, kopi specialty, dan pastries enak. Sering direkomendasikan untuk WFC di Ubud.",
    galleryImages: [
        "/public/rusters1.png",
        "/public/rusters2.png",
        "/public/rusters.png",
        "/public/rusters3.png"
    ],
    menuHighlights: [
        { item: "Signature Latte", price: "Rp 45rb", desc: "Creamy favorite" },
        { item: "Fresh Pastries", price: "Rp 35-50rb", desc: "Buttery & delicious" },
        { item: "Cold Brew", price: "Rp 48rb", desc: "Refreshing" }
    ],
    personalReview: "Ruangannya luas dan aesthetic banget! Kopi enak, pastries juara, dan cocok buat kerja lama atau nongkrong. Salah satu spot paling recommended di Ubud untuk digital nomad.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...RÜSTERS%20Ubud",
    externalReviewsLink: "https://maps.app.goo.gl/RustersUbud",
    bestFor: "Spacious WFC & pastries",
    workFriendly: true,
    workDesc: "Ruang besar, WiFi bagus, banyak colokan – ideal untuk remote work atau meeting."
},
{
    id: 25,
    name: "Revolver Espresso",
    image: "/public/revolver.png",  // IG @revolverespresso moody & aesthetic
    location: "Jl. Nelayan No.5, Canggu",
    rating: 4.7,
    tags: ["Specialty Coffee", "Roastery", "Moody Interior", "Strong Coffee", "Classic Canggu"],
    priceRange: "Rp 40 – 70rb",
    vibe: "Moody & Industrial",
    openHours: "07:00 - 18:00 WITA",
    shortDesc: "Iconic coffee spot di Canggu sejak lama. Mereka roast sendiri beans-nya, kopi strong dan berkualitas tinggi dengan interior sleek & moody.",
    galleryImages: [
        "/public/revolver1.png",
        "/public/revolver2.png",
        "/public/revolver.png",
        "/public/revolver3.png"
    ],
    menuHighlights: [
        { item: "Espresso / Flat White", price: "Rp 45rb", desc: "Strong & smooth" },
        { item: "Pour Over Single Origin", price: "Rp 55rb", desc: "Bold flavor" },
        { item: "Iced Coffee Series", price: "Rp 48rb", desc: "Refreshing" }
    ],
    personalReview: "Salah satu coffee institution di Canggu! Kopinya top-tier, beans fresh roast, dan suasananya moody yang bikin betah. Cocok buat serious coffee lover atau morning ritual sebelum surfing.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8!2d115.13!3d-8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x...!2sRevolver%20Espresso%20Canggu",
    externalReviewsLink: "https://maps.app.goo.gl/RevolverCanggu",
    bestFor: "Strong specialty coffee & classic Canggu vibe",
    workFriendly: true,
    workDesc: "WiFi oke, seating indoor-outdoor nyaman untuk WFC pagi-siang. Banyak digital nomad suka di sini."
},
{
    id: 26,
    name: "Blacklist Coffee Roasters",
    image: "/public/blacklist.png",
    location: "Canggu (area Batu Bolong / Pererenan)",
    rating: 4.8,
    tags: ["Specialty Coffee", "Australian Style", "Award-Winning", "Roastery", "High Quality"],
    priceRange: "Rp 45 – 75rb",
    vibe: "Clean & Professional",
    openHours: "07:00 - 17:00 WITA",
    shortDesc: "Roastery asal Australia dengan banyak award (Golden Bean). Kopi super berkualitas, beans pilihan, dan barista skilled.",
    galleryImages: [
        "/public/blacklist1.png",
        "/public/blacklist2.png",
        "/public/blacklist.png",
        "/public/blacklist3.png"
    ],
    menuHighlights: [
        { item: "Flat White / Latte Art", price: "Rp 48rb", desc: "Smooth & creamy" },
        { item: "Filter / Pour Over", price: "Rp 60rb", desc: "Single origin premium" },
        { item: "Cold Brew", price: "Rp 50rb", desc: "Bold & refreshing" }
    ],
    personalReview: "Kopi-nya juara banget! Salah satu yang terbaik di Canggu untuk pecinta specialty coffee. Tempatnya clean, pelayanan ramah, dan rasanya konsisten tinggi. Wajib coba kalau suka kopi Australia style.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d...Blacklist%20Coffee%20Canggu",
    externalReviewsLink: "https://maps.app.goo.gl/BlacklistCoffeeCanggu",
    bestFor: "Award-winning specialty coffee",
    workFriendly: true,
    workDesc: "WiFi stabil, suasana tenang cocok kerja fokus atau meeting kecil."
},
{
    id: 27,
    name: "Crate Cafe",
    image: "/public/crate.png",
    location: "Jl. Pantai Batu Bolong, Canggu",
    rating: 4.6,
    tags: ["Brunch", "Relaxed", "Popular", "All Day Cafe", "Vibe Canggu"],
    priceRange: "Rp 50 – 100rb",
    vibe: "Laid-back & Trendy",
    openHours: "07:00 - 22:00 WITA",
    shortDesc: "Cafe super populer di Canggu dengan vibe santai, menu brunch variatif, dan suasana yang selalu ramai tapi nyaman.",
    galleryImages: [
        "/public/crate1.png",
        "/public/crate2.png",
        "/public/crate.png",
        "/public/crate3.png"
    ],
    menuHighlights: [
        { item: "Avocado Toast / Eggs Benedict", price: "Rp 65-80rb", desc: "Brunch classic" },
        { item: "Signature Latte", price: "Rp 45rb", desc: "Creamy" },
        { item: "Smoothie Bowl", price: "Rp 70rb", desc: "Fresh & healthy" }
    ],
    personalReview: "Salah satu cafe paling hits di Canggu! Brunch-nya enak, kopinya oke, dan suasananya relaxed ala Canggu banget. Cocok nongkrong lama atau foto-foto aesthetic.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...Crate%20Cafe%20Canggu",
    externalReviewsLink: "https://maps.app.goo.gl/CrateCafeCanggu",
    bestFor: "All-day brunch & hangout",
    workFriendly: true,
    workDesc: "WiFi tersedia, tempat luas cocok WFC santai meski kadang ramai."
},
{
    id: 29,
    name: "Zin Cafe",
    image: "/public/zin.png",
    location: "Jl. Nelayan, Canggu",
    rating: 4.6,
    tags: ["Work-Friendly", "Coworking", "Large Space", "Matcha", "Digital Nomad"],
    priceRange: "Rp 30 – 70rb",
    vibe: "Spacious & Practical",
    openHours: "06:30 - 21:00 WITA",
    shortDesc: "Cafe besar dengan konsep free coworking. Banyak space, WiFi cepat, dan cocok buat remote worker di Canggu.",
    galleryImages: [
        "/public/zin1.png",
        "/public/zin2.png",
        "/public/zin.png",
        "/public/zin3.png"
    ],
    menuHighlights: [
        { item: "Matcha Latte", price: "Rp 45rb", desc: "Signature enak" },
        { item: "Coffee Classics", price: "Rp 40rb", desc: "Reliable" },
        { item: "Light Meals / Bowls", price: "Rp 50-70rb", desc: "Cocok WFC" }
    ],
    personalReview: "Surga buat digital nomad di Canggu! Space luas, WiFi bagus, buka pagi sampai malam, dan gratis coworking (minimal order minuman). Betah kerja berjam-jam di sini.",
    googleMapsLink: "https://www.google.com/maps/embed?pb=!1m18...Zin%20Cafe%20Canggu",
    externalReviewsLink: "https://maps.app.goo.gl/ZinCafeCanggu",
    bestFor: "Remote work & productive session",
    workFriendly: true,
    workDesc: "WiFi cepat, banyak colokan & space, buka lama – salah satu terbaik untuk WFC di Canggu."
},

];
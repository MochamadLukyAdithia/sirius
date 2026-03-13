const DATA = {

  
  site: {
    name: "SIRIUS",
    tagline: "Layanan Pemulihan dari Judi Online",
    description: "SIRIUS adalah layanan pemulihan adiksi judi online melalui pendekatan psikologis dan dukungan komunitas.",
    logoPath: "/assets/logo.png",      
    logoDarkPath: "/assets/logo.png",
    logoAlt: "SIRIUS Logo",
  },

  
  hotline: [
    { label: "Hotline Darurat", value: "119 ext 8",        hours: "24 Jam · 7 Hari Seminggu",   type: "tel" },
    { label: "WhatsApp Support", value: "+62 812-3456-7890", hours: "Senin–Jumat · 08.00–20.00 WIB", type: "wa" },
    { label: "Email",            value: "bantuan@sirius.id", hours: "Respons dalam 24 jam",      type: "email" },
  ],

  
  stats: [
    { num: "2.400+", label: "Klien Terdampingi" },
    { num: "87%",    label: "Tingkat Pemulihan"  },
    { num: "15+",    label: "Psikolog Aktif"     },
  ],

  
  model: [
    { letter: "S", name: "Screening",           desc: "Identifikasi tingkat risiko dan kebutuhan awal" },
    { letter: "I", name: "Insight Building",    desc: "Membangun kesadaran diri dan pemahaman perilaku" },
    { letter: "R", name: "Regulation Training", desc: "Latihan regulasi emosi dan kontrol impuls" },
    { letter: "I", name: "Intervention Therapy",desc: "Sesi terapi individual dan intervensi psikologis" },
    { letter: "U", name: "Unity Support",       desc: "Dukungan kelompok dan komunitas pemulihan" },
    { letter: "S", name: "Social Reintegration",desc: "Reintegrasi sosial dan membangun kehidupan baru" },
  ],

  
  layanan: [
    {
      num: "01", title: "Konseling Profesional",
      desc: "Sesi 1-on-1 dengan psikolog klinis berpengalaman, fleksibel online maupun tatap muka.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0z"/></svg>`,
    },
    {
      num: "02", title: "Ruang Aman",
      desc: "Komunitas online moderasi untuk berbagi pengalaman dan tumbuh bersama tanpa penghakiman.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    },
    {
      num: "03", title: "Program Rehabilitasi",
      desc: "Program terstruktur 8–12 minggu: CBT, mindfulness, dan pelatihan keterampilan hidup.",
      icon: `<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    },
  ],

  
  
  asesmen: [
    { type: "yn",   text: "Apakah kamu pernah berjudi secara online dalam 30 hari terakhir?" },
    { type: "yn",   text: "Apakah kamu pernah mencoba berhenti berjudi namun tidak berhasil?" },
    { type: "yn",   text: "Apakah judi online pernah menyebabkan masalah keuangan yang serius?" },
    { type: "yn",   text: "Apakah keluarga atau orang terdekat pernah menyampaikan kekhawatiran tentang kebiasaan judimu?" },
    { type: "freq", text: "Seberapa sering kamu berjudi online dalam sebulan terakhir?" },
    { type: "freq", text: "Seberapa sering kamu berjudi untuk 'mengejar' kerugian sebelumnya?" },
    { type: "freq", text: "Seberapa sering pikiran tentang judi mengganggu aktivitas sehari-harimu?" },
    { type: "freq", text: "Seberapa sering kamu merasa gelisah atau mudah marah saat tidak bisa berjudi?" },
    { type: "freq", text: "Seberapa sering aktivitas judi mempengaruhi hubunganmu dengan orang terdekat?" },
    { type: "freq", text: "Seberapa sering kamu berbohong tentang kegiatan berjudimu?" },
    { type: "text", text: "Ceritakan situasi atau perasaan yang biasanya memicumu untuk mulai berjudi:" },
    { type: "text", text: "Apa harapan terbesarmu setelah menyelesaikan program pemulihan ini?" },
  ],

  
  scoring: {
    ringan: { max: 8,  label: "Ringan",  color: "green",
      title: "Risiko Ringan Kesadaran Awal yang Tepat",
      text:  "Kamu menunjukkan beberapa pola yang perlu diperhatikan, namun belum pada tahap yang mengkhawatirkan. Kesadaran awal seperti ini sangat penting untuk mencegah eskalasi lebih lanjut.",
      recs:  ["Ikuti program edukasi preventif SIRIUS", "Gunakan fitur Teman Curhat untuk memantau kondisi emosional", "Pelajari teknik regulasi emosi dasar"] },
    sedang: { max: 18, label: "Sedang",  color: "yellow",
      title: "Risiko Sedang Perlu Perhatian Segera",
      text:  "Jawabanmu mengindikasikan pola perilaku yang memerlukan perhatian. Kamu mungkin sudah merasakan dampak berjudi di beberapa area hidupmu. Program intervensi dini akan sangat membantu.",
      recs:  ["Jadwalkan sesi konseling dengan psikolog SIRIUS", "Ikuti program Regulasi Emosi (8 minggu)", "Bergabung dengan komunitas Ruang Aman SIRIUS"] },
    tinggi: { max: 99, label: "Tinggi",  color: "red",
      title: "Risiko Tinggi Butuh Penanganan Profesional",
      text:  "Hasil asesmen menunjukkan adiksi yang signifikan. Ini bukan akhir ini adalah langkah pertama menuju pemulihan. Tim profesional SIRIUS siap mendampingimu sepenuhnya.",
      recs:  ["Hubungi konselor SIRIUS hari ini", "Ikuti Program Rehabilitasi Intensif (12 minggu)", "Informasikan kondisi kepada anggota keluarga terpercaya", "Hubungi hotline 119 ext 8 jika dalam kondisi krisis"] },
  },

  
  faq: [
    { q: "Apakah asesmen SIRIUS benar-benar rahasia?",
      a: "Ya. Semua data yang kamu isi bersifat rahasia penuh. Kami tidak menyimpan identitas tanpa persetujuanmu dan hasil asesmen hanya ditampilkan untukmu." },
    { q: "Berapa lama proses pemulihan dengan SIRIUS?",
      a: "Durasi bervariasi per individu. Program standar 8–12 minggu, namun banyak klien merasakan perubahan signifikan sejak minggu ke-3." },
    { q: "Apakah layanan SIRIUS berbayar?",
      a: "Asesmen awal, Teman Curhat AI, dan akses komunitas gratis. Sesi konseling dengan psikolog dikenakan biaya yang bisa dikonsultasikan lebih lanjut." },
    { q: "Bagaimana jika saya dalam kondisi darurat?",
      a: "Segera hubungi hotline kami di 119 ext 8 yang tersedia 24/7. Tim kami siap membantu kapan pun dibutuhkan." },
    { q: "Apakah ada sesi grup selain individual?",
      a: "Ya. SIRIUS menawarkan keduanya. Sesi grup dalam program Ruang Aman dipandu fasilitator terlatih." },
    { q: "Bagaimana cara keluarga membantu proses pemulihan?",
      a: "SIRIUS menyediakan sesi edukasi keluarga dan konseling pasangan/keluarga untuk membangun sistem dukungan yang kuat di rumah." },
    { q: "Apakah layanan tersedia di luar Pulau Jawa?",
      a: "Semua layanan utama tersedia online sehingga bisa diakses dari seluruh Indonesia. Tatap muka tersedia di Jakarta, Surabaya, dan Bandung." },
  ],

  
  profesional: [
    { type: "Psikolog Klinis",   name: "Dr. Anindita Raras, M.Psi.", spec: "Adiksi & Trauma Recovery",          avail: "Tersedia hari ini",  photo: "assets/psi1.jpg" },
    { type: "Konselor Adiksi",   name: "Budi Santoso, S.Psi.",       spec: "CBT & Mindfulness-Based Therapy",  avail: "Tersedia besok",     photo: "assets/psi2.jpg" },
    { type: "Psikiater",         name: "dr. Citra Dewi, Sp.KJ",      spec: "Gangguan Mood & Impulsivitas",     avail: "Minggu ini",         photo: "assets/psi3.jpg" },
    { type: "Konselor Keluarga", name: "Dian Permatasari, M.Psi.",   spec: "Family Systems & Relationship",   avail: "Tersedia hari ini",  photo: "assets/psi4.jpg" },
    { type: "Psikolog Klinis",   name: "Eko Prasetyo, M.Psi.",       spec: "Terapi Perilaku & Regulasi Emosi",avail: "Tersedia hari ini",  photo: "assets/psi5.jpg" },
    { type: "Fasilitator Grup",  name: "Fitri Handayani, S.Sos.",    spec: "Community Support & Peer Recovery",avail: "Tersedia besok",    photo: "assets/psi6.jpg" },
  ],

  
  testimoni: [
    { init:"RA", name:"Rizky A.",    loc:"Jakarta",    stars:5, tag:"Program Rehabilitasi", date:"Feb 2025",
      text:"Saya nggak nyangka bisa sampai di titik ini. Dua tahun lalu saya kehilangan segalanya karena judi online, tapi SIRIUS benar-benar membantu saya bangkit. Konselor saya sangat memahami tanpa menghakimi." },
    { init:"DN", name:"Dian N.",     loc:"Surabaya",   stars:5, tag:"Konseling Profesional", date:"Jan 2025",
      text:"Program 12 minggu SIRIUS mengubah hidup saya. Saya belajar mengenali trigger dan mengelola emosi. Sekarang sudah 8 bulan bersih dan karier mulai membaik." },
    { init:"BH", name:"Bagus H.",    loc:"Bandung",    stars:4, tag:"Teman Curhat",          date:"Mar 2025",
      text:"Fitur Teman Curhat sangat membantu di momen-momen kritis tengah malam. Saya bisa curhat kapan saja tanpa menunggu jadwal konseling." },
    { init:"SW", name:"Sari W.",     loc:"Medan",      stars:5, tag:"Program Rehabilitasi",  date:"Nov 2024",
      text:"Suami saya berubah 180 derajat setelah 3 bulan bersama SIRIUS. Sesi keluarga sangat membantu kami rebuild kepercayaan bersama." },
    { init:"FP", name:"Fajar P.",    loc:"Yogyakarta", stars:5, tag:"Ruang Aman",            date:"Okt 2024",
      text:"Ruang Aman adalah game changer buat saya. Bertemu orang yang punya pengalaman serupa membuat saya tidak merasa sendirian." },
    { init:"LK", name:"Linda K.",    loc:"Makassar",   stars:5, tag:"Konseling Profesional", date:"Des 2024",
      text:"Saya ragu di awal karena takut dihakimi, tapi ternyata sebaliknya. Psikolog SIRIUS sangat profesional dan hangat." },
    { init:"MR", name:"Mika R.",     loc:"Semarang",   stars:4, tag:"Teman Curhat",          date:"Jan 2025",
      text:"Awalnya skeptis dengan AI chatbot, tapi Teman Curhat SIRIUS terasa sangat manusiawi dan membuat saya merasa didengar." },
    { init:"TH", name:"Teguh H.",    loc:"Bekasi",     stars:5, tag:"Program Rehabilitasi",  date:"Feb 2025",
      text:"Asesmen awalnya komprehensif dan tepat sasaran. Dua bulan kemudian saya sudah bisa mulai bekerja lagi." },
    { init:"NA", name:"Nadia A.",    loc:"Depok",      stars:5, tag:"Konseling Profesional", date:"Mar 2025",
      text:"SIRIUS membuktikan bahwa pemulihan adalah mungkin. Bukan hanya berhenti berjudi, tapi benar-benar membangun hidup baru yang bermakna." },
  ],

  
  // ─── EDUKASI ────────────────────────────────────────────────────────────────
  // Semua gambar dari Pexels (free, no attribution required)
  // Format CDN: https://images.pexels.com/photos/{ID}/pexels-photo-{ID}.jpeg
  edukasi: [
    {
      id: 1, cat: "Psikologi", readTime: "5 mnt",
      title: "Apa Itu Adiksi Judi dan Mengapa Sulit Berhenti?",
      excerpt: "Adiksi judi bukan soal lemahnya karakter, melainkan perubahan nyata pada cara otak memproses reward dan risiko. Pelajari ilmu di baliknya.",
      // Pexels #6963944 – Man stressed looking at phone/laptop at night, gambling concept
      img: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Adiksi judi online adalah kondisi kesehatan mental yang ditandai oleh dorongan kompulsif untuk terus berjudi meskipun sudah menyadari dampak negatifnya.</p>
<p>Ketika seseorang berjudi, otak melepaskan dopamin neurotransmitter yang menciptakan perasaan senang dan puas. Seiring waktu, otak membutuhkan stimulasi yang semakin besar untuk mendapatkan efek yang sama, menciptakan siklus kecanduan.</p>
<h4>Mengapa Sulit Berhenti?</h4>
<ul><li><strong>Distorsi kognitif</strong> keyakinan keliru bahwa menang besar ada di balik kekalahan berikutnya</li><li><strong>Pelarian emosional</strong> berjudi sebagai cara mengatasi stres, kesepian, atau kecemasan</li><li><strong>Near-miss effect</strong> hampir menang terasa seperti menang, mempertahankan motivasi</li></ul>
<p>Pemulihan yang efektif memerlukan pendekatan profesional yang menangani akar psikologis, bukan sekadar menahan diri.</p>`
    },
    {
      id: 2, cat: "Pemulihan", readTime: "7 mnt",
      title: "5 Langkah Pertama Menuju Pemulihan dari Judi Online",
      excerpt: "Memulai perjalanan pemulihan terasa berat, tapi setiap langkah besar dimulai dari satu keputusan kecil. Ini panduan praktisnya.",
      // Pexels #3807571 – Person walking up stairs, hope/recovery concept
      img: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Memutuskan untuk pulih adalah langkah paling berani yang bisa kamu ambil. Berikut 5 langkah konkret untuk memulai:</p>
<ol><li><strong>Akui masalahnya</strong> Kesadaran adalah fondasi pemulihan. Kamu sudah memulainya dengan membaca ini.</li><li><strong>Cari dukungan profesional</strong> Hubungi psikolog atau konselor yang berpengalaman di bidang adiksi.</li><li><strong>Batasi akses</strong> Blokir aplikasi judi, minta anggota keluarga pegang kendali keuangan sementara.</li><li><strong>Bangun rutinitas sehat</strong> Olahraga, tidur teratur, dan aktivitas sosial mengisi waktu yang biasanya digunakan untuk berjudi.</li><li><strong>Temukan komunitas</strong> Bergabung dengan support group memberikan akuntabilitas dan empati yang nyata.</li></ol>`
    },
    {
      id: 3, cat: "Keluarga", readTime: "6 mnt",
      title: "Bagaimana Mendukung Anggota Keluarga yang Berjuang dengan Adiksi Judi",
      excerpt: "Adiksi judi tidak hanya mempengaruhi individu seluruh keluarga ikut terdampak. Ini cara mendukung tanpa justru memperparah situasi.",
      // Pexels #5699456 – Family holding hands support together indoors
      img: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Menyaksikan orang yang kamu cintai berjuang dengan adiksi bisa terasa sangat menyakitkan dan membingungkan. Berikut cara mendukung yang efektif:</p>
<h4>Yang Harus Dilakukan</h4>
<ul><li>Dengarkan tanpa menghakimi atau menyalahkan</li><li>Pelajari tentang adiksi sebagai kondisi kesehatan mental</li><li>Dorong mereka mencari bantuan profesional</li><li>Jaga batas yang sehat untuk dirimu sendiri</li></ul>
<h4>Yang Harus Dihindari</h4>
<ul><li>Menutupi atau membayar hutang akibat judi</li><li>Memberikan ultimatum yang tidak siap kamu penuhi</li><li>Mengabaikan kesehatan mentalmu sendiri</li></ul>
<p>Ingat, kamu tidak bisa memaksa seseorang untuk pulih tapi kamu bisa menciptakan lingkungan yang mendukung pemulihan.</p>`
    },
    {
      id: 4, cat: "Regulasi Emosi", readTime: "4 mnt",
      title: "Teknik Grounding untuk Mengatasi Dorongan Berjudi",
      excerpt: "Saat urge muncul, teknik grounding bisa membantu kamu kembali ke momen sekarang dan melewati gelombang keinginan tersebut.",
      // Pexels #3759079 – Person doing breathing exercise / mindful moment, calm hands on knees
      img: "https://images.pexels.com/photos/3759079/pexels-photo-3759079.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Urge atau dorongan untuk berjudi biasanya berlangsung 15–30 menit sebelum mereda. Teknik grounding membantu kamu melewati periode tersebut.</p>
<h4>Teknik 5-4-3-2-1</h4>
<p>Sebutkan secara sadar:</p>
<ul><li>5 hal yang bisa kamu <strong>lihat</strong></li><li>4 hal yang bisa kamu <strong>sentuh</strong></li><li>3 hal yang bisa kamu <strong>dengar</strong></li><li>2 hal yang bisa kamu <strong>cium</strong></li><li>1 hal yang bisa kamu <strong>rasakan</strong></li></ul>
<p>Teknik ini mengalihkan fokus dari pikiran kompulsif ke realitas saat ini, membantu sistem saraf kembali ke keadaan tenang.</p>`
    },
    {
      id: 5, cat: "Keuangan", readTime: "8 mnt",
      title: "Membangun Kembali Keuangan Setelah Adiksi Judi",
      excerpt: "Dampak finansial adiksi judi bisa sangat besar, tapi pemulihan keuangan adalah mungkin dengan strategi yang tepat dan dukungan yang benar.",
      // Pexels #4386431 – Person reviewing finances / budgeting with notebook and calculator
      img: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Pemulihan finansial adalah bagian integral dari proses pemulihan secara keseluruhan. Ini adalah perjalanan yang memerlukan kesabaran dan strategi.</p>
<h4>Langkah Awal Pemulihan Finansial</h4>
<ol><li><strong>Audit kondisi keuangan</strong> catat semua hutang, aset, dan pengeluaran rutin</li><li><strong>Delegasikan kendali keuangan</strong> minta anggota keluarga terpercaya membantu mengelola keuangan sementara</li><li><strong>Prioritaskan kebutuhan dasar</strong> makanan, tempat tinggal, dan transportasi lebih dulu</li><li><strong>Negosiasikan hutang</strong> hubungi kreditur untuk restrukturisasi atau cicilan</li><li><strong>Bangun dana darurat kecil</strong> bahkan Rp 100.000 adalah permulaan yang baik</li></ol>`
    },
    {
      id: 6, cat: "Mindfulness", readTime: "5 mnt",
      title: "Meditasi Mindfulness untuk Pemulihan Adiksi",
      excerpt: "Praktik mindfulness terbukti secara ilmiah membantu mengurangi craving dan meningkatkan regulasi emosi pada individu yang pulih dari adiksi.",
      // Pexels #3822622 – Person meditating outdoors, peaceful, eyes closed
      img: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
      content: `<p>Mindfulness adalah praktik memusatkan perhatian pada momen saat ini tanpa penilaian. Penelitian menunjukkan efektivitasnya dalam mengurangi relaps adiksi.</p>
<h4>Latihan Dasar: Pernapasan Sadar</h4>
<ol><li>Duduk nyaman, punggung tegak</li><li>Tutup mata atau pandang titik di lantai</li><li>Tarik nafas 4 hitungan, tahan 4, hembuskan 6</li><li>Saat pikiran tentang judi muncul, akui tanpa melibatkan diri: "Itu hanyalah pikiran"</li><li>Kembali ke nafas</li></ol>
<p>Lakukan 10 menit setiap pagi. Konsistensi lebih penting dari durasi.</p>`
    },
  ],

  
  // ─── PARTNER ────────────────────────────────────────────────────────────────
  // Logo diambil dari sumber resmi / Wikipedia masing-masing organisasi
  partner: [
    {
      name: "KEMENKES RI",
      // Logo resmi Kementerian Kesehatan RI dari Wikipedia
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Lambang_Kementerian_Kesehatan_Republik_Indonesia.svg/200px-Lambang_Kementerian_Kesehatan_Republik_Indonesia.svg.png",
    },
    {
      name: "PDSKJI",
      // Logo dari situs resmi PDSKJI
      logo: "https://pdskji.org/images/logo_pdskji.png",
    },
    {
      name: "Into The Light",
      // Logo Into The Light Indonesia dari situs resminya
      logo: "https://www.intothelightid.org/wp-content/uploads/2020/02/logo-itl-baru.png",
    },
    {
      name: "Yayasan Pulih",
      // Logo Yayasan Pulih dari situs resminya
      logo: "https://yayasanpulih.org/wp-content/uploads/2019/08/logo-pulih.png",
    },
    {
      name: "HIMPSI",
      // Logo HIMPSI dari situs resminya
      logo: "https://himpsi.or.id/images/logo/logo-himpsi.png",
    },
    {
      name: "Kemensos",
      // Logo resmi Kementerian Sosial RI dari Wikipedia
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Lambang_Kementerian_Sosial_Republik_Indonesia.svg/200px-Lambang_Kementerian_Sosial_Republik_Indonesia.svg.png",
    },
  ],

  
  chatResponses: [
    "Halo! Aku SIRIUS, teman curhatmu. Aku di sini untuk mendengarkan tanpa menghakimi. Ada yang ingin kamu ceritakan hari ini?",
    "Aku dengar kamu. Itu pasti tidak mudah untuk dilewati. Mau ceritakan lebih lanjut tentang apa yang kamu rasakan?",
    "Kamu sudah mengambil langkah yang sangat berani dengan mau bercerita. Itu hal yang luar biasa. Sudah berapa lama kamu merasakan ini?",
    "Perasaan itu sangat wajar. Banyak orang berjuang dengan hal yang sama. Yang penting sekarang, kamu tidak sendirian.",
    "Aku sangat menghargai kepercayaanmu berbagi ini denganku. Apakah ada seseorang di sekitarmu yang tahu tentang situasi ini?",
    "Itu terdengar berat sekali. Kamu sudah sangat kuat bisa bertahan sampai sejauh ini. Apa yang paling kamu butuhkan saat ini?",
    "Memulai perjalanan pemulihan memang tidak mudah, tapi kamu sudah di tempat yang tepat. Mau aku bantu menghubungkan kamu dengan konselor profesional?",
    "Ingat, satu hari tanpa berjudi adalah kemenangan besar. Setiap langkah kecil punya makna yang nyata dalam proses pemulihanmu.",
  ],

  
  aiSystemPrompt: `Kamu adalah psikolog klinis AI dari SIRIUS, layanan pemulihan adiksi judi online Indonesia.

Tugasmu: Analisis jawaban asesmen pengguna dan berikan hasil dalam format JSON berikut (HANYA JSON, tanpa teks lain):
{
  "category": "Ringan" | "Sedang" | "Tinggi",
  "score": <angka 0-30>,
  "title": "<judul hasil>",
  "summary": "<paragraf ringkas kondisi pengguna, empatik dan non-judgmental, dalam Bahasa Indonesia>",
  "recommendations": ["<saran 1>", "<saran 2>", "<saran 3>"],
  "urgency": "low" | "medium" | "high"
}

Panduan scoring:
- Ringan (0-8): Beberapa pola yang perlu diperhatikan, belum tahap mengkhawatirkan
- Sedang (9-18): Pola yang memerlukan perhatian dan intervensi dini
- Tinggi (19-30): Adiksi signifikan yang memerlukan penanganan profesional segera

Gunakan bahasa Indonesia yang hangat, empatik, dan memberdayakan (bukan menghakimi).`,

  
  chatSystemPrompt: `Kamu adalah Teman Curhat dari SIRIUS, asisten empatik yang membantu pengguna yang berjuang dengan adiksi judi online.

Panduan:
- Bahasa Indonesia yang hangat, lembut, dan supportif
- Tidak pernah menghakimi atau menyalahkan
- Validasi perasaan pengguna sebelum memberikan saran
- Jika ada tanda-tanda krisis darurat, sarankan menghubungi 119 ext 8
- Dorong pengguna untuk mencari bantuan profesional jika diperlukan
- Jaga respons tetap ringkas (2-4 kalimat) dan conversational
- Jika ditanya soal topik di luar kesehatan mental/adiksi, redirect dengan lembut`,
};
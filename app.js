// ============================================================
//  SIRIUS — APP LOGIC
//  Routing, rendering, asesmen, chatbot, AI integration
// ============================================================

// ── STATE ─────────────────────────────────────────────────
const STATE = {
  page: 'beranda',
  asesmen: { step: 'intro', current: 0, answers: {}, result: null },
  chat: { messages: [], isTyping: false, responseIdx: 0 },
  bantuan: { tab: 'curhat' },
  eduDetail: null,
  hotlineOpen: false,
  bubbleOpen: false,
};

// ── ROUTER ────────────────────────────────────────────────
function navigate(page, opts = {}) {
  STATE.page = page;
  STATE.eduDetail = opts.eduId || null;

  document.querySelectorAll('[data-page]').forEach(el => {
    el.classList.toggle('nav-active', el.dataset.page === page);
  });

  // Close mobile menu
  document.getElementById('mobileMenu')?.classList.add('hidden');

  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── MAIN RENDER ───────────────────────────────────────────
function renderApp() {
  const main = document.getElementById('main-content');
  const renders = {
    beranda: renderBeranda,
    'cek-risiko': renderCekRisiko,
    edukasi: renderEdukasi,
    kontak: renderKontak,
  };
  main.innerHTML = (renders[STATE.page] || renderBeranda)();
  bindEvents();
  animateOnLoad();
}

// ══════════════════════════════════════════════════════════
//  PAGE: BERANDA
// ══════════════════════════════════════════════════════════
function renderBeranda() {
  return `
    ${renderHero()}
    ${renderTentang()}
    ${renderModelSection()}
    ${renderLayanan()}
    ${renderTestimoni()}
    ${renderPartner()}
    ${renderFooter()}
  `;
}

function renderHero() {
  const stats = DATA.stats.map(s => `
    <div class="stat-item text-center">
      <div class="text-3xl font-bold text-cyan-300 font-serif">${s.num}</div>
      <div class="text-xs text-blue-200 mt-1">${s.label}</div>
    </div>
  `).join('<div class="w-px bg-white/10 hidden sm:block"></div>');

  return `
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 px-6 md:px-12 lg:px-20">
    <!-- bg layers -->
    <div class="absolute inset-0 hero-bg"></div>
    <div class="absolute inset-0 hero-grid opacity-5"></div>
    <div class="absolute top-1/3 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- left -->
        <div class="animate-fadeUp">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-cyan-300 text-xs font-semibold tracking-widest uppercase mb-8">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Layanan Pemulihan Berbasis Psikologi
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Pulih dari<br><em class="text-cyan-300 not-italic">Judi Online,</em><br>Mulai Hari Ini
          </h1>
          <p class="text-blue-100/70 text-lg leading-relaxed mb-10 max-w-lg font-light">
            SIRIUS hadir sebagai titik terang untuk membangun kembali kekuatan mental, kesejahteraan pribadi, dan kehidupan yang bermakna.
          </p>
          <div class="flex flex-wrap gap-4">
            <button onclick="navigate('cek-risiko')" class="btn-primary">Mulai Asesmen</button>
            <button onclick="openHotline()" class="btn-outline">Hubungi Hotline</button>
          </div>
        </div>
        <!-- right: stats card -->
        <div class="hidden lg:flex justify-end animate-fadeUp delay-200">
          <div class="glass-card p-8 rounded-3xl w-80">
            <div class="text-xs font-semibold text-cyan-300 tracking-widest uppercase mb-6">Dampak Nyata</div>
            <div class="flex flex-col gap-6">
              ${DATA.stats.map(s => `
                <div class="flex items-center gap-4">
                  <div class="text-3xl font-serif font-bold text-cyan-300">${s.num}</div>
                  <div class="text-sm text-blue-100/60">${s.label}</div>
                </div>
              `).join('<hr class="border-white/10">')}
            </div>
          </div>
        </div>
      </div>
      <!-- mobile stats strip -->
      <div class="flex justify-around mt-12 lg:hidden glass-card rounded-2xl p-4">
        ${stats}
      </div>
    </div>

    <!-- scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs animate-bounce">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </div>
  </section>`;
}

function renderTentang() {
  return `
  <section id="tentang" class="section-mid py-24 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div class="animate-fadeUp">
        <div class="section-label text-cyan-400">Tentang SIRIUS</div>
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-6 leading-tight">
          Lebih dari Sekadar<br>Layanan Pemulihan
        </h2>
        <p class="text-blue-100/60 leading-relaxed mb-4 font-light">
          SIRIUS adalah layanan pemulihan adiksi judi online melalui pendekatan psikologis dan dukungan komunitas. Kami membantu setiap individu untuk kembali mengenali diri dan mengendalikan hidupnya secara sehat.
        </p>
        <p class="text-blue-100/60 leading-relaxed font-light">
          SIRIUS hadir sebagai titik terang untuk membangun kembali kekuatan mental, kesejahteraan pribadi, hingga mencapai kehidupan yang bermakna.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 animate-fadeUp delay-100">
        <div class="glass-card-light rounded-2xl p-5">
          <div class="text-cyan-400 font-semibold text-sm mb-2">Pendekatan Klinis</div>
          <p class="text-blue-100/55 text-sm leading-relaxed font-light">Metode berbasis bukti ilmiah dari psikologi kognitif dan behavioral.</p>
        </div>
        <div class="glass-card-light rounded-2xl p-5">
          <div class="text-cyan-400 font-semibold text-sm mb-2">Komunitas Suportif</div>
          <p class="text-blue-100/55 text-sm leading-relaxed font-light">Terhubung dengan sesama yang memahami perjalananmu.</p>
        </div>
        <div class="glass-card-light rounded-2xl p-5 col-span-2">
          <div class="text-cyan-400 font-semibold text-sm mb-2">Privasi Terjaga Penuh</div>
          <p class="text-blue-100/55 text-sm leading-relaxed font-light">Semua sesi dan data kamu dijaga kerahasiaannya sesuai standar etika psikologi Indonesia.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function renderModelSection() {
  const cards = DATA.model.map((m, i) => `
    <div class="model-card animate-fadeUp" style="animation-delay:${i*80}ms">
      <div class="text-4xl font-serif font-bold text-cyan-300 leading-none mb-3">${m.letter}</div>
      <div class="text-white font-semibold text-sm mb-2 leading-tight">${m.name}</div>
      <div class="text-blue-100/50 text-xs leading-relaxed font-light">${m.desc}</div>
    </div>
  `).join('');

  return `
  <section class="section-mid-2 py-24 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-14">
        <div class="section-label text-cyan-400 inline-block">SIRIUS Model</div>
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mt-3">6 Langkah Bebas Judi Online</h2>
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderLayanan() {
  const cards = DATA.layanan.map(l => `
    <div class="bg-white rounded-2xl p-7 shadow-lg hover:-translate-y-1 transition-all duration-300 border-b-4 border-transparent hover:border-blue-500 group">
      <div class="text-blue-200 text-5xl font-serif font-bold mb-4 leading-none">${l.num}</div>
      <div class="text-blue-600 mb-4">${l.icon}</div>
      <h3 class="text-lg font-bold text-navy-900 mb-3">${l.title}</h3>
      <p class="text-gray-500 text-sm leading-relaxed font-light">${l.desc}</p>
    </div>
  `).join('');

  return `
  <section id="layanan" class="section-gradient py-24 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div class="section-label text-blue-500">Layanan Kami</div>
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3">Apa yang Kami Tawarkan</h2>
        </div>
        <button onclick="navigate('cek-risiko')" class="btn-primary self-start md:self-auto">Mulai Asesmen Sekarang</button>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        ${cards}
      </div>
    </div>
  </section>`;
}

function renderTestimoni() {
  const cards = DATA.testimoni.slice(0, 6).map(t => `
    <div class="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-gray-100 hover:border-blue-400 hover:-translate-y-1 transition-all duration-300">
      <div class="text-yellow-400 text-sm tracking-wider mb-3">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="text-gray-500 text-sm leading-relaxed italic mb-5 font-light">"${t.text}"</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">${t.init}</div>
          <div>
            <div class="text-sm font-semibold text-gray-800">${t.name}</div>
            <div class="text-xs text-gray-400">${t.loc} · ${t.date}</div>
          </div>
        </div>
        <span class="text-xs bg-blue-50 text-blue-500 px-2 py-1 rounded-full font-medium">${t.tag}</span>
      </div>
    </div>
  `).join('');

  return `
  <section id="kata-mereka" class="bg-gray-50 py-24 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
        <div>
          <div class="section-label text-blue-500">Kata Mereka</div>
          <h2 class="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-3">Cerita Nyata, Perubahan Nyata</h2>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cards}
      </div>
    </div>
  </section>`;
}

// ── PARTNER: logo gambar dengan fallback teks ─────────────
function renderPartner() {
  const logos = DATA.partner.map(p => `
    <div class="border border-gray-200 rounded-xl px-5 py-3 bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 flex items-center justify-center h-16 w-36">
      <img
        src="${p.logo}"
        alt="${p.name}"
        title="${p.name}"
        class="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
        onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
      />
      <span class="hidden text-xs font-bold text-gray-400 tracking-wide text-center leading-tight">${p.name}</span>
    </div>
  `).join('');

  return `
  <section class="bg-white py-16 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto text-center">
      <div class="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-8">Didukung Oleh</div>
      <div class="flex flex-wrap justify-center gap-4 mb-10">${logos}</div>
      <button class="btn-primary">Donasi Sekarang</button>
    </div>
  </section>`;
}

function renderFooter() {
  return `
  <footer class="bg-navy-950 py-14 px-6 md:px-12 lg:px-20">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
      <div class="md:col-span-2">
        <div class="logo-text text-2xl text-white mb-4">SIR<span class="text-cyan-400">IUS</span></div>
        <p class="text-blue-200/40 text-sm leading-relaxed font-light max-w-sm">Layanan pemulihan adiksi judi online berbasis psikologi dan dukungan komunitas untuk Indonesia yang lebih sehat.</p>
      </div>
      <div>
        <div class="text-xs font-semibold text-blue-200/40 tracking-widest uppercase mb-4">Navigasi</div>
        <ul class="space-y-2">
          ${['beranda','cek-risiko','edukasi','kontak'].map(p => `<li><a onclick="navigate('${p}')" class="text-blue-200/60 hover:text-cyan-400 text-sm cursor-pointer transition-colors capitalize">${p.replace('-',' ')}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="text-xs font-semibold text-blue-200/40 tracking-widest uppercase mb-4">Kontak</div>
        <ul class="space-y-2 text-sm text-blue-200/60 font-light">
          <li>119 ext 8 (Hotline)</li>
          <li>bantuan@sirius.id</li>
          <li>@sirius.id</li>
        </ul>
      </div>
    </div>
    <div class="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-6 text-center text-xs text-blue-200/25">
      © 2025 SIRIUS. Hak cipta dilindungi. Data pribadi dijaga sesuai UU PDP.
    </div>
  </footer>`;
}

// ══════════════════════════════════════════════════════════
//  PAGE: CEK RISIKO JUDI (ASESMEN)
// ══════════════════════════════════════════════════════════
function renderCekRisiko() {
  const step = STATE.asesmen.step;
  const inner = {
    intro: renderAsesmenIntro,
    quiz: renderAsesmenQuiz,
    loading: renderAsesmenLoading,
    result: renderAsesmenResult,
  }[step]?.() || renderAsesmenIntro();

  return `
  <div class="min-h-screen">
    <!-- hero header -->
    <div class="section-hero-sm pt-24 pb-16 px-6 md:px-12 text-center">
      <div class="section-label text-cyan-400 inline-block mb-3">Cek Risiko Judi</div>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Kenali Kondisimu Sekarang</h1>
      <p class="text-blue-100/60 font-light max-w-lg mx-auto text-sm leading-relaxed">Asesmen psikologis dirancang oleh psikolog klinis untuk mengidentifikasi tingkat risiko dan memberikan rekomendasi yang tepat. Konfidensial &amp; gratis.</p>
    </div>
    <!-- content -->
    <div class="bg-gray-50 min-h-screen px-6 py-12">
      <div class="max-w-2xl mx-auto">${inner}</div>
    </div>
  </div>`;
}

function renderAsesmenIntro() {
  return `
  <div class="bg-white rounded-3xl p-8 md:p-12 shadow-xl text-center animate-fadeUp">
    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 mx-auto mb-8 flex items-center justify-center">
      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </div>
    <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">Sebelum Memulai</h2>
    <p class="text-gray-500 text-sm leading-relaxed max-w-md mx-auto mb-8 font-light">Asesmen ini bersifat <strong class="text-gray-700">rahasia penuh</strong> dan tidak disimpan tanpa izinmu. Jawab dengan jujur untuk hasil yang paling akurat. Tidak ada jawaban benar atau salah.</p>
    <div class="grid grid-cols-3 gap-4 mb-10 max-w-sm mx-auto">
      <div class="text-center"><div class="text-2xl font-serif font-bold text-blue-600">${DATA.asesmen.length}</div><div class="text-xs text-gray-400 mt-1">Pertanyaan</div></div>
      <div class="text-center border-x border-gray-100"><div class="text-2xl font-serif font-bold text-blue-600">5 mnt</div><div class="text-xs text-gray-400 mt-1">Estimasi</div></div>
      <div class="text-center"><div class="text-2xl font-serif font-bold text-blue-600">3</div><div class="text-xs text-gray-400 mt-1">Kategori</div></div>
    </div>
    <button onclick="startAsesmen()" class="btn-primary w-full max-w-xs">Mulai Asesmen</button>
    <p class="text-xs text-gray-400 mt-4 font-light">Data kamu aman dan tidak dibagikan kepada pihak ketiga</p>
  </div>`;
}

function renderAsesmenQuiz() {
  const q = DATA.asesmen[STATE.asesmen.current];
  const total = DATA.asesmen.length;
  const cur = STATE.asesmen.current;
  const pct = ((cur) / total) * 100;
  const saved = STATE.asesmen.answers[cur];

  let inputHtml = '';
  if (q.type === 'yn') {
    const opts = ['Ya', 'Tidak'];
    inputHtml = `<div class="grid grid-cols-2 gap-3">
      ${opts.map((o, i) => `
        <button onclick="selectAnswer(${i})" class="q-opt ${saved === i ? 'q-opt-selected' : ''}">${o}</button>
      `).join('')}
    </div>`;
  } else if (q.type === 'freq') {
    const opts = ['Tidak Pernah', 'Jarang', 'Sering', 'Selalu'];
    inputHtml = `<div class="grid grid-cols-2 gap-3">
      ${opts.map((o, i) => `
        <button onclick="selectAnswer(${i})" class="q-opt ${saved === i ? 'q-opt-selected' : ''}">${o}</button>
      `).join('')}
    </div>`;
  } else {
    inputHtml = `<textarea id="textAnswer" class="w-full border-2 border-gray-200 rounded-xl p-4 text-sm font-light text-gray-700 resize-none focus:border-blue-400 focus:outline-none transition-colors min-h-28" placeholder="Tuliskan jawabanmu di sini...">${saved || ''}</textarea>`;
  }

  return `
  <div class="animate-fadeUp">
    <!-- progress -->
    <div class="mb-8">
      <div class="flex justify-between text-xs text-gray-400 mb-2 font-light">
        <span>Pertanyaan ${cur + 1} dari ${total}</span>
        <span>${Math.round(pct)}%</span>
      </div>
      <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500" style="width:${pct}%"></div>
      </div>
    </div>
    <!-- card -->
    <div class="bg-white rounded-3xl p-8 shadow-xl mb-6">
      <div class="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-4">
        ${q.type === 'yn' ? 'Ya / Tidak' : q.type === 'freq' ? 'Frekuensi' : 'Deskriptif'}
      </div>
      <p class="text-gray-800 font-medium text-lg leading-snug mb-8">${q.text}</p>
      ${inputHtml}
    </div>
    <!-- nav -->
    <div class="flex justify-between items-center">
      <button onclick="prevQuestion()" class="${cur === 0 ? 'invisible' : ''} btn-ghost">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        Sebelumnya
      </button>
      <button onclick="nextQuestion()" class="btn-primary">
        ${cur === total - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>`;
}

function renderAsesmenLoading() {
  return `
  <div class="text-center py-20 animate-fadeUp">
    <div class="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto mb-8"></div>
    <h3 class="text-xl font-serif font-bold text-gray-800 mb-3">Menganalisis Jawabanmu...</h3>
    <p class="text-gray-400 text-sm font-light">AI kami sedang memproses hasil asesmen</p>
  </div>`;
}

function renderAsesmenResult() {
  const r = STATE.asesmen.result;
  if (!r) return '';
  const colorMap = {
    Ringan: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
    Sedang: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-700' },
    Tinggi: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
  };
  const c = colorMap[r.category] || colorMap.Sedang;

  return `
  <div class="animate-fadeUp">
    <div class="bg-white rounded-3xl p-8 shadow-xl mb-6">
      <div class="text-center mb-8">
        <div class="text-xs font-semibold text-gray-400 tracking-widest uppercase mb-4">Hasil Asesmen</div>
        <div class="inline-block px-5 py-2 rounded-full ${c.badge} text-sm font-bold mb-4">Kategori: ${r.category}</div>
        <h2 class="text-2xl font-serif font-bold text-gray-900 mb-4">${r.title}</h2>
        <p class="text-gray-500 text-sm leading-relaxed font-light max-w-md mx-auto">${r.summary}</p>
      </div>
      <div class="${c.bg} border ${c.border} rounded-2xl p-6">
        <div class="text-xs font-semibold tracking-widest uppercase ${c.text} mb-4">Rekomendasi Untukmu</div>
        ${r.recommendations.map(rec => `
          <div class="flex items-start gap-3 mb-3">
            <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
            <span class="text-gray-700 text-sm font-light leading-relaxed">${rec}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <button onclick="openBubble('curhat')" class="btn-primary text-center">Teman Curhat</button>
      <button onclick="startAsesmen(); STATE.asesmen.step='intro'; renderApp();" class="btn-ghost border border-gray-200 justify-center">Ulangi Asesmen</button>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════
//  PAGE: EDUKASI
// ══════════════════════════════════════════════════════════
function renderEdukasi() {
  if (STATE.eduDetail) return renderEduDetail(STATE.eduDetail);

  const cards = DATA.edukasi.map(e => `
    <div onclick="navigate('edukasi', {eduId: ${e.id}})" class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <!-- thumbnail: gambar asli, fallback ke gradient -->
      <div class="h-44 relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-500">
        <img
          src="${e.img}"
          alt="${e.title}"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onerror="this.style.display='none'"
        />
        <!-- badge kategori & readtime tetap di atas gambar -->
        <div class="absolute top-4 left-4 z-10">
          <span class="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">${e.cat}</span>
        </div>
        <div class="absolute bottom-4 right-4 z-10 text-white/80 text-xs font-light">${e.readTime} baca</div>
      </div>
      <div class="p-6">
        <h3 class="font-bold text-gray-900 text-base mb-2 leading-snug group-hover:text-blue-600 transition-colors">${e.title}</h3>
        <p class="text-gray-400 text-sm leading-relaxed font-light">${e.excerpt}</p>
        <div class="flex items-center gap-2 mt-4 text-blue-500 text-sm font-semibold">
          Baca Selengkapnya
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  `).join('');

  return `
  <div class="min-h-screen">
    <div class="section-hero-sm pt-24 pb-16 px-6 md:px-12 text-center">
      <div class="section-label text-cyan-400 inline-block mb-3">Edukasi</div>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Pahami, Kenali, Pulihkan</h1>
      <p class="text-blue-100/60 font-light max-w-md mx-auto text-sm">Artikel dan panduan berbasis bukti ilmiah untuk mendukung perjalanan pemulihanmu.</p>
    </div>
    <div class="bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">${cards}</div>
    </div>
    ${renderFooter()}
  </div>`;
}

// ── EDU DETAIL: hero banner pakai gambar artikel ──────────
function renderEduDetail(id) {
  const e = DATA.edukasi.find(x => x.id === id);
  if (!e) return renderEdukasi();
  return `
  <div class="min-h-screen bg-gray-50">
    <!-- hero dengan gambar -->
    <div class="relative section-hero-sm pt-24 pb-0 px-0 overflow-hidden">
      <!-- gambar full-width sebagai bg hero -->
      <div class="absolute inset-0">
        <img src="${e.img}" alt="${e.title}" class="w-full h-full object-cover opacity-20" onerror="this.style.display='none'"/>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1b2e]"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-6 md:px-12 pb-12">
        <button onclick="STATE.eduDetail=null; renderApp()" class="flex items-center gap-2 text-blue-200/60 hover:text-white text-sm mb-6 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg> Kembali ke Edukasi
        </button>
        <span class="bg-white/15 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">${e.cat}</span>
        <h1 class="text-2xl md:text-3xl font-serif font-bold text-white mt-4 mb-3 leading-tight">${e.title}</h1>
        <div class="text-blue-200/50 text-sm">${e.readTime} baca</div>
      </div>
    </div>
    <!-- thumbnail image card di atas konten -->
    <div class="max-w-3xl mx-auto px-6 -mt-6 mb-0 relative z-20">
      <img
        src="${e.img}"
        alt="${e.title}"
        class="w-full h-56 object-cover rounded-2xl shadow-xl"
        onerror="this.style.display='none'"
      />
    </div>
    <!-- konten artikel -->
    <div class="px-6 py-10">
      <div class="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg prose-custom">
        ${e.content}
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════════════════════
//  PAGE: KONTAK & BANTUAN
// ══════════════════════════════════════════════════════════
function renderKontak() {
  const hotlines = DATA.hotline.map(h => `
    <div class="border-2 border-gray-100 rounded-2xl p-5 hover:border-blue-200 transition-colors">
      <div class="text-xs font-semibold text-blue-400 tracking-widest uppercase mb-2">${h.label}</div>
      <div class="text-xl font-bold text-gray-900 mb-1">${h.value}</div>
      <div class="text-xs text-gray-400 font-light">${h.hours}</div>
    </div>
  `).join('');

  const pros = DATA.profesional.map(p => `
    <div class="bg-gray-50 rounded-2xl p-5 flex items-start gap-4">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">${p.name.split(' ')[p.name.split(' ').length > 2 ? 1 : 0][0]}${p.name.split(' ')[p.name.split(' ').length > 2 ? 2 : 1]?.[0] || ''}</div>
      <div class="flex-1">
        <div class="text-xs text-blue-400 font-semibold uppercase tracking-wide mb-1">${p.type}</div>
        <div class="font-bold text-gray-900 text-sm">${p.name}</div>
        <div class="text-gray-400 text-xs mb-2">${p.spec}</div>
        <div class="flex items-center gap-1.5 text-xs text-green-600 font-medium">
          <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>${p.avail}
        </div>
      </div>
      <button class="text-xs bg-blue-50 text-blue-600 font-semibold px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">Hubungi</button>
    </div>
  `).join('');

  return `
  <div class="min-h-screen">
    <div class="section-hero-sm pt-24 pb-16 px-6 md:px-12 text-center">
      <div class="section-label text-cyan-400 inline-block mb-3">Kontak & Bantuan</div>
      <h1 class="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Kami Ada untuk Kamu</h1>
      <p class="text-blue-100/60 font-light max-w-md mx-auto text-sm">Pilih cara yang paling nyaman untuk mendapatkan bantuan.</p>
    </div>
    <div class="bg-gray-50 px-6 md:px-12 lg:px-20 py-16">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        <!-- Hotline -->
        <div>
          <h2 class="text-xl font-serif font-bold text-gray-900 mb-6">Hubungi Kami</h2>
          <div class="space-y-4 mb-10">${hotlines}</div>
          <!-- Form -->
          <div class="bg-white rounded-3xl p-8 shadow-sm">
            <h3 class="font-bold text-gray-900 mb-6">Kirim Pesan</h3>
            <div class="space-y-4">
              <input type="text" placeholder="Nama kamu" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-blue-400 focus:outline-none transition-colors font-light text-gray-700">
              <input type="email" placeholder="Alamat email" class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-blue-400 focus:outline-none transition-colors font-light text-gray-700">
              <textarea placeholder="Ceritakan apa yang ingin kamu sampaikan..." class="w-full border-2 border-gray-100 rounded-xl px-4 py-3 text-sm focus:border-blue-400 focus:outline-none transition-colors resize-none font-light text-gray-700 h-32"></textarea>
              <button class="btn-primary w-full">Kirim Pesan</button>
            </div>
          </div>
        </div>
        <!-- Profesional -->
        <div>
          <h2 class="text-xl font-serif font-bold text-gray-900 mb-6">Tim Profesional</h2>
          <div class="space-y-3">${pros}</div>
        </div>
      </div>
    </div>
    ${renderFooter()}
  </div>`;
}

// ══════════════════════════════════════════════════════════
//  HOTLINE MODAL
// ══════════════════════════════════════════════════════════
function openHotline() {
  document.getElementById('hotline-modal').classList.remove('hidden');
  document.getElementById('hotline-modal').classList.add('flex');
}
function closeHotline() {
  document.getElementById('hotline-modal').classList.add('hidden');
  document.getElementById('hotline-modal').classList.remove('flex');
}

// ══════════════════════════════════════════════════════════
//  BANTUAN BUBBLE (bottom right)
// ══════════════════════════════════════════════════════════
function openBubble(tab = 'curhat') {
  STATE.bantuan.tab = tab;
  STATE.bubbleOpen = true;
  document.getElementById('bubble-panel').classList.remove('hidden', 'scale-0', 'opacity-0');
  document.getElementById('bubble-panel').classList.add('scale-100', 'opacity-100');
  document.getElementById('bubble-btn').classList.add('rotate-45');
  renderBubbleContent();
}
function closeBubble() {
  STATE.bubbleOpen = false;
  document.getElementById('bubble-panel').classList.add('scale-0', 'opacity-0');
  document.getElementById('bubble-panel').classList.remove('scale-100', 'opacity-100');
  setTimeout(() => document.getElementById('bubble-panel').classList.add('hidden'), 300);
  document.getElementById('bubble-btn').classList.remove('rotate-45');
}
function toggleBubble() {
  STATE.bubbleOpen ? closeBubble() : openBubble();
}
function switchBubbleTab(tab) {
  STATE.bantuan.tab = tab;
  renderBubbleContent();
}
function renderBubbleContent() {
  const panel = document.getElementById('bubble-content');
  if (STATE.bantuan.tab === 'curhat') {
    panel.innerHTML = renderChatUI();
    scrollChat();
  } else if (STATE.bantuan.tab === 'faq') {
    panel.innerHTML = renderFAQUI();
    bindFAQ();
  } else {
    panel.innerHTML = renderProMini();
  }
  // update tab active state
  document.querySelectorAll('.bubble-tab').forEach(b => {
    b.classList.toggle('bubble-tab-active', b.dataset.tab === STATE.bantuan.tab);
  });
}

function renderChatUI() {
  const msgs = STATE.chat.messages.length
    ? STATE.chat.messages.map(m => `
        <div class="flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} mb-3">
          <div class="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-light leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-br-sm' : 'bg-gray-100 text-gray-800 rounded-bl-sm'}">
            ${m.content}
          </div>
        </div>
      `).join('')
    : `<div class="flex justify-start mb-3">
        <div class="max-w-[85%] px-4 py-2.5 rounded-2xl bg-gray-100 text-gray-800 text-sm font-light leading-relaxed rounded-bl-sm">
          Halo! Aku SIRIUS, teman curhatmu. Aku di sini untuk mendengarkan tanpa menghakimi. Ada yang ingin kamu ceritakan hari ini?
        </div>
      </div>`;

  const typing = STATE.chat.isTyping ? `
    <div class="flex justify-start mb-3" id="typing-indicator">
      <div class="px-4 py-3 bg-gray-100 rounded-2xl rounded-bl-sm">
        <div class="flex gap-1.5"><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:.15s"></div><div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:.3s"></div></div>
      </div>
    </div>` : '';

  return `
    <div id="chat-msgs" class="flex-1 overflow-y-auto p-4 flex flex-col">${msgs}${typing}</div>
    <div class="p-3 border-t border-gray-100 flex gap-2">
      <input id="chat-input" type="text" placeholder="Tulis pesanmu..." class="flex-1 text-sm border-2 border-gray-200 rounded-xl px-3 py-2 focus:border-blue-400 focus:outline-none font-light text-gray-700" onkeypress="if(event.key==='Enter') sendChatMsg()">
      <button onclick="sendChatMsg()" class="bg-blue-600 text-white rounded-xl px-4 py-2 text-sm font-semibold hover:bg-blue-500 transition-colors flex-shrink-0">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
      </button>
    </div>`;
}

function renderFAQUI() {
  return DATA.faq.map((f, i) => `
    <div class="border-b border-gray-100 last:border-0">
      <button onclick="toggleFAQ(${i})" class="w-full text-left py-4 px-4 flex justify-between items-start gap-3 hover:bg-gray-50 transition-colors" id="faq-q-${i}">
        <span class="text-sm font-medium text-gray-800 leading-snug">${f.q}</span>
        <svg id="faq-arrow-${i}" class="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div id="faq-a-${i}" class="hidden px-4 pb-4 text-sm text-gray-500 font-light leading-relaxed">${f.a}</div>
    </div>
  `).join('');
}

function renderProMini() {
  return DATA.profesional.map(p => `
    <div class="flex items-center gap-3 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">${p.name.charAt(0)}</div>
      <div class="flex-1 min-w-0">
        <div class="text-xs text-blue-400 font-semibold">${p.type}</div>
        <div class="font-semibold text-gray-900 text-sm truncate">${p.name}</div>
        <div class="text-xs text-green-500 font-medium">${p.avail}</div>
      </div>
      <button class="text-xs bg-blue-50 text-blue-600 px-2.5 py-1.5 rounded-lg font-semibold hover:bg-blue-100 transition-colors flex-shrink-0">Hub.</button>
    </div>
  `).join('');
}

// ── ASESMEN LOGIC ─────────────────────────────────────────
function startAsesmen() {
  STATE.asesmen = { step: 'quiz', current: 0, answers: {}, result: null };
  renderApp();
}
function selectAnswer(val) {
  STATE.asesmen.answers[STATE.asesmen.current] = val;
  document.querySelectorAll('.q-opt').forEach((b, i) => {
    b.classList.toggle('q-opt-selected', i === val);
  });
}
function nextQuestion() {
  const q = DATA.asesmen[STATE.asesmen.current];
  if (q.type === 'text') {
    STATE.asesmen.answers[STATE.asesmen.current] = document.getElementById('textAnswer')?.value || '';
  }
  if (STATE.asesmen.current < DATA.asesmen.length - 1) {
    STATE.asesmen.current++;
    renderApp();
  } else {
    processAsesmen();
  }
}
function prevQuestion() {
  if (STATE.asesmen.current > 0) {
    STATE.asesmen.current--;
    renderApp();
  }
}

async function processAsesmen() {
  STATE.asesmen.step = 'loading';
  renderApp();

  const summary = DATA.asesmen.map((q, i) => {
    const a = STATE.asesmen.answers[i];
    let answerText = '';
    if (q.type === 'yn') answerText = a === 0 ? 'Ya' : a === 1 ? 'Tidak' : 'Tidak dijawab';
    else if (q.type === 'freq') answerText = ['Tidak Pernah','Jarang','Sering','Selalu'][a] || 'Tidak dijawab';
    else answerText = a || 'Tidak dijawab';
    return `${i+1}. ${q.text}\nJawaban: ${answerText}`;
  }).join('\n\n');

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: DATA.aiSystemPrompt,
        messages: [{ role: "user", content: `Berikut jawaban asesmen pengguna:\n\n${summary}` }]
      })
    });
    const data = await response.json();
    const text = data.content?.find(c => c.type === 'text')?.text || '';
    const clean = text.replace(/```json|```/g, '').trim();
    STATE.asesmen.result = JSON.parse(clean);
  } catch (e) {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (STATE.asesmen.answers[i] !== undefined) score += STATE.asesmen.answers[i];
    }
    const cat = score <= 8 ? 'ringan' : score <= 18 ? 'sedang' : 'tinggi';
    const s = DATA.scoring[cat];
    STATE.asesmen.result = { category: s.label, title: s.title, summary: s.text, recommendations: s.recs };
  }

  STATE.asesmen.step = 'result';
  renderApp();
}

// ── CHAT LOGIC ────────────────────────────────────────────
async function sendChatMsg() {
  const input = document.getElementById('chat-input');
  const msg = input?.value?.trim();
  if (!msg) return;

  STATE.chat.messages.push({ role: 'user', content: msg });
  if (input) input.value = '';
  STATE.chat.isTyping = true;
  renderBubbleContent();
  scrollChat();

  try {
    const messages = [
      ...(STATE.chat.messages.length === 1 ? [{ role: 'assistant', content: 'Halo! Aku SIRIUS, teman curhatmu. Ada yang ingin kamu ceritakan?' }] : []),
      ...STATE.chat.messages
    ];
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        system: DATA.chatSystemPrompt,
        messages
      })
    });
    const data = await res.json();
    const reply = data.content?.find(c => c.type === 'text')?.text || DATA.chatResponses[STATE.chat.responseIdx++ % DATA.chatResponses.length];
    STATE.chat.messages.push({ role: 'assistant', content: reply });
  } catch {
    await new Promise(r => setTimeout(r, 1000));
    STATE.chat.messages.push({ role: 'assistant', content: DATA.chatResponses[STATE.chat.responseIdx++ % DATA.chatResponses.length] });
  }

  STATE.chat.isTyping = false;
  renderBubbleContent();
  scrollChat();
}

function scrollChat() {
  setTimeout(() => {
    const el = document.getElementById('chat-msgs');
    if (el) el.scrollTop = el.scrollHeight;
  }, 50);
}

// ── FAQ TOGGLE ────────────────────────────────────────────
function toggleFAQ(i) {
  const a = document.getElementById(`faq-a-${i}`);
  const arrow = document.getElementById(`faq-arrow-${i}`);
  a?.classList.toggle('hidden');
  arrow?.classList.toggle('rotate-180');
}
function bindFAQ() {}

// ── BIND EVENTS ───────────────────────────────────────────
function bindEvents() {
  document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', () => {
      const target = document.getElementById(el.dataset.scroll);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── ANIMATIONS ────────────────────────────────────────────
function animateOnLoad() {
  const els = document.querySelectorAll('.animate-fadeUp');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
  });
}

// ── MOBILE MENU ───────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobileMenu')?.classList.toggle('hidden');
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
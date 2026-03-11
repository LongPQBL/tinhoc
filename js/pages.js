// ===== Page Renderers for SPA =====

// ===== Home Page =====
function renderHomePage() {
  return `
  <!-- Horizontal Scrolling Carousel -->
  <section class="carousel-section">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold font-heading" style="color: var(--text-primary);">Tin nổi bật</h2>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Những bài viết được đọc nhiều nhất</p>
        </div>
        <div class="flex items-center gap-3">
          <div id="carouselDots" class="hidden sm:flex items-center gap-2 mr-4"></div>
          <button id="carouselPrev" class="carousel-nav-btn"><i class="fa-solid fa-chevron-left text-sm"></i></button>
          <button id="carouselNext" class="carousel-nav-btn"><i class="fa-solid fa-chevron-right text-sm"></i></button>
        </div>
      </div>
    </div>
    <div id="carouselTrack" class="flex gap-5 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-2">
    </div>
  </section>

  <!-- Category Tabs + Article Grid -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
    <div class="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide" id="categoryTabs">
      <button class="category-pill active" data-cat="all"><i class="fa-solid fa-border-all"></i> Tất cả</button>
    </div>
    <div id="articleGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"></div>
    <div class="text-center mt-10">
      <button id="loadMoreBtn" class="px-8 py-3 rounded-full font-semibold transition-all hover:shadow-lg" style="background: var(--accent); color: white;">
        Xem thêm bài viết <i class="fa-solid fa-arrow-down ml-2"></i>
      </button>
    </div>
  </section>

  <!-- Newsletter CTA -->
  <section class="newsletter-gradient py-20 mt-8">
    <div class="max-w-3xl mx-auto px-4 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold font-heading">Đừng bỏ lỡ bài viết hay</h2>
      <p class="mt-4 text-lg opacity-90">Đăng ký nhận bản tin hàng tuần với những nội dung chất lượng nhất.</p>
      <form class="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onsubmit="event.preventDefault(); showToast('Đăng ký thành công!', 'success'); this.reset();">
        <input type="email" placeholder="Nhập email của bạn" required class="flex-1 px-6 py-3 rounded-full text-gray-900 outline-none focus:ring-4 focus:ring-white/30">
        <button type="submit" class="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition-colors">Đăng ký</button>
      </form>
    </div>
  </section>

  <!-- Visit Analytics Dashboard -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="animate-on-scroll">
      <h2 class="text-2xl md:text-3xl font-bold font-heading text-center" style="color: var(--text-primary);">
        <i class="fa-solid fa-chart-column text-indigo-500 mr-2"></i>Thống kê truy cập
      </h2>
      <p class="text-center mt-2" style="color: var(--text-secondary);">Theo dõi lượng truy cập website theo thời gian</p>
      <div class="flex justify-center gap-3 mt-8">
        <button class="analytics-tab active" data-period="daily">Theo ngày</button>
        <button class="analytics-tab" data-period="weekly">Theo tuần</button>
        <button class="analytics-tab" data-period="monthly">Theo tháng</button>
      </div>
      <div class="glass-card p-6 mt-8">
        <div id="chartContainer" class="flex items-end justify-between gap-2 h-64 px-4"></div>
        <div id="chartLabels" class="flex justify-between gap-2 px-4 mt-2 text-xs" style="color: var(--text-secondary);"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" id="statsCards"></div>
    </div>
  </section>

  <!-- Task Management Board -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="animate-on-scroll">
      <h2 class="text-2xl md:text-3xl font-bold font-heading text-center" style="color: var(--text-primary);">
        <i class="fa-solid fa-users-gear text-indigo-500 mr-2"></i>Bảng quản lý công việc
      </h2>
      <p class="text-center mt-2" style="color: var(--text-secondary);">Theo dõi tiến độ công việc của các thành viên</p>
      <div id="taskBoard" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"></div>
    </div>
  </section>`;
}

function initHomePage() {
  // ===== Category Tabs =====
  const container = document.getElementById('categoryTabs');
  if (!container) return;

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'category-pill';
    btn.dataset.cat = cat.id;
    btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.label}`;
    container.appendChild(btn);
  });

  container.addEventListener('click', (e) => {
    const pill = e.target.closest('.category-pill');
    if (!pill) return;
    container.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    _homeState.currentCategory = pill.dataset.cat;
    _homeState.displayedCount = 6;
    _renderHomeArticleGrid();
  });

  // ===== Article Grid =====
  _renderHomeArticleGrid();

  document.getElementById('loadMoreBtn').addEventListener('click', () => {
    _homeState.displayedCount += 6;
    _renderHomeArticleGrid();
  });

  // ===== Carousel =====
  _renderCarousel();

  // ===== Analytics =====
  _initAnalytics();

  // ===== Task Board =====
  _renderTaskBoard();

  // ===== Scroll Animations =====
  initScrollAnimations();
}

// Home page internal state
const _homeState = {
  currentCategory: 'all',
  displayedCount: 6
};

function _getFilteredHomeArticles() {
  let filtered = articles.filter(a => !a.featured);
  if (_homeState.currentCategory !== 'all') {
    filtered = filtered.filter(a => a.category === _homeState.currentCategory);
  }
  return filtered;
}

function _renderHomeArticleGrid() {
  const filtered = _getFilteredHomeArticles();
  const toShow = filtered.slice(0, _homeState.displayedCount);
  const grid = document.getElementById('articleGrid');
  if (!grid) return;
  grid.innerHTML = toShow.map(a => renderCard(a)).join('');

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (_homeState.displayedCount >= filtered.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'inline-flex';
  }
}

function _renderCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !dotsContainer) return;

  const top = [...articles].sort((a, b) => b.views - a.views).slice(0, 10);

  track.innerHTML = top.map(article => {
    const catInfo = getCategoryInfo(article.category);
    return `
      <a href="#/article?id=${article.id}" class="carousel-card block">
        <img src="${article.image}" alt="${article.title}" loading="lazy">
        <div class="card-overlay">
          <span class="cat-badge ${article.category}">${catInfo ? catInfo.label : ''}</span>
          <h3 class="text-xl md:text-2xl font-bold font-heading text-white leading-snug">${article.title}</h3>
          <p class="text-sm text-gray-300 mt-2 leading-relaxed" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${article.excerpt}</p>
          <div class="flex items-center gap-3 mt-4 text-xs text-gray-400">
            <span class="font-medium text-gray-300">${article.author}</span>
            <span>·</span>
            <span>${formatDate(article.date)}</span>
          </div>
        </div>
      </a>`;
  }).join('');

  // Dots
  const totalDots = Math.ceil(top.length / 2);
  dotsContainer.innerHTML = Array.from({ length: totalDots }, (_, i) =>
    `<div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>`
  ).join('');

  function getScrollAmount() {
    const card = track.querySelector('.carousel-card');
    if (!card) return 600;
    return card.offsetWidth + 20;
  }

  const prev = document.getElementById('carouselPrev');
  const next = document.getElementById('carouselNext');

  if (prev) prev.addEventListener('click', () => {
    track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });
  if (next) next.addEventListener('click', () => {
    track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      track.scrollTo({ left: idx * getScrollAmount() * 2, behavior: 'smooth' });
    });
  });

  track.addEventListener('scroll', () => {
    const scrollPos = track.scrollLeft;
    const cardW = getScrollAmount() * 2;
    const activeIdx = Math.round(scrollPos / cardW);
    dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === activeIdx);
    });
  });
}

function _initAnalytics() {
  let visits = parseInt(localStorage.getItem('hub_total_visits') || '0');
  visits++;
  localStorage.setItem('hub_total_visits', visits.toString());

  let analyticsData = JSON.parse(localStorage.getItem('hub_analytics') || 'null');
  if (!analyticsData) {
    analyticsData = _generateAnalyticsData();
    localStorage.setItem('hub_analytics', JSON.stringify(analyticsData));
  }

  _renderChart('daily', analyticsData);
  _renderStats(analyticsData, visits);

  document.querySelectorAll('.analytics-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.analytics-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      _renderChart(tab.dataset.period, analyticsData);
    });
  });
}

function _generateAnalyticsData() {
  const data = { daily: [], weekly: [], monthly: [] };
  const days = ['T2','T3','T4','T5','T6','T7','CN'];
  const weeks = ['Tuần 1','Tuần 2','Tuần 3','Tuần 4'];
  const months = ['Th01','Th02','Th03','Th04','Th05','Th06','Th07','Th08','Th09','Th10','Th11','Th12'];

  days.forEach(d => data.daily.push({ label: d, value: Math.floor(Math.random() * 800) + 200 }));
  weeks.forEach(w => data.weekly.push({ label: w, value: Math.floor(Math.random() * 5000) + 1000 }));
  months.forEach(m => data.monthly.push({ label: m, value: Math.floor(Math.random() * 20000) + 3000 }));

  return data;
}

function _renderChart(period, data) {
  const items = data[period];
  const maxVal = Math.max(...items.map(i => i.value));
  const container = document.getElementById('chartContainer');
  const labels = document.getElementById('chartLabels');
  if (!container || !labels) return;

  const maxHeight = 200;
  container.innerHTML = items.map(item => {
    const barH = Math.max(Math.round((item.value / maxVal) * maxHeight), 8);
    return `<div class="flex-1 flex flex-col items-center justify-end gap-1">
      <span class="text-xs font-semibold" style="color: var(--text-secondary);">${item.value.toLocaleString()}</span>
      <div class="chart-bar w-full max-w-[3rem]" data-value="${item.value}" style="height: ${barH}px; background: linear-gradient(to top, #6366f1, #818cf8);"></div>
    </div>`;
  }).join('');

  labels.innerHTML = items.map(item =>
    `<div class="flex-1 text-center">${item.label}</div>`
  ).join('');
}

function _renderStats(data, totalVisits) {
  const stats = [
    { label: 'Tổng truy cập', value: totalVisits.toLocaleString(), icon: 'fa-eye', color: 'text-blue-500' },
    { label: 'Khách truy cập', value: Math.floor(totalVisits * 0.7).toLocaleString(), icon: 'fa-users', color: 'text-green-500' },
    { label: 'Lượt xem trang', value: (totalVisits * 3).toLocaleString(), icon: 'fa-file', color: 'text-purple-500', highlight: true },
    { label: 'Tỷ lệ thoát', value: (Math.random() * 20 + 30).toFixed(1) + '%', icon: 'fa-arrow-right-from-bracket', color: 'text-orange-500' }
  ];

  const el = document.getElementById('statsCards');
  if (!el) return;
  el.innerHTML = stats.map(s => {
    if (s.highlight) {
      return `<div class="p-5 text-center rounded-2xl ring-2 ring-indigo-500 shadow-lg" style="background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1)); border: 1px solid rgba(99,102,241,0.3);">
        <i class="fa-solid ${s.icon} text-2xl ${s.color}"></i>
        <div class="text-3xl font-bold font-heading mt-2 text-indigo-500">${s.value}</div>
        <div class="text-sm mt-1 font-semibold" style="color: var(--text-primary);">${s.label}</div>
      </div>`;
    }
    return `<div class="glass-card p-5 text-center">
      <i class="fa-solid ${s.icon} text-2xl ${s.color}"></i>
      <div class="text-2xl font-bold font-heading mt-2" style="color: var(--text-primary);">${s.value}</div>
      <div class="text-sm mt-1" style="color: var(--text-secondary);">${s.label}</div>
    </div>`;
  }).join('');
}

function _renderTaskBoard() {
  const statusMap = {
    'done': { label: 'Hoàn thành', class: 'done' },
    'in-progress': { label: 'Đang làm', class: 'in-progress' },
    'pending': { label: 'Chờ', class: 'pending' }
  };

  const el = document.getElementById('taskBoard');
  if (!el) return;
  el.innerHTML = teamMembers.map(member => `
    <div class="glass-card p-6">
      <div class="flex items-center gap-4 mb-5">
        <img src="${member.avatar}" alt="${member.name}" class="w-14 h-14 rounded-full ring-2 ring-indigo-500/30">
        <div>
          <h4 class="font-bold font-heading text-sm" style="color: var(--text-primary);">${member.name}</h4>
          <p class="text-xs mt-0.5" style="color: var(--text-secondary);">${member.role}</p>
        </div>
      </div>
      <div class="space-y-3">
        ${member.tasks.map(task => `
          <div class="flex items-center justify-between gap-3 p-3 rounded-lg" style="background: var(--bg-primary); flex-wrap: nowrap;">
            <span class="text-sm font-medium" style="color: var(--text-primary); min-width: 0;">${task.title}</span>
            <span class="task-badge ${statusMap[task.status].class}" style="flex-shrink: 0; white-space: nowrap;">${statusMap[task.status].label}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
}


// ===== Article Page =====
function renderArticlePage(id) {
  const article = getArticleById(id);

  if (!article) {
    return `
      <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div class="text-center py-20">
          <i class="fa-solid fa-file-circle-exclamation text-6xl text-indigo-500 mb-6"></i>
          <h1 class="text-3xl font-bold font-heading" style="color: var(--text-primary);">Không tìm thấy bài viết</h1>
          <p class="mt-3" style="color: var(--text-secondary);">Bài viết bạn đang tìm có thể đã bị xóa hoặc không tồn tại.</p>
          <a href="#/" class="inline-block mt-6 px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors">
            <i class="fa-solid fa-home mr-2"></i>Về trang chủ
          </a>
        </div>
      </main>`;
  }

  document.title = `${article.title} - THE HUB.`;
  const catInfo = getCategoryInfo(article.category);

  const related = getRelatedArticles(article.id, 3);
  let relatedHTML = '';
  if (related.length) {
    relatedHTML = `
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <h2 class="text-2xl font-bold font-heading mb-8" style="color: var(--text-primary);">Bài viết liên quan</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${related.map(a => renderCard(a)).join('')}</div>
    </section>`;
  }

  return `
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Breadcrumb -->
      <nav class="text-sm mb-6 flex items-center gap-2" style="color: var(--text-secondary);">
        <a href="#/" class="hover:text-indigo-500 transition-colors">Trang chủ</a>
        <i class="fa-solid fa-chevron-right text-xs"></i>
        <a href="#/category?cat=${article.category}" class="hover:text-indigo-500 transition-colors">${catInfo.label}</a>
        <i class="fa-solid fa-chevron-right text-xs"></i>
        <span style="color: var(--text-primary);">Bài viết</span>
      </nav>

      <!-- Article Header -->
      <div class="mb-8">
        <span class="cat-badge ${article.category}">${catInfo.label}</span>
        <h1 class="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight" style="color: var(--text-primary);">${article.title}</h1>
        <div class="flex flex-wrap items-center gap-4 mt-6 text-sm" style="color: var(--text-secondary);">
          <div class="flex items-center gap-2">
            <img src="${article.authorAvatar}" alt="${article.author}" class="w-10 h-10 rounded-full">
            <div>
              <p class="font-semibold" style="color: var(--text-primary);">${article.author}</p>
              <p class="text-xs">${formatDate(article.date)}</p>
            </div>
          </div>
          <span>·</span>
          <span><i class="fa-regular fa-clock mr-1"></i>${article.readTime} phút đọc</span>
          <span>·</span>
          <span><i class="fa-solid fa-eye mr-1"></i>${formatViews(article.views)} lượt xem</span>
        </div>
        <!-- Share buttons -->
        <div class="flex items-center gap-3 mt-6">
          <span class="text-sm font-medium" style="color: var(--text-secondary);">Chia sẻ:</span>
          <button class="w-9 h-9 rounded-full flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition-colors text-sm"><i class="fa-brands fa-facebook-f"></i></button>
          <button class="w-9 h-9 rounded-full flex items-center justify-center text-white bg-sky-500 hover:bg-sky-600 transition-colors text-sm"><i class="fa-brands fa-twitter"></i></button>
          <button class="w-9 h-9 rounded-full flex items-center justify-center text-white bg-green-500 hover:bg-green-600 transition-colors text-sm"><i class="fa-brands fa-whatsapp"></i></button>
          <button onclick="navigator.clipboard.writeText(window.location.href); showToast('Đã sao chép liên kết!')" class="w-9 h-9 rounded-full flex items-center justify-center transition-colors text-sm" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-solid fa-link"></i></button>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="rounded-2xl overflow-hidden mb-10">
        <img src="${article.image}" alt="${article.title}" class="w-full h-auto max-h-[500px] object-cover">
      </div>

      <!-- Article Body -->
      <div class="prose-content">${article.content}</div>

      <!-- Tags -->
      <div class="mt-10 pt-6 border-t" style="border-color: var(--border-color);">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm font-semibold" style="color: var(--text-secondary);">Tags:</span>
          ${article.tags.map(tag => `<span class="tag-item">${tag}</span>`).join('')}
        </div>
      </div>

      <!-- Author Bio -->
      <div class="glass-card p-6 mt-10 flex items-start gap-5">
        <img src="${article.authorAvatar}" alt="${article.author}" class="w-16 h-16 rounded-full flex-shrink-0">
        <div>
          <h4 class="font-bold font-heading" style="color: var(--text-primary);">${article.author}</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Biên tập viên tại THE HUB. Chuyên viết về ${catInfo.label.toLowerCase()} và các chủ đề liên quan. Luôn tìm kiếm những câu chuyện hấp dẫn để chia sẻ với bạn đọc.</p>
          <div class="flex gap-3 mt-3">
            <a href="#" class="text-sm hover:text-indigo-500 transition-colors" style="color: var(--text-secondary);"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="text-sm hover:text-indigo-500 transition-colors" style="color: var(--text-secondary);"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </main>
    ${relatedHTML}`;
}

function initArticlePage() {
  initScrollAnimations();
}


// ===== Category Page =====
function renderCategoryPage(cat) {
  return `
  <!-- Category Hero -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8">
    <div id="categoryHero"></div>
  </section>

  <!-- Main Content -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    <div class="flex flex-col lg:flex-row gap-10">
      <!-- Articles Column -->
      <div class="flex-1">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div class="flex items-center gap-4">
            <button class="sort-btn active text-sm font-medium" data-sort="newest" style="color: var(--accent);">Mới nhất</button>
            <button class="sort-btn text-sm font-medium" data-sort="popular" style="color: var(--text-secondary);">Phổ biến</button>
            <button class="sort-btn text-sm font-medium" data-sort="az" style="color: var(--text-secondary);">A-Z</button>
          </div>
          <div class="flex items-center gap-2">
            <button class="view-btn active w-9 h-9 rounded-lg flex items-center justify-center transition-colors" data-view="grid" style="background: var(--accent); color: white;"><i class="fa-solid fa-grid-2"></i></button>
            <button class="view-btn w-9 h-9 rounded-lg flex items-center justify-center transition-colors" data-view="list" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-solid fa-list"></i></button>
          </div>
        </div>
        <div id="categoryArticles"></div>
        <div id="pagination" class="flex items-center justify-center gap-2 mt-10"></div>
      </div>

      <!-- Sidebar -->
      <aside class="lg:w-80 space-y-8">
        <div class="glass-card p-6">
          <h3 class="font-bold font-heading text-lg mb-4" style="color: var(--text-primary);">
            <i class="fa-solid fa-fire text-orange-500 mr-2"></i>Bài viết phổ biến
          </h3>
          <div id="popularArticles" class="space-y-4"></div>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold font-heading text-lg mb-4" style="color: var(--text-primary);">
            <i class="fa-solid fa-folder text-indigo-500 mr-2"></i>Chuyên mục
          </h3>
          <div id="categoryList" class="space-y-3"></div>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold font-heading text-lg mb-4" style="color: var(--text-primary);">
            <i class="fa-solid fa-tags text-purple-500 mr-2"></i>Tags
          </h3>
          <div id="tagCloud" class="flex flex-wrap gap-1.5 overflow-y-auto" style="max-height: 240px; scrollbar-width: thin;"></div>
        </div>
      </aside>
    </div>
  </section>`;
}

// Category page state
const _catState = {
  currentCat: null,
  currentSort: 'newest',
  currentView: 'grid',
  currentPage: 1,
  perPage: 6
};

function initCategoryPage(cat) {
  _catState.currentCat = cat || null;
  _catState.currentSort = 'newest';
  _catState.currentView = 'grid';
  _catState.currentPage = 1;

  _renderCategoryHero();
  _renderCategoryArticles();
  _renderCategorySidebar();

  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => { b.classList.remove('active'); b.style.color = 'var(--text-secondary)'; });
      btn.classList.add('active');
      btn.style.color = 'var(--accent)';
      _catState.currentSort = btn.dataset.sort;
      _catState.currentPage = 1;
      _renderCategoryArticles();
    });
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => { b.classList.remove('active'); b.style.background = 'var(--border-color)'; b.style.color = 'var(--text-secondary)'; });
      btn.classList.add('active');
      btn.style.background = 'var(--accent)';
      btn.style.color = 'white';
      _catState.currentView = btn.dataset.view;
      _renderCategoryArticles();
    });
  });

  initScrollAnimations();
}

function _renderCategoryHero() {
  const heroEl = document.getElementById('categoryHero');
  if (!heroEl) return;

  if (_catState.currentCat) {
    const catInfo = getCategoryInfo(_catState.currentCat);
    if (!catInfo) { _catState.currentCat = null; _renderCategoryHero(); return; }
    const count = getArticlesByCategory(_catState.currentCat).length;
    document.title = `${catInfo.label} - THE HUB.`;
    heroEl.innerHTML = `
      <div class="text-center py-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style="background: ${catInfo.color}20;">
          <i class="fa-solid ${catInfo.icon} text-2xl" style="color: ${catInfo.color};"></i>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold font-heading" style="color: var(--text-primary);">${catInfo.label}</h1>
        <p class="mt-2" style="color: var(--text-secondary);">${count} bài viết trong chuyên mục này</p>
      </div>`;
  } else {
    document.title = 'Chuyên mục - THE HUB.';
    heroEl.innerHTML = `
      <div class="text-center py-8">
        <h1 class="text-3xl md:text-4xl font-bold font-heading" style="color: var(--text-primary);">Tất cả chuyên mục</h1>
        <p class="mt-2" style="color: var(--text-secondary);">${articles.length} bài viết</p>
        <div class="flex flex-wrap justify-center gap-3 mt-6">
          ${categories.map(c => `
            <a href="#/category?cat=${c.id}" class="category-pill ${_catState.currentCat === c.id ? 'active' : ''}" data-cat="${c.id}">
              <i class="fa-solid ${c.icon}"></i> ${c.label}
            </a>`).join('')}
        </div>
      </div>`;
  }
}

function _getCatPageArticles() {
  let filtered = _catState.currentCat ? getArticlesByCategory(_catState.currentCat) : [...articles];

  if (_catState.currentSort === 'newest') {
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (_catState.currentSort === 'popular') {
    filtered.sort((a, b) => b.views - a.views);
  } else if (_catState.currentSort === 'az') {
    filtered.sort((a, b) => a.title.localeCompare(b.title, 'vi'));
  }
  return filtered;
}

function _renderCategoryArticles() {
  const all = _getCatPageArticles();
  const totalPages = Math.ceil(all.length / _catState.perPage);
  const paged = all.slice((_catState.currentPage - 1) * _catState.perPage, _catState.currentPage * _catState.perPage);

  const container = document.getElementById('categoryArticles');
  if (!container) return;
  if (_catState.currentView === 'grid') {
    container.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';
    container.innerHTML = paged.map(a => renderCard(a)).join('');
  } else {
    container.className = 'space-y-4';
    container.innerHTML = paged.map(a => renderListItem(a)).join('');
  }

  // Pagination
  const pag = document.getElementById('pagination');
  if (!pag) return;
  if (totalPages <= 1) { pag.innerHTML = ''; return; }
  let pagHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    pagHTML += `<button class="w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm transition-colors ${i === _catState.currentPage ? 'text-white' : ''}" style="${i === _catState.currentPage ? 'background: var(--accent); color: white;' : 'background: var(--border-color); color: var(--text-secondary);'}" data-page="${i}">${i}</button>`;
  }
  pag.innerHTML = pagHTML;
  pag.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      _catState.currentPage = parseInt(btn.dataset.page);
      _renderCategoryArticles();
      window.scrollTo({ top: 300, behavior: 'smooth' });
    });
  });
}

function _renderCategorySidebar() {
  // Popular articles
  const popular = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);
  const popEl = document.getElementById('popularArticles');
  if (popEl) {
    popEl.innerHTML = popular.map((a, i) => `
      <a href="#/article?id=${a.id}" class="flex items-start gap-3 group">
        <span class="text-2xl font-bold font-heading text-indigo-500/30">${String(i + 1).padStart(2, '0')}</span>
        <div>
          <h4 class="text-sm font-semibold leading-snug group-hover:text-indigo-500 transition-colors" style="color: var(--text-primary);">${a.title}</h4>
          <p class="text-xs mt-1" style="color: var(--text-secondary);">${formatViews(a.views)} lượt xem</p>
        </div>
      </a>`).join('');
  }

  // Category list
  const catListEl = document.getElementById('categoryList');
  if (catListEl) {
    catListEl.innerHTML = categories.map(c => {
      const count = getArticlesByCategory(c.id).length;
      const isActive = c.id === _catState.currentCat;
      return `<a href="#/category?cat=${c.id}" class="flex items-center justify-between p-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-500/10' : 'hover:bg-black/5 dark:hover:bg-white/5'}">
        <div class="flex items-center gap-2">
          <i class="fa-solid ${c.icon} text-sm" style="color: ${c.color};"></i>
          <span class="text-sm font-medium" style="color: var(--text-primary);">${c.label}</span>
        </div>
        <span class="text-xs px-2 py-0.5 rounded-full" style="background: var(--border-color); color: var(--text-secondary);">${count}</span>
      </a>`;
    }).join('');
  }

  // Tag cloud
  const tagEl = document.getElementById('tagCloud');
  if (tagEl) {
    const allTags = [...new Set(articles.flatMap(a => a.tags))];
    tagEl.innerHTML = allTags.map(tag =>
      `<span class="tag-item">${tag}</span>`
    ).join('');
  }
}


// ===== About Page =====
function renderAboutPage() {
  document.title = 'Giới thiệu - THE HUB.';
  return `
  <!-- Hero -->
  <section class="relative overflow-hidden py-20">
    <div class="absolute inset-0 newsletter-gradient opacity-10"></div>
    <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold font-heading" style="color: var(--text-primary);">Về chúng tôi</h1>
      <p class="mt-4 text-lg" style="color: var(--text-secondary);">Câu chuyện đằng sau THE HUB. - nơi kết nối thông tin và cộng đồng</p>
    </div>
  </section>

  <!-- Mission -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
      <div>
        <h2 class="text-3xl font-bold font-heading" style="color: var(--text-primary);">Sứ mệnh của chúng tôi</h2>
        <p class="mt-6 text-lg leading-relaxed" style="color: var(--text-secondary);">THE HUB. ra đời với mong muốn trở thành nền tảng thông tin đáng tin cậy cho cộng đồng Việt Nam. Chúng tôi tin rằng thông tin chất lượng có thể thay đổi cuộc sống.</p>
        <p class="mt-4 leading-relaxed" style="color: var(--text-secondary);">Với đội ngũ biên tập viên giàu kinh nghiệm và đam mê, chúng tôi cam kết mang đến những bài viết sâu sắc, chính xác và đa chiều về mọi lĩnh vực từ công nghệ, kinh doanh đến khoa học và đời sống.</p>
        <div class="flex gap-4 mt-8">
          <a href="#/contact" class="px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors">Liên hệ</a>
          <a href="#/category" class="px-6 py-3 rounded-full font-semibold border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors">Đọc bài viết</a>
        </div>
      </div>
      <div class="rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working" class="w-full h-80 object-cover" loading="lazy">
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="py-16" style="background: var(--bg-secondary);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-on-scroll">
        <div>
          <div class="text-4xl font-bold font-heading text-indigo-500 counter-value" data-target="500">500+</div>
          <p class="mt-2 font-medium" style="color: var(--text-secondary);">Bài viết</p>
        </div>
        <div>
          <div class="text-4xl font-bold font-heading text-green-500 counter-value" data-target="50000">50K+</div>
          <p class="mt-2 font-medium" style="color: var(--text-secondary);">Độc giả</p>
        </div>
        <div>
          <div class="text-4xl font-bold font-heading text-purple-500 counter-value" data-target="3">3+</div>
          <p class="mt-2 font-medium" style="color: var(--text-secondary);">Năm hoạt động</p>
        </div>
        <div>
          <div class="text-4xl font-bold font-heading text-orange-500 counter-value" data-target="15">15+</div>
          <p class="mt-2 font-medium" style="color: var(--text-secondary);">Thành viên</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12 animate-on-scroll">
      <h2 class="text-3xl font-bold font-heading" style="color: var(--text-primary);">Đội ngũ của chúng tôi</h2>
      <p class="mt-3" style="color: var(--text-secondary);">Những con người đam mê đằng sau THE HUB.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll" id="teamGrid"></div>
  </section>

  <!-- Timeline -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12 animate-on-scroll">
      <h2 class="text-3xl font-bold font-heading" style="color: var(--text-primary);">Hành trình phát triển</h2>
      <p class="mt-3" style="color: var(--text-secondary);">Những cột mốc quan trọng của THE HUB.</p>
    </div>
    <div class="animate-on-scroll">
      <div class="timeline-item">
        <div class="glass-card p-5">
          <span class="text-sm font-bold text-indigo-500">Tháng 1, 2024</span>
          <h4 class="font-bold font-heading mt-1" style="color: var(--text-primary);">Thành lập THE HUB.</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Ý tưởng ra đời từ nhóm sinh viên đam mê công nghệ và truyền thông.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="glass-card p-5">
          <span class="text-sm font-bold text-indigo-500">Tháng 6, 2024</span>
          <h4 class="font-bold font-heading mt-1" style="color: var(--text-primary);">Ra mắt phiên bản đầu tiên</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Website chính thức được ra mắt với 50 bài viết đầu tiên.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="glass-card p-5">
          <span class="text-sm font-bold text-indigo-500">Tháng 12, 2024</span>
          <h4 class="font-bold font-heading mt-1" style="color: var(--text-primary);">10,000 độc giả</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Đạt mốc 10,000 độc giả thường xuyên truy cập mỗi tháng.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="glass-card p-5">
          <span class="text-sm font-bold text-indigo-500">Tháng 6, 2025</span>
          <h4 class="font-bold font-heading mt-1" style="color: var(--text-primary);">Mở rộng chuyên mục</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Thêm 3 chuyên mục mới: Kinh doanh, Giải trí và Đời sống.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="glass-card p-5">
          <span class="text-sm font-bold text-indigo-500">Tháng 3, 2026</span>
          <h4 class="font-bold font-heading mt-1" style="color: var(--text-primary);">50,000 độc giả</h4>
          <p class="text-sm mt-1" style="color: var(--text-secondary);">Trở thành một trong những blog công nghệ hàng đầu Việt Nam.</p>
        </div>
      </div>
    </div>
  </section>`;
}

function initAboutPage() {
  // Render team
  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid) {
    teamGrid.innerHTML = teamMembers.map(member => `
      <div class="glass-card p-6 text-center">
        <img src="${member.avatar}" alt="${member.name}" class="w-24 h-24 rounded-full mx-auto ring-4 ring-indigo-500/20">
        <h4 class="font-bold font-heading mt-4" style="color: var(--text-primary);">${member.name}</h4>
        <p class="text-sm mt-1 text-indigo-500 font-medium">${member.role}</p>
        <div class="flex justify-center gap-3 mt-4">
          <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-facebook-f text-xs"></i></a>
          <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-twitter text-xs"></i></a>
          <a href="#" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-github text-xs"></i></a>
        </div>
      </div>`).join('');
  }

  initScrollAnimations();
}


// ===== Contact Page =====
function renderContactPage() {
  document.title = 'Liên hệ - THE HUB.';
  return `
  <!-- Hero -->
  <section class="relative overflow-hidden py-20">
    <div class="absolute inset-0 newsletter-gradient opacity-10"></div>
    <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold font-heading" style="color: var(--text-primary);">Liên hệ với chúng tôi</h1>
      <p class="mt-4 text-lg" style="color: var(--text-secondary);">Chúng tôi luôn sẵn lòng lắng nghe ý kiến của bạn</p>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="animate-on-scroll">
        <h2 class="text-2xl font-bold font-heading mb-6" style="color: var(--text-primary);">Gửi tin nhắn</h2>
        <form id="contactForm" class="space-y-5">
          <div>
            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Họ và tên <span class="text-red-500">*</span></label>
            <input type="text" name="name" required placeholder="Nhập họ và tên" class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all" style="background: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Email <span class="text-red-500">*</span></label>
            <input type="email" name="email" required placeholder="email@example.com" class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all" style="background: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Chủ đề</label>
            <select name="subject" class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all" style="background: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);">
              <option value="">Chọn chủ đề</option>
              <option value="general">Câu hỏi chung</option>
              <option value="collab">Hợp tác</option>
              <option value="ads">Quảng cáo</option>
              <option value="feedback">Góp ý</option>
              <option value="bug">Báo lỗi</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Nội dung <span class="text-red-500">*</span></label>
            <textarea name="message" required rows="5" placeholder="Nhập nội dung tin nhắn..." class="w-full px-4 py-3 rounded-xl border outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none" style="background: var(--bg-secondary); border-color: var(--border-color); color: var(--text-primary);"></textarea>
          </div>
          <button type="submit" class="w-full px-6 py-3 bg-indigo-500 text-white rounded-xl font-semibold hover:bg-indigo-600 transition-colors">
            <i class="fa-solid fa-paper-plane mr-2"></i>Gửi tin nhắn
          </button>
        </form>
      </div>

      <!-- Contact Info -->
      <div class="space-y-6 animate-on-scroll">
        <h2 class="text-2xl font-bold font-heading mb-6" style="color: var(--text-primary);">Thông tin liên hệ</h2>

        <div class="glass-card p-5 flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-location-dot text-indigo-500 text-lg"></i>
          </div>
          <div>
            <h4 class="font-bold font-heading" style="color: var(--text-primary);">Địa chỉ</h4>
            <p class="text-sm mt-1" style="color: var(--text-secondary);">123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</p>
          </div>
        </div>

        <div class="glass-card p-5 flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-phone text-green-500 text-lg"></i>
          </div>
          <div>
            <h4 class="font-bold font-heading" style="color: var(--text-primary);">Điện thoại</h4>
            <p class="text-sm mt-1" style="color: var(--text-secondary);">+84 28 1234 5678</p>
          </div>
        </div>

        <div class="glass-card p-5 flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-envelope text-purple-500 text-lg"></i>
          </div>
          <div>
            <h4 class="font-bold font-heading" style="color: var(--text-primary);">Email</h4>
            <p class="text-sm mt-1" style="color: var(--text-secondary);">contact@thehub.vn</p>
          </div>
        </div>

        <div class="glass-card p-5 flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-clock text-orange-500 text-lg"></i>
          </div>
          <div>
            <h4 class="font-bold font-heading" style="color: var(--text-primary);">Giờ làm việc</h4>
            <p class="text-sm mt-1" style="color: var(--text-secondary);">Thứ 2 - Thứ 6: 8:00 - 17:30<br>Thứ 7: 8:00 - 12:00</p>
          </div>
        </div>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden h-64">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4196820979707!2d106.70142!3d10.77689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3853960e!2zMTIzIE5ndXnhu4VuIEh14buHLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1710000000000" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div class="text-center mb-12 animate-on-scroll">
      <h2 class="text-3xl font-bold font-heading" style="color: var(--text-primary);">Câu hỏi thường gặp</h2>
      <p class="mt-3" style="color: var(--text-secondary);">Những câu hỏi phổ biến về THE HUB.</p>
    </div>
    <div class="space-y-4 animate-on-scroll" id="faqContainer">
      <div class="faq-item" style="background: var(--bg-secondary);">
        <button class="faq-question">
          <span>Làm thế nào để đăng bài trên THE HUB.?</span>
          <i class="fa-solid fa-chevron-down text-sm" style="color: var(--text-secondary);"></i>
        </button>
        <div class="faq-answer">Bạn có thể gửi bài viết của mình qua form liên hệ hoặc email contact@thehub.vn. Đội ngũ biên tập sẽ xem xét và phản hồi trong vòng 3-5 ngày làm việc.</div>
      </div>
      <div class="faq-item" style="background: var(--bg-secondary);">
        <button class="faq-question">
          <span>THE HUB. có nhận quảng cáo không?</span>
          <i class="fa-solid fa-chevron-down text-sm" style="color: var(--text-secondary);"></i>
        </button>
        <div class="faq-answer">Có, chúng tôi nhận quảng cáo phù hợp với tiêu chí nội dung. Vui lòng liên hệ qua email hoặc chọn chủ đề "Quảng cáo" trong form liên hệ để biết thêm chi tiết.</div>
      </div>
      <div class="faq-item" style="background: var(--bg-secondary);">
        <button class="faq-question">
          <span>Tôi có thể đóng góp ý tưởng cho THE HUB. không?</span>
          <i class="fa-solid fa-chevron-down text-sm" style="color: var(--text-secondary);"></i>
        </button>
        <div class="faq-answer">Tất nhiên! Chúng tôi luôn chào đón mọi ý tưởng và góp ý từ cộng đồng. Bạn có thể gửi ý tưởng qua form liên hệ hoặc mạng xã hội của chúng tôi.</div>
      </div>
      <div class="faq-item" style="background: var(--bg-secondary);">
        <button class="faq-question">
          <span>Tần suất đăng bài mới là bao lâu?</span>
          <i class="fa-solid fa-chevron-down text-sm" style="color: var(--text-secondary);"></i>
        </button>
        <div class="faq-answer">Chúng tôi đăng tải bài viết mới hàng ngày, với trung bình 3-5 bài viết mỗi ngày trên các chuyên mục khác nhau.</div>
      </div>
      <div class="faq-item" style="background: var(--bg-secondary);">
        <button class="faq-question">
          <span>Làm sao để theo dõi THE HUB.?</span>
          <i class="fa-solid fa-chevron-down text-sm" style="color: var(--text-secondary);"></i>
        </button>
        <div class="faq-answer">Bạn có thể theo dõi THE HUB. qua các kênh: đăng ký newsletter, follow Facebook, Twitter, YouTube hoặc TikTok của chúng tôi.</div>
      </div>
    </div>
  </section>`;
}

function initContactPage() {
  // Contact form validation & submit
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const message = this.message.value.trim();

      if (!name || !email || !message) {
        showToast('Vui lòng điền đầy đủ thông tin bắt buộc', 'error');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Email không hợp lệ', 'error');
        return;
      }

      showToast('Gửi tin nhắn thành công! Chúng tôi sẽ phản hồi sớm.', 'success');
      this.reset();
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  initScrollAnimations();
}


// ===== Page Init Dispatcher =====
function initPage(pageName, params) {
  switch (pageName) {
    case 'home':
      initHomePage();
      break;
    case 'article':
      initArticlePage();
      break;
    case 'category':
      initCategoryPage(params && params.cat);
      break;
    case 'about':
      initAboutPage();
      break;
    case 'contact':
      initContactPage();
      break;
  }
}

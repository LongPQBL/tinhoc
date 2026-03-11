// ===== Dark Mode =====
function initDarkMode() {
  const toggle = document.getElementById('darkToggle');
  const html = document.documentElement;

  // Check saved preference or system preference
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('darkMode', html.classList.contains('dark'));
      updateDarkToggleIcon();
    });
  }
  updateDarkToggleIcon();
}

function updateDarkToggleIcon() {
  const toggle = document.getElementById('darkToggle');
  if (!toggle) return;
  const isDark = document.documentElement.classList.contains('dark');
  toggle.innerHTML = isDark
    ? '<i class="fa-solid fa-sun text-yellow-400"></i>'
    : '<i class="fa-solid fa-moon text-indigo-500"></i>';
}

// ===== Mobile Navigation =====
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const icon = hamburger.querySelector('i');
      if (mobileMenu.classList.contains('open')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }
}

// ===== Scroll Animations (IntersectionObserver) =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== Render Article Card =====
function renderCard(article) {
  const catInfo = getCategoryInfo(article.category);
  return `
    <a href="#/article?id=${article.id}" class="article-card block overflow-hidden">
      <div class="overflow-hidden">
        <img src="${article.image}" alt="${article.title}" loading="lazy" class="w-full h-48 object-cover">
      </div>
      <div class="p-5">
        <span class="cat-badge ${article.category}">${catInfo ? catInfo.label : ''}</span>
        <h3 class="mt-3 text-lg font-bold font-heading leading-snug hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-primary);">
          ${article.title}
        </h3>
        <p class="mt-2 text-sm leading-relaxed" style="color: var(--text-secondary);">${article.excerpt}</p>
        <div class="mt-4 flex items-center gap-3 text-xs" style="color: var(--text-secondary);">
          <img src="${article.authorAvatar}" alt="${article.author}" class="rounded-full flex-shrink-0 object-cover" style="width:20px;height:20px;max-width:20px;max-height:20px;">
          <span class="font-medium">${article.author}</span>
          <span>·</span>
          <span>${formatDate(article.date)}</span>
          <span>·</span>
          <span>${article.readTime} phút đọc</span>
        </div>
      </div>
    </a>`;
}

// ===== Render List Item =====
function renderListItem(article) {
  const catInfo = getCategoryInfo(article.category);
  return `
    <a href="#/article?id=${article.id}" class="article-list-item">
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div class="flex-1">
        <span class="cat-badge ${article.category}">${catInfo ? catInfo.label : ''}</span>
        <h3 class="mt-2 text-lg font-bold font-heading" style="color: var(--text-primary);">${article.title}</h3>
        <p class="mt-1 text-sm" style="color: var(--text-secondary);">${article.excerpt}</p>
        <div class="mt-3 flex items-center gap-3 text-xs" style="color: var(--text-secondary);">
          <span class="font-medium">${article.author}</span>
          <span>·</span>
          <span>${formatDate(article.date)}</span>
          <span>·</span>
          <span>${article.readTime} phút đọc</span>
          <span>·</span>
          <span><i class="fa-solid fa-eye"></i> ${formatViews(article.views)}</span>
        </div>
      </div>
    </a>`;
}

// ===== Header HTML =====
function getHeaderHTML(activePage) {
  const navItems = [
    { href: '#/', label: 'Trang chủ', id: 'home' },
    { href: '#/category', label: 'Chuyên mục', id: 'category' },
    { href: '#/about', label: 'Giới thiệu', id: 'about' },
    { href: '#/contact', label: 'Liên hệ', id: 'contact' }
  ];

  const navLinks = navItems.map(item => {
    const isActive = item.id === activePage;
    return `<a href="${item.href}" data-nav="${item.id}" class="nav-link font-medium transition-colors ${isActive ? 'text-indigo-500 dark:text-indigo-400' : 'hover:text-indigo-500 dark:hover:text-indigo-400'}" style="color: ${isActive ? '' : 'var(--text-primary)'};">${item.label}</a>`;
  }).join('');

  const mobileLinks = navItems.map(item => {
    const isActive = item.id === activePage;
    return `<a href="${item.href}" data-nav="${item.id}" class="nav-link block py-2 font-medium ${isActive ? 'text-indigo-500' : ''}" style="color: ${isActive ? '' : 'var(--text-primary)'};">${item.label}</a>`;
  }).join('');

  return `
  <header class="header-glass sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#/" class="text-2xl font-bold font-heading tracking-tight" style="color: var(--text-primary);">THE HUB<span class="text-indigo-500">.</span></a>
        <nav class="hidden md:flex items-center gap-8">${navLinks}</nav>
        <div class="flex items-center gap-3">
          <button id="searchBtn" class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Tìm kiếm">
            <i class="fa-solid fa-magnifying-glass" style="color: var(--text-primary);"></i>
          </button>
          <button id="darkToggle" class="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Chuyển giao diện">
            <i class="fa-solid fa-moon text-indigo-500"></i>
          </button>
          <button id="hamburger" class="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Menu">
            <i class="fa-solid fa-bars" style="color: var(--text-primary);"></i>
          </button>
        </div>
      </div>
      <div id="mobileMenu" class="mobile-menu md:hidden pb-4">${mobileLinks}</div>
    </div>
  </header>`;
}

// ===== Update Active Nav Link =====
function updateActiveNav(page) {
  // Map category and article pages to the right nav highlight
  let navId = page;
  if (page === 'article') navId = ''; // no nav highlight for article page

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkId = link.getAttribute('data-nav');
    const isActive = linkId === navId;

    if (isActive) {
      link.classList.add('text-indigo-500', 'dark:text-indigo-400');
      link.classList.remove('hover:text-indigo-500', 'dark:hover:text-indigo-400');
      link.style.color = '';
    } else {
      link.classList.remove('text-indigo-500', 'dark:text-indigo-400');
      link.classList.add('hover:text-indigo-500', 'dark:hover:text-indigo-400');
      link.style.color = 'var(--text-primary)';
    }
  });

  // Close mobile menu on navigation
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
    if (hamburger) {
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    }
  }
}

// ===== Footer HTML =====
function getFooterHTML() {
  const catLinks = categories.map(c =>
    `<a href="#/category?cat=${c.id}" class="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-secondary);">${c.label}</a>`
  ).join('');

  return `
  <footer style="background: var(--bg-secondary); border-top: 1px solid var(--border-color);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <a href="#/" class="text-2xl font-bold font-heading" style="color: var(--text-primary);">THE HUB<span class="text-indigo-500">.</span></a>
          <p class="mt-4 text-sm leading-relaxed" style="color: var(--text-secondary);">Trang tin tức và blog hàng đầu Việt Nam, mang đến những thông tin chất lượng và góc nhìn đa chiều.</p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-youtube"></i></a>
            <a href="#" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all" style="background: var(--border-color); color: var(--text-secondary);"><i class="fa-brands fa-tiktok"></i></a>
          </div>
        </div>
        <!-- Quick Links -->
        <div>
          <h4 class="font-bold font-heading mb-4" style="color: var(--text-primary);">Liên kết nhanh</h4>
          <div class="space-y-3">
            <a href="#/" class="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-secondary);">Trang chủ</a>
            <a href="#/about" class="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-secondary);">Giới thiệu</a>
            <a href="#/contact" class="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-secondary);">Liên hệ</a>
            <a href="#" class="block hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors" style="color: var(--text-secondary);">Chính sách bảo mật</a>
          </div>
        </div>
        <!-- Categories -->
        <div>
          <h4 class="font-bold font-heading mb-4" style="color: var(--text-primary);">Chuyên mục</h4>
          <div class="space-y-3">${catLinks}</div>
        </div>
        <!-- Newsletter -->
        <div>
          <h4 class="font-bold font-heading mb-4" style="color: var(--text-primary);">Đăng ký nhận tin</h4>
          <p class="text-sm mb-4" style="color: var(--text-secondary);">Nhận bài viết mới nhất qua email mỗi tuần.</p>
          <form class="flex gap-2" onsubmit="event.preventDefault(); showToast('Đăng ký thành công!', 'success'); this.reset();">
            <input type="email" placeholder="Email của bạn" required class="flex-1 px-4 py-2 rounded-lg text-sm border outline-none focus:ring-2 focus:ring-indigo-500" style="background: var(--bg-primary); border-color: var(--border-color); color: var(--text-primary);">
            <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <!-- Bottom bar -->
    <div class="border-t" style="border-color: var(--border-color);">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style="color: var(--text-secondary);">
        <p>&copy; 2026 THE HUB. Tất cả quyền được bảo lưu.</p>
        <p>Thiết kế với <i class="fa-solid fa-heart text-red-500"></i> tại Việt Nam</p>
      </div>
    </div>
  </footer>`;
}

// ===== Search Overlay HTML =====
function getSearchOverlayHTML() {
  return `
  <div id="searchOverlay" class="search-overlay">
    <div class="search-container">
      <div class="relative">
        <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-lg" style="color: var(--text-secondary);"></i>
        <input type="text" id="searchInput" class="search-input" placeholder="Tìm kiếm bài viết..." autocomplete="off">
        <button id="searchClose" class="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium px-2 py-1 rounded" style="color: var(--text-secondary);">ESC</button>
      </div>
      <div id="searchResults" class="search-results glass"></div>
    </div>
  </div>`;
}

// ===== Toast =====
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMobileNav();

  // Search overlay events
  const searchBtn = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('active');
      setTimeout(() => searchInput && searchInput.focus(), 100);
    });

    searchClose && searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('active');
    });

    searchOverlay.addEventListener('click', (e) => {
      if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') searchOverlay.classList.remove('active');
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchOverlay.classList.add('active');
        setTimeout(() => searchInput && searchInput.focus(), 100);
      }
    });
  }

  // Init search filtering
  if (searchInput) {
    initSearchFilter();
  }
});

// ===== Search Filter =====
function initSearchFilter() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  let debounceTimer;

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = searchInput.value.trim().toLowerCase();
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      const results = searchArticles(query);
      renderSearchResults(results);
    }, 300);
  });
}

function searchArticles(query) {
  const normalized = removeDiacritics(query);
  return articles.filter(article => {
    const title = removeDiacritics(article.title.toLowerCase());
    const excerpt = removeDiacritics(article.excerpt.toLowerCase());
    const tags = article.tags.map(t => removeDiacritics(t.toLowerCase())).join(' ');
    return title.includes(normalized) || excerpt.includes(normalized) || tags.includes(normalized);
  });
}

function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
}

function renderSearchResults(results) {
  const container = document.getElementById('searchResults');
  if (!results.length) {
    container.innerHTML = '<div class="p-6 text-center" style="color: var(--text-secondary);">Không tìm thấy kết quả</div>';
    return;
  }
  container.innerHTML = results.slice(0, 8).map(article => {
    const catInfo = getCategoryInfo(article.category);
    return `
      <a href="#/article?id=${article.id}" class="search-result-item" onclick="document.getElementById('searchOverlay').classList.remove('active');">
        <div class="flex items-center gap-3">
          <img src="${article.image}" alt="" class="w-12 h-12 rounded-lg object-cover">
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-sm truncate" style="color: var(--text-primary);">${article.title}</p>
            <p class="text-xs mt-0.5" style="color: var(--text-secondary);">
              <span class="cat-badge ${article.category} text-[0.6rem] py-0 px-2">${catInfo ? catInfo.label : ''}</span>
              · ${formatDate(article.date)}
            </p>
          </div>
        </div>
      </a>`;
  }).join('');
}

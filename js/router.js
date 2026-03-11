// ===== SPA Router =====
const Router = {
  // Route definitions
  routes: {
    '/': { page: 'home', render: () => renderHomePage(), title: 'THE HUB. - Trang tin tức & Blog hàng đầu Việt Nam' },
    '/article': { page: 'article', render: (p) => renderArticlePage(p.id), title: 'Bài viết - THE HUB.' },
    '/category': { page: 'category', render: (p) => renderCategoryPage(p.cat), title: 'Chuyên mục - THE HUB.' },
    '/about': { page: 'about', render: () => renderAboutPage(), title: 'Giới thiệu - THE HUB.' },
    '/contact': { page: 'contact', render: () => renderContactPage(), title: 'Liên hệ - THE HUB.' }
  },

  // State
  isTransitioning: false,
  currentPage: null,

  // Initialize router
  init() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());

    // Intercept link clicks to convert to hash navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Already a hash link - let it through
      if (href.startsWith('#')) return;

      // External link - let it through
      if (href.startsWith('http') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      // Convert internal .html links to hash routes
      const hashRoute = this.convertToHash(href);
      if (hashRoute !== null) {
        e.preventDefault();
        window.location.hash = hashRoute;
      }
    });

    // Navigate to current hash or default to home
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    } else {
      this.handleRoute();
    }
  },

  // Convert old-style links to hash routes
  convertToHash(href) {
    // Remove leading ./ if present
    href = href.replace(/^\.\//, '');

    // index.html -> #/
    if (href === 'index.html' || href === '/' || href === '') {
      return '#/';
    }

    // article.html?id=X -> #/article?id=X
    if (href.startsWith('article.html')) {
      const qs = href.includes('?') ? href.substring(href.indexOf('?')) : '';
      return '#/article' + qs;
    }

    // category.html?cat=X -> #/category?cat=X
    if (href.startsWith('category.html')) {
      const qs = href.includes('?') ? href.substring(href.indexOf('?')) : '';
      return '#/category' + qs;
    }

    // about.html -> #/about
    if (href === 'about.html') return '#/about';

    // contact.html -> #/contact
    if (href === 'contact.html') return '#/contact';

    // Not an internal page link
    return null;
  },

  // Parse the current hash into route and params
  parseHash() {
    let hash = window.location.hash.slice(1) || '/'; // Remove #

    // Split path and query string
    const qIndex = hash.indexOf('?');
    let path = qIndex >= 0 ? hash.substring(0, qIndex) : hash;
    const queryString = qIndex >= 0 ? hash.substring(qIndex + 1) : '';

    // Parse query params
    const params = {};
    if (queryString) {
      const searchParams = new URLSearchParams(queryString);
      for (const [key, value] of searchParams) {
        params[key] = value;
      }
    }

    // Normalize path
    if (!path || path === '') path = '/';

    return { path, params };
  },

  // Handle route change
  async handleRoute() {
    if (this.isTransitioning) return;

    const { path, params } = this.parseHash();
    const route = this.routes[path];

    if (!route) {
      // Unknown route, redirect to home
      window.location.hash = '#/';
      return;
    }

    // Skip if same page with same params (prevent double render)
    const routeKey = path + JSON.stringify(params);
    if (this.currentPage === routeKey) return;
    this.currentPage = routeKey;

    const container = document.getElementById('pageContainer');
    if (!container) return;

    // Pre-render the new content
    const newHTML = route.render(params);

    // Set document title
    document.title = route.title;

    // Update active nav
    updateActiveNav(route.page);

    // Perform transition
    await this.transition(container, newHTML, route.page, params);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  // Animated page transition
  async transition(container, newHTML, pageName, params) {
    this.isTransitioning = true;

    const currentContent = container.querySelector('.page-content');

    // If there's existing content, animate it out
    if (currentContent && currentContent.innerHTML.trim()) {
      currentContent.classList.add('page-exit');
      await this.wait(300);
      currentContent.remove();
    }

    // Create new content element
    const newContent = document.createElement('div');
    newContent.className = 'page-content page-enter';
    newContent.innerHTML = newHTML;

    // Insert into DOM (hidden via page-enter class)
    container.appendChild(newContent);

    // Initialize page-specific logic (event listeners, etc.)
    initPage(pageName, params);

    // Trigger reflow, then animate in
    void newContent.offsetWidth;
    newContent.classList.remove('page-enter');
    newContent.classList.add('page-enter-active');

    await this.wait(300);

    // Clean up transition classes
    newContent.classList.remove('page-enter-active');

    this.isTransitioning = false;
  },

  // Promise-based wait
  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

// Start the router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Router.init();
});

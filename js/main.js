/**
 * Main Application Logic & Interactive Features
 * Profile: Fauzan Muhammad Iftitah
 */

// Project Case Study Data with Multi-Image Carousels
const PROJECTS_DATA = {
  'speedious': {
    title: 'Speedious - 3D Desktop Racing Game',
    category: 'Game Desktop (Unity)',
    tagline: '3D cartoon-style desktop racing game with customizable vehicles and intelligent AI opponents.',
    images: [
      'image/Speedious1.png',
      'image/Speedious2.png',
      'image/Speedious3.png'
    ],
    description: 'A 3D desktop racing game developed in Unity where players choose a vehicle and race across stylized tracks against competitive AI racers.',
    challenge: 'Designing responsive arcade vehicle physics with drifting mechanics while programming waypoint-following AI opponents that react to dynamic track collisions and player positions.',
    solution: 'Implemented custom wheel colliders and raycast suspension physics in C#, coupled with spline-based AI waypoint pathfinding and smooth camera tracking.',
    tech: ['Unity Engine', 'C#', '3D Physics', 'AI Waypoint System', 'Arcade Controls', 'UI/UX Design'],
    metrics: ['Interactive AI Opponents', 'Game Controller Support', 'Custom Vehicle Handling'],
    demoUrl: 'https://drive.google.com/file/d/1Y05fjq0zMrm_JtkKwuaQJamaEantCIdT/view?usp=sharing',
    githubUrl: 'https://github.com'
  },
  'thalos': {
    title: 'Thalos : The Dark Descent',
    category: 'Game Desktop (Unity)',
    tagline: '🏆 Best Game — Infinite Learning MSIB Independent Study Program.',
    award: '🏆 Best Game — Infinite Learning Independent Study (MSIB)',
    images: [
      'image/Thalos1.png',
      'image/Thalos2.png',
      'image/Thalos3.png'
    ],
    description: 'An atmospheric 2.5D action RPG inspired by Greek mythology, recognized as one of the Best Games in the Infinite Learning Independent Study (MSIB) program. Players explore a dark mythological world, battle varied enemies, gather resources, manage inventory/equipment, and progress through challenging encounters.',
    challenge: 'Architecting a robust state-machine combat system with combo attacks, responsive hitboxes, enemy AI behaviors (patrol, chase, attack), and an expandable inventory/shop economy — all within the tight timeline of the MSIB program.',
    solution: 'Built modular C# combat controllers, finite state machines (FSM) for enemy AI, and ScriptableObject-based data architectures for inventory items, equipment stats, and shop transactions. The project was refined through iterative playtesting and mentor feedback during the Infinite Learning program.',
    tech: ['Unity Engine', 'C#', '2.5D Combat Engine', 'Enemy AI (FSM)', 'Inventory & Shop Economy', 'Level Design'],
    metrics: ['🏆 Best Game — Infinite Learning MSIB', 'Dynamic Combo System', 'Multiple Enemy AI Types', 'Modular Inventory/Shop'],
    demoUrl: 'https://fivepoint-interactive.itch.io/thalos-the-dark-descent',
    githubUrl: 'https://github.com'
  },
  'coin-rush': {
    title: 'Coin Rush - 3D Third-Person Game',
    category: 'Game Desktop (Unity)',
    tagline: 'Fast-paced third-person collection game focusing on exploration and decision-making.',
    images: [
      'image/CoinRush1.png',
      'image/CoinRush2.png',
      'image/CoinRush3.png'
    ],
    description: 'A third-person game where players navigate diverse environments to collect rewarding coins while dodging hazard items that penalize score and trigger gameplay obstacles.',
    challenge: 'Balancing game pacing, spatial level layout, and player feedback loops to maintain excitement and strategic decision-making under time constraints.',
    solution: 'Engineered smooth third-person character controller mechanics, dynamic scoring logic, randomized obstacle spawning, and responsive particle/audio-visual feedback.',
    tech: ['Unity Engine', 'C#', 'Third-Person Controller', 'Game Mechanics', 'Particle Effects', 'UI Scoring'],
    metrics: ['Engaging Risk-Reward Loop', 'Responsive Controls', 'Dynamic Hazard Mechanics'],
    demoUrl: 'https://drive.google.com/file/d/13fOPHsGaVuBOrEliVtKtvRutVqgNtEqS/view?usp=sharing',
    githubUrl: 'https://github.com'
  },
  'mathster': {
    title: 'Mathster - Educational Mathematics Browser Game',
    category: 'Game Browser (Construct 2)',
    tagline: 'Interactive educational game designed for elementary school students to learn mathematics.',
    images: [
      'image/Mathster1.png',
      'image/Mathster2.png',
      'image/Mathster3.png'
    ],
    description: 'An educational web game designed to make fundamental arithmetic enjoyable and engaging for young learners through gamified progression and problem-solving puzzles.',
    challenge: 'Creating intuitive UI/UX and game flow suitable for young students that reinforces learning concepts without overwhelming player attention.',
    solution: 'Designed colorful visual assets, positive reinforcement audio cues, adaptive difficulty curves, and interactive math challenge stages in Construct 2.',
    tech: ['Construct 2', 'HTML5 Game Engine', 'Gamified Learning', 'Educational UI/UX', '2D Asset Design'],
    metrics: ['Elementary Curriculum Aligned', '100% Browser Compatible', 'High Engagement Rate'],
    demoUrl: 'https://mathster.netlify.app',
    githubUrl: 'https://github.com'
  },
  'sign-language': {
    title: 'Sign Language Detection Application',
    category: 'DesktopApp (Python)',
    tagline: 'Real-time Indonesian Sign Language recognition using computer vision and machine learning.',
    images: [
      'image/Bisindo1.png',
      'image/Bisindo2.png',
      'image/Bisindo3.png'
    ],
    description: 'A real-time desktop application capable of detecting Indonesian Sign Language hand gestures via live webcam feed and instantly translating them into corresponding text words.',
    challenge: 'Achieving accurate hand landmark detection and classification under varying lighting conditions with low latency for real-time video processing.',
    solution: 'Employed OpenCV and machine learning classifiers with feature extraction pipelines to track hand coordinates and classify gestures with high confidence.',
    tech: ['Python', 'OpenCV', 'Computer Vision', 'Machine Learning', 'Hand Tracking', 'Desktop UI'],
    metrics: ['Real-Time Frame Processing', 'High Gesture Accuracy', 'Instant Text Translation'],
    demoUrl: 'https://github.com/FauzanMuhammadI/BISINDO-Sign-Language-Detection.git',
    githubUrl: 'https://github.com'
  },
  'cafe-makmur': {
    title: 'Cafe Makmur Itenas - Point of Sale System',
    category: 'DesktopApp (Java)',
    tagline: 'Desktop-based POS software tailored to the operational needs of a café.',
    images: [
      'image/cafe1.png',
      'image/cafe2.png',
      'image/cafe3.png'
    ],
    description: 'A complete desktop Point-of-Sale application engineered to manage café orders, calculate bill amounts with taxes/discounts, generate receipts, and organize menu catalogs.',
    challenge: 'Structuring maintainable desktop software with reliable database connectivity, error handling for concurrent transactions, and an ergonomic cashier interface.',
    solution: 'Built using Java Object-Oriented principles, Swing/GUI components, and relational database connectivity for persistent transaction and menu data storage.',
    tech: ['Java', 'Object-Oriented Programming', 'Desktop GUI', 'Database / SQL', 'POS Architecture'],
    metrics: ['Streamlined Order Processing', 'Error-Free Bill Calculation', 'Complete Menu Management'],
    demoUrl: 'https://drive.google.com/file/d/1deJc2bn0H9UoAV9UafhJJTnFl7wweKKg/view?usp=sharing',
    githubUrl: 'https://github.com'
  },
  'solar-system': {
    title: 'Solar System Learning App',
    category: 'DesktopApp (Adobe Animation)',
    tagline: 'Interactive multimedia educational application explaining the Solar System.',
    images: [
      'image/Tata1.png',
      'image/Tata2.png',
      'image/Tata3.png'
    ],
    description: 'An educational multimedia desktop application that visualizes the structure, planets, and celestial bodies of our Solar System through engaging interactive animations.',
    challenge: 'Delivering an informative yet visually stunning learning tool that encourages exploration and simplifies astronomy concepts for students.',
    solution: 'Created detailed 2D/motion graphic assets, planetary orbit animations, interactive information hotspots, and rich audiovisual narration in Adobe Animate.',
    tech: ['Adobe Animate', 'ActionScript / Interactive Media', 'Motion Graphics', 'Educational UI/UX', 'Vector Illustration'],
    metrics: ['Interactive Planet Tours', 'Rich Visual Animations', 'Engaging Educational Tool'],
    demoUrl: 'https://drive.google.com/file/d/1PBgDkEmLhU_5P9gEWmTZw4ZrKpSUwyoJ/view?usp=sharing',
    githubUrl: 'https://github.com'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  initScrollProgress();
  initStickyNavbar();
  initScrollSpy();
  initThemePicker();
  initTimezoneClock();
  initProjectFilters();
  initProjectModal();
  initServicePills();
  initContactForm();
  initClipboardButtons();
  initMobileMenu();
  initScrollReveal();
  initCountUpOnScroll();
  initTimelineScroll();
  initHeroScrollIndicator();
  initScrollParallax();
});

/* ==========================================================================
   1. HERO TYPEWRITER
   ========================================================================== */
function initTypewriter() {
  const element = document.getElementById('hero-typewriter');
  if (!element) return;

  const words = [
    'Game Programmer & Designer',
    'Informatics Student ITENAS',
    'UI/UX & Graphic Designer',
    'QA & Playtesting'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const pauseEnd = 2000;

  function type() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      element.textContent = currentWord.substring(0, charIndex);
    } else {
      charIndex++;
      element.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. SCROLL PROGRESS BAR & STICKY NAVBAR
   ========================================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   3. ACTIVE NAV SCROLL SPY
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-drawer-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. ACCENT THEME PICKER
   ========================================================================== */
function initThemePicker() {
  const themeBtn = document.getElementById('theme-picker-btn');
  const dropdown = document.getElementById('theme-dropdown');
  const dots = document.querySelectorAll('.theme-color-dot');

  // Load saved theme
  const savedTheme = localStorage.getItem('site_theme_preset') || 'indigo';
  setTheme(savedTheme);

  if (themeBtn && dropdown) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      setTheme(theme);
      dropdown.classList.remove('show');
    });
  });

  function setTheme(theme) {
    if (theme === 'indigo') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('site_theme_preset', theme);

    dots.forEach(dot => {
      if (dot.getAttribute('data-theme') === theme) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
}

/* ==========================================================================
   5. TIMEZONE CLOCK (Bandung, GMT+7)
   ========================================================================== */
function initTimezoneClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    const options = {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    clockEl.textContent = now.toLocaleTimeString('en-US', options) + ' (GMT+7)';
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/* ==========================================================================
   6. PROJECT CATEGORY FILTERS
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filter === 'all' || cardCategory === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   7. PROJECT CASE STUDY MODAL & SWIPEABLE IMAGE CAROUSEL
   ========================================================================== */
function initProjectModal() {
  const modalOverlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const openModalBtns = document.querySelectorAll('.open-case-study');

  const carouselWrap = document.getElementById('modal-carousel-wrap');
  const carouselTrack = document.getElementById('modal-carousel-track');
  const prevBtn = document.getElementById('modal-carousel-prev');
  const nextBtn = document.getElementById('modal-carousel-next');
  const dotsContainer = document.getElementById('modal-carousel-dots');
  const counterBadge = document.getElementById('modal-carousel-counter');

  if (!modalOverlay || !carouselTrack) return;

  let currentSlideIndex = 0;
  let totalSlides = 0;
  let currentImages = [];

  // Touch and Drag State
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;
  let threshold = 45; // pixels to trigger slide change

  function updateCarouselView() {
    if (totalSlides === 0) return;
    carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    // Update Counter Badge
    if (counterBadge) {
      counterBadge.textContent = `${currentSlideIndex + 1} / ${totalSlides}`;
    }

    // Update Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentSlideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    // Show/hide navigation arrows if single image
    if (prevBtn && nextBtn) {
      if (totalSlides <= 1) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
      } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
      }
    }
  }

  function goToSlide(index) {
    if (totalSlides <= 0) return;
    currentSlideIndex = (index + totalSlides) % totalSlides;
    updateCarouselView();
  }

  function nextSlide() {
    goToSlide(currentSlideIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentSlideIndex - 1);
  }

  // Bind Carousel Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
    });
  }

  // Setup Touch / Swipe Gestures on Carousel Container
  if (carouselWrap) {
    // Touch Events for Mobile / Tablet
    carouselWrap.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      currentX = startX;
      isSwiping = true;
    }, { passive: true });

    carouselWrap.addEventListener('touchmove', (e) => {
      if (!isSwiping) return;
      currentX = e.touches[0].clientX;
    }, { passive: true });

    carouselWrap.addEventListener('touchend', () => {
      if (!isSwiping) return;
      isSwiping = false;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide(); // Swiped left -> next
        } else {
          prevSlide(); // Swiped right -> prev
        }
      }
    });

    // Mouse Drag Support for Desktop
    carouselWrap.addEventListener('mousedown', (e) => {
      startX = e.clientX;
      currentX = startX;
      isSwiping = true;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isSwiping) return;
      currentX = e.clientX;
    });

    window.addEventListener('mouseup', () => {
      if (!isSwiping) return;
      isSwiping = false;
      const diffX = startX - currentX;
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    });
  }

  // Open Modal logic with populated Carousel
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const data = PROJECTS_DATA[projectId];
      if (!data) return;

      document.getElementById('modal-title').textContent = data.title;
      document.getElementById('modal-category').textContent = data.category;
      document.getElementById('modal-tagline').textContent = data.tagline;
      document.getElementById('modal-desc').textContent = data.description;
      document.getElementById('modal-challenge').textContent = data.challenge;
      document.getElementById('modal-solution').textContent = data.solution;

      // Populate Images into Carousel Track
      currentImages = data.images && data.images.length > 0 ? data.images : (data.image ? [data.image] : []);
      totalSlides = currentImages.length;
      currentSlideIndex = 0;

      carouselTrack.innerHTML = '';
      if (dotsContainer) dotsContainer.innerHTML = '';

      currentImages.forEach((imgSrc, idx) => {
        // Create Slide
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${imgSrc}" alt="${data.title} Screenshot ${idx + 1}" loading="lazy">`;
        carouselTrack.appendChild(slide);

        // Create Dot
        if (dotsContainer && totalSlides > 1) {
          const dot = document.createElement('span');
          dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
          dot.setAttribute('title', `Go to slide ${idx + 1}`);
          dot.addEventListener('click', (ev) => {
            ev.stopPropagation();
            goToSlide(idx);
          });
          dotsContainer.appendChild(dot);
        }
      });

      updateCarouselView();

      // Populate Tags
      const tagsWrap = document.getElementById('modal-tags');
      tagsWrap.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'modal-tag';
        span.textContent = t;
        tagsWrap.appendChild(span);
      });

      // Populate Metrics
      const metricsWrap = document.getElementById('modal-metrics');
      metricsWrap.innerHTML = '';
      data.metrics.forEach(m => {
        const div = document.createElement('div');
        div.className = 'modal-metric-card';
        div.textContent = m;
        metricsWrap.appendChild(div);
      });

      // Populate Project Link
      const projectLinkBtn = document.getElementById('modal-project-link');
      if (projectLinkBtn) {
        const targetUrl = data.demoUrl || data.githubUrl || '#';
        projectLinkBtn.href = targetUrl;
      }

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Keyboard navigation (Escape to close, Left/Right arrow to swipe carousel)
  window.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });
}

/* ==========================================================================
   8. INTERACTIVE SERVICE PILLS FOR CONTACT
   ========================================================================== */
function initServicePills() {
  const pills = document.querySelectorAll('.service-pill');
  const serviceInput = document.getElementById('selected-service');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      if (serviceInput) {
        serviceInput.value = pill.getAttribute('data-service');
      }
    });
  });
}

/* ==========================================================================
   9. CONTACT FORM HANDLING & CONFETTI CELEBRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="ph-bold ph-spinner ph-spin"></i> Sending message...`;

    // Simulate sending message
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();

      // Deselect pills
      document.querySelectorAll('.service-pill').forEach(p => p.classList.remove('selected'));
      const firstPill = document.querySelector('.service-pill');
      if (firstPill) firstPill.classList.add('selected');

      // Trigger Confetti & Toast
      triggerConfetti();
      showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
    }, 1000);
  });
}

/* Confetti Particle Burst Engine */
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiPieces = [];
  const colors = ['#6366f1', '#06b6d4', '#a855f7', '#10b981', '#fbbf24', '#f43f5e'];

  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 3,
      d: Math.random() * 120,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.floor(Math.random() * 10) - 10,
      tiltAngleIncremental: (Math.random() * 0.07) + .05,
      tiltAngle: 0,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.5) * 14 - 3,
      alpha: 1
    });
  }

  let animationFrame;
  function renderConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    confettiPieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.alpha -= 0.012;
      p.tiltAngle += p.tiltAngleIncremental;
      p.tilt = Math.sin(p.tiltAngle) * 15;

      if (p.alpha > 0) {
        active = true;
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.moveTo(p.x + p.tilt + p.r, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        ctx.stroke();
      }
    });

    ctx.globalAlpha = 1;
    if (active) {
      animationFrame = requestAnimationFrame(renderConfetti);
    } else {
      cancelAnimationFrame(animationFrame);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  renderConfetti();
}

/* ==========================================================================
   10. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  const iconClass = type === 'success' ? 'ph-bold ph-check-circle toast-icon' : 'ph-bold ph-info';

  toast.innerHTML = `
    <i class="${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   11. 1-CLICK CLIPBOARD COPY
   ========================================================================== */
function initClipboardButtons() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }).catch(() => {
        showToast('Unable to copy to clipboard', 'error');
      });
    });
  });
}

/* ==========================================================================
   12. MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const links = document.querySelectorAll('.mobile-drawer-links a');

  if (!toggle || !drawer) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      drawer.classList.remove('open');
    });
  });
}

/* ==========================================================================
   13. SCROLL REVEAL ANIMATIONS
   ========================================================================== */
function initScrollReveal() {
  const selector = '.reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-flip';
  const revealElements = document.querySelectorAll(selector);
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   14. SCROLL-TRIGGERED NUMBER COUNTER
   ========================================================================== */
function initCountUpOnScroll() {
  const statNumbers = document.querySelectorAll('[data-count]');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimal') || '0', 10);
        const duration = 1800; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentVal = easeOut * targetValue;

          el.innerHTML = (decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal)) + `<span>${suffix}</span>`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.innerHTML = (decimals > 0 ? targetValue.toFixed(decimals) : targetValue) + `<span>${suffix}</span>`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  statNumbers.forEach(el => observer.observe(el));
}

/* ==========================================================================
   15. EXPERIENCE TIMELINE SCROLL PROGRESS TRACKER
   ========================================================================== */
function initTimelineScroll() {
  const timeline = document.querySelector('.timeline-wrap');
  if (!timeline) return;

  let progressLine = timeline.querySelector('.timeline-line-progress');
  if (!progressLine) {
    const line = timeline.querySelector('.timeline-line');
    if (line) {
      progressLine = document.createElement('div');
      progressLine.className = 'timeline-line-progress';
      line.appendChild(progressLine);
    }
  }

  function updateTimeline() {
    if (!progressLine) return;
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const startOffset = windowHeight * 0.7;
    const totalDistance = rect.height;
    const currentDistance = startOffset - rect.top;

    let progress = (currentDistance / totalDistance) * 100;
    progress = Math.max(0, Math.min(100, progress));

    progressLine.style.height = `${progress}%`;
  }

  window.addEventListener('scroll', updateTimeline, { passive: true });
  updateTimeline();
}

/* ==========================================================================
   16. HERO SCROLL DOWN INDICATOR
   ========================================================================== */
function initHeroScrollIndicator() {
  const indicator = document.querySelector('.hero-scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      indicator.classList.add('scrolled-past');
    } else {
      indicator.classList.remove('scrolled-past');
    }
  }, { passive: true });
}

/* ==========================================================================
   17. AMBIENT GLOW SCROLL PARALLAX
   ========================================================================== */
function initScrollParallax() {
  const glowTopLeft = document.querySelector('.ambient-glow.top-left');
  const glowBottomRight = document.querySelector('.ambient-glow.bottom-right');
  const glowCenter = document.querySelector('.ambient-glow.middle-center');

  if (!glowTopLeft && !glowBottomRight && !glowCenter) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        if (glowTopLeft) {
          glowTopLeft.style.transform = `translate3d(0, ${scrolled * 0.12}px, 0)`;
        }
        if (glowBottomRight) {
          glowBottomRight.style.transform = `translate3d(0, ${-scrolled * 0.08}px, 0)`;
        }
        if (glowCenter) {
          glowCenter.style.transform = `translate3d(0, ${scrolled * 0.05}px, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

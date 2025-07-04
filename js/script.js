/**
 * IMPLEMENTAÇÃO DO TOGGLE DE TEMA ESCURO
 * Portfólio Paulo R. Mulato
 */

class ThemeToggle {
  constructor() {
    this.theme = this.getInitialTheme();
    this.init();
  }

  /**
   * Determina o tema inicial baseado em:
   * 1. Preferência salva no localStorage
   * 2. Preferência do sistema (prefers-color-scheme)
   * 3. Padrão: light
   */
  getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }

    // Verifica preferência do sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  }

  /**
   * Inicializa o toggle de tema
   */
  init() {
    this.setTheme(this.theme);
    this.createToggleButton();
    this.bindEvents();
    this.watchSystemPreference();
  }

  /**
   * Cria o botão de toggle no menu de navegação
   */
  createToggleButton() {
    const toggle = document.createElement('button');
    toggle.className = 'theme-toggle';
    toggle.setAttribute('aria-label', 'Alternar tema');
    toggle.setAttribute('title', 'Alternar entre tema claro e escuro');
    toggle.innerHTML = `
      <i class="fas fa-sun sun-icon" aria-hidden="true"></i>
      <i class="fas fa-moon moon-icon" aria-hidden="true"></i>
    `;
    
    // Adiciona o botão ao menu de navegação
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.appendChild(toggle);
      this.toggleButton = toggle;
    } else {
      console.warn('Menu de navegação não encontrado');
    }
  }

  /**
   * Vincula eventos aos elementos
   */
  bindEvents() {
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => {
        this.toggleTheme();
      });

      // Adiciona suporte a teclado
      this.toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleTheme();
        }
      });
    }
  }

  /**
   * Observa mudanças na preferência do sistema
   */
  watchSystemPreference() {
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        // Só aplica a preferência do sistema se não houver preferência salva
        if (!localStorage.getItem('theme')) {
          const newTheme = e.matches ? 'dark' : 'light';
          this.setTheme(newTheme);
        }
      });
    }
  }

  /**
   * Define o tema atual
   * @param {string} theme - 'light' ou 'dark'
   */
  setTheme(theme) {
    // Valida o tema
    if (theme !== 'light' && theme !== 'dark') {
      console.warn(`Tema inválido: ${theme}. Usando 'light' como padrão.`);
      theme = 'light';
    }

    // Aplica o tema ao documento
    document.documentElement.setAttribute('data-theme', theme);
    this.theme = theme;
    
    // Salva a preferência
    localStorage.setItem('theme', theme);
    
    // Atualiza o botão de toggle
    if (this.toggleButton) {
      this.toggleButton.classList.toggle('dark', theme === 'dark');
      
      // Atualiza o aria-label para acessibilidade
      const newLabel = theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro';
      this.toggleButton.setAttribute('aria-label', newLabel);
      this.toggleButton.setAttribute('title', newLabel);
    }

    // Dispara evento customizado para outros scripts
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme }
    }));

    // Log para debug
    console.log(`Tema alterado para: ${theme}`);
  }

  /**
   * Alterna entre os temas
   */
  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);

    // Adiciona uma pequena animação ao botão
    if (this.toggleButton) {
      this.toggleButton.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.toggleButton.style.transform = 'scale(1)';
      }, 150);
    }
  }

  /**
   * Retorna o tema atual
   * @returns {string} Tema atual ('light' ou 'dark')
   */
  getCurrentTheme() {
    return this.theme;
  }

  /**
   * Remove o toggle (útil para cleanup)
   */
  destroy() {
    if (this.toggleButton) {
      this.toggleButton.remove();
    }
  }
}

/**
 * ANIMAÇÕES DE SCROLL
 * Adiciona animações quando elementos entram na viewport
 */
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.createObserver();
    this.observeElements();
  }

  createObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          this.observer.unobserve(entry.target);
        }
      });
    }, options);
  }

  observeElements() {
    const elements = document.querySelectorAll(`
      .section-header,
      .about-text,
      .stat-item,
      .skill-item,
      .project-card,
      .contact-info,
      .contact-form
    `);

    elements.forEach(el => {
      this.observer.observe(el);
    });
  }
}

/**
 * SMOOTH SCROLL
 * Adiciona scroll suave para links de navegação
 */
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Atualiza link ativo
          this.updateActiveLink(link);
        }
      });
    });

    // Atualiza link ativo no scroll
    this.watchScroll();
  }

  updateActiveLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }

  watchScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }
}

/**
 * INICIALIZAÇÃO
 * Inicializa todos os componentes quando o DOM estiver carregado
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o toggle de tema
  window.themeToggle = new ThemeToggle();
  
  // Inicializa animações de scroll
  new ScrollAnimations();
  
  // Inicializa smooth scroll
  new SmoothScroll();

  // Log de inicialização
  console.log('🎨 Sistema de tema escuro inicializado');
  console.log('✨ Animações de scroll ativadas');
  console.log('🔗 Smooth scroll configurado');
});

/**
 * LISTENER PARA MUDANÇAS DE TEMA
 * Exemplo de como outros scripts podem reagir a mudanças de tema
 */
document.addEventListener('themeChanged', (e) => {
  const { theme } = e.detail;
  
  // Aqui você pode adicionar lógica adicional quando o tema muda
  // Por exemplo: atualizar gráficos, mapas, etc.
  
  console.log(`🎨 Tema alterado para: ${theme}`);
});

/**
 * UTILITÁRIOS
 * Funções auxiliares que podem ser úteis
 */
window.ThemeUtils = {
  /**
   * Retorna o tema atual
   */
  getCurrentTheme() {
    return window.themeToggle ? window.themeToggle.getCurrentTheme() : 'light';
  },

  /**
   * Define um tema específico
   */
  setTheme(theme) {
    if (window.themeToggle) {
      window.themeToggle.setTheme(theme);
    }
  },

  /**
   * Verifica se está no tema escuro
   */
  isDarkTheme() {
    return this.getCurrentTheme() === 'dark';
  },

  /**
   * Verifica se está no tema claro
   */
  isLightTheme() {
    return this.getCurrentTheme() === 'light';
  }
};


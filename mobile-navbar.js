class MobileNavbar { /* classe */
    constructor(mobileMenu, navList, navLinks) { /* dar propriedade a classe */
      this.mobileMenu = document.querySelector(mobileMenu); /* botão menu */
      this.navList = document.querySelector(navList); /* lista */
      this.navLinks = document.querySelectorAll(navLinks); /* links */
      this.activeClass = "active"; /* referenciar ela ativada */
  
      this.handleClick = this.handleClick.bind(this); /* se refere a classe */
    }
  
    animateLinks() {  /* animar os links */
      this.navLinks.forEach((link, index) => { /* falar com cada link individualmente */
        link.style.animation /* logo abaixo a verificação se há animação */
          ? (link.style.animation = "") /* existe animação? */
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${ /* se sim deixa vazio, se não adiciona */
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks(); /* animar toda vez que clicar */
    }
  
    addClickEvent() { /* evento de click no botão do menu */
      this.mobileMenu.addEventListener("click", this.handleClick);

    }
  
    init() {
      if (this.mobileMenu) { /* se existir */
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar( /* nova variável */
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init(); /* iniciar */

  function informacoes() {
    window.location= "informacoes.html";
  }
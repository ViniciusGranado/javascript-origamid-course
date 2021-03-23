const initTabNav = () => {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');
  }
  
  function activeTab (index) {
    tabContent.forEach((item) => {
      item.classList.remove('active');
    });
    tabContent[index].classList = 'active';
  
    console.log(index);
  }
  
  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index);
    });
  })
};

const initAccordion = () => {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'active';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion () {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  }
}

const initSmoothScroll = () => {
  function scrollToSection (event) {
    event.preventDefault();
  
    const href = event.currentTarget.getAttribute('href');
  
    const section = document.querySelector(href);
    
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }
  
  const internalLinks = document.querySelectorAll('.menu a[href^="#"]');
  internalLinks.forEach((item) => {
    item.addEventListener('click', scrollToSection);
  })
}

const initScrollAnimation = () => {
  const sections = document.querySelectorAll('.js-scroll');
  
  if (sections.length) {
    const windowHeightToAnimation = window.innerHeight * 0.7;

    const animateScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHeightToAnimation) < 0;
    
        if (isSectionVisible) {
          section.classList.add('active');
        }
      })
    }
    
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}


initTabNav();
initAccordion();
initSmoothScroll();
initScrollAnimation();
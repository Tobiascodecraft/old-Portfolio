document.addEventListener('DOMContentLoaded', function() {
  const typewriter = document.getElementById('typewriter');
  const lines = [
    'Hello,',
    'I am a web developer.',
    "Let's create something amazing!"
  ];

  lines.forEach((line, index) => {
    const p = document.createElement('p');
    p.textContent = line;
    typewriter.appendChild(p);
  });
});


  function scrollToSection() {
    const section = document.getElementById('section2'); // Change to the ID of the target section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSection1() {
    const section = document.getElementById('section1'); // Change to the ID of the target section
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToSection3(){
    const section = document.getElementById ("Section3");
    section.scrollIntoView({behavior:"smooth"});
  }

  function scrollToSection4(){
    const section = document.getElementById ("section4");
    section.scrollIntoView({behavior:"smooth"});
  }

  const navbar = document.getElementById('nav_font');
let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollpos = currentScrollPos;
};








document.addEventListener('DOMContentLoaded', function () {
  const floatingItems = document.querySelectorAll('.floating-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  floatingItems.forEach(item => {
    observer.observe(item);
  });
});

  
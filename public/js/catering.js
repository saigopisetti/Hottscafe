/* catering.js — Auto-playing hero slider */
(function () {
  const slides = [
    { title: "Corporate Lunches",  desc: "Impress your team with fresh, gourmet platters." },
    { title: "Private Events",     desc: "Tailored menus for birthdays and celebrations." },
    { title: "Fresh Platters",     desc: "Beautifully presented and delivered to your door." },
    { title: "Gourmet Choices",    desc: "Elegant fine choice of dishes for sophisticated gatherings." },
    { title: "Event Spreads",      desc: "Comprehensive menus for large corporate functions." },
    { title: "Dessert Towers",     desc: "Sweet finishes and seasonal fruit arrangements." },
  ];

  let current = 0;
  const titleEl = document.getElementById('slideTitle');
  const descEl  = document.getElementById('slideDesc');
  const dotsEl  = document.getElementById('sliderDots');

  // Build dots
  slides.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'slider-dot' + (i === 0 ? ' active' : '');
    btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    btn.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(btn);
  });

  function goTo(idx) {
    document.getElementById('slide-' + current).classList.remove('active');
    dotsEl.children[current].classList.remove('active');
    current = idx;
    document.getElementById('slide-' + current).classList.add('active');
    dotsEl.children[current].classList.add('active');
    titleEl.textContent = slides[current].title;
    descEl.textContent  = slides[current].desc;
  }

  setInterval(() => goTo((current + 1) % slides.length), 5000);
})();

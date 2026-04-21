/* contact.js — Captcha + Form validation */
(function () {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let currentCode = '';

  function generate() {
    currentCode = Array.from({length: 5}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    document.getElementById('captchaDisplay').textContent = currentCode;
    document.getElementById('captchaInput').value = '';
    updateBtn(false);
  }

  function updateBtn(verified) {
    const btn = document.getElementById('submitBtn');
    btn.disabled = !verified;
    btn.innerHTML = verified
      ? 'Send Message <i class="fas fa-paper-plane" style="margin-left:0.5rem;"></i>'
      : 'Verify to Send <i class="fas fa-paper-plane" style="margin-left:0.5rem;"></i>';
  }

  generate();

  document.getElementById('captchaRefresh').addEventListener('click', generate);

  document.getElementById('captchaInput').addEventListener('input', function () {
    updateBtn(this.value.toUpperCase() === currentCode);
  });

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.email.value;
    const phone = this.phone.value.replace(/[\s\-()]/g, '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address.'); return;
    }
    if (phone && !/^\d{8,15}$/.test(phone)) {
      alert('Please enter a valid phone number (at least 8 digits).'); return;
    }
    alert('Message sent! We\'ll be in touch soon.');
    this.reset();
    generate();
  });
})();

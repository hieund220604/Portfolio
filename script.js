/* ==========================================================
   1. CUSTOM CURSOR
   ========================================================== */
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

if (cursorDot && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = (mouseX - 4) + 'px';
    cursorDot.style.top = (mouseY - 4) + 'px';
  });

  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRing.style.left = (ringX - 20) + 'px';
    cursorRing.style.top = (ringY - 20) + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });
}

/* ==========================================================
   2. TYPING EFFECT
   ========================================================== */
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const phrases = [
    'Turning Ambiguity into Clarity',
    'Building Products with Purpose',
    'From IT to Product Thinking',
    'User-first, Data-informed'
  ];
  let phraseIdx = 0, charIdx = 0, isDeleting = false;

  function typeLoop() {
    const current = phrases[phraseIdx];
    if (!isDeleting) {
      typingEl.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 2000);
        return;
      }
      setTimeout(typeLoop, 70);
    } else {
      typingEl.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(typeLoop, 500);
        return;
      }
      setTimeout(typeLoop, 35);
    }
  }
  typeLoop();
}

/* ==========================================================
   3. GSAP SCROLL REVEAL (Fade Up)
   ========================================================== */
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.reveal-up').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 60 },
      {
        opacity: 1, 
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
}

/* ==========================================================
   4. 3D TILT EFFECT
   ========================================================== */
document.querySelectorAll('[data-tilt]').forEach(card => {
  const inner = card.querySelector('.card-inner');
  if (!inner) return;
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    inner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
  });
});

/* ==========================================================
   5. MAGNETIC BUTTON EFFECT
   ========================================================== */
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 0.4s ease';
    setTimeout(() => btn.style.transition = '', 400);
  });
});

/* ==========================================================
   6. SWIPER GALLERY
   ========================================================== */
if (typeof Swiper !== 'undefined' && document.querySelector('.achievement-swiper')) {
  new Swiper('.achievement-swiper', {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 3500,
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 24,
    grabCursor: true,
    freeMode: {
      enabled: true,
      momentum: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* ==========================================================
   7. COUNTER ANIMATION
   ========================================================== */
if (typeof gsap !== 'undefined') {
  document.querySelectorAll('.counter-value[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const isDecimal = el.dataset.decimal === 'true';

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        let obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = isDecimal ? obj.val.toFixed(1) : Math.round(obj.val);
          }
        });
      }
    });
  });
}

/* ==========================================================
   8. NAVBAR & MOBILE MENU
   ========================================================== */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

if (navbar) {
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 100) {
      navbar.style.transform = 'translateY(-100%)';
      navbar.style.transition = 'transform 0.35s ease';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = current;
  });
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    if (mobileMenu.classList.contains('opacity-0')) {
      mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
      mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    });
  });
}

/* ==========================================================
   9. PARALLAX GLOW BLOBS
   ========================================================== */
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  document.querySelectorAll('.glow-blob').forEach((blob, i) => {
    const speed = (i % 3 + 1) * 0.03;
    blob.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

/* ==========================================================
   10. CONTACT MODAL
   ========================================================== */
(function () {
  const overlay  = document.getElementById('contact-modal');
  const openBtn  = document.getElementById('open-contact-modal');
  const closeBtn = document.getElementById('close-contact-modal');
  const form     = document.getElementById('contact-form');
  const toast    = document.getElementById('cf-toast');
  const btnText  = document.getElementById('cf-btn-text');
  const btnLoad  = document.getElementById('cf-btn-loading');
  const emailIn  = document.getElementById('cf-email');
  const emailHid = document.getElementById('cf-email-hidden');

  if (!overlay || !openBtn) return;

  function openModal() {
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('cf-name')?.focus(), 350);
  }

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  // Sync hidden reply-to field
  emailIn?.addEventListener('input', () => { if (emailHid) emailHid.value = emailIn.value; });

  // Form submission via Formspree
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    // Loading state
    btnText.classList.add('hidden');
    btnLoad.classList.remove('hidden');
    toast.className = 'cf-toast hidden';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        toast.textContent = '✅ Tin nhắn đã được gửi! Tôi sẽ phản hồi sớm nhất có thể.';
        toast.className = 'cf-toast success';
        form.reset();
        setTimeout(closeModal, 3000);
      } else {
        const data = await res.json();
        const msg = data?.errors?.map(e => e.message).join(', ') || 'Có lỗi xảy ra.';
        toast.textContent = `❌ ${msg}`;
        toast.className = 'cf-toast error';
      }
    } catch {
      toast.textContent = '❌ Không thể kết nối. Vui lòng thử lại hoặc gửi email trực tiếp.';
      toast.className = 'cf-toast error';
    } finally {
      btnText.classList.remove('hidden');
      btnLoad.classList.add('hidden');
    }
  });
})();

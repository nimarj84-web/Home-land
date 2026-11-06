/* ============================================
   هوم‌لند شیراز — اسکریپت‌های سایت
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- ۱) منوی موبایل ---------- */
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      menuBtn.setAttribute(
        "aria-label",
        isOpen ? "باز کردن منو" : "بستن منو"
      );
    });

    // بستن منو پس از کلیک روی هر لینک
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- ۲) سایه هدر هنگام اسکرول ---------- */
  const header = document.getElementById("site-header");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- ۳) انیمیشن ظاهر شدن بخش‌ها هنگام اسکرول ---------- */
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // مرورگر قدیمی: همه چیز را نمایش بده
    revealItems.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ---------- ۴) فقط یک سوال متداول باز باشد ---------- */
  const faqItems = document.querySelectorAll("#faq details");

  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});

 let dark = true;

  function DL(){
    if(dark){
      document.body.classList = "dark";
      
      dark = false;
    }
    else{
      document.body.classList = "light";
       
       dark = true;
    
    }

  }

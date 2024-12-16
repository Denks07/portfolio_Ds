// toggle icon navbar
 const menuIcon = document.querySelector("#menu-icon");
 const navbar = document.querySelector(".navbar");
 const navbarLinks = document.querySelectorAll(".navbar a");

 // Toggle ikon menu dan navbar
 menuIcon.onclick = () => {
   menuIcon.classList.toggle("active"); // Toggle kelas 'active' untuk ikon menu
   navbar.classList.toggle("active"); // Toggle kelas 'active' untuk navbar untuk animasi
 };

 // Hapus kelas 'active' ketika salah satu tautan di navbar diklik
 navbarLinks.forEach((link) => {
   link.addEventListener("click", () => {
     menuIcon.classList.remove("active");
     navbar.classList.remove("active");
   });
 });

 // Hapus kelas 'active' ketika pengguna menggulir halaman
 window.addEventListener("scroll", () => {
   if (menuIcon.classList.contains("active")) {
     menuIcon.classList.remove("active");
     navbar.classList.remove("active");
   }
 });




// scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(`header nav a[href*='${id}']`)
        .classList.add("active");
    }
  });

  // sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 100);

  // remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay :200
});

ScrollReveal().reveal('.heading, .about-content h2 ',{ origin: 'top'});
ScrollReveal().reveal('.skills, .portfolio-box, .certificate-box ,.contact form',{ origin: 'bottom'});
ScrollReveal().reveal(".home-img, .social-media, .home-content h1, .home-content p, .about-content h3, .about-content p, .about-img", { origin: "left" });
ScrollReveal().reveal(".title,.title2", {origin: "right",
});


// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Arduino Developer"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// button ke-6
$(function () {
  $(".btn-6")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("Le DOM est prêt !");
    const audios = document.querySelectorAll('.songs');
    audios.forEach(audio => {
        audio.volume = 0.2;
      });
});

/* GSAP 
*/
gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".kerning-artwork");

let offset;
if (window.innerWidth >= 1600) {
  offset = 300;
} else if (window.innerWidth >= 1200) {
  offset = 200;
} else if (window.innerWidth >= 1024) {
  offset = 120;
} else if (window.innerWidth >= 900) {
    offset = 100;
} else {
    offset = 100;
}

const scrollDistance = container.scrollWidth - window.innerWidth + offset;
console.log("scrollWidth:", container.scrollWidth, "windowWidth:", window.innerWidth, "scrollDistance:", scrollDistance);

gsap.to(container, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-section",
      start: "center+=50 center",
      end: `+=${scrollDistance}`,
      scrub: true,
      pin: true,
      pinSpacing: true,
    }
});



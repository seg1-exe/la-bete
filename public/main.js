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
const scrollDistance = container.scrollWidth - window.innerWidth + 200;
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



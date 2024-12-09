document.addEventListener('DOMContentLoaded', () => {
    console.log("Le DOM est prêt !");
    const audios = document.querySelectorAll('.songs');
    audios.forEach(audio => {
        audio.volume = 0.2;
      });
});

/* GSAP */
gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector(".navigation-container");
const scrollDistance = container.scrollWidth - window.innerWidth;
console.log("scrollWidth:", container.scrollWidth, "windowWidth:", window.innerWidth, "scrollDistance:", scrollDistance);

gsap.to(container, {
x: -1000,
ease: "none",
scrollTrigger: {
    trigger: ".horizontal-section",
    start: "top top",
    end: `+=${scrollDistance + 200}`, 
    scrub: true,
    pin: true,
    pinSpacing: true,
}
});




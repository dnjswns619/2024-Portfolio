import Lenis from "@studio-freight/lenis";

const lenis = (state) => {
  const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", (e) => {
  });

  if(state !== undefined && !state) {
    lenis.stop();
  } else if (state !== undefined) {
    const lenisStop = document.querySelector(".lenis-stopped")
    lenisStop.classList.remove("lenis-stopped")
    lenis.start();
  }
};

export default lenis;
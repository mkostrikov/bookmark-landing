let prevActiveSlide = -1;
let activeSlide = -1;

function show(n, slides, navs) {
  if (n === -1) return;
  slides[n].setAttribute("active", "");
  navs[n].setAttribute("active", "");
}

function hide(n, slides, navs) {
  if (n === -1) return;
  slides[n].removeAttribute("active");
  navs[n].removeAttribute("active");
}

function toggle(n, slides, navs) {
  if (n === activeSlide) return;

  prevActiveSlide = activeSlide;
  activeSlide = n;
  hide(prevActiveSlide, slides, navs);
  show(activeSlide, slides, navs);
}

function init({ navs, slides }) {
  toggle(0, slides, navs);

  navs.forEach((nav, index) =>
    nav.addEventListener("click", () => toggle(index, slides, navs)),
  );
}

export default { init };

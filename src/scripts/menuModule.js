function addEvents({ dialog, openBtn }) {
  const body = document.querySelector("body");
  openBtn.addEventListener("click", () => {
    dialog.showModal();
    body.style.overflowY = "hidden";
    const closeBtn = document.querySelector(".js-menu-close");
    if (closeBtn) {
      closeBtn.addEventListener(
        "click",
        () => {
          dialog.close();
          body.style.overflowY = "auto";
        },
        { once: true },
      );
    }
  });
}

export default { addEvents };

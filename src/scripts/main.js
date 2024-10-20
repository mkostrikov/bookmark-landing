import menu from "./menuModule.js";
import tabsModule from "./tabsModule.js";

menu.addEvents({
  dialog: document.querySelector(".js-menu"),
  openBtn: document.querySelector(".js-menu-open"),
  closeBtn: document.querySelector(".js-menu-close"),
});

tabsModule.init({
  navs: [
    ...document.querySelector(".js-tabs").querySelectorAll(".js-tabs-nav"),
  ],
  slides: [
    ...document.querySelector(".js-tabs").querySelectorAll(".js-tabs-slide"),
  ],
});

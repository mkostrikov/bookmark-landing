(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();function d({dialog:e,openBtn:t}){const o=document.querySelector("body");t.addEventListener("click",()=>{e.showModal(),o.style.overflowY="hidden";const n=document.querySelector(".js-menu-close");n&&n.addEventListener("click",()=>{e.close(),o.style.overflowY="auto"},{once:!0})})}const f={addEvents:d};let u=-1,i=-1;function a(e,t,o){e!==-1&&(t[e].setAttribute("active",""),o[e].setAttribute("active",""))}function m(e,t,o){e!==-1&&(t[e].removeAttribute("active"),o[e].removeAttribute("active"))}function l(e,t,o){e!==i&&(u=i,i=e,m(u,t,o),a(i,t,o))}function y({navs:e,slides:t}){l(0,t,e),e.forEach((o,n)=>o.addEventListener("click",()=>l(n,t,e)))}const p={init:y};f.addEvents({dialog:document.querySelector(".js-menu"),openBtn:document.querySelector(".js-menu-open"),closeBtn:document.querySelector(".js-menu-close")});p.init({navs:[...document.querySelector(".js-tabs").querySelectorAll(".js-tabs-nav")],slides:[...document.querySelector(".js-tabs").querySelectorAll(".js-tabs-slide")]});
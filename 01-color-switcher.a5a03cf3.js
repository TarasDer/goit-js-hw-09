!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),o=null;t.addEventListener("click",(function(){o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor=t}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.a5a03cf3.js.map

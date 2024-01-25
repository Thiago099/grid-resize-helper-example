(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();function y(e,s){const l=getComputedStyle(e),r=l.gap,t=l.gridTemplateColumns.split(" ").length,o=l.gridTemplateRows.split(" ").length,c={"x-":w,"x+":L,"y-":b,"y+":x},p={x:h,y:d};for(const a of s){const i=e.querySelector(a.query);for(let{position:u,edge:n}of a.helpers){if(u[0]=="x"&&(n<=-1||n>=t-1)){console.warn(`Horizontal internal edge ${n} does not exist in the grid, skipping it`);continue}if(u[0]=="y"&&(n<=-1||n>=o-1)){console.warn(`Vertical internal edge ${n} does not exist in the grid, skipping it`);continue}p[u[0]](e,c[u](g(i),r),n)}}}function h(e,s,l){let r=null,t=0,o=0;function c(i){const{clientX:u}=i;if(s.contains(i.target)){r=getComputedStyle(e).gridTemplateColumns.split(" ").map(m=>Number(m.replace("px",""))),e.addEventListener("mousemove",a),e.addEventListener("mouseup",p);let n=r[l];o=r[l+1]+n,t=u-n}}function p(i){e.removeEventListener("mousemove",a),e.removeEventListener("mouseUp",p)}function a(i){const{clientX:u}=i;let n=Math.max(u-t,0);r[l]=n,r[l+1]=o-n;let m=r.map(f=>f+"fr").join(" ");e.style.gridTemplateColumns=m}e.addEventListener("mousedown",c)}function d(e,s,l){let r=null,t=0,o=0;function c(i){const{clientY:u}=i;if(s.contains(i.target)){r=getComputedStyle(e).gridTemplateRows.split(" ").map(m=>Number(m.replace("px",""))),e.addEventListener("mousemove",a),e.addEventListener("mouseup",p);let n=r[l];o=r[l+1]+n,t=u-n}}function p(i){e.removeEventListener("mousemove",a),e.removeEventListener("mouseUp",p)}function a(i){const{clientY:u}=i;let n=Math.max(u-t,0);r[l]=n,r[l+1]=o-n;let m=r.map(f=>f+"fr").join(" ");e.style.gridTemplateRows=m}e.addEventListener("mousedown",c)}function g(e){e.style.position="relative";let s=document.createElement("div");return s.style.userSelect="none",s.style.position="absolute",e.appendChild(s),s}function w(e,s){return e.style.width=s,e.style.height="100%",e.style.transform="translateX(-100%)",e.style.cursor="ew-resize",e}function L(e,s){return e.style.right="0",e.style.width=s,e.style.height="100%",e.style.transform="translateX(100%)",e.style.cursor="ew-resize",e}function x(e,s){return e.style.bottom="0",e.style.width="100%",e.style.height=s,e.style.transform="translateY(100%)",e.style.cursor="ns-resize",e}function b(e,s){return e.style.width="100%",e.style.height=s,e.style.transform="translateY(-100%)",e.style.cursor="ns-resize",e}let P=document.querySelector(".container");y(P,[{query:".menu",helpers:[{position:"x+",edge:0}]},{query:".right",helpers:[{position:"x-",edge:1}]},{query:".header",helpers:[{position:"y+",edge:0}]},{query:".footer",helpers:[{position:"y-",edge:1}]}]);
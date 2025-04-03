import{a as d,S as f,i as o}from"./assets/vendor-DEZpR2tN.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="49644584-3a2a1c6d1a84de76c23a0374c";function m(t){return d("https://pixabay.com/api/?",{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function g(t){return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
            />
            <div class="info">
                <div class="info-item">
                    <p class="info-label">Likes</p>
                    <span class="info-value">${t.likes}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Views</p>
                    <span class="info-value">${t.views}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Comments</p>
                    <span class="info-value">${t.comments}</span>
                </div>
                <div class="info-item">
                    <p class="info-label">Downloads</p>
                    <span class="info-value">${t.downloads}</span>
                </div>
            </div>
        </a>
    </li>
    `}function h(t){const a=t.map(g).join("");c.insertAdjacentHTML("beforeend",a),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}function v(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const b=document.querySelector(".form"),n=document.querySelector(".input");b.addEventListener("submit",w);function w(t){t.preventDefault();const a=n.value.trim();if(!a){o.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),n.focus();return}v(),y(),m(a).then(s=>s.data).then(s=>{if(!s.hits||s.hits.length===0){o.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}h(s.hits)}).catch(s=>{o.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",s)}).finally(()=>{L(),n.value=""})}
//# sourceMappingURL=index.js.map

import{a as d,S as f,i as a}from"./assets/vendor-DEZpR2tN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p="49644584-3a2a1c6d1a84de76c23a0374c";function m(t){return d("https://pixabay.com/api/?",{params:{key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(t){const s=t.tags.split(",").slice(0,3).join(", ");return`
    <li class="gallery-item">
        <a href="${t.largeImageURL}" class="gallery-link">
            <img
                class="gallery-image"
                src="${t.webformatURL}"
                alt="${s}"
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
    `}function g(t){const s=t.map(h).join("");c.insertAdjacentHTML("beforeend",s),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}function v(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const b=document.querySelector(".form"),n=document.querySelector(".input");b.addEventListener("submit",w);function w(t){t.preventDefault();const s=n.value.trim();if(!s){a.warning({position:"topRight",title:"Warning",message:"Please enter a search query"}),n.focus();return}v(),y(),m(s).then(i=>i.data).then(i=>{if(!i.hits||i.hits.length===0){a.warning({position:"topRight",title:"Warning",message:"Sorry, no images found. Please try another query!"});return}g(i.hits)}).catch(i=>{a.error({position:"topRight",title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error:",i)}).finally(()=>{L(),n.value=""})}
//# sourceMappingURL=index.js.map

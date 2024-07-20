import{a as y,S as f,i as p}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();y.defaults.baseURL="https://pixabay.com/api/";const h=new URLSearchParams({key:"27065513-503b047e62eedc8adb85626ce",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}),g=async(r,t)=>(await y.get(`?${h}&q=${r}&page=${t}`)).data;function m(r){document.querySelector(".gallery").insertAdjacentHTML("beforeend",r.map(o).join(""));function o(e){return`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        <div class="photo-info">
        <div>Likes <span>${e.likes}</span></div>
        <div>Views <span>${e.views}</span></div>
        <div>Comments <span>${e.comments}</span></div>
        <div>Downloads <span>${e.downloads}</span></div>
        </div>
        </a>
      </li>`}new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const u=document.querySelector(".form"),b=u.querySelector("input"),v=document.querySelector(".gallery"),i=document.querySelector(".loader"),c=document.querySelector(".load-more-btn");let l="",n=0;i.style.display="none";c.style.display="none";u.addEventListener("submit",async r=>{r.preventDefault(),v.innerHTML="",l=b.value.trim(),n=1,l===""&&p.show({message:"Please fill out this field",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"}),i.style.display="block",u.reset();const o=(await g(l,n)).hits;i.style.display="none",o.length===0&&p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"}),m(o),c.style.display="block"});c.addEventListener("click",async r=>{n+=1,i.style.display="block";const t=await g(l,n);console.log(t);const o=t.hits,a=Math.ceil(t.totalHits/15);if(i.style.display="none",m(o),window.scrollBy({top:400,behavior:"smooth"}),n>a)return c.style.display="none",p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})});
//# sourceMappingURL=commonHelpers.js.map

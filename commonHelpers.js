import{a as u,S as h,i as p}from"./assets/vendor-ee72e1a4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();u.defaults.baseURL="https://pixabay.com/api/";const b=new URLSearchParams({key:"27065513-503b047e62eedc8adb85626ce",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}),g=async(a,e)=>(await u.get(`?${b}&q=${a}&page=${e}`)).data,v=new h(".gallery a",{captionsData:"alt",captionDelay:250});function m(a){document.querySelector(".gallery").insertAdjacentHTML("beforeend",a.map(r).join(""));function r(o){return`<li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        <div class="photo-info">
        <div>Likes <span>${o.likes}</span></div>
        <div>Views <span>${o.views}</span></div>
        <div>Comments <span>${o.comments}</span></div>
        <div>Downloads <span>${o.downloads}</span></div>
        </div>
        </a>
      </li>`}v.refresh()}const y=document.querySelector(".form"),L=y.querySelector("input"),w=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-more-btn");let c="",i=0;n.style.display="none";l.style.display="none";let f=0;y.addEventListener("submit",async a=>{if(a.preventDefault(),w.innerHTML="",c=L.value.trim(),i=1,c==="")return p.show({message:"Please fill out this field",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"});n.style.display="block",l.style.display="none",y.reset();try{const e=await g(c,i);f=Math.ceil(e.totalHits/15);const r=e.hits;if(n.style.display="none",r.length===0)return p.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"#EF4040",position:"topRight",maxWidth:"432px"});m(r),l.style.display="block"}catch(e){console.log(e)}finally{n.style.display="none"}});l.addEventListener("click",async a=>{if(i>=f)return l.style.display="none",p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});i+=1,n.style.display="block";try{const e=await g(c,i);console.log(e);const r=e.hits;n.style.display="none",m(r),window.scrollBy({top:400,behavior:"smooth"})}catch(e){console.log(e)}finally{n.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map

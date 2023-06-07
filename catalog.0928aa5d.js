function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a.register("kyEFX",function(t,n){"use strict";e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var r,a,i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a("kyEFX").register(JSON.parse('{"9NLH0":"catalog.0928aa5d.js","bfHyM":"default.183d728c.jpg","ie9s5":"library.0e1d0f6e.js","1YPTb":"library.f287c920.js","9pyrD":"index.9d29b32f.js"}')),a("g3iFJ"),a("8oZBs");const i={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),errorContainer:document.querySelector(".error-container"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),paginationContainer:document.querySelector(".pagination-wrapper"),paginationButton:document.querySelector(".pagination-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")};class o{static BASE_URL="https://api.themoviedb.org/3";static API_KEY="41b8f9437bf3f899281f8a3f9bdc0891";constructor(){this.searchQuery="",this.page=1,this.totalAmount=0}async getMovies(){let e={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${o.API_KEY}`}},t="";t=this.searchQuery?`${o.BASE_URL}/search/movie?api_key=${o.API_KEY}&query=${this.searchQuery}&include_adult=false&language=en-US&page=${this.page}`:`${o.BASE_URL}/trending/all/week?api_key=${o.API_KEY}&language=en-US&page=${this.page}`;try{let n=await fetch(t,e),r=await n.json();return r}catch(e){throw console.error(e),e}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get total(){return this.totalAmount}set total(e){this.totalAmount=e}resetTotal(){this.totalAmount=0}}let s=!1;const c=()=>{if(s)return;let e=`<p class="error-information">OOPS...</p>
  <p class="error-information">We are very sorry!</p>
  <p class="error-information">
    We don’t have any results matching your search.
  </p>`,t=document.createElement("div");t.innerHTML=e,i.errorContainer.appendChild(t),i.errorContainer.classList.remove("is-hidden"),i.paginationContainer.classList.add("is-hidden"),s=!0};var l={};l=new URL(a("kyEFX").resolve("bfHyM"),import.meta.url).toString();var d=a("h85Iw"),u=a("6t6rc"),g=a("62bSP");async function p(e){let t=JSON.parse(localStorage.getItem("genres")),n=e.results.map(async e=>{var n;let r=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${(n=l)&&n.__esModule?n.default:n}`,a=(0,u.validateGenres)(e.genre_ids,t),i=await a;return`<li class="card-item" data-id="${e.id}">
        <img class="film-poster" src="${r}" alt="${e.original_title||e.name}" />
        <div class="overlay">
          <div class="film-info">
            <p class="film-title">${e.original_title||e.name}</p>
            <div class="film-details">
              <span class="film-description">${i} | ${new Date(e.release_date).getFullYear()||new Date(e.first_air_date).getFullYear()}</span>
    <div class="stars-container">${(0,d.default)({voteAverage:e.vote_average,isHero:!1})}</div>            
      <!-- <span class="film-rating">${e.vote_average.toFixed(1)}</span> -->
            </div>
          </div>
        </div>
      </li>`}),r=await Promise.all(n);i.catalogList.innerHTML=r.join("");let a=document.querySelector(".listListener");a.addEventListener("click",e=>{let t=e.target.closest(".card-item"),n=t.getAttribute("data-id");(0,g.openModalAboutFilm)(n)})}const f=new o;let h=1;function m(e){f.getMovies(e).then(v).catch(y)}function v(e){p(e),i.paginationButton.textContent=h,h===e.total_pages?i.nextPageBtn.setAttribute("disabled","disabled"):i.nextPageBtn.removeAttribute("disabled")}function y(e){i.catalogList.innerHTML="",c(),console.error("An error occurred:",e)}async function b(){try{let e=await f.getMovies();0===e.total_results?(i.catalogList.innerHTML="",c()):(f.total=e.total_results,p(e),h=e.page,i.paginationButton.textContent=h),i.searchInput.value=""}catch(e){y(e)}}i.searchForm.addEventListener("submit",function(e){e.preventDefault(),i.paginationContainer.classList.remove("is-hidden"),i.errorContainer.classList.add("is-hidden");let t=i.searchInput.value.trim();f.query=t,f.resetPage(),f.resetTotal(),""===t?(i.catalogList.innerHTML="",c()):b()}),i.cancelBtn.addEventListener("click",function(){i.cancelBtn.classList.add("is-hidden"),i.searchInput.value=""}),i.searchInput.addEventListener("input",function(e){e.currentTarget.value.trim()?i.cancelBtn.classList.remove("is-hidden"):i.cancelBtn.classList.add("is-hidden")}),i.nextPageBtn.addEventListener("click",function(){h+=1,f.incrementPage(),m(h)}),i.prevPageBtn.addEventListener("click",function(){h>1&&(h-=1,f.decrementPage(),m(h))}),i.errorContainer.classList.add("is-hidden"),i.cancelBtn.classList.add("is-hidden"),m(h),a("7pPMD"),a("e9sH3");
//# sourceMappingURL=catalog.0928aa5d.js.map
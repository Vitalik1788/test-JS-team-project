function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("g3iFJ",(function(e,t){const n=document.getElementById("menu"),r=document.querySelector("nav"),a=document.getElementById("overlay"),i=document.querySelector("body");n.addEventListener("click",(()=>{r.style.left="0",a.style.display="block",i.style.overflow="hidden"})),a.addEventListener("click",(()=>{r.style.left="-64%",a.style.display="none",i.style.overflow="auto"}));const o=document.querySelector(".switcher");let s="true"===localStorage.getItem("isLight");document.body.classList.toggle("light",s),o.onclick=function(){s=!s,document.body.classList.toggle("light",s),localStorage.setItem("isLight",s)};const c=window.location.href,l=document.querySelectorAll(".mobile-menu__link, .header__nav-link");if(l[0].classList.add("current__nav-link"),l[3].classList.add("current__nav-link"),!c.includes("index"))return c.includes("catalog")?(l[0].classList.remove("current__nav-link"),l[3].classList.remove("current__nav-link"),l[1].classList.add("current__nav-link"),void l[4].classList.add("current__nav-link")):c.includes("library")?(l[0].classList.remove("current__nav-link"),l[3].classList.remove("current__nav-link"),l[1].classList.remove("current__nav-link"),l[4].classList.remove("current__nav-link"),l[2].classList.add("current__nav-link"),void l[5].classList.add("current__nav-link")):void 0})),i("kyEFX").register(JSON.parse('{"9NLH0":"catalog.f8a4fefc.js","bfHyM":"default.183d728c.jpg","1V5gE":"catalog.be9b20a7.js"}')),i("g3iFJ"),i("8oZBs");const o={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),errorContainer:document.querySelector(".error-container"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),paginationContainer:document.querySelector(".pagination-wrapper"),paginationButton:document.querySelector(".pagination-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")};var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};class c{async getMovies(){const e={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${c.API_KEY}`}};let t="";t=this.searchQuery?`${c.BASE_URL}/search/movie?api_key=${c.API_KEY}&query=${this.searchQuery}&include_adult=false&language=en-US&page=${this.page}`:`${c.BASE_URL}/trending/all/week?api_key=${c.API_KEY}&language=en-US&page=${this.page}`;try{const n=await fetch(t,e);return await n.json()}catch(e){throw console.error(e),e}}incrementPage(){this.page+=1}decrementPage(){this.page-=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}get total(){return this.totalAmount}set total(e){this.totalAmount=e}resetTotal(){this.totalAmount=0}constructor(){this.searchQuery="",this.page=1,this.totalAmount=0}}t(s)(c,"BASE_URL","https://api.themoviedb.org/3"),t(s)(c,"API_KEY","41b8f9437bf3f899281f8a3f9bdc0891");var l;function u(e){const n=e.results.map((e=>`<li class="card-item">\n            <img class="film-poster" src="${e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${t(l)}`}" alt="${e.original_title}" />\n            <div class="overlay">\n              <div class="film-info">\n                <p class="film-title">${e.original_title||e.name}</p>\n                <div class="film-details">\n                  <span class="film-description">${[...e.genre_ids]} | ${new Date(e.release_date).getFullYear()||new Date(e.first_air_date).getFullYear()} </span>\n                  <span class="film-rating">${Math.round(e.vote_average)}</span>\n                </div>\n              </div>\n            </div>\n          </li>`)).join("");o.catalogList.innerHTML=n}l=new URL(i("kyEFX").resolve("bfHyM"),import.meta.url).toString();let d=!1;function g(){if(d)return;const e=document.createElement("div");e.innerHTML='<p class="error-information">OOPS...</p>\n  <p class="error-information">We are very sorry!</p>\n  <p class="error-information">\n    We don’t have any results matching your search.\n  </p>',o.errorContainer.appendChild(e),o.errorContainer.classList.remove("is-hidden"),o.paginationContainer.classList.add("is-hidden"),d=!0}const p=new c;let m=1;function v(e){p.getMovies(e).then(f).catch(h)}function f(e){var t;u(e),o.paginationButton.textContent=m,t=e.total_pages,m===t?o.nextPageBtn.setAttribute("disabled","disabled"):o.nextPageBtn.removeAttribute("disabled")}function h(e){o.catalogList.innerHTML="",g(),console.error("An error occurred:",e)}o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),o.paginationContainer.classList.remove("is-hidden"),o.errorContainer.classList.add("is-hidden");const t=o.searchInput.value.trim();p.query=t,p.resetPage(),p.resetTotal(),""===t?(o.catalogList.innerHTML="",g()):async function(){try{const e=await p.getMovies();0===e.total_results?(o.catalogList.innerHTML="",g()):(p.total=e.total_results,u(e),m=e.page,o.paginationButton.textContent=m),o.searchInput.value=""}catch(e){h(e)}}()})),o.cancelBtn.addEventListener("click",(function(){o.cancelBtn.classList.add("is-hidden"),o.searchInput.value=""})),o.searchInput.addEventListener("input",(function(e){e.currentTarget.value.trim()?o.cancelBtn.classList.remove("is-hidden"):o.cancelBtn.classList.add("is-hidden")})),o.nextPageBtn.addEventListener("click",(function(){m+=1,p.incrementPage(),v(m)})),o.prevPageBtn.addEventListener("click",(function(){m>1&&(m-=1,p.decrementPage(),v(m))})),o.errorContainer.classList.add("is-hidden"),o.cancelBtn.classList.add("is-hidden"),v(m);
//# sourceMappingURL=catalog.f8a4fefc.js.map

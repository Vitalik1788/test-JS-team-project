function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequired7c6=r),r.register("ahm89",(function(t,n){e(t.exports,"getGenres",(function(){return a})),e(t.exports,"validateGenres",(function(){return l}));var o=r("42UQi"),i=r("2shzp");async function a(){try{const e=await i.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=41b8f9437bf3f899281f8a3f9bdc0891");return localStorage.setItem("genres",JSON.stringify(e.data.genres)),e}catch(e){(0,o.onError)(e)}}async function l(e,t){try{const n=Array.from(t),o=e.map((e=>{const t=n.find((t=>t.id===e));return t?t.name:""}));let i="";return i=o.length>2?o.slice(0,2).join(", "):o.join(", "),i}catch(e){return(0,o.onError)(e),""}}})),r.register("42UQi",(function(t,n){e(t.exports,"onError",(function(){return l}));var o=r("2shzp"),i=r("b1IGm"),a=(i=r("b1IGm"),r("ahm89"));document.querySelector(".cards-list");function l(e){console.log(` error  ${e}`)}window.addEventListener("load",(function(){const e=window.innerWidth<768?1:3;(0,a.getGenres)(),async function(){try{return await o.default.get("https://api.themoviedb.org/3/trending/all/week?api_key=41b8f9437bf3f899281f8a3f9bdc0891")}catch(e){l(e)}}().then((({data:t})=>{const n=t.results.slice(0,e);(0,i.createMarkup)(n)}))}))})),r.register("b1IGm",(function(t,n){e(t.exports,"createMarkup",(function(){return l}));var o=r("ahm89"),i=r("6EJun"),a=r("70FDK");function l(e){const t=e.map((async({id:e,poster_path:t,release_date:n,title:r,genre_ids:a,vote_average:l})=>{const s=(0,o.validateGenres)(a,JSON.parse(localStorage.getItem("genres"))),d=`https://image.tmdb.org/t/p/original/${t}`;let c="";c="undefind"===n?"Date unknown":n.split("-")[0];return`<li class="card-item item" data-id="${e}">\n            <img class="film-poster" src="https://image.tmdb.org/t/p/original/${d}" alt="${r} poster" />\n            <div class="overlay">\n              <div class="film-info">\n                <p class="film-title">${r}</p>\n                <div class="film-details">\n                  <span class="film-description">${await s} | ${c}</span>\n                  <div class="stars-container">${(0,i.default)({voteAverage:l,isHero:!1})}</div>\n\t\t\t\t\t\t\t\t\t\x3c!-- <span class="film-rating">${l}</span> --\x3e\n                </div>\n              </div>\n            </div>\n          </li>`}));return Promise.all(t).then((e=>{const t=e.join("");document.querySelector(".cards-list").insertAdjacentHTML("beforeend",t);document.querySelector(".listListener").addEventListener("click",(e=>{const t=e.target.closest(".card-item").getAttribute("data-id");(0,a.openModalAboutFilm)(t)}))}))}})),r.register("70FDK",(function(n,o){e(n.exports,"openModalAboutFilm",(function(){return u}));var i=r("9M1hO"),a=r("lH8sM"),l=r("6lPyI"),s=r("l6Rnt"),d=r("iuZ0p");const c=new(0,i.default)(s.API_KEY);let m=null;class f{constructor(){if(null!==m)return m;this.body=document.querySelector("body"),this.body.insertAdjacentHTML("beforeend",'\n  <div class="modal-info-film-backdrop modal-film-is-hidden" data-modal>\n    <div class="modal-about-film">\n      <button type="button" class="modal__close-btn" data-modal-close>\n        <svg class="modal__close-icon" width="30" height="30" aria-label="Close">\n          <path d="M18 6L6 18M6 6L18 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />\n        </svg>\n      </button>\n      <div class="modal-film-info-wrapper">\n        <div class="modal-wrapper-img">\n          <img\n            class="modal-film-img"\n            id="modal-film-poster-path"\n            src="https://organisasi.kalbarprov.go.id/assets/images/no_image.png"\n            alt=""\n          />\n        </div>\n        <div class="film-text-info-wrapper">\n          <h3 class="modal-film-title" id="modal-film-title"></h3>\n          <ul class="modal-film-info-list">\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Vote / Votes</p>\n              <p class="modal-film-info-desc">\n                <span\n                  class="desc-voted desc-vote-average"\n                  id="modal-film-vote-average"\n                ></span>\n                /\n                <span\n                  class="desc-voted desc-votes-count"\n                  id="modal-film-vote-count"\n                ></span>\n              </p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Popularity</p>\n              <p class="modal-film-info-desc" id="modal-film-popularity"></p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Genre</p>\n              <p\n                class="modal-film-info-desc film-info__desc--normal-text"\n                id="modal-film-genre"\n              ></p>\n            </li>\n          </ul>\n          <p class="modal-film-info-label">ABOUT</p>\n          <div class="container-film-descr">\n            <p class="modal-film__description" id="modal-film-description"></p>\n          </div>\n          <button class="modal-btn-add-libr"  type="button" id="modal-film-add-or-rm">Add to my library</button>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  '),this.refs={modal:document.querySelector("[data-modal]"),modalCloseBtn:document.querySelector("[data-modal-close]"),posterPath:document.querySelector("#modal-film-poster-path"),title:document.querySelector("#modal-film-title"),voteAverage:document.querySelector("#modal-film-vote-average"),voteCount:document.querySelector("#modal-film-vote-count"),popularity:document.querySelector("#modal-film-popularity"),genre:document.querySelector("#modal-film-genre"),description:document.querySelector("#modal-film-description"),modalOpenBtn:document.querySelector("#open-modal"),modalAddOrRemoveBtn:document.querySelector("#modal-film-add-or-rm")},this.refs.modalCloseBtn.addEventListener("click",(()=>this.hide())),this.refs.modalAddOrRemoveBtn.addEventListener("click",(e=>(0,l.handleFilm)(e))),document.addEventListener("keydown",(e=>"Escape"===e.key?this.hide():null)),window.addEventListener("click",(e=>e.target===this.refs.modal?this.hide():null)),m=this}show(){this.refs.modal.classList.remove("modal-film-is-hidden"),this.body.classList.add("body--modal-open")}hide(){this.refs.modal.classList.add("modal-film-is-hidden"),this.body.classList.remove("body--modal-open")}refreshData(e){this.refs.posterPath.src=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${t(d)}`,this.refs.title.textContent=`${e.title}`,this.refs.voteAverage.textContent=`${(0,a.roundToTen)(e.vote_average)}`,this.refs.voteCount.textContent=`${e.vote_count}`,this.refs.popularity.textContent=`${(0,a.roundToTen)(e.popularity)}`,this.refs.genre.textContent=`${e.genres.map((e=>e.name)).join(", ")}`,this.refs.description.textContent=`${e.overview}`}refreshBtn(e,t,n){this.refs.modalAddOrRemoveBtn.setAttribute("data-id",e),this.refs.modalAddOrRemoveBtn.setAttribute("data-"+t,""),this.refs.modalAddOrRemoveBtn.textContent=n}}function u(e){const t=new f,n=(0,a.findFilmAtStorage)(s.STORAGE_KEY,e),o=n?"remove":"add",i=n?"Remove from my library":"Add to my library";c.getMovieDetails(e).then((n=>{t.refreshData(n.data),t.refreshBtn(e,o,i),t.show()})).catch((e=>{console.error(e)}))}})),r.register("9M1hO",(function(t,n){e(t.exports,"default",(function(){return i}));var o=r("2shzp");class i{constructor(e){this.apiKey=e}getMovieDetails(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=${this.apiKey}`;return o.default.get(t)}}})),r.register("lH8sM",(function(t,n){function o(e){return Math.floor(10*e)/10}function i(e,t){return JSON.parse(localStorage.getItem(e))?.find((e=>e.id===t))||null}e(t.exports,"roundToTen",(function(){return o})),e(t.exports,"findFilmAtStorage",(function(){return i}))})),r.register("iuZ0p",(function(e,t){e.exports=new URL(r("kyEFX").resolve("bfHyM"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"fPbbd":"index.d5e7cb8b.js","bfHyM":"default.183d728c.jpg","79VY6":"library.dec30e3a.js"}')),r("42UQi");
//# sourceMappingURL=index.d5e7cb8b.js.map

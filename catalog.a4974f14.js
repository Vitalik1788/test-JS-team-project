function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("8oZBs",(function(e,t){var n=i("h85Iw");i("7pPMD");const o=Math.floor(20*Math.random())+0;var r=i("2shzp").default;const s={heroDiv:document.getElementById("hero-div"),heroTitle:document.getElementById("hero-title"),heroOverview:document.getElementById("hero-overview"),heroBtnDiv:document.getElementById("hero-btn-div"),heroFilmDataEl:document.querySelector(".hero-info-wrap")};function a(e,t,n){s.heroDiv.style.backgroundImage=`linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 42.02%), \n  url(${e})`,s.heroTitle.textContent=`${t}`,s.heroOverview.textContent=`${n}`}window.addEventListener("load",(function(){(async function(){try{return await r.get("https://api.themoviedb.org/3/trending/movie/day?api_key=58fde9f9a3392c3dbee86a1f2142354e")}catch(e){!function(e){s.heroDiv.classList.add("hero-container-bg");a("../images/default-bgimage.jpg","Let’s Make Your Own Cinema","Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),function(){const e=document.createElement("button");e.textContent="Get Started",e.classList.add("css-btn-trailer"),e.setAttribute("type","button"),s.heroBtnDiv.append(e)}()}()}})().then((({data:e})=>{console.log(e);const t=e.results[o],r=`"https://image.tmdb.org/t/p/original/${t.backdrop_path}"`,i=t.title,l=t.overview,d=t.id,c=t.vote_average;var u,m;a(r,i,l),function(e){const t=document.createElement("button");t.textContent="Watch Trailer",t.classList.add("css-btn-trailer","watch-trailer-button"),t.setAttribute("type","button"),t.setAttribute("trailer-id",`${e}`),s.heroBtnDiv.append(t);const n=document.createElement("button");n.textContent="More Details",n.classList.add("css-bnt-info"),n.setAttribute("type","button"),n.setAttribute("data-id",e),s.heroBtnDiv.append(n)}(d),u=d,m=c,s.heroFilmDataEl.dataset.id=u,s.heroFilmDataEl.dataset.rating=m,(0,n.default)({voteAverage:c,isHero:!0})}))}))})),i.register("h85Iw",(function(t,n){e(t.exports,"default",(function(){return l}));const o=document.querySelector(".stars-container"),r=document.querySelector("#defs").lastElementChild,i=document.querySelector(".mask");let s=0;const a={filled:'<use href="#star" fill="url(#star-fill--complete)"></use>',masked:"",empty:'<use href="#star" fill="none"></use>'};function l({voteAverage:e,isHero:t}){const n=function(e){return!e||e<=0||e>10?0:Number((e/2).toFixed(1))}(Number(e));return a.masked=`<use href="#star" mask="url(#star-fill--partly${s})" fill="url(#star-fill--complete)"></use><use href="#star" fill="none" stroke="url(#star-stroke)"></use>`,function(e,t){const n=Math.floor(100*(Number.parseFloat(t)-Number.parseInt(t)));if(0===e)i.innerHTML=`\n\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t<rect x="${n}%" y="0" width="18" height="16" fill="black" />`;else{const t=`\n\t\t<mask id="star-fill--partly${e}" class="mask">\n\t\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t\t<rect x="${n}%" y="0" width="18" height="16" fill="black" />\n\t\t</mask>`;r.insertAdjacentHTML("beforebegin",t)}}(s,n),s++,function(e,t){if(!t)return d(e);o.insertAdjacentHTML("beforeend",d(e));const n={starsList:document.querySelector(".stars-list"),starsListImg:document.querySelectorAll(".stars-list__img")};o.classList.add("stars-container--hero"),n.starsList.classList.add("stars-list--hero"),n.starsListImg.forEach((e=>e.classList.add("stars-list__img--hero")))}(n,t)}function d(e){if(!e)return'<p class="stars-absent">Not rated yet</p>';const t=Number.parseInt(e),n=e-t==0?0:1,o=5-t-n,{filled:r,masked:i,empty:s}=a,l=function(e){return`<ul class="stars-list" aria-label="Rating: ${e} stars out of 5.0" title="Rating: ${e} stars out of 5.0">`}(e);return l+c(t,r)+c(n,i)+c(o,s)+"</ul>"}function c(e,t){let n="";for(let o=1;o<=e;o++)n+=`\n\t\t\t<li class="stars-list__item">\n\t\t\t\t<svg class="stars-list__img" viewBox="0 0 18 16">\n\t\t\t\t\t${t}\n\t\t\t\t</svg>\n\t\t\t</li>`;return n}})),i.register("7pPMD",(function(e,n){const o=t(i("lA7xO"));function r(e){fetch(`https://api.themoviedb.org/3/movie/${e}/videos?api_key=41b8f9437bf3f899281f8a3f9bdc0891&language=en-US`).then((e=>e.json())).then((e=>{const t=`https://www.youtube.com/embed/${e.results[0].key}?rel=0&amp;controls=1&amp;showinfo=0`,n=document.createElement("iframe");n.src=t,n.width="560",n.height="315",n.frameBorder="0",n.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",n.allowFullscreen="";const o=document.createElement("span");o.className="close-button",o.innerHTML='\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        ',o.addEventListener("click",(()=>{const e=document.getElementById("modal");document.querySelector(".modal-content").innerHTML="",e.style.display="none",n.src=""}));const r=document.querySelector(".modal-content");r.innerHTML="",r.appendChild(n),r.appendChild(o);document.getElementById("modal").style.display="block"})).catch((()=>{!function(){const e=document.querySelector(".modal-content");e.innerHTML=`\n      <div class="error-content">\n        <p class="error-message">OOPS... <br>We are very sorry!<br>\n        But we couldn’t find the trailer.</p>\n         <img class="error-image" src='${o}' alt="Error!">\n        <button class="close-button">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        </button>\n      </div>\n    `;const t=document.getElementById("modal");t.style.display="block";const n=e.querySelector(".close-button");n.addEventListener("click",(()=>{t.style.display="none"})),n.classList.add("close-button");e.querySelector(".error-content").classList.add("error-content")}()}))}window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".hero-btn-wrap"),t=document.querySelector(".close-button"),n=document.getElementById("modal");e.addEventListener("click",(function(e){const t=e.target.closest(".watch-trailer-button");if(t){r(t.getAttribute("trailer-id"))}})),document.addEventListener("keydown",(e=>"Escape"===e.key?n.style.display="none":null)),window.addEventListener("click",(e=>e.target===n?n.style.display="none":null)),t.addEventListener("click",(()=>{n.style.display="none"}))}))})),i.register("lA7xO",(function(e,t){e.exports=new URL(i("kyEFX").resolve("3fiJI"),import.meta.url).toString()})),i.register("6t6rc",(function(t,n){e(t.exports,"getGenres",(function(){return s})),e(t.exports,"validateGenres",(function(){return a}));var o=i("bEEH1"),r=i("2shzp");async function s(){try{const e=await r.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=41b8f9437bf3f899281f8a3f9bdc0891");return localStorage.setItem("genres",JSON.stringify(e.data.genres)),e}catch(e){(0,o.onError)(e)}}async function a(e,t){try{const n=Array.from(t),o=e.map((e=>{const t=n.find((t=>t.id===e));return t?t.name:""}));let r="";return r=o.length>2?o.slice(0,2).join(", "):o.join(", "),r}catch(e){return(0,o.onError)(e),""}}})),i.register("bEEH1",(function(t,n){e(t.exports,"showWeeklyTrends",(function(){return a})),e(t.exports,"onError",(function(){return l}));var o=i("2shzp"),r=i("ip31Z"),s=(r=i("ip31Z"),i("6t6rc"));document.querySelector(".cards-list");function a(){const e=window.innerWidth<768?1:3;(0,s.getGenres)(),async function(){try{return await o.default.get("https://api.themoviedb.org/3/trending/all/week?api_key=41b8f9437bf3f899281f8a3f9bdc0891")}catch(e){l(e)}}().then((({data:t})=>{const n=t.results.slice(0,e);(0,r.createMarkup)(n)}))}function l(e){console.log(` error  ${e}`)}})),i.register("ip31Z",(function(t,n){e(t.exports,"createMarkup",(function(){return a}));var o=i("6t6rc"),r=i("h85Iw"),s=i("62bSP");function a(e){const t=e.map((async({id:e,poster_path:t,release_date:n,title:i,genre_ids:s,vote_average:a})=>{const l=(0,o.validateGenres)(s,JSON.parse(localStorage.getItem("genres"))),d=`https://image.tmdb.org/t/p/original/${t}`;let c="";c="undefind"===n?"Date unknown":n.split("-")[0];return`<li class="card-item item" data-id="${e}">\n            <img class="film-poster" src="https://image.tmdb.org/t/p/original/${d}" alt="${i} poster" />\n            <div class="overlay">\n              <div class="film-info">\n                <p class="film-title">${i}</p>\n                <div class="film-details">\n                  <span class="film-description">${await l} | ${c}</span>\n                  <div class="stars-container">${(0,r.default)({voteAverage:a,isHero:!1})}</div>\n\t\t\t\t\t\t\t\t\t\x3c!-- <span class="film-rating">${a}</span> --\x3e\n                </div>\n              </div>\n            </div>\n          </li>`}));return Promise.all(t).then((e=>{const t=e.join("");document.querySelector(".cards-list").insertAdjacentHTML("beforeend",t);document.querySelector(".listListener").addEventListener("click",(e=>{const t=e.target.closest(".card-item").getAttribute("data-id");(0,s.openModalAboutFilm)(t)}))}))}})),i.register("62bSP",(function(t,n){e(t.exports,"openModalAboutFilm",(function(){return d}));var o=i("feFQy"),r=i("l6Rnt");const s=new(0,o.default)(r.API_KEY);let a=null;class l{show(){this.refs.modal.classList.remove("modal-film-is-hidden"),this.body.classList.add("body--modal-open")}hide(){this.refs.modal.classList.add("modal-film-is-hidden"),this.body.classList.remove("body--modal-open")}refreshData(e){this.refs.posterPath.src=`https://image.tmdb.org/t/p/w500${e.poster_path}`,this.refs.title.textContent=`${e.title}`,this.refs.voteAverage.textContent=`${Number(e.vote_average.toFixed(1))}`,this.refs.voteCount.textContent=`${e.vote_count}`,this.refs.popularity.textContent=`${Number(e.popularity.toFixed(1))}`,this.refs.genre.textContent=`${e.genres.map((e=>e.name)).join(", ")}`,this.refs.description.textContent=`${e.overview}`}constructor(){if(null!==a)return a;this.body=document.querySelector("body"),this.body.insertAdjacentHTML("beforeend",'\n  <div class="modal-info-film-backdrop modal-film-is-hidden" data-modal>\n    <div class="modal-about-film">\n      <button type="button" class="modal__close-btn" data-modal-close>\n        <svg class="modal__close-icon" width="30" height="30" aria-label="Close">\n          <use href="./images/Modal-Close.svg#close"></use>\n        </svg>\n      </button>\n      <div class="modal-film-info-wrapper">\n        <div class="modal-wrapper-img">\n          <img\n            class="modal-film-img"\n            id="modal-film-poster-path"\n            src=""\n            alt=""\n          />\n        </div>\n        <div class="film-text-info-wrapper">\n          <h3 class="modal-film-title" id="modal-film-title"></h3>\n          <ul class="modal-film-info-list">\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Vote / Votes</p>\n              <p class="modal-film-info-desc">\n                <span\n                  class="desc-voted desc-vote-average"\n                  id="modal-film-vote-average"\n                ></span>\n                /\n                <span\n                  class="desc-voted desc-votes-count"\n                  id="modal-film-vote-count"\n                ></span>\n              </p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Popularity</p>\n              <p class="modal-film-info-desc" id="modal-film-popularity"></p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Genre</p>\n              <p\n                class="modal-film-info-desc film-info__desc--normal-text"\n                id="modal-film-genre"\n              ></p>\n            </li>\n          </ul>\n          <p class="modal-film-info-label">ABOUT</p>\n          <div class="container-film-descr">\n            <p class="modal-film__description" id="modal-film-description"></p>\n          </div>\n          <button class="modal-btn-add-libr"  type="button"><span class="btn-mod-text">Add to my library</span> </button>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  '),this.refs={modal:document.querySelector("[data-modal]"),modalCloseBtn:document.querySelector("[data-modal-close]"),posterPath:document.querySelector("#modal-film-poster-path"),title:document.querySelector("#modal-film-title"),voteAverage:document.querySelector("#modal-film-vote-average"),voteCount:document.querySelector("#modal-film-vote-count"),popularity:document.querySelector("#modal-film-popularity"),genre:document.querySelector("#modal-film-genre"),description:document.querySelector("#modal-film-description"),modalOpenBtn:document.querySelector("#open-modal"),modalAddOrRemoveBtn:document.querySelector("#modal-film-add-or-rm")},this.refs.modalCloseBtn.addEventListener("click",(()=>this.hide())),document.addEventListener("keydown",(e=>"Escape"===e.key?this.hide():null)),window.addEventListener("click",(e=>e.target===this.refs.modal?this.hide():null)),a=this}}function d(e){const t=new l;s.getMovieDetails(e).then((e=>{t.refreshData(e.data),t.show()})).catch((e=>{console.error(e)}))}})),i.register("feFQy",(function(t,n){e(t.exports,"default",(function(){return r}));var o=i("2shzp");class r{getMovieDetails(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=${this.apiKey}`;return o.default.get(t)}constructor(e){this.apiKey=e}}})),i.register("l6Rnt",(function(t,n){e(t.exports,"API_KEY",(function(){return o})),e(t.exports,"API_BAERER",(function(){return r}));const o="41b8f9437bf3f899281f8a3f9bdc0891",r="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g"})),i("kyEFX").register(JSON.parse('{"1V5gE":"catalog.a4974f14.js","3fiJI":"IMG9881.442c6201.png"}'));
//# sourceMappingURL=catalog.a4974f14.js.map

!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("60y4I",(function(e,n){var r=a("bpxeT"),o=a("2TvXO"),i=a("2j4vU");a("gSZkB");var s="58fde9f9a3392c3dbee86a1f2142354e",l=Math.floor(20*Math.random())+0,c=a("dIxxU").default,d={heroDiv:document.getElementById("hero-div"),heroTitle:document.getElementById("hero-title"),heroOverview:document.getElementById("hero-overview"),heroBtnDiv:document.getElementById("hero-btn-div"),heroFilmDataEl:document.querySelector(".hero-info-wrap")};function u(){return(u=t(r)(t(o).mark((function e(){var n;return t(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e,t,n){d.heroDiv.style.backgroundImage="linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 42.02%), \n  url(".concat(e,")"),d.heroTitle.textContent="".concat(t),d.heroOverview.textContent="".concat(n)}function m(e){d.heroDiv.classList.add("hero-container-bg");var t;f("../images/default-bgimage.jpg","Let’s Make Your Own Cinema","Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),(t=document.createElement("button")).textContent="Get Started",t.classList.add("css-btn-trailer"),t.setAttribute("type","button"),d.heroBtnDiv.append(t)}window.addEventListener("load",(function(){(function(){return u.apply(this,arguments)})().then((function(e){var t=e.data;console.log(t);var n,r,o=t.results[l],a=o.backdrop_path,s='"https://image.tmdb.org/t/p/original/'.concat(a,'"'),c=o.title,u=o.overview,m=o.id,p=o.vote_average;f(s,c,u),function(e){var t=document.createElement("button");t.textContent="Watch Trailer",t.classList.add("css-btn-trailer","watch-trailer-button"),t.setAttribute("type","button"),t.setAttribute("trailer-id","".concat(e)),d.heroBtnDiv.append(t);var n=document.createElement("button");n.textContent="More Details",n.classList.add("css-bnt-info"),n.setAttribute("type","button"),n.setAttribute("data-id",e),d.heroBtnDiv.append(n)}(m),n=m,r=p,d.heroFilmDataEl.dataset.id=n,d.heroFilmDataEl.dataset.rating=r,(0,i.default)({voteAverage:p,isHero:!0})}))}))})),a.register("2j4vU",(function(t,n){e(t.exports,"default",(function(){return l}));var r=document.querySelector(".stars-container"),o=document.querySelector("#defs").lastElementChild,a=document.querySelector(".mask"),i=0,s={filled:'<use href="#star" fill="url(#star-fill--complete)"></use>',masked:"",empty:'<use href="#star" fill="none"></use>'};function l(e){var t=e.voteAverage,n=e.isHero,l=function(e){return!e||e<=0||e>10?0:Number((e/2).toFixed(1))}(Number(t));return s.masked='<use href="#star" mask="url(#star-fill--partly'.concat(i,')" fill="url(#star-fill--complete)"></use><use href="#star" fill="none" stroke="url(#star-stroke)"></use>'),function(e,t){var n=Math.floor(100*(Number.parseFloat(t)-Number.parseInt(t)));if(0===e)a.innerHTML='\n\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t<rect x="'.concat(n,'%" y="0" width="18" height="16" fill="black" />');else{var r='\n\t\t<mask id="star-fill--partly'.concat(e,'" class="mask">\n\t\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t\t<rect x="').concat(n,'%" y="0" width="18" height="16" fill="black" />\n\t\t</mask>');o.insertAdjacentHTML("beforebegin",r)}}(i,l),i++,function(e,t){if(!t)return c(e);r.insertAdjacentHTML("beforeend",c(e));var n={starsList:document.querySelector(".stars-list"),starsListImg:document.querySelectorAll(".stars-list__img")};r.classList.add("stars-container--hero"),n.starsList.classList.add("stars-list--hero"),n.starsListImg.forEach((function(e){return e.classList.add("stars-list__img--hero")}))}(l,n)}function c(e){if(!e)return'<p class="stars-absent">Not rated yet</p>';var t=Number.parseInt(e),n=e-t==0?0:1,r=5-t-n,o=s.filled,a=s.masked,i=s.empty,l=function(e){return'<ul class="stars-list" aria-label="Rating: '.concat(e,' stars out of 5.0" title="Rating: ').concat(e,' stars out of 5.0">')}(e);return l+d(t,o)+d(n,a)+d(r,i)+"</ul>"}function d(e,t){for(var n="",r=1;r<=e;r++)n+='\n\t\t\t<li class="stars-list__item">\n\t\t\t\t<svg class="stars-list__img" viewBox="0 0 18 16">\n\t\t\t\t\t'.concat(t,"\n\t\t\t\t</svg>\n\t\t\t</li>");return n}})),a.register("gSZkB",(function(e,n){var r=t(a("d1dpR"));function o(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=41b8f9437bf3f899281f8a3f9bdc0891&language=en-US");fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.results[0].key,n="https://www.youtube.com/embed/".concat(t,"?rel=0&amp;controls=1&amp;showinfo=0"),r=document.createElement("iframe");r.src=n,r.width="560",r.height="315",r.frameBorder="0",r.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",r.allowFullscreen="";var o=document.createElement("span");o.className="close-button",o.innerHTML='\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        ',o.addEventListener("click",(function(){var e=document.getElementById("modal");document.querySelector(".modal-content").innerHTML="",e.style.display="none",r.src=""}));var a=document.querySelector(".modal-content");a.innerHTML="",a.appendChild(r),a.appendChild(o),document.getElementById("modal").style.display="block"})).catch((function(){!function(){var e=document.querySelector(".modal-content");e.innerHTML='\n      <div class="error-content">\n        <p class="error-message">OOPS... <br>We are very sorry!<br>\n        But we couldn’t find the trailer.</p>\n         <img class="error-image" src=\''.concat(r,'\' alt="Error!">\n        <button class="close-button">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        </button>\n      </div>\n    ');var t=document.getElementById("modal");t.style.display="block";var n=e.querySelector(".close-button");n.addEventListener("click",(function(){t.style.display="none"})),n.classList.add("close-button"),e.querySelector(".error-content").classList.add("error-content")}()}))}window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".hero-btn-wrap"),t=document.querySelector(".close-button"),n=document.getElementById("modal");e.addEventListener("click",(function(e){var t=e.target.closest(".watch-trailer-button");t&&o(t.getAttribute("trailer-id"))})),document.addEventListener("keydown",(function(e){return"Escape"===e.key?n.style.display="none":null})),window.addEventListener("click",(function(e){return e.target===n?n.style.display="none":null})),t.addEventListener("click",(function(){n.style.display="none"}))}))})),a.register("d1dpR",(function(e,t){e.exports=a("aNJCr").getBundleURL("8hJTk")+a("iE7OH").resolve("2d9IV")})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a.register("3bDz3",(function(n,r){e(n.exports,"getGenres",(function(){return c})),e(n.exports,"validateGenres",(function(){return u}));var o=a("bpxeT"),i=a("2TvXO"),s=a("8xsvL"),l=a("dIxxU");function c(){return d.apply(this,arguments)}function d(){return(d=t(o)(t(i).mark((function e(){var n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.default.get("https://api.themoviedb.org/3/genre/movie/list?api_key=41b8f9437bf3f899281f8a3f9bdc0891");case 3:return n=e.sent,localStorage.setItem("genres",JSON.stringify(n.data.genres)),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),(0,s.onError)(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function u(e,t){return f.apply(this,arguments)}function f(){return(f=t(o)(t(i).mark((function e(n,r){var o,a,l;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=Array.from(r),a=n.map((function(e){var t=o.find((function(t){return t.id===e}));return t?t.name:""})),l="",l=a.length>2?a.slice(0,2).join(", "):a.join(", "),e.abrupt("return",l);case 8:return e.prev=8,e.t0=e.catch(0),(0,s.onError)(e.t0),e.abrupt("return","");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}})),a.register("8xsvL",(function(n,r){e(n.exports,"showWeeklyTrends",(function(){return d})),e(n.exports,"onError",(function(){return f}));var o=a("bpxeT"),i=a("2TvXO"),s=a("dIxxU"),l=a("gL3ps"),c=(l=a("gL3ps"),a("3bDz3"));document.querySelector(".cards-list");function d(){var e=window.innerWidth<768?1:3;(0,c.getGenres)(),function(){return u.apply(this,arguments)}().then((function(t){var n=t.data.results.slice(0,e);(0,l.createMarkup)(n)}))}function u(){return(u=t(o)(t(i).mark((function e(){var n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.default.get("https://api.themoviedb.org/3/trending/all/week?api_key=41b8f9437bf3f899281f8a3f9bdc0891");case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),f(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){console.log(" error  ".concat(e))}})),a.register("gL3ps",(function(n,r){e(n.exports,"createMarkup",(function(){return d}));var o=a("bpxeT"),i=a("2TvXO"),s=a("3bDz3"),l=a("2j4vU"),c=a("hmtur");function d(e){var n,r=e.map((n=t(o)(t(i).mark((function e(n){var r,o,a,c,d,u,f,m,p,v;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,o=n.poster_path,a=n.release_date,c=n.title,d=n.genre_ids,u=n.vote_average,f=(0,s.validateGenres)(d,JSON.parse(localStorage.getItem("genres"))),m="https://image.tmdb.org/t/p/original/".concat(o),p="",p="undefind"===a?"Date unknown":a.split("-")[0],e.next=7,f;case 7:return v=e.sent,e.abrupt("return",'<li class="card-item item" data-id="'.concat(r,'">\n            <img class="film-poster" src="https://image.tmdb.org/t/p/original/').concat(m,'" alt="').concat(c,' poster" />\n            <div class="overlay">\n              <div class="film-info">\n                <p class="film-title">').concat(c,'</p>\n                <div class="film-details">\n                  <span class="film-description">').concat(v," | ").concat(p,'</span>\n                  <div class="stars-container">').concat((0,l.default)({voteAverage:u,isHero:!1}),'</div>\n\t\t\t\t\t\t\t\t\t\x3c!-- <span class="film-rating">').concat(u,"</span> --\x3e\n                </div>\n              </div>\n            </div>\n          </li>"));case 9:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)}));return Promise.all(r).then((function(e){var t=e.join("");document.querySelector(".cards-list").insertAdjacentHTML("beforeend",t),document.querySelector(".listListener").addEventListener("click",(function(e){var t=e.target.closest(".card-item").getAttribute("data-id");(0,c.openModalAboutFilm)(t)}))}))}})),a.register("hmtur",(function(n,r){e(n.exports,"openModalAboutFilm",(function(){return f}));var o=a("8MBJY"),i=a("a2hTj"),s=a("bxdwe"),l=a("fpBey"),c=new(0,s.default)(l.API_KEY),d=null,u=function(){"use strict";function e(){var n=this;if(t(o)(this,e),null!==d)return d;this.body=document.querySelector("body"),this.body.insertAdjacentHTML("beforeend",'\n  <div class="modal-info-film-backdrop modal-film-is-hidden" data-modal>\n    <div class="modal-about-film">\n      <button type="button" class="modal__close-btn" data-modal-close>\n        <svg class="modal__close-icon" width="30" height="30" aria-label="Close">\n          <use href="./images/Modal-Close.svg#close"></use>\n        </svg>\n      </button>\n      <div class="modal-film-info-wrapper">\n        <div class="modal-wrapper-img">\n          <img\n            class="modal-film-img"\n            id="modal-film-poster-path"\n            src=""\n            alt=""\n          />\n        </div>\n        <div class="film-text-info-wrapper">\n          <h3 class="modal-film-title" id="modal-film-title"></h3>\n          <ul class="modal-film-info-list">\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Vote / Votes</p>\n              <p class="modal-film-info-desc">\n                <span\n                  class="desc-voted desc-vote-average"\n                  id="modal-film-vote-average"\n                ></span>\n                /\n                <span\n                  class="desc-voted desc-votes-count"\n                  id="modal-film-vote-count"\n                ></span>\n              </p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Popularity</p>\n              <p class="modal-film-info-desc" id="modal-film-popularity"></p>\n            </li>\n            <li class="modal-film-info-item">\n              <p class="modal-film-info-label">Genre</p>\n              <p\n                class="modal-film-info-desc film-info__desc--normal-text"\n                id="modal-film-genre"\n              ></p>\n            </li>\n          </ul>\n          <p class="modal-film-info-label">ABOUT</p>\n          <div class="container-film-descr">\n            <p class="modal-film__description" id="modal-film-description"></p>\n          </div>\n          <button class="modal-btn-add-libr"  type="button"><span class="btn-mod-text">Add to my library</span> </button>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  '),this.refs={modal:document.querySelector("[data-modal]"),modalCloseBtn:document.querySelector("[data-modal-close]"),posterPath:document.querySelector("#modal-film-poster-path"),title:document.querySelector("#modal-film-title"),voteAverage:document.querySelector("#modal-film-vote-average"),voteCount:document.querySelector("#modal-film-vote-count"),popularity:document.querySelector("#modal-film-popularity"),genre:document.querySelector("#modal-film-genre"),description:document.querySelector("#modal-film-description"),modalOpenBtn:document.querySelector("#open-modal"),modalAddOrRemoveBtn:document.querySelector("#modal-film-add-or-rm")},this.refs.modalCloseBtn.addEventListener("click",(function(){return n.hide()})),document.addEventListener("keydown",(function(e){return"Escape"===e.key?n.hide():null})),window.addEventListener("click",(function(e){return e.target===n.refs.modal?n.hide():null})),d=this}return t(i)(e,[{key:"show",value:function(){this.refs.modal.classList.remove("modal-film-is-hidden"),this.body.classList.add("body--modal-open")}},{key:"hide",value:function(){this.refs.modal.classList.add("modal-film-is-hidden"),this.body.classList.remove("body--modal-open")}},{key:"refreshData",value:function(e){this.refs.posterPath.src="https://image.tmdb.org/t/p/w500".concat(e.poster_path),this.refs.title.textContent="".concat(e.title),this.refs.voteAverage.textContent="".concat(Number(e.vote_average.toFixed(1))),this.refs.voteCount.textContent="".concat(e.vote_count),this.refs.popularity.textContent="".concat(Number(e.popularity.toFixed(1))),this.refs.genre.textContent="".concat(e.genres.map((function(e){return e.name})).join(", ")),this.refs.description.textContent="".concat(e.overview)}}]),e}();function f(e){var t=new u;c.getMovieDetails(e).then((function(e){t.refreshData(e.data),t.show()})).catch((function(e){console.error(e)}))}})),a.register("bxdwe",(function(n,r){e(n.exports,"default",(function(){return l}));var o=a("8MBJY"),i=a("a2hTj"),s=a("dIxxU"),l=function(){"use strict";function e(n){t(o)(this,e),this.apiKey=n}return t(i)(e,[{key:"getMovieDetails",value:function(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(this.apiKey);return s.default.get(t)}}]),e}()})),a.register("fpBey",(function(t,n){e(t.exports,"API_KEY",(function(){return r})),e(t.exports,"API_BAERER",(function(){return o}));var r="41b8f9437bf3f899281f8a3f9bdc0891",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g"})),a("iE7OH").register(JSON.parse('{"8hJTk":"catalog.5afa67d6.js","2d9IV":"IMG9881.442c6201.png"}'))}();
//# sourceMappingURL=catalog.5afa67d6.js.map

function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},r.parcelRequired7c6=n),n.register("kyEFX",function(t,r){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var o,i,n={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]},i=function(e){var t=n[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),n.register("8oZBs",function(e,t){var r=n("h85Iw");n("7pPMD");let o=Math.floor(20*Math.random())+0;var i=n("2shzp").default;let l={heroDiv:document.getElementById("hero-div"),heroTitle:document.getElementById("hero-title"),heroOverview:document.getElementById("hero-overview"),heroBtnDiv:document.getElementById("hero-btn-div"),heroFilmDataEl:document.querySelector(".hero-info-wrap")};async function a(){try{let e=await i.get("https://api.themoviedb.org/3/trending/movie/day?api_key=58fde9f9a3392c3dbee86a1f2142354e");return e}catch(e){(function(e){l.heroDiv.classList.add("hero-container-bg");let t=`Let’s Make Your Own Cinema`;s("../images/default-bgimage.jpg",t,"Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),function(){let e=document.createElement("button");e.textContent="Get Started",e.classList.add("css-btn-trailer"),e.setAttribute("type","button"),l.heroBtnDiv.append(e)}()})(0)}}function s(e,t,r){l.heroDiv.style.backgroundImage=`linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 72.02%), 
  url(${e})`,l.heroTitle.textContent=`${t}`,l.heroOverview.textContent=`${r}`}window.addEventListener("load",function(){a().then(({data:e})=>{let t=e.results[o],i=t.backdrop_path,n=`"https://image.tmdb.org/t/p/original/${i}"`,a=t.title,d=t.overview,c=t.id,u=t.vote_average;s(n,a,d),function(e){let t=document.createElement("button");t.textContent="Watch Trailer",t.classList.add("css-btn-trailer","watch-trailer-button"),t.setAttribute("type","button"),t.setAttribute("trailer-id",`${e}`),l.heroBtnDiv.append(t);let r=document.createElement("button");r.textContent="More Details",r.classList.add("css-bnt-info"),r.setAttribute("type","button"),r.setAttribute("data-id",e),l.heroBtnDiv.append(r)}(c),l.heroFilmDataEl.dataset.id=c,l.heroFilmDataEl.dataset.rating=u,(0,r.default)({voteAverage:u,isHero:!0})})})}),n.register("h85Iw",function(t,r){e(t.exports,"default",function(){return s});let o=document.querySelector(".stars-container"),i=document.querySelector("#defs").lastElementChild,n=document.querySelector(".mask"),l=0,a={filled:'<use href="#star" fill="url(#star-fill--complete)"></use>',masked:"",empty:'<use href="#star" fill="none"></use>'};function s({voteAverage:e,isHero:t}){var r;let s=(r=Number(e))&&!(r<=0)&&!(r>10)?Number((r/2).toFixed(1)):0;return a.masked=`<use href="#star" mask="url(#star-fill--partly${l})" fill="url(#star-fill--complete)"></use><use href="#star" fill="none" stroke="url(#star-stroke)"></use>`,function(e,t){let r=Math.floor((Number.parseFloat(t)-Number.parseInt(t))*100);if(0===e)n.innerHTML=`
		<rect x="0" y="0" width="18" height="16" fill="white" />
		<rect x="${r}%" y="0" width="18" height="16" fill="black" />`;else{let t=`
		<mask id="star-fill--partly${e}" class="mask">
			<rect x="0" y="0" width="18" height="16" fill="white" />
			<rect x="${r}%" y="0" width="18" height="16" fill="black" />
		</mask>`;i.insertAdjacentHTML("beforebegin",t)}}(l,s),l++,function(e,t){if(!t)return d(e);{o.insertAdjacentHTML("beforeend",d(e));let t={starsList:document.querySelector(".stars-list"),starsListImg:document.querySelectorAll(".stars-list__img")};o.classList.add("stars-container--hero"),t.starsList.classList.add("stars-list--hero"),t.starsListImg.forEach(e=>e.classList.add("stars-list__img--hero"))}}(s,t)}function d(e){if(!e)return'<p class="stars-absent">Not rated yet</p>';let t=Number.parseInt(e),r=e-t==0?0:1,o=5-t-r,{filled:i,masked:n,empty:l}=a,s=`<ul class="stars-list" aria-label="Rating: ${e} stars out of 5.0" title="Rating: ${e} stars out of 5.0">`,d=c(t,i),u=c(r,n),m=c(o,l);return s+d+u+m+"</ul>"}function c(e,t){let r="";for(let o=1;o<=e;o++)r+=`
			<li class="stars-list__item">
				<svg class="stars-list__img" viewBox="0 0 18 16">
					${t}
				</svg>
			</li>`;return r}}),n.register("7pPMD",function(e,r){var o=n("lA7xO");let i=t(o);window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".hero-btn-wrap"),t=document.querySelector(".close-button"),r=document.getElementById("modal");e.addEventListener("click",function(e){let t=e.target,r=t.closest(".watch-trailer-button");if(r){let e=r.getAttribute("trailer-id");!function(e){let t=`https://api.themoviedb.org/3/movie/${e}/videos?api_key=41b8f9437bf3f899281f8a3f9bdc0891&language=en-US`;fetch(t).then(e=>e.json()).then(e=>{let t=e.results[0].key,r=`https://www.youtube.com/embed/${t}?rel=0&amp;controls=1&amp;showinfo=0`,o=document.createElement("iframe");o.src=r,o.width="560",o.height="315",o.frameBorder="0",o.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",o.allowFullscreen="";let i=document.createElement("span");i.className="close-button",i.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">
            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>
          </svg>
        `,i.addEventListener("click",()=>{let e=document.getElementById("modal"),t=document.querySelector(".modal-content");t.innerHTML="",e.style.display="none",o.src=""});let n=document.querySelector(".modal-content");n.innerHTML="",n.appendChild(o),n.appendChild(i);let l=document.getElementById("modal");l.style.display="block"}).catch(()=>{(function(){let e=document.querySelector(".modal-content");e.innerHTML=`
      <div class="error-content">
        <p class="error-message">OOPS... <br>We are very sorry!<br>
        But we couldn’t find the trailer.</p>
         <img class="error-image" src='${i}' alt="Error!">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">
            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>
          </svg>
        </button>
      </div>
    `;let t=document.getElementById("modal");t.style.display="block";let r=e.querySelector(".close-button");r.addEventListener("click",()=>{t.style.display="none"}),r.classList.add("close-button");let o=e.querySelector(".error-content");o.classList.add("error-content")})()})}(e)}}),document.addEventListener("keydown",e=>"Escape"===e.key?r.style.display="none":null),window.addEventListener("click",e=>e.target===r?r.style.display="none":null),t.addEventListener("click",()=>{r.style.display="none"})})}),n.register("lA7xO",function(e,t){e.exports=new URL(n("kyEFX").resolve("3fiJI"),import.meta.url).toString()}),n.register("6t6rc",function(t,r){e(t.exports,"getGenres",function(){return l}),e(t.exports,"validateGenres",function(){return a});var o=n("bEEH1"),i=n("2shzp");async function l(){try{let e=await (0,i.default).get("https://api.themoviedb.org/3/genre/movie/list?api_key=41b8f9437bf3f899281f8a3f9bdc0891");return localStorage.setItem("genres",JSON.stringify(e.data.genres)),e}catch(e){(0,o.onError)(e)}}async function a(e,t){try{let r=Array.from(t),o=e.map(e=>{let t=r.find(t=>t.id===e);return t?t.name:""});return o.length>2?o.slice(0,2).join(", "):o.join(", ")}catch(e){return(0,o.onError)(e),""}}}),n.register("bEEH1",function(t,r){e(t.exports,"showWeeklyTrends",function(){return a}),e(t.exports,"onError",function(){return d});var o=n("2shzp"),i=n("ip31Z"),l=n("6t6rc");function a(){let e=window.innerWidth,t=e<768?1:3;(0,l.getGenres)(),s().then(({data:e})=>{let r=e.results.slice(0,t);(0,i.createMarkup)(r)})}async function s(){try{let e=await (0,o.default).get("https://api.themoviedb.org/3/trending/all/week?api_key=41b8f9437bf3f899281f8a3f9bdc0891");return e}catch(e){d(e)}}function d(e){console.log(` error  ${e}`)}document.querySelector(".cards-list")}),n.register("ip31Z",function(t,r){e(t.exports,"createMarkup",function(){return a});var o=n("6t6rc"),i=n("h85Iw"),l=n("62bSP");function a(e){let t=e.map(async({id:e,poster_path:t,release_date:r,title:n,genre_ids:l,vote_average:a})=>{let s=(0,o.validateGenres)(l,JSON.parse(localStorage.getItem("genres"))),d=`https://image.tmdb.org/t/p/original/${t}`,c="";c="undefind"===r?"Date unknown":r.split("-")[0];let u=await s;return`<li class="card-item item" data-id="${e}">
            <img class="film-poster" src="https://image.tmdb.org/t/p/original/${d}" alt="${n} poster" />
            <div class="overlay">
              <div class="film-info">
                <p class="film-title">${n}</p>
                <div class="film-details">
                  <span class="film-description">${u} | ${c}</span>
                  <div class="stars-container">${(0,i.default)({voteAverage:a,isHero:!1})}</div>
									<!-- <span class="film-rating">${a}</span> -->
                </div>
              </div>
            </div>
          </li>`});return Promise.all(t).then(e=>{let t=e.join("");document.querySelector(".cards-list").insertAdjacentHTML("beforeend",t);let r=document.querySelector(".listListener");r.addEventListener("click",e=>{let t=e.target.closest(".card-item"),r=t.getAttribute("data-id");(0,l.openModalAboutFilm)(r)})})}}),n.register("62bSP",function(r,o){e(r.exports,"openModalAboutFilm",function(){return f});var i=n("feFQy"),l=n("lH8sM"),a=n("iq1cD"),s=n("l6Rnt"),d=n("iuZ0p");let c=new i.default(s.API_KEY),u=null;class m{constructor(){if(null!==u)return u;this.body=document.querySelector("body"),this.body.insertAdjacentHTML("beforeend",`
  <div class="modal-info-film-backdrop modal-film-is-hidden" data-modal>
    <div class="modal-about-film">
      <button type="button" class="modal__close-btn" data-modal-close>
        <svg class="modal__close-icon" width="30" height="30" aria-label="Close">
          <path d="M18 6L6 18M6 6L18 18"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="modal-film-info-wrapper">
        <div class="modal-wrapper-img">
          <img
            class="modal-film-img"
            id="modal-film-poster-path"
            src="https://organisasi.kalbarprov.go.id/assets/images/no_image.png"
            alt=""
          />
        </div>
        <div class="film-text-info-wrapper">
          <h3 class="modal-film-title" id="modal-film-title"></h3>
          <ul class="modal-film-info-list">
            <li class="modal-film-info-item">
              <p class="modal-film-info-label">Vote / Votes</p>
              <p class="modal-film-info-desc">
                <span
                  class="desc-voted desc-vote-average"
                  id="modal-film-vote-average"
                ></span>
                /
                <span
                  class="desc-voted desc-votes-count"
                  id="modal-film-vote-count"
                ></span>
              </p>
            </li>
            <li class="modal-film-info-item">
              <p class="modal-film-info-label">Popularity</p>
              <p class="modal-film-info-desc" id="modal-film-popularity"></p>
            </li>
            <li class="modal-film-info-item">
              <p class="modal-film-info-label">Genre</p>
              <p
                class="modal-film-info-desc film-info__desc--normal-text"
                id="modal-film-genre"
              ></p>
            </li>
          </ul>
          <p class="modal-film-info-label">ABOUT</p>
          <div class="container-film-descr">
            <p class="modal-film__description" id="modal-film-description"></p>
          </div>
          <button class="modal-btn-add-libr"  type="button" id="modal-film-add-or-rm">Add to my library</button>
          </button>
        </div>
      </div>
    </div>
  </div>
  `),this.refs={modal:document.querySelector("[data-modal]"),modalCloseBtn:document.querySelector("[data-modal-close]"),posterPath:document.querySelector("#modal-film-poster-path"),title:document.querySelector("#modal-film-title"),voteAverage:document.querySelector("#modal-film-vote-average"),voteCount:document.querySelector("#modal-film-vote-count"),popularity:document.querySelector("#modal-film-popularity"),genre:document.querySelector("#modal-film-genre"),description:document.querySelector("#modal-film-description"),modalOpenBtn:document.querySelector("#open-modal"),modalAddOrRemoveBtn:document.querySelector("#modal-film-add-or-rm")},this.refs.modalCloseBtn.addEventListener("click",()=>this.hide()),this.refs.modalAddOrRemoveBtn.addEventListener("click",e=>(0,a.handleFilm)(e)),document.addEventListener("keydown",e=>"Escape"===e.key?this.hide():null),window.addEventListener("click",e=>e.target===this.refs.modal?this.hide():null),u=this}show(){this.refs.modal.classList.remove("modal-film-is-hidden"),this.body.classList.add("body--modal-open")}hide(){this.refs.modal.classList.add("modal-film-is-hidden"),this.body.classList.remove("body--modal-open")}refreshData(e){this.refs.posterPath.src=e.poster_path?`https://image.tmdb.org/t/p/w500${e.poster_path}`:`${t(d)}`,this.refs.title.textContent=`${e.title}`,this.refs.voteAverage.textContent=`${(0,l.roundToTen)(e.vote_average)}`,this.refs.voteCount.textContent=`${e.vote_count}`,this.refs.popularity.textContent=`${(0,l.roundToTen)(e.popularity)}`,this.refs.genre.textContent=`${e.genres.map(e=>e.name).join(", ")}`,this.refs.description.textContent=`${e.overview}`}refreshBtn(e,t){this.refs.modalAddOrRemoveBtn.setAttribute("data-id",e),this.refs.modalAddOrRemoveBtn.setAttribute("data-"+t,"")}}function f(e){let t=new m,r=(0,l.findFilmAtStorage)("my_film",e)?"remove":"add";c.getMovieDetails(e).then(o=>{t.refreshData(o.data),t.refreshBtn(e,r),t.show()}).catch(e=>{console.error(e)})}}),n.register("feFQy",function(t,r){e(t.exports,"default",function(){return i});var o=n("2shzp");class i{constructor(e){this.apiKey=e}getMovieDetails(e){let t=`https://api.themoviedb.org/3/movie/${e}?api_key=${this.apiKey}`;return(0,o.default).get(t)}}}),n.register("lH8sM",function(t,r){function o(e){return e[Math.floor(Math.random()*e.length)]}function i(e){return Math.floor(10*e)/10}function n(e="my_film",t){let r=JSON.parse(localStorage.getItem(e));return r?.find(e=>e.id===t)}e(t.exports,"getRandomItem",function(){return o}),e(t.exports,"roundToTen",function(){return i}),e(t.exports,"findFilmAtStorage",function(){return n})}),n.register("l6Rnt",function(t,r){e(t.exports,"API_KEY",function(){return o}),e(t.exports,"API_BAERER",function(){return i});let o="41b8f9437bf3f899281f8a3f9bdc0891",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g"}),n.register("iuZ0p",function(e,t){e.exports=new URL(n("kyEFX").resolve("bfHyM"),import.meta.url).toString()}),n.register("e9sH3",function(e,t){var r=n("62bSP");window.addEventListener("click",({target:e})=>{let t=document.querySelector(".css-bnt-info"),o=(document.querySelector(".watch-trailer-button"),e.dataset.id);e===t&&(0,r.openModalAboutFilm)(o)})}),n("kyEFX").register(JSON.parse('{"9pyrD":"index.9d29b32f.js","3fiJI":"IMG9881.3ec3dcc0.png","bfHyM":"default.183d728c.jpg"}'));
//# sourceMappingURL=index.9d29b32f.js.map

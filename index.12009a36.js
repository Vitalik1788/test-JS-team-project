function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequired7c6;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequired7c6=s),s("7DS8N"),s("2jcRC"),s("6q4Ta"),s("hPSZl");var r=s("50Kfe"),a=s("2shzp"),o=s("l6Rnt");const c=a.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:`Bearer ${o.API_BAERER}`}});async function l(){return(await c.get()).data.results}var d=s("lH8sM"),p=(o=s("l6Rnt"),s("5bV6Z"));function m(t){const{backdrop_path:e,poster_path:n,title:i,release_date:s,popularity:r,vote_count:a,vote_average:c,genre_ids:l,overview:m,id:u}=t,g=(0,d.findFilmAtStorage)(o.STORAGE_KEY,u),_=g?"remove":"add",v=g?"Remove from my library":"Add to my library";return`\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src="https://image.tmdb.org/t/p/original${window.screen.width<768?n:e}"\n              alt="${i}"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class="upcoming-card__title">${i}</h3>\n          <div class='metrics-list__main-container'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">${s.replaceAll("-",".")}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">${c}</span>\n                  /\n                  <span class="vote-wrapper">${a}</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">${(0,d.roundToTen)(r)}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">${(0,p.validateGenres)(l,JSON.parse(localStorage.getItem("genres")))}</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">${m}</p>\n          <button class="btn" type="button" data-id=${u} data-${_}>${v}</button>\n        </div>`}function u({poster_path:t,backdrop_path:e,title:n}){window.matchMedia("(max-width: 767px)");const i=document.querySelector(".upcoming-card__img");if(!i)return console.log("no upcoming section");const s=`https://image.tmdb.org/t/p/original${t}`,r=`https://image.tmdb.org/t/p/original${e}`;return window.screen.width<768&&i.src!==s?i.src=s:window.screen.width>=768&&i.src!==r?i.src=r:void 0}d=s("lH8sM");const g=document.querySelector(".upcoming-card");window.addEventListener("DOMContentLoaded",(async function(){try{const e=await l(),n=(0,d.getRandomItem)(e);!function(t=""){g.innerHTML=t}(m(n));const i=t(r)((()=>u(n)),200);window.addEventListener("resize",i)}catch(t){console.error("error:",t)}})),s("4E5Dt"),s("haKcb"),s("3AqJ6");
//# sourceMappingURL=index.12009a36.js.map
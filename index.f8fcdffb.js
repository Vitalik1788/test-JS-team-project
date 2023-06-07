function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r("h85Iw"),r("g3iFJ"),r("8oZBs");var o=r("bEEH1");r("iq1cD");var c,a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,f=p||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,h=Math.min,_=function(){return f.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=l.test(t);return n||u.test(t)?d(t.slice(2),n?2:8):s.test(t)?NaN:+t}c=function(t,e,n){var i,r,o,c,a,s,l=0,u=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){var n=i,o=r;return i=r=void 0,l=e,c=t.apply(o,n)}function f(t){return l=t,a=setTimeout(w,e),u?m(t):c}function v(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-l>=o}function w(){var t=_();if(v(t))return x(t);a=setTimeout(w,function(t){var n=e-(t-s);return d?h(n,o-(t-l)):n}(t))}function x(t){return a=void 0,p&&i?m(t):(i=r=void 0,c)}function $(){var t=_(),n=v(t);if(i=arguments,r=this,s=t,n){if(void 0===a)return f(s);if(d)return a=setTimeout(w,e),m(s)}return void 0===a&&(a=setTimeout(w,e)),c}return e=b(e)||0,y(n)&&(u=!!n.leading,o=(d="maxWait"in n)?g(b(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),$.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=s=r=a=void 0},$.flush=function(){return void 0===a?c:x(_())},$};var w=r("2shzp"),x=r("l6Rnt");const $=w.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:`Bearer ${x.API_BAERER}`}});async function O(){return(await $.get()).data.results}function j(t="my_film",e){const n=JSON.parse(localStorage.getItem(t));return null==n?void 0:n.find((t=>t.id===e))}function E(t){const{backdrop_path:e,poster_path:n,title:i,release_date:r,popularity:o,vote_count:c,vote_average:a,genre_ids:s,overview:l,id:u}=t,d=j("my_film",u)?"remove":"add",p=window.screen.width<768?n:e,m=r.replaceAll("-","."),f=(v=o,Math.floor(10*v)/10);var v;const g=(h=["comedy","action","thriller"]).length>2?`${h.slice(0,2).join(", ")}, ...`:`${h.join(", ")}`;var h;document.createDocumentFragment(),document.querySelector(".upcoming-card"),document.styleSheets[document.styleSheets.length-1].cssRules[0];return`\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src="https://image.tmdb.org/t/p/original${p}"\n              alt="${i}"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class="upcoming-card__title">${i}</h3>\n          <div class='metrics-list__main-container'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">${m}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">${a}</span>\n                  /\n                  <span class="vote-wrapper">${c}</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">${f}</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">${g}</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">${l}</p>\n          <button class="btn" type="button" data-id=${u} data-${d}>Add to my library</button>\n        </div>`}function M({poster_path:t,backdrop_path:e,title:n}){window.matchMedia("(max-width: 767px)");const i=document.querySelector(".upcoming-card__img");if(!i)return console.log("no upcoming section");const r=`https://image.tmdb.org/t/p/original${t}`,o=`https://image.tmdb.org/t/p/original${e}`;return window.screen.width<768&&i.src!==r?i.src=r:window.screen.width>=768&&i.src!==o?i.src=o:void 0}const S=document.querySelector(".upcoming-card");window.addEventListener("DOMContentLoaded",(async function(){try{const n=await O(),i=(e=n)[Math.floor(Math.random()*e.length)];!function(t=""){S.innerHTML=t}(E(i));const r=t(c)((()=>M(i)),200);window.addEventListener("resize",r)}catch(t){console.error("error:",t)}var e})),r("7pPMD");var T=r("62bSP");window.addEventListener("click",(({target:t})=>{const e=document.querySelector(".css-bnt-info"),n=(document.querySelector(".watch-trailer-button"),t.dataset.id);if(t===e)(0,T.openModalAboutFilm)(n)})),window.addEventListener("load",o.showWeeklyTrends);
//# sourceMappingURL=index.f8fcdffb.js.map

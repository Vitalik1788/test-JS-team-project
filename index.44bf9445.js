var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in i){var r=i[t];delete i[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},t.parcelRequired7c6=r),r("h85Iw"),r("g3iFJ"),r("8oZBs");var n=r("bEEH1");r("iq1cD");var o={},s=0/0,a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,f=p||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,_=Math.min,h=function(){return f.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==v.call(e))return s;if(y(t)){var e,i="function"==typeof t.valueOf?t.valueOf():t;t=y(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var r=l.test(t);return r||d.test(t)?u(t.slice(2),r?2:8):c.test(t)?s:+t}o=function(t,e,i){var r,n,o,s,a,c,l=0,d=!1,u=!1,p=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(e){var i=r,o=n;return r=n=void 0,l=e,s=t.apply(o,i)}function f(t){var i=t-c,r=t-l;return void 0===c||i>=e||i<0||u&&r>=o}function v(){var t,i,r,n=h();if(f(n))return w(n);a=setTimeout(v,(t=n-c,i=n-l,r=e-t,u?_(r,o-i):r))}function w(t){return(a=void 0,p&&r)?m(t):(r=n=void 0,s)}function x(){var t,i=h(),o=f(i);if(r=arguments,n=this,c=i,o){if(void 0===a)return l=t=c,a=setTimeout(v,e),d?m(t):s;if(u)return a=setTimeout(v,e),m(c)}return void 0===a&&(a=setTimeout(v,e)),s}return e=b(e)||0,y(i)&&(d=!!i.leading,o=(u="maxWait"in i)?g(b(i.maxWait)||0,e):o,p="trailing"in i?!!i.trailing:p),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=n=a=void 0},x.flush=function(){return void 0===a?s:w(h())},x};var w=r("2shzp"),x=r("l6Rnt");const $=(0,w.default).create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:`Bearer ${x.API_BAERER}`}});async function T(){let t=await $.get();return t.data.results}var j=(r("lH8sM"),r("lH8sM"));const O=document.querySelector(".upcoming-card");async function E(){try{var t;let e=await T(),i=(0,j.getRandomItem)(e),r=function(t){var e;let{backdrop_path:i,poster_path:r,title:n,release_date:o,popularity:s,vote_count:a,vote_average:c,genre_ids:l,overview:d,id:u}=t,p=(0,j.findFilmAtStorage)("my_film",u),m=window.screen.width<768?r:i,f=o.replaceAll("-","."),v=(0,j.roundToTen)(s),g=(e=["comedy","action","thriller"]).length>2?`${e.slice(0,2).join(", ")}, ...`:`${e.join(", ")}`;document.createDocumentFragment(),document.querySelector(".upcoming-card");let _=document.styleSheets[document.styleSheets.length-1].cssRules;return _[0],`
        <div class='upcoming-card__figure'>
          <div class='upcoming-card__layout'></div>
            <img
              src="https://image.tmdb.org/t/p/original${m}"
              alt="${n}"
              loading='lazy'
              class='upcoming-card__img'
            > 
          </div>
        </div>
        <div class='upcoming-card__body'>
          <h3 class="upcoming-card__title">${n}</h3>
          <div class='metrics-list__main-container'>
            <ul class="list metrics-list">
              <li class="metrics-list__item">
                <p class="metrics-text">Release date</p>
                <p class="metrics-text metrics-text--date">${f}</p>
              </li>
              <li class="metrics-list__item">
                <p class="metrics-text">Vote / Votes</p>
                <p class="metrics-text metrics-text--vote">
                  <span class="vote-wrapper">${c}</span>
                  /
                  <span class="vote-wrapper">${a}</span>
                </p>
              </li>
              <li class="metrics-list__item">
                <p class="metrics-text">Popularity</p>
                <p class="metrics-text">${v}</p>
              </li>
              <li class="metrics-list__item">
                <p class="metrics-text">Genre</p>
                <p class="metrics-text">${g}</p>
              </li>
            </ul>
          </div>
          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>
            <p class="upcoming-card__text">${d}</p>
          <button class="btn" type="button" data-id=${u} data-${p?"remove":"add"}>Add to my library</button>
        </div>`}(i);!function(t=""){O.innerHTML=t}(r);let n=((t=o)&&t.__esModule?t.default:t)(()=>(function({poster_path:t,backdrop_path:e,title:i}){window.matchMedia("(max-width: 767px)");let r=document.querySelector(".upcoming-card__img");if(!r)return console.log("no upcoming section");let n=`https://image.tmdb.org/t/p/original${t}`,o=`https://image.tmdb.org/t/p/original${e}`;return window.screen.width<768&&r.src!==n?r.src=n:window.screen.width>=768&&r.src!==o?r.src=o:void 0})(i),200);window.addEventListener("resize",n)}catch(t){console.error("error:",t)}}window.addEventListener("DOMContentLoaded",E),r("7pPMD"),r("e9sH3"),window.addEventListener("load",n.showWeeklyTrends);
//# sourceMappingURL=index.44bf9445.js.map

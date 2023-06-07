!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in i){var r=i[t];delete i[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},t.parcelRequired7c6=r),r("2j4vU"),r("kFnCB"),r("60y4I");var n=r("8xsvL");r("gzhhY");var o={},a=0/0,s=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,u=parseInt,p="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,f=p||m||Function("return this")(),v=Object.prototype.toString,g=Math.max,y=Math.min,_=function(){return f.Date.now()};function h(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==v.call(e))return a;if(h(t)){var e,i="function"==typeof t.valueOf?t.valueOf():t;t=h(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=l.test(t);return r||d.test(t)?u(t.slice(2),r?2:8):c.test(t)?a:+t}o=function(t,e,i){var r,n,o,a,s,c,l=0,d=!1,u=!1,p=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(e){var i=r,o=n;return r=n=void 0,l=e,a=t.apply(o,i)}function f(t){var i=t-c,r=t-l;return void 0===c||i>=e||i<0||u&&r>=o}function v(){var t,i,r,n=_();if(f(n))return w(n);s=setTimeout(v,(t=n-c,i=n-l,r=e-t,u?y(r,o-i):r))}function w(t){return(s=void 0,p&&r)?m(t):(r=n=void 0,a)}function x(){var t,i=_(),o=f(i);if(r=arguments,n=this,c=i,o){if(void 0===s)return l=t=c,s=setTimeout(v,e),d?m(t):a;if(u)return s=setTimeout(v,e),m(c)}return void 0===s&&(s=setTimeout(v,e)),a}return e=b(e)||0,h(i)&&(d=!!i.leading,o=(u="maxWait"in i)?g(b(i.maxWait)||0,e):o,p="trailing"in i?!!i.trailing:p),x.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=n=s=void 0},x.flush=function(){return void 0===s?a:w(_())},x};var w=r("dIxxU"),x=r("fpBey");let $=(0,w.default).create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:`Bearer ${x.API_BAERER}`}});async function j(){let t=await $.get();return t.data.results}var T=(r("idULJ"),r("idULJ"));let O=document.querySelector(".upcoming-card");async function L(){try{var t;let e=await j(),i=(0,T.getRandomItem)(e),r=function(t){var e;let{backdrop_path:i,poster_path:r,title:n,release_date:o,popularity:a,vote_count:s,vote_average:c,genre_ids:l,overview:d,id:u}=t,p=(0,T.findFilmAtStorage)("my_film",u),m=window.screen.width<768?r:i,f=o.replaceAll("-","."),v=(0,T.roundToTen)(a),g=(e=["comedy","action","thriller"]).length>2?`${e.slice(0,2).join(", ")}, ...`:`${e.join(", ")}`;document.createDocumentFragment(),document.querySelector(".upcoming-card");let y=document.styleSheets[document.styleSheets.length-1].cssRules;return y[0],`
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
                  <span class="vote-wrapper">${s}</span>
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
        </div>`}(i);!function(t=""){O.innerHTML=t}(r);let n=((t=o)&&t.__esModule?t.default:t)(()=>(function({poster_path:t,backdrop_path:e,title:i}){window.matchMedia("(max-width: 767px)");let r=document.querySelector(".upcoming-card__img");if(!r)return console.log("no upcoming section");let n=`https://image.tmdb.org/t/p/original${t}`,o=`https://image.tmdb.org/t/p/original${e}`;return window.screen.width<768&&r.src!==n?r.src=n:window.screen.width>=768&&r.src!==o?r.src=o:void 0})(i),200);window.addEventListener("resize",n)}catch(t){console.error("error:",t)}}window.addEventListener("DOMContentLoaded",L),r("gSZkB"),r("jyRK9"),window.addEventListener("load",n.showWeeklyTrends)}();
//# sourceMappingURL=index.65781c43.js.map

!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i);var o,c=i("bpxeT"),a=i("2TvXO"),s=i("dIxxU"),u=i("l5bVx"),l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,h=v||g||Function("return this")(),_=Object.prototype.toString,b=Math.max,y=Math.min,x=function(){return h.Date.now()};function w(e){var n=void 0===e?"undefined":t(u)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(u)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==_.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var r=d.test(e);return r||f.test(e)?m(e.slice(2),r?2:8):p.test(e)?NaN:+e}o=function(t,e,n){var r,i,o,c,a,s,u=0,l=!1,p=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=r,o=i;return r=i=void 0,u=e,c=t.apply(o,n)}function m(t){return u=t,a=setTimeout(g,e),l?f(t):c}function v(t){var n=t-s;return void 0===s||n>=e||n<0||p&&t-u>=o}function g(){var t=x();if(v(t))return h(t);a=setTimeout(g,function(t){var n=e-(t-s);return p?y(n,o-(t-u)):n}(t))}function h(t){return a=void 0,d&&r?f(t):(r=i=void 0,c)}function _(){var t=x(),n=v(t);if(r=arguments,i=this,s=t,n){if(void 0===a)return m(s);if(p)return a=setTimeout(g,e),f(s)}return void 0===a&&(a=setTimeout(g,e)),c}return e=O(e)||0,w(n)&&(l=!!n.leading,o=(p="maxWait"in n)?b(O(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=s=i=a=void 0},_.flush=function(){return void 0===a?c:h(x())},_};var T=i("fpBey");function j(t){var e,n,r=t.backdrop_path,i=t.poster_path,o=t.title,c=t.release_date,a=t.popularity,s=t.vote_count,u=t.vote_average,l=(t.genre_ids,t.overview),p=c.replaceAll("-","."),d=(e=a,Math.floor(10*e)/10),f=window.screen.width<768?i:r,m=(n=["comedy","action","thriller"]).length>2?"".concat(n.slice(0,2).join(", "),", ..."):"".concat(n.join(", "));document.createDocumentFragment(),document.querySelector(".upcoming-card"),document.styleSheets[document.styleSheets.length-1].cssRules[0];return"\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n          <img\n            src=\"https://image.tmdb.org/t/p/original".concat(f,'"\n            alt="').concat(o,"\"\n            loading='lazy'\n            class='upcoming-card__img'\n          > \n          </div>\n        </div>\n\n          <div class='upcoming-card__body'>\n            <h3 class=\"upcoming-card__title\">").concat(o,'</h3>\n\n            <div class=\'metrics-list__main-container\'>\n                <ul class="list metrics-list">\n                  <li class="metrics-list__item">\n                    <p class="metrics-text">Release date</p>\n                    <p class="metrics-text metrics-text--date">').concat(p,'</p>\n                  </li>\n                  <li class="metrics-list__item">\n                    <p class="metrics-text">Vote / Votes</p>\n                    <p class="metrics-text metrics-text--vote">\n                      <span class="vote-wrapper">').concat(u,'</span>\n                      /\n                      <span class="vote-wrapper">').concat(s,'</span>\n                    </p>\n                  </li>\n                  <li class="metrics-list__item">\n                    <p class="metrics-text">Popularity</p>\n                    <p class="metrics-text">').concat(d,'</p>\n                  </li>\n                  <li class="metrics-list__item">\n                    <p class="metrics-text">Genre</p>\n                    <p class="metrics-text">\n                      ').concat(m,'\n                    </p>\n                  </li>\n                </ul>\n            </div>\n            <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n              <p class="upcoming-card__text" >\n              ').concat(l,'\n              </p>\n            <button class="btn" type="button">Add to my library</button>\n          </div>')}var M=document.querySelector(".upcoming-card");function E(){return(E=t(c)(t(a).mark((function e(){var n,r,i;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:n=e.sent,r=S(n),console.log(r),A(j(r)),i=t(o)((function(){return R(r)}),200),window.addEventListener("resize",i),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error:",e.t0),console.log("error code:",e.t0.code);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function R(t){var e=t.poster_path,n=t.backdrop_path,r=(t.title,window.matchMedia("(max-width: 767px)"),document.querySelector(".upcoming-card__img"));if(!r)return console.log("no upcoming section");var i="https://image.tmdb.org/t/p/original".concat(e),o="https://image.tmdb.org/t/p/original".concat(n);return window.screen.width<768&&r.src!==i?r.src=i:window.screen.width>=768&&r.src!==o?r.src=o:void 0}function S(t){return t[Math.floor(Math.random()*t.length)]}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";M.innerHTML=t}window.addEventListener("DOMContentLoaded",(function(){return E.apply(this,arguments)}));var L=s.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:"Bearer ".concat(T.API_BAERER)}});function N(){return k.apply(this,arguments)}function k(){return(k=t(c)(t(a).mark((function e(){var n;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.get();case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}}();
//# sourceMappingURL=index.16998777.js.map

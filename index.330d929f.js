!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=i),i("2j4vU"),i("kFnCB"),i("60y4I"),i("8xsvL"),i("gzhhY");var o,c=i("bpxeT"),a=i("2TvXO"),s=i("l5bVx"),u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,p=/^0o[0-7]+$/i,f=parseInt,m="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),h=Object.prototype.toString,_=Math.max,b=Math.min,y=function(){return g.Date.now()};function w(e){var n=void 0===e?"undefined":t(s)(e);return!!e&&("object"==n||"function"==n)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(s)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=d.test(e);return r||p.test(e)?f(e.slice(2),r?2:8):l.test(e)?NaN:+e}o=function(t,e,n){var r,i,o,c,a,s,u=0,l=!1,d=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function f(e){var n=r,o=i;return r=i=void 0,u=e,c=t.apply(o,n)}function m(t){return u=t,a=setTimeout(g,e),l?f(t):c}function v(t){var n=t-s;return void 0===s||n>=e||n<0||d&&t-u>=o}function g(){var t=y();if(v(t))return h(t);a=setTimeout(g,function(t){var n=e-(t-s);return d?b(n,o-(t-u)):n}(t))}function h(t){return a=void 0,p&&r?f(t):(r=i=void 0,c)}function O(){var t=y(),n=v(t);if(r=arguments,i=this,s=t,n){if(void 0===a)return m(s);if(d)return a=setTimeout(g,e),f(s)}return void 0===a&&(a=setTimeout(g,e)),c}return e=x(e)||0,w(n)&&(l=!!n.leading,o=(d="maxWait"in n)?_(x(n.maxWait)||0,e):o,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==a&&clearTimeout(a),u=0,r=s=i=a=void 0},O.flush=function(){return void 0===a?c:h(y())},O};c=i("bpxeT"),a=i("2TvXO");var O=i("dIxxU"),T=i("fpBey"),j=O.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:"Bearer ".concat(T.API_BAERER)}});function S(){return M.apply(this,arguments)}function M(){return(M=t(c)(t(a).mark((function e(){var n;return t(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get();case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function E(t){return t[Math.floor(Math.random()*t.length)]}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"my_film",e=arguments.length>1?arguments[1]:void 0,n=JSON.parse(localStorage.getItem(t));return null==n?void 0:n.find((function(t){return t.id===e}))}function L(t){var e,n,r=t.backdrop_path,i=t.poster_path,o=t.title,c=t.release_date,a=t.popularity,s=t.vote_count,u=t.vote_average,l=(t.genre_ids,t.overview),d=t.id,p=k("my_film",d)?"remove":"add",f=window.screen.width<768?i:r,m=c.replaceAll("-","."),v=(e=a,Math.floor(10*e)/10),g=(n=["comedy","action","thriller"]).length>2?"".concat(n.slice(0,2).join(", "),", ..."):"".concat(n.join(", "));document.createDocumentFragment(),document.querySelector(".upcoming-card"),document.styleSheets[document.styleSheets.length-1].cssRules[0];return"\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src=\"https://image.tmdb.org/t/p/original".concat(f,'"\n              alt="').concat(o,"\"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class=\"upcoming-card__title\">").concat(o,'</h3>\n          <div class=\'metrics-list__main-container\'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">').concat(m,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">').concat(u,'</span>\n                  /\n                  <span class="vote-wrapper">').concat(s,'</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">').concat(v,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">').concat(g,'</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">').concat(l,'</p>\n          <button class="btn" type="button" data-id=').concat(d," data-").concat(p,">Add to my library</button>\n        </div>")}function q(t){var e=t.poster_path,n=t.backdrop_path,r=(t.title,window.matchMedia("(max-width: 767px)"),document.querySelector(".upcoming-card__img"));if(!r)return console.log("no upcoming section");var i="https://image.tmdb.org/t/p/original".concat(e),o="https://image.tmdb.org/t/p/original".concat(n);return window.screen.width<768&&r.src!==i?r.src=i:window.screen.width>=768&&r.src!==o?r.src=o:void 0}var A=document.querySelector(".upcoming-card");function N(){return(N=t(c)(t(a).mark((function e(){var n,r,i;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:n=e.sent,r=E(n),R(L(r)),i=t(o)((function(){return q(r)}),200),window.addEventListener("resize",i),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";A.innerHTML=t}window.addEventListener("DOMContentLoaded",(function(){return N.apply(this,arguments)})),i("gSZkB");var B=i("hmtur");window.addEventListener("click",(function(t){var e=t.target,n=document.querySelector(".css-bnt-info"),r=(document.querySelector(".watch-trailer-button"),e.dataset.id);if(e===n)(0,B.openModalAboutFilm)(r)}))}();
//# sourceMappingURL=index.330d929f.js.map

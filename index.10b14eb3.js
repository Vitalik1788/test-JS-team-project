!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a),a("7svdd"),a("faT6s"),a("2ufDr"),a("fFZM4");var i=a("bpxeT"),c=a("2TvXO"),s=a("l1Gdk"),o=(i=a("bpxeT"),c=a("2TvXO"),a("dIxxU")),l=a("fpBey"),d=o.default.create({baseURL:"https://api.themoviedb.org/3/movie/upcoming",headers:{Authorization:"Bearer ".concat(l.API_BAERER)}});function p(){return u.apply(this,arguments)}function u(){return(u=t(i)(t(c).mark((function e(){var n;return t(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.get();case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var m=a("idULJ"),v=(l=a("fpBey"),a("htMbP"));function g(t){var e=t.backdrop_path,n=t.poster_path,r=t.title,a=t.release_date,i=t.popularity,c=t.vote_count,s=t.vote_average,o=t.genre_ids,d=t.overview,p=t.id,u=(0,m.findFilmAtStorage)(l.STORAGE_KEY,p),g=u?"remove":"add",f=u?"Remove from my library":"Add to my library",_=window.screen.width<768?n:e,h=a.replaceAll("-","."),w=(0,m.roundToTen)(i),x=(0,v.validateGenres)(o,JSON.parse(localStorage.getItem("genres")));return"\n        <div class='upcoming-card__figure'>\n          <div class='upcoming-card__layout'></div>\n            <img\n              src=\"https://image.tmdb.org/t/p/original".concat(_,'"\n              alt="').concat(r,"\"\n              loading='lazy'\n              class='upcoming-card__img'\n            > \n          </div>\n        </div>\n        <div class='upcoming-card__body'>\n          <h3 class=\"upcoming-card__title\">").concat(r,'</h3>\n          <div class=\'metrics-list__main-container\'>\n            <ul class="list metrics-list">\n              <li class="metrics-list__item">\n                <p class="metrics-text">Release date</p>\n                <p class="metrics-text metrics-text--date">').concat(h,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Vote / Votes</p>\n                <p class="metrics-text metrics-text--vote">\n                  <span class="vote-wrapper">').concat(s,'</span>\n                  /\n                  <span class="vote-wrapper">').concat(c,'</span>\n                </p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Popularity</p>\n                <p class="metrics-text">').concat(w,'</p>\n              </li>\n              <li class="metrics-list__item">\n                <p class="metrics-text">Genre</p>\n                <p class="metrics-text">').concat(x,'</p>\n              </li>\n            </ul>\n          </div>\n          <h4 class="upcoming-card__subtitle metrics-text">ABOUT</h4>\n            <p class="upcoming-card__text">').concat(d,'</p>\n          <button class="btn" type="button" data-id=').concat(p," data-").concat(g,">").concat(f,"</button>\n        </div>")}function f(t){var e=t.poster_path,n=t.backdrop_path,r=(t.title,window.matchMedia("(max-width: 767px)"),document.querySelector(".upcoming-card__img"));if(!r)return console.log("no upcoming section");var a="https://image.tmdb.org/t/p/original".concat(e),i="https://image.tmdb.org/t/p/original".concat(n);return window.screen.width<768&&r.src!==a?r.src=a:window.screen.width>=768&&r.src!==i?r.src=i:void 0}m=a("idULJ");var _=document.querySelector(".upcoming-card");function h(){return(h=t(i)(t(c).mark((function e(){var n,r,a;return t(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p();case 3:n=e.sent,r=(0,m.getRandomItem)(n),w(g(r)),a=t(s)((function(){return f(r)}),200),window.addEventListener("resize",a),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("error:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";_.innerHTML=t}window.addEventListener("DOMContentLoaded",(function(){return h.apply(this,arguments)})),a("gxg06"),a("4R5zJ"),a("8PzFy")}();
//# sourceMappingURL=index.10b14eb3.js.map

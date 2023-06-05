!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"gin8l":"catalog.ec2d4576.js","iNwWb":"default.183d728c.jpg","8hJTk":"catalog.c4da2920.js"}')),o("kFnCB"),o("60y4I");var i={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")},c=o("bpxeT"),u=o("8MBJY"),s=o("a2hTj"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var f=o("2TvXO"),d=function(){"use strict";function e(){t(u)(this,e),this.searchQuery="",this.page=1,this.totalAmount=0}return t(s)(e,[{key:"getMovies",value:function(){var n=this;return t(c)(t(f).mark((function r(){var a,o,i,c;return t(f).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(e.API_KEY)}},o="",o=n.searchQuery?"".concat(e.BASE_URL,"/search/movie?api_key=").concat(e.API_KEY,"&query=").concat(n.searchQuery,"&include_adult=false&language=en-US&page=").concat(n.page):"".concat(e.BASE_URL,"/trending/all/week?api_key=").concat(e.API_KEY,"&language=en-US&page=").concat(n.page),t.prev=3,t.next=6,fetch(o,a);case 6:return i=t.sent,t.next=9,i.json();case 9:return c=t.sent,t.abrupt("return",c);case 13:throw t.prev=13,t.t0=t.catch(3),console.error(t.t0),t.t0;case 17:case"end":return t.stop()}}),r,null,[[3,13]])})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"total",get:function(){return this.totalAmount},set:function(e){this.totalAmount=e}},{key:"resetTotal",value:function(){this.totalAmount=0}}]),e}();t(l)(d,"BASE_URL","https://api.themoviedb.org/3"),t(l)(d,"API_KEY","41b8f9437bf3f899281f8a3f9bdc0891");var p,g=o("8nrFW");function v(e){var n=e.results.map((function(e){var n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"".concat(t(p));return'<li class="card-item item">\n            <img class="film-poster" src="'.concat(n,'" alt="').concat(e.original_title,'" />\n            <div class="overlay">\n              <div class="film-info">\n                <p class="film-title">').concat(e.original_title||e.name,'</p>\n                <div class="film-details">\n                  <span class="film-description">').concat(t(g)(e.genre_ids)," | ").concat(new Date(e.release_date).getFullYear()||new Date(e.first_air_date).getFullYear(),' </span>\n                  <span class="film-rating">').concat(Math.round(e.vote_average),"</span>\n                </div>\n              </div>\n            </div>\n          </li>")})).join("");i.catalogList.innerHTML=n}p=o("aNJCr").getBundleURL("gin8l")+o("iE7OH").resolve("iNwWb");var h=new d,m=1;function y(e){h.getMovies(e).then((function(e){v(e)}))}i.searchForm.addEventListener("submit",(function(e){e.preventDefault(),h.query=i.searchInput.value.trim(),h.resetPage(),h.resetTotal(),h.getMovies().then((function(e){if(""===h.query)return alert("error"),void(i.catalogList.innerHTML="");h.total=e.total_results;v(e);i.searchInput.value=""}))})),i.cancelBtn.addEventListener("click",(function(){i.searchInput.value=""})),i.nextPageBtn.addEventListener("click",(function(){m+=1,h.incrementPage(),y(m)})),i.prevPageBtn.addEventListener("click",(function(){m>1&&(m-=1,h.decrementPage(),y(m))})),y(m)}();
//# sourceMappingURL=catalog.ec2d4576.js.map
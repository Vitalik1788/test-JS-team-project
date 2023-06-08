!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("iE7OH").register(JSON.parse('{"jRNy8":"catalog.7adbe99b.js","iNwWb":"default.183d728c.jpg","bEKIM":"index.60bbdc3d.js","iHeHe":"index.2319e985.js","1mUZW":"library.f7bd2b59.js","bYjUQ":"index.dd640731.js","gqlnG":"library.d4416224.js","gCQ89":"index.e7b2852e.js"}')),r("jsWY4"),r("gIcfX");var i=r("bpxeT"),o=r("2TvXO"),c={searchForm:document.getElementById("movieSearchForm"),searchInput:document.getElementById("movieInput"),catalogList:document.getElementById("movieList"),errorContainer:document.querySelector(".error-container"),searchBtn:document.querySelector(".search-button"),cancelBtn:document.querySelector(".cancel-button"),paginationContainer:document.querySelector(".pagination-pages-list"),paginationButton:document.querySelector(".pagination-button"),nextPageBtn:document.querySelector(".next-button"),prevPageBtn:document.querySelector(".prev-button")},s=(i=r("bpxeT"),r("8MBJY")),u=r("a2hTj"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};o=r("2TvXO");var d=r("fpBey"),p=function(){"use strict";function t(){e(s)(this,t),this.searchQuery="",this.page=1,this.totalAmount=0}return e(u)(t,[{key:"getMovies",value:function(){var n=this;return e(i)(e(o).mark((function a(){var r,i,c,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat(t.API_KEY)}},i="",i=n.searchQuery?"".concat(t.BASE_URL,"/search/movie?api_key=").concat(t.API_KEY,"&query=").concat(n.searchQuery,"&include_adult=false&language=en-US&page=").concat(n.page):"".concat(t.BASE_URL,"/trending/all/week?api_key=").concat(t.API_KEY,"&language=en-US&page=").concat(n.page),e.prev=3,e.next=6,fetch(i,r);case 6:return c=e.sent,e.next=9,c.json();case 9:return s=e.sent,e.abrupt("return",s);case 13:throw e.prev=13,e.t0=e.catch(3),console.error(e.t0),e.t0;case 17:case"end":return e.stop()}}),a,null,[[3,13]])})))()}},{key:"incrementPage",value:function(){this.page+=1}},{key:"decrementPage",value:function(){this.page-=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"total",get:function(){return this.totalAmount},set:function(e){this.totalAmount=e}},{key:"resetTotal",value:function(){this.totalAmount=0}}]),t}();e(l)(p,"BASE_URL","https://api.themoviedb.org/3"),e(l)(p,"API_KEY",d.API_KEY);var f,g=!1,v=function(){var e=document.querySelector(".pagination-wrapper");if(!g){var t=document.createElement("div");t.innerHTML='<p class="error-information">OOPS...</p>\n  <p class="error-information">We are very sorry!</p>\n  <p class="error-information">\n    We don’t have any results matching your search.\n  </p>',c.errorContainer.appendChild(t),c.errorContainer.classList.remove("is-hidden"),e.classList.add("is-hidden"),g=!0}};i=r("bpxeT"),o=r("2TvXO");f=r("aNJCr").getBundleURL("jRNy8")+r("iE7OH").resolve("iNwWb");var m=r("b1uSG"),h=r("6Ytd7"),b=r("97b6U");function y(e){return _.apply(this,arguments)}function _(){return _=e(i)(e(o).mark((function t(n){var a,r,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.parse(localStorage.getItem("genres")),r=n.results.map(function(){var t=e(i)(e(o).mark((function t(n){var r,i,c;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"".concat(e(f)),i=(0,h.validateGenres)(n.genre_ids,a),t.next=4,i;case 4:return c=t.sent,t.abrupt("return",'<li class="card-item" data-id="'.concat(n.id,'">\n        <img class="film-poster" src="').concat(r,'" alt="').concat(n.original_title||n.name,'" />\n        <div class="overlay">\n          <div class="film-info">\n            <p class="film-title">').concat(n.original_title||n.name,'</p>\n            <div class="film-details">\n              <span class="film-description">').concat(c," | ").concat(new Date(n.release_date).getFullYear()||new Date(n.first_air_date).getFullYear(),'</span>\n    <div class="stars-container">').concat((0,m.default)({voteAverage:n.vote_average,isHero:!1}),'</div>            \n      \x3c!-- <span class="film-rating">').concat(n.vote_average.toFixed(1),"</span> --\x3e\n            </div>\n          </div>\n        </div>\n      </li>"));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=4,Promise.all(r);case 4:s=t.sent,c.catalogList.innerHTML=s.join(""),document.querySelector(".listListener").addEventListener("click",(function(e){var t=e.target.closest(".card-item").getAttribute("data-id");(0,b.openModalAboutFilm)(t)}));case 8:case"end":return t.stop()}}),t)}))),_.apply(this,arguments)}var L=new p,E=document.querySelector(".pagination-wrapper"),x=1,S=0;function A(e){L.getMovies(e).then(w).catch(H)}function w(e){var t;S=e.total_pages,y(e),t=e.total_pages,x===t?c.nextPageBtn.setAttribute("disabled","disabled"):c.nextPageBtn.removeAttribute("disabled"),P(S,x)}function H(e){c.catalogList.innerHTML="",v(),console.error("An error occurred:",e)}function B(){c.catalogList.innerHTML="",v()}function T(){return(T=e(i)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.getMovies();case 3:0===(n=e.sent).total_results?B():(E.classList.remove("is-hidden"),S=n.total_pages,L.total=n.total_results,y(n),x=n.page,P(S,x)),c.searchInput.value="",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),H(e.t0);case 11:case"end":return e.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function P(e,t){var n="",a=t+1,r=t-1;e>5&&t>2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-button">1</button>\n      </li>',t>3&&(n+='<li class="pagination-item">\n          <button type="button" class="pagination-dots">...</button>\n        </li>')),(t==e||t==e-1)&&(r-=1),(1==t||2==t)&&(a+=1);for(var i=r;i<=a;i++)i>e||i<1||(active=t==i?"is-active":"",n+='<li class="pagination-item">\n      <button type="button" class="pagination-button '.concat(active,'">').concat(i,"</button>\n    </li>"));return e>5&&t<e-1&&(t<e-2&&(n+='<li class="pagination-item">\n        <button type="button" class="pagination-dots">...</button>\n      </li>'),n+='<li class="pagination-item">\n      <button type="button" class="pagination-button">'.concat(e,"</button>\n    </li>")),c.paginationContainer.innerHTML=n,n}c.searchForm.addEventListener("submit",(function(e){e.preventDefault(),c.paginationContainer.classList.remove("is-hidden"),c.errorContainer.classList.add("is-hidden");var t=c.searchInput.value.trim();L.query=t,L.resetPage(),L.resetTotal(),""===t?B():function(){T.apply(this,arguments)}()})),c.cancelBtn.addEventListener("click",(function(){c.cancelBtn.classList.add("is-hidden"),c.searchInput.value=""})),c.searchInput.addEventListener("input",(function(e){e.currentTarget.value.trim()?c.cancelBtn.classList.remove("is-hidden"):c.cancelBtn.classList.add("is-hidden")})),c.nextPageBtn.addEventListener("click",(function(){x+=1,L.incrementPage(),A(x)})),c.prevPageBtn.addEventListener("click",(function(){x>1&&(x-=1,L.decrementPage(),A(x))})),c.paginationContainer.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){var t=parseInt(e.target.textContent);isNaN(t)||t===x||(x=t,L.page=t,A(x))}})),c.errorContainer.classList.add("is-hidden"),c.cancelBtn.classList.add("is-hidden"),A(x),r("3z7Sw"),r("5TXLS")}();
//# sourceMappingURL=catalog.7adbe99b.js.map

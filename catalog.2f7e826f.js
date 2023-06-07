!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("60y4I",(function(t,n){var r=o("bpxeT"),a=o("2TvXO"),i=o("2j4vU");o("gSZkB");var s="58fde9f9a3392c3dbee86a1f2142354e",l=Math.floor(20*Math.random())+0,c=o("dIxxU").default,d={heroDiv:document.getElementById("hero-div"),heroTitle:document.getElementById("hero-title"),heroOverview:document.getElementById("hero-overview"),heroBtnDiv:document.getElementById("hero-btn-div"),heroFilmDataEl:document.querySelector(".hero-info-wrap")};function u(){return(u=e(r)(e(a).mark((function t(){var n;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return n=e.sent,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),m(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(e,t,n){d.heroDiv.style.backgroundImage="linear-gradient(79.39deg, #111111 32.37%, rgba(17, 17, 17, 0) 42.02%), \n  url(".concat(e,")"),d.heroTitle.textContent="".concat(t),d.heroOverview.textContent="".concat(n)}function m(e){d.heroDiv.classList.add("hero-container-bg");var t;f("../images/default-bgimage.jpg","Let’s Make Your Own Cinema","Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience."),(t=document.createElement("button")).textContent="Get Started",t.classList.add("css-btn-trailer"),t.setAttribute("type","button"),d.heroBtnDiv.append(t)}window.addEventListener("load",(function(){(function(){return u.apply(this,arguments)})().then((function(e){var t=e.data;console.log(t);var n,r,o=t.results[l],a=o.backdrop_path,s='"https://image.tmdb.org/t/p/original/'.concat(a,'"'),c=o.title,u=o.overview,m=o.id,p=o.vote_average;f(s,c,u),function(e){var t=document.createElement("button");t.textContent="Watch Trailer",t.classList.add("css-btn-trailer","watch-trailer-button"),t.setAttribute("type","button"),t.setAttribute("trailer-id","".concat(e)),d.heroBtnDiv.append(t);var n=document.createElement("button");n.textContent="More Details",n.classList.add("css-bnt-info"),n.setAttribute("type","button"),d.heroBtnDiv.append(n)}(m),n=m,r=p,d.heroFilmDataEl.dataset.id=n,d.heroFilmDataEl.dataset.rating=r,(0,i.default)({voteAverage:p,isHero:!0})}))}))})),o.register("2j4vU",(function(e,t){var n,r,o,a;n=e.exports,r="default",o=function(){return u},Object.defineProperty(n,r,{get:o,set:a,enumerable:!0,configurable:!0});var i=document.querySelector(".stars-container"),s=document.querySelector("#defs").lastElementChild,l=document.querySelector(".mask"),c=0,d={filled:'<use href="#star" fill="url(#star-fill--complete)"></use>',masked:"",empty:'<use href="#star" fill="none"></use>'};function u(e){var t=e.voteAverage,n=e.isHero,r=function(e){return!e||e<=0||e>10?0:Number((e/2).toFixed(1))}(Number(t));return d.masked='<use href="#star" mask="url(#star-fill--partly'.concat(c,')" fill="url(#star-fill--complete)"></use><use href="#star" fill="none" stroke="url(#star-stroke)"></use>'),function(e,t){var n=Math.floor(100*(Number.parseFloat(t)-Number.parseInt(t)));if(0===e)l.innerHTML='\n\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t<rect x="'.concat(n,'%" y="0" width="18" height="16" fill="black" />');else{var r='\n\t\t<mask id="star-fill--partly'.concat(e,'" class="mask">\n\t\t\t<rect x="0" y="0" width="18" height="16" fill="white" />\n\t\t\t<rect x="').concat(n,'%" y="0" width="18" height="16" fill="black" />\n\t\t</mask>');s.insertAdjacentHTML("beforebegin",r)}}(c,r),c++,function(e,t){if(!t)return f(e);i.insertAdjacentHTML("beforeend",f(e));var n={starsList:document.querySelector(".stars-list"),starsListImg:document.querySelectorAll(".stars-list__img")};i.classList.add("stars-container--hero"),n.starsList.classList.add("stars-list--hero"),n.starsListImg.forEach((function(e){return e.classList.add("stars-list__img--hero")}))}(r,n)}function f(e){if(!e)return'<p class="stars-absent">Not rated yet</p>';var t=Number.parseInt(e),n=e-t==0?0:1,r=5-t-n,o=d.filled,a=d.masked,i=d.empty,s=function(e){return'<ul class="stars-list" aria-label="Rating: '.concat(e,' stars out of 5.0" title="Rating: ').concat(e,' stars out of 5.0">')}(e);return s+m(t,o)+m(n,a)+m(r,i)+"</ul>"}function m(e,t){for(var n="",r=1;r<=e;r++)n+='\n\t\t\t<li class="stars-list__item">\n\t\t\t\t<svg class="stars-list__img" viewBox="0 0 18 16">\n\t\t\t\t\t'.concat(t,"\n\t\t\t\t</svg>\n\t\t\t</li>");return n}})),o.register("gSZkB",(function(e,t){function n(e){var t="https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=41b8f9437bf3f899281f8a3f9bdc0891&language=en-US");fetch(t).then((function(e){return e.json()})).then((function(e){var t=e.results[0].key,n="https://www.youtube.com/embed/".concat(t,"?rel=0&amp;controls=1&amp;showinfo=0"),r=document.createElement("iframe");r.src=n,r.width="560",r.height="315",r.frameBorder="0",r.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",r.allowFullscreen="";var o=document.createElement("span");o.className="close-button",o.innerHTML='\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        ',o.addEventListener("click",(function(){var e=document.getElementById("modal");document.querySelector(".modal-content").innerHTML="",e.style.display="none",r.src=""}));var a=document.querySelector(".modal-content");a.innerHTML="",a.appendChild(r),a.appendChild(o),document.getElementById("modal").style.display="block"})).catch((function(){!function(){var e=document.querySelector(".modal-content");e.innerHTML='\n      <div class="error-content">\n        <p class="error-message">OOPS... <br>We are very sorry!<br>\n        But we couldn’t find the trailer.</p>\n        <img class="error-image" src=\'../images/IMG9881.jpeg\' alt="Error image">\n        <button class="close-button">\n          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 10.5" width="10.5px" height="10.5px">\n            <path fill="#FFFFFF" d="M9.2,1.3L8.2,0.3L5.25,3.25L2.3,0.3L1.3,1.3L4.25,4.25L1.3,7.2L2.3,8.2L5.25,5.25L8.2,8.2L9.2,7.2L6.25,4.25z"/>\n          </svg>\n        </button>\n      </div>\n    ';var t=document.getElementById("modal");t.style.display="block";var n=e.querySelector(".close-button");n.addEventListener("click",(function(){t.style.display="none"})),n.classList.add("close-button"),e.querySelector(".error-content").classList.add("error-content")}()}))}window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".hero-btn-wrap"),t=document.querySelector(".close-button"),r=document.getElementById("modal");e.addEventListener("click",(function(e){var t=e.target.closest(".watch-trailer-button");t&&n(t.getAttribute("trailer-id"))})),document.addEventListener("keydown",(function(e){return"Escape"===e.key?r.style.display="none":null})),window.addEventListener("click",(function(e){return e.target===r?r.style.display="none":null})),t.addEventListener("click",(function(){r.style.display="none"}))}))}))}();
//# sourceMappingURL=catalog.2f7e826f.js.map

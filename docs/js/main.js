const d=document.querySelector(".js-btn-search"),u=document.querySelector(".js-input"),r=document.querySelector(".js-ul"),a=document.querySelector(".js-ul-fav"),f=document.querySelector(".js-btn-reset");document.querySelectorAll(".js-close");let i=[],t=[];const m=()=>{fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita").then(e=>e.json()).then(e=>{i=e.drinks,l(r,i)})};function v(e){let n="";return n=`    <li class="card js-item ${t.findIndex(o=>o.idDrink===e.idDrink)===-1?"":"fav"} mini" id="${e.idDrink}">
  <div class="close hidden js-close"> x </div>
      <p class="title">${e.strDrink}</p>
      <img class="card--img"
        src="${e.strDrinkThumb}"
        alt="${e.strDrink}"
      />
    </li>`,n}function l(e,n){e.innerHTML="";for(const s of n)e.innerHTML+=v(s);const c=document.querySelectorAll(".js-item");for(const s of c)s.addEventListener("click",h)}function k(e){r.innerHTML="",fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`).then(n=>n.json()).then(n=>{i=n.drinks,l(r,i)})}function p(){const e=localStorage.getItem("favourites");e!==null&&(t=JSON.parse(e)),l(a,t)}function g(e){if(console.log("tengo el close?"),console.log(e),e.classList.contains("close")){const n=e.parentElement;console.log("es su parentElement?"),console.log(n.id);const c=n.id,s=t.findIndex(o=>o.idDrink===c);s!==-1&&t.splice(s,1),l(a,t)}}function h(e){const n=e.currentTarget.id,c=i.find(o=>o.idDrink===n),s=t.findIndex(o=>o.idDrink===n);s===-1?t.push(c):t.splice(s,1),console.log("cocktailsFav: "),console.log(t),g(e.target),l(r,i),l(a,t),localStorage.setItem("favourites",JSON.stringify(t))}const S=e=>{e.preventDefault();const n=u.value;k(n)};d.addEventListener("click",S);const j=e=>{r.innerHTML="",a.innerHTML="",t=[],localStorage.removeItem("favourites")};f.addEventListener("click",j);m();p();
//# sourceMappingURL=main.js.map

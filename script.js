const template = document.getElementById("hello");
const container = document.getElementById("container");
const searchBox=document.getElementById("searchBox");
searchBox.addEventListener("input",async function(){
document.getElementById("banner").style.display="none";
container.style.display="grid";
let value=searchBox.value;
let response=await fetch(`https://dummyjson.com/products/search?q=${value}`);
let data=await response.json();
container.innerHTML="";
data.products.forEach(product=>{
    console.log(data);
let clone=template.content.cloneNode(true);
clone.querySelector(".title").textContent=product.title;
clone.querySelector(".price").textContent="$"+product.price;
clone.querySelector(".description").textContent=product.description;
clone.querySelector(".image1").src=product.thumbnail;
let card=clone.querySelector(".card");
card.onclick=()=>{
window.location.href=`product.html?id=${product.id}`;
};
container.appendChild(clone);
});
});

const buttons=document.querySelectorAll(".category-btn");
buttons.forEach(button=>{
button.addEventListener("click",async()=>{
let category=button.textContent.toLowerCase().replaceAll(" ", "-");;
const banner = document.getElementById("banner");

if(category==="home"){
    banner.style.display="block";
    container.style.display="none";
    return;
}
banner.style.display="none";
container.style.display="grid";
let response;

if(category==="all"){
    response=await fetch("https://dummyjson.com/products?limit=0");
}
else{
    response=await fetch(`https://dummyjson.com/products/category/${category}`);
}
let data=await response.json();
container.innerHTML="";

data.products.forEach(product=>{
let clone=template.content.cloneNode(true);
clone.querySelector(".title").textContent=product.title;
clone.querySelector(".price").textContent="$"+product.price;
clone.querySelector(".description").textContent=product.description;
clone.querySelector(".image1").src=product.thumbnail;

let card=clone.querySelector(".card");
card.onclick=()=>{
window.location.href=`product.html?id=${product.id}`;
};
container.appendChild(clone);
});
});
});

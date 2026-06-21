const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

const words = [
"Web Developer",
"React Developer",
"Node.js Developer",
"UI Designer"
];

let i=0;

setInterval(()=>{

document.getElementById("typing").textContent=
words[i];

i++;

if(i>=words.length){
i=0;
}

},2000);

ScrollReveal().reveal(
'.hero-text',
{
delay:300,
distance:'80px',
origin:'left'
}
);

ScrollReveal().reveal(
'.hero-image',
{
delay:500,
distance:'80px',
origin:'right'
}
);

ScrollReveal().reveal(
'.card,.skill',
{
interval:150
}
);
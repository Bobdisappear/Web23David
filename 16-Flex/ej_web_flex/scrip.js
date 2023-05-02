
const btn = document.querySelector("button");
const h1 = document.querySelector("h1");
const p = document.querySelector(".txt-large")

btn.addEventListener("click", updatebtn);

function updatebtn() {
    if (p.innerHTML=== "maybe :)") {
        p.innerHTML = "";
        h1.innerHTML = "Or not";
    
    } else {
        p.innerHTML = "maybe :)";
        h1.innerHTML = "";
    }
}

const container = document.getElementById("container");

for (i = 0; i < 256; i++) {
    container.innerHTML += '<div class="box"></div>'
}

document.querySelectorAll(".box").forEach(item => {
    item.addEventListener("mouseover", event => {
        item.style.backgroundColor = "blue";
        console.log("cheese");
    })
})
const parent = document.querySelector("#insertHere");

const button = document.querySelector("#pressMe");

button.addEventListener("click", createDivs);

function createDivs() {
    parent.innerHTML="";
    for (let i = 0; i<20; i++){
        let div = getDiv(i+1);
        parent.append(div);
    }
}

function getDiv(number){
    let  color = getRandomColor();
    let text = document.createElement("p");
    var div = document.createElement("div");
    div.className = "blockStyle";
    div.style.backgroundColor=color;
    text.innerText = number;
    div.append(text);
    return div;
}

function getRandomColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
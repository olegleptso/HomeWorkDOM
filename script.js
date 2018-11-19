const parent = document.querySelector("#insertHere");

function createDivs() {
    for (let i = 0; i<20; i++){
        let  color = getRandomColor();
        let number = i.toString();
        let text = document.createElement("p");
        var divs = document.createElement("div");
        divs.className = "blockStyle";
        divs.style.backgroundColor=color;
        text.innerText =  number;
        parent.append(divs);
        divs.append(text);
    }
}

function getRandomColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
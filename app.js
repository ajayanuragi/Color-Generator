function newColor() {
        let one = Math.floor(Math.random() * 256);
        let two = Math.floor(Math.random() * 256);
        let three = Math.floor(Math.random() * 256);
        let four = Math.floor(Math.random() * 11)/10;
        randomColor = document.getElementById("one").style.backgroundColor = "rgba" + "(" + one + "," + two + "," + three + "," + four + ")";
        document.getElementById("color1").innerText = "" + randomColor ;
        secondColor();
}
function secondColor(){
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 11)/10;Math.random();
    randomColor = document.getElementById("two").style.backgroundColor = "rgba" + "(" + one + "," + two + "," + three + "," + four + ")";
    document.getElementById("color2").innerText = "" + randomColor ;
    thirdColor();
}
function thirdColor(){
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 11)/10;
    randomColor = document.getElementById("three").style.backgroundColor = "rgba" + "(" + one + "," + two + "," + three + "," + four + ")";
    document.getElementById("color3").innerText = "" + randomColor ;
    fourthColor();
}
function fourthColor(){
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 11)/10;
    randomColor = document.getElementById("four").style.backgroundColor = "rgba" + "(" + one + "," + two + "," + three + "," + four + ")";
    document.getElementById("color4").innerText = "" + randomColor ;
    fivththColor();
}
function fivththColor(){
    let one = Math.floor(Math.random() * 256);
    let two = Math.floor(Math.random() * 256);
    let three = Math.floor(Math.random() * 256);
    let four = Math.floor(Math.random() * 11)/10;
    randomColor = document.getElementById("five").style.backgroundColor = "rgba" + "(" + one + "," + two + "," + three + "," + four + ")";
    document.getElementById("color5").innerText = "" + randomColor ;
}

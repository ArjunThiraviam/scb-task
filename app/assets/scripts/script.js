let values = {};
var row = document.querySelectorAll(".row");
var col = document.getElementsByClassName("col");
var col = document.getElementsByClassName("col");
var selectedRow, selectedCol;
var cleaner = document.querySelector(".vaccum-cleaner");
var leftBtn = document.getElementById("left");
var rightBtn = document.getElementById("right");
var moveBtn = document.getElementById("move");
var xValue = document.getElementById("x-pos").value;
var yValue = document.getElementById("y-pos").value;
var facing;


function place(x, y, f) {

    values.x = x;
    values.y = y;
    values.f = f;
    console.log(values);
    selectedRow = row[5 - y];
    selectedCol = col[(4 -y) * 5 + x];
    for (let i = 0; i < 25; i++) {
        col[i].classList.remove("vaccum-cleaner", "cleaned");
    }
    selectedCol.classList.add("vaccum-cleaner", "cleaned");
    rotateImage();
    document.getElementById("result-display").style.display = "none";
}

function move() {
    if (values.x < 5 && values.x >= 0 && values.y < 5 && values.y >= 0) {
        if (values.f == "NORTH") {
            if (values.y < 4) {
                values.y++;
            }
        }
        if (values.f == "SOUTH") {
            if (values.y > 0) {
                values.y--;
            }
        }
        if (values.f == "EAST") {
            if (values.x < 4) {
                values.x++;
            }
        }
        if (values.f == "WEST") {
            if (values.x > 0) {
                values.x--;
            }
        }
    }
    selectedRow = row[4 - values.y];
    selectedCol = col[(4 - values.y) * 5 + values.x];
        for (let i = 0; i < 25; i++) {
            col[i].classList.remove("vaccum-cleaner");
        }
        selectedCol.classList.add("vaccum-cleaner", "cleaned");
        document.getElementById("result-display").style.display = "none";
}
function left() {
    function setValue() {
        if (values.f == "NORTH") {
            return (values.f = "WEST");
        }
        if (values.f == "WEST") {
            return (values.f = "SOUTH");
        }
        if (values.f == "SOUTH") {
            return (values.f = "EAST");
        }
        if (values.f == "EAST") {
            return (values.f = "NORTH");
        }
    }
    document.getElementById("result-display").style.display = "none";
    setValue();
    rotateImage();
}
function right() {
    function setValue() {
        if (values.f == "WEST") {
            return (values.f = "NORTH");
        }
        if (values.f == "SOUTH") {
            return (values.f = "WEST");
        }
        if (values.f == "EAST") {
            return (values.f = "SOUTH");
        }
        if (values.f == "NORTH") {
            return (values.f = "EAST");
        }
    }
    document.getElementById("result-display").style.display = "none";
    setValue();
    rotateImage();
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        move();
    }
    
    else if (e.keyCode == '37') {
        left();
    }
    else if (e.keyCode == '39') {
        right();
    }

}

leftBtn.onclick =  left;

rightBtn.onclick = right;

moveBtn.onclick = move;


function rotateImage() {
    for (let i = 0; i < 25; i++) {
        if (values.f == "SOUTH") {
            col[i].style.transform = 'rotate(180deg)';
        }
        if (values.f == "EAST") {
            col[i].style.transform = 'rotate(90deg)';
        }
        if (values.f == "WEST") {
            col[i].style.transform = 'rotate(-90deg)';
        }
        if (values.f == "NORTH") {
            col[i].style.transform = 'rotate(0deg)';
        }
    }
}
// place(0, 0, "NORTH");

function placeRobo() {
    xValue = parseInt(document.getElementById("x-pos").value);
    yValue = parseInt(document.getElementById("y-pos").value);
    facing = document.getElementById("facing").value;
    console.log(xValue, yValue, facing);
    place(xValue, yValue, facing);
    document.getElementById("result-display").style.display = "none";
}

function report() {
    if(values.x !== undefined &&  values.y !== undefined ) {
        document.getElementById("x-val").innerHTML = values.x;
        document.getElementById("y-val").innerHTML = values.y;
        document.getElementById("facing-val").innerHTML = values.f;
        document.getElementById("result-display").style.display = "block";
    }

}

function test1() {
    place(0,0,"NORTH");
    move();
    report();
}

function test2() {
    place(0,0,"NORTH");
    left();
    report();
}

function test3() {
    place(1,2,"EAST");
    move();
    move();
    left();
    move();
    report();
}
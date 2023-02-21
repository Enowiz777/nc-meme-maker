
/*
// begin path will seperate the batch of editing.

ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();

ctx.beginPath();
ctx.rect(350,350,100,100);
ctx.rect(450,450,100,100);
ctx.fillStyle = "red";
ctx.fill();


// process is imperative which means you have to do every single move.

// rect is also the shortcut.


Move the painting brush to certain locations. (x and y)


// move the brush to coordinate (50, 50)
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
ctx.fill();
//ctx.fill();



// draw a house using the functions you learned.

// two side walls
ctx.fillRect(200,200,50,200);
ctx.fillRect(400,200,50,200);

//door

// stroke Rect only shows the outline or a border.
ctx.lineWidth = 2;
ctx.strokeRect(300,300, 50,100);

// ceiling
ctx.fillRect(200,200,200, 20);

// create a triangle roof
ctx.lineWidth = 2;
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
// you need .stroke() function to see the line drawn with .lineTo()
ctx.stroke()
// ctx.fill();



// create human body

ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

// last two var: starting and last angle of the circle.

ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
ctx.fill();


// onClick event and get the coordinate to draw a line to that location.
// As you do some testing, you know that offsetX and offsetY attributes are the one that is giving the coordinate of the click event.
// click the first line, it doesn't draw the line. We can add moveTo.


ctx.lineWidth = 2;


const colors = [
    "#ff3838",
    "#ffb8b8",
    "#c56cf0",
    "#ff9f1a",
    "#fff200",
    "#32ff7e",
    "#7efff5",
]

function onClick(event) {
    ctx.beginPath();
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
canvas.addEventListener("mousemove", onClick);
*/

/*
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth =2;

ctx.moveTo(200,200);
ctx.lineTo(400,400);
ctx.stroke();


let isPainting = false;

// Call move to whenever the user move the pen. 
// onMove will keep moving the pen. When the user put the mousedown, it will make the isPainting true and will trigger lineTo() and .stroke() functions.
function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);

// problem: when the user goes outside the canvase, onMouseUp() event never get fired.

// fix

canvas.addEventListener("mouseleave", cancelPainting);
+
*/

// create an input for the thickness of pen.


// buttons
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

const colorOptions = 
Array.from(
    document.getElementsByClassName("color-option")
    );
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

// Constant variables
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;


function stokeFillStyle(colorValue){
    console.log(colorValue);
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
}

// Call move to whenever the user move the pen. 
// onMove will keep moving the pen. When the user put the mousedown, it will make the isPainting true and will trigger lineTo() and .stroke() functions.
function onMove(event){
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(){
    isPainting = true;
}

function cancelPainting() {
    isPainting = false;
    ctx.beginPath();
}

function onLineWidthChange(event){
    ctx.lineWidth = event.target.value;
}

function onColorChange(event){
    // Output color information: console.log(event.target.value);
    stokeFillStyle(event.target.value);
}

function onColorClick(event){
    // get the color from the data-color.
    const colorValue = event.target.dataset.color
    stokeFillStyle(colorValue);
    color.value = colorValue;
}

function onModeClick(){
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else {
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

function onCanvasClick(){
    if(isFilling){
        // create a new rectangle or square the size of the canvas and fill it with the current color
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    }
}

function onDestroyClick() {
    // Fill in the rectangle with white.
    ctx.fillStyle ="white";
    ctx.fillRect = (0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

canvas.addEventListener("click", onCanvasClick);
destroyBtn.addEventListener("click", onDestroyClick);

// create event listener to the input change thickness change.
lineWidth.addEventListener("change", onLineWidthChange);

//Issue: the previous line is changing the tickness
// You have to begin a new path when the user is moving the mouse. when the user finish moving the mouse we then begin the path. or when the user finishes the painting.

// Issue: we are going one by one and we are moving the thickness. If you want to you can change the steps. you just need to set the attribute called steps.

// Add a color EventListener
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick))
// console log HTML collections.
// Go through each divs and add an event listeners.
// console.log(colorOptions);
// ArrayLike object and is not array. You have to construct Array from the div.
modeBtn.addEventListener("click", onModeClick);
eraserBtn.addEventListener("click", onEraserClick);
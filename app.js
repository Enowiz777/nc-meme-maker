const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);

/*
Experiment
 

// fill all rectangles together when the .fill() function gets called.

ctx.rect(50,50,100,100);
ctx.rect(150,150, 100,100);
ctx.rect(250,250,100,100);
ctx.fill();



// This would fill all 3 squares created.
ctx.rect(150,150,100,100);
ctx.rect(250,250, 100,100);
ctx.fill();
ctx.rect(350,350,100,100);
ctx.fillStyle = "red";
ctx.fill();


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

*/
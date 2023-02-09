const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// Starting location (two coordinate)
// Last two creates width and heights.
// ctx.fillRect(50, 50, 100, 200);

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

*/
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


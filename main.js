function preload(){
}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250)
video=createCapture(VIDEO);
video=createCapture(VIDEO2);
video=createCapture(VIDEO3);
video=createCapture(VIDEO4);
video.hide()
}

function draw(){
image (video,230,150,220,200);

fill (0,128,0);
stroke (0,128,0);
rect (90,40,460,20);

rect (9,40,460,20);
}


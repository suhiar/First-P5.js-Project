function preload(){
}

function setup(){
    video = createCapture(VIDEO)
    video.hide()

    canvas=createCanvas(550,400)
    canvas.center()

}

function take_snapshot(){
    save("file.png")
}

function draw(){
    image(video,130,95,300,220)

    circle(60, 60, 80)
    fill(173, 216, 230)
    rect(100, 30, 350, 50, 20);
    circle(490, 60, 80)

    rect(40, 100, 50, 210, 20);

    circle(490, 350, 80)
    rect(100, 330, 350, 50, 20);
    circle(60, 350, 80)

    rect(470, 100, 50, 210, 20);
}

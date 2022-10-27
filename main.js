function preload() {

}

function setup() {
    video = createCapture(VIDEO); //displaying webcam live view on the screen
    video.size(500,450);

    canvas = createCanvas(800,600); //creating canvas
    canvas.position(650,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses); //turning on posenet??
}   

function draw() {
    background('#ADD8E6');
}

function modelLoaded() {
    console.log("PoseNet is initialized!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results); //saying that if poseNet identifies at least 1 of 17 key points on human body, then it will show list of them.
    }
}
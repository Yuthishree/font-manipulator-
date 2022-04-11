rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#43b561');
    textSize(difference);
    fill('#eb4034');
    text('Yuthishree',50,400)
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!!');
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
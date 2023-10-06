music1 = "";
music2 = "";

left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;


function preload()
{   
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}
   

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.position(400,200);
    
    console.log("works");

    video = createCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}


function draw()
{
    image(video,0,0,600,400);
}

function modelLoaded()
{
    console.log("Activation successful");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;

        
    }
    
}
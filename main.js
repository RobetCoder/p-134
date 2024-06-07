Status ="" ;
sound = "";
objects = [];
function preload(){
video = createCapture(VIDEO);
canvas = createCanvas(380,380);
video.hide();
}
function draw(){
    if (Status != ""){
        objectDetector.detect(video, gotResults);
        for (i = 0,i<objects.length ,i++ ;)
        
            {
            document.getElementById("status").innerHTML = "Status: Identifying Objects";
            document.getElementById("objects").innerHTML = "Number of Objects"+objects.length;
        }
    }
}
function gotResults(error, results){
    if (error){
        console.log(error);
    }
    
        console.log(results);
        objects = results;
}
function ModelLoaded(){
    console.log("ModelLoaded");
    if(Status == false){
        play.sound();
    }
}
function Start(){
    objectDetector = ml5.objectDetector('cocossd',ModelLoaded);
    document.getElementById("status") = "Status: Identifying Objects"
}
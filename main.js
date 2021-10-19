function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/U_haafhGF/model.json", modelloaded) 
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video,gotresult);
}

function modelloaded(){
    console.log("Moedel has loaded !!!!!");
}

function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("result_name").innerHTML = result[0].label;
        document.getElementById("result_Accuracy").innerHTML = result[0].confidence.toFixed(2)
    }

    }
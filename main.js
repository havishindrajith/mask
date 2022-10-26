//https://teachablemachine.withgoogle.com/models/Bsdpubu3E/model.json
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bsdpubu3E/model.json', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded');
}

function draw() {
    image(video, 0, 300, 3000);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        prompt("error");
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}
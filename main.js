function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('teachablemachine.withgoogle.com/models/1LDwSBSJ_/model.json', modelReady);
   
}

function modelReady(){
    classifier.classify(gotResults);
}
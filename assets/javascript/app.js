var config = {
    apiKey: "AIzaSyAaRxsoX7zOJfKCrzT5CDecaoK6W3M-Bjk",
    authDomain: "train-scheduler-9faa8.firebaseapp.com",
    databaseURL: "https://train-scheduler-9faa8.firebaseio.com",
    projectId: "train-scheduler-9faa8",
    storageBucket: "",
    messagingSenderId: "538619980575"
  };

  firebase.initializeApp(config);

  var database = firebase.database()

  console.log(database)

var trainName = "";
var trainDestination = "";
var trainFrequency = "";
var nextArrival = "";
var minutesAway = "";
var currentTime = moment().format("HH-mm");
console.log(currentTime)


$('.submit').on("click", function(){
    trainName = $('#train-name').val().trim();
    trainDestination = $('#destination').val().trim();
    trainFrequency = $("#frequency").val().trim();  
    // Figure out calculation for when the next train is coming

    //Figure out the minutes away calculation using moment.js
    
    console.log(trainName, trainDestination, trainFrequency);    
    

})
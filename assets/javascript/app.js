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
var currentTime = moment().format("HH:mm");
console.log(currentTime)


$('.submit').on("click", function () {
  trainName = $('#train-name').val().trim();
  trainDestination = $('#destination').val().trim();
  trainFrequency = $("#frequency").val().trim();
  firstTrainInput = $("#first-train-time").val().trim();
  var firstTrainTime = moment().format(firstTrainInput, "HH:mm");

  var newTrain = {
    trainName,
    trainDestination,
    trainFrequency,
    firstTrainTime
  }
  database.ref().push(newTrain)


})

database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().trainName;
  var trainDestination = childSnapshot.val().trainDestination;
  var trainFrequency = parseInt(childSnapshot.val().trainFrequency);
  var firstTrainTime = childSnapshot.val().firstTrainTime;
  var timeConverted = moment(firstTrainTime, "HH:mm");
  var diffTime = moment().diff(moment(timeConverted), "minutes")
  var tRemainder = diffTime % trainFrequency;
  var minutesAway = trainFrequency - tRemainder;
  var nextArrival = moment().add(minutesAway, "minutes");

  var newRow = $(".train-table").append(
    $("<tr>"),
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFrequency),
    `<td>${moment(nextArrival).format("hh:mm a")}</td>,
    <td>${minutesAway}</td>`

  )
})

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
  }
}

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function() {
    alert("Cleaning in progress...");
  }
}

var houseKeeper1 = new HouseKeeper(12, "James", ["bedroom"]);

HouseKeeper1.clean();

function anotherAddEventListener(typeOfEvent, callback) {

  // Detect Event Code...
  
  var eventThatHappened = {
    eventType: "keypress",
    key: "p";
    durationOfKeyoress: 2
  }

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }

}

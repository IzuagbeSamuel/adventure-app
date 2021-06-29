Describe Places():

Test: 'Add properties to Places Constructor'
Code: function Phone() {
this.adventure = {};
this.currentId = 0;
}

Test: 'Assign ID'
Code: Places.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Test: 'Add Place'
Code: Places.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.adventures[place.id] = place;
};


Describe Adventure():

Test: 'Add properties to the adventure function'
Code: function Adventure(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

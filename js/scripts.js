// Business Logic For Places
function Places() {
  this.adventures = {};
  this.currentId = 0;
}

Places.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Places.prototype.addPlace = function (place) {
  place.id = this.assignId();
  this.adventures[place.id] = place;
};

Places.prototype.findPlaces = function (id) {
  if (this.adventures[id] != undefined) {
    return this.adventures[id];
  }
  return false;
};

Places.prototype.deletePlaces = function (id) {
  if (this.adventures[id] === undefined) {
    return false;
  }
  delete this.adventures[id];
  return true;
};

Places.prototype.addBookList = function (place) {
  const list = document.getElementById('adventure-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${place.location}</td>
  <td>${place.landmark}</td>
  <td>${place.date}</td>
  <td>${place.notes}</td>
  <td><a href="#" class="danger">X</a></td>
  `;
  list.appendChild(row);
};

Places.prototype.showAlert = function (message, className) {
  const div = document.createElement('div');
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector('.container');
  const form = document.querySelector('#form');
  container.insertBefore(div, form);
  setTimeout(() => document.querySelector('.alert').remove(), 4000);
};

Places.prototype.clearFields = function () {
  document.getElementById('location').value = '';
  document.getElementById('landmark').value = '';
  document.getElementById('date').value = '';
  document.getElementById('message').value = '';
};

// Business Logic For Adventures
function Adventure(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

// Display Adventure
document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const location = document.getElementById('location').value;
  const landmark = document.getElementById('landmark').value;
  const date = document.getElementById('date').value;
  const message = document.getElementById('message').value;
  if (location === '' || landmark === '' || date === '' || message === '') {
    Places.showAlert('Please fill in all fields', 'danger');
  } else {
    const place = new Adventure(location, landmark, date, message);
    Places.addBookList(place);
    Places.showAlert('Place Added', 'success');
    Places.clearFields();
  }
});

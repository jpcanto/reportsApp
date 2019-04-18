var config = {
    apiKey: "AIzaSyBOUSi4PnpCCAL3FnVjBz3E_IZQk6d3wVk",
    authDomain: "reportswebapp.firebaseapp.com",
    databaseURL: "https://reportswebapp.firebaseio.com",
    projectId: "reportswebapp",
    storageBucket: "reportswebapp.appspot.com",
    messagingSenderId: "592613138489"
  };
  firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
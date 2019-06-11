var config = {
    apiKey: "AIzaSyBOUSi4PnpCCAL3FnVjBz3E_IZQk6d3wVk",
    authDomain: "reportswebapp.firebaseapp.com",
    databaseURL: "https://reportswebapp.firebaseio.com",
    projectId: "reportswebapp",
    storageBucket: "reportswebapp.appspot.com",
    messagingSenderId: "592613138489"
  };
  firebase.initializeApp(config);

document.addEventListener('DOMContentLoaded', () => {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems);
  });
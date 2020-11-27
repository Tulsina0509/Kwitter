 
 var firebaseConfig = {
      apiKey: "AIzaSyAdpAPpkWq94y9DOKDjWhNnVLyCkWOl5FI",
      authDomain: "kwitter-5510a.firebaseapp.com",
      databaseURL: "https://kwitter-5510a.firebaseio.com",
      projectId: "kwitter-5510a",
      storageBucket: "kwitter-5510a.appspot.com",
      messagingSenderId: "833504719727",
      appId: "1:833504719727:web:3d3006f3f71ba4ed67ae9a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

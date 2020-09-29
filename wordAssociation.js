var firebaseConfig = {
    apiKey: "AIzaSyBhbP43SzVH8GzhOEitfjoDZBAFFR73nB8",
    authDomain: "project1-eb4f0.firebaseapp.com",
    databaseURL: "https://project1-eb4f0.firebaseio.com",
    projectId: "project1-eb4f0",
    storageBucket: "project1-eb4f0.appspot.com",
    messagingSenderId: "807281379794",
    appId: "1:807281379794:web:ed3ee104dc1d2fd133200b"
  };
  // Initialize Firebase


firebase.initializeApp(firebaseConfig);

localStorage.clear;

let uuid = localStorage.getItem("uuid");


document.getElementById("usernameButton").addEventListener("click", function(){
    console.log(document.getElementById("username").value);
    if(document.getElementById("username").value != ""){
        uuid = `uuid-${document.getElementById("username").value}`;
        localStorage.setItem("uuid", uuid);
        let randomTopic = topics[Math.floor(Math.random() * topics.length)];
        var newTopic = document.createElement("div");
        var topicText = document.createTextNode(uuid);
        document.getElementById("topicArea").appendChild(newTopic.appendChild(topicText));
      }
});

let topics = ["Beers", "Colleges", "Quarterbacks", "Countries", "States", "Basketball Players", "Programming Languages", "Animals",
"Dog Breeds", "Cat Breeds", "Fruits", "Vegetables", "Meats", "Bash Commands"];


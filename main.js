// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-DpFQQOs4-BbXbwNm27mNae2kvqqpeaU",
    authDomain: "instant-edu-91f91.firebaseapp.com",
    databaseURL: "https://instant-edu-91f91-default-rtdb.firebaseio.com",
    projectId: "instant-edu-91f91",
    storageBucket: "instant-edu-91f91.appspot.com",
    messagingSenderId: "234334004783",
    appId: "1:234334004783:web:00d00b7aced7adbd1b08da"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);







function developer(){
    window.location = "developer.html";
}

function home(){
    window.location = "index.html";
}


function about(){
    window.location = "about.html";
}

function signup(){
    window.location = "signup.html";
}

function chatpage(){
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("password").value;
    level = document.getElementById("level").value;
    localStorage.setItem("name", user_name);    
    localStorage.setItem("password", password);
    localStorage.setItem("level", level);
    window.location = "chatpage.html";
}

function post(){
    document.getElementById("result").innerHTML = "<br><br><h2>Title:</h2><br><input type='text' style='float: left; color: black; width: 80%; border-style: solid; border: white 1px; border-radius: 5px;' id='title'><br><br><h2>Subject:</h2><br><input type='text' style='float: left; color: black; width: 80%; border-style: solid; border: white 1px; border-radius: 5px;' id='subject'><br><br><h2>Post:</h2><br><input type='text' style='float: left; color: black; width: 80%; border-style: solid; border: white 1px; border-radius: 5px;' id='post'><br><br><br><br><center><button onclick='submit()' class='btn-login' style='width: 40%;'>Submit</button</center>"
}

function submit(){
    var child = "Post";
    title = document.getElementById("title").value;
    subject = document.getElementById("subject").value;
    description = document.getElementById("post").value;
    localStorage.setItem("title", title);    
    localStorage.setItem("subject", subject);
    localStorage.setItem("post", desription);
    
    document.getElementById("result").innerHTML = "";
  
    firebase.database().ref("/Posts").child(child).push({
        name : user_name,
        topic : subject,
        message : description
  });

  
document.getElementById("result").innerHTML = "";


function getData() {  firebase.database().ref("/Posts").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    firebase_message_id = childKey;  
    message_data = childData;
   //Start code
   document.getElementById("output").innerHTML += "<br><h2>"+user_name+"</h2><br><h2>"+subject+"</h2><br><h3>"+description+"</h3><br>";
   //End code
   });});}
getData();
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("password");
    localStorage.removeItem("level");

    window.location = "index.html";
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFnBs_ojnBgKzml6zUAgLtSDy_V2SLc3s",
    authDomain: "projectn-26a1a.firebaseapp.com",
    databaseURL: "https://projectn-26a1a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "projectn-26a1a",
    storageBucket: "projectn-26a1a.appspot.com",
    messagingSenderId: "323261896850",
    appId: "1:323261896850:web:bf542648f8cfb3f7382e4b"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user");
document.getElementById("user_name").innerHTML="Welcome "+username;

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  redirectToRoomName(room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  document.getElementById("output").innerHTML="<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'> #"+Room_names+"</div> <hr>";
  //End code
  });});}
getData();
function redirectToRoomName(name){
    localStorage.setItem("roomname", name)
     window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user");
      localStorage.removeItem("roomname");
      window.location="index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyDoaMOFnh2imMAHimh0njQ-qBnnAdbEwOM",
    authDomain: "kwitter-8f27e.firebaseapp.com",
    databaseURL: "https://kwitter-8f27e-default-rtdb.firebaseio.com",
    projectId: "kwitter-8f27e",
    storageBucket: "kwitter-8f27e.appspot.com",
    messagingSenderId: "185115968653",
    appId: "1:185115968653:web:cffa76ec49c352311c4ec4"
  };
  
  
  firebase.initializeApp(firebaseConfig);



function addRoom() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ 
  purpose: "Adding room name"

})
localStorage.setItem("room_name", room_name); 

window.location = "chat_page.html"
}



  function getData(){
    
  firebase.database ().ref ("/") . on ('value',function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach (function (childsnapshot) {childkey = childSnapshot.keychildsnapshot.key;

  room_names = childkey;
//Start code
row = "‹div class = 'room name' id = "+ Room_names + "onclick='redirectToRoomName'(this.id)'>#" +Room_names+ "</div><hr></hr>"
//End code
});});}
getData();


function logout() {
  window.location = "index.html";
}


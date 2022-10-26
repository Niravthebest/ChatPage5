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


function back() {
    
window.location = "chat_room.html";
}


function logout() {
  window.location = "index.html";
}


function send()
    {
      msg = document.getElementById("talk_here").value;
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
    
      document.getElementById("talk_here").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value',
function snapshot() {document.getElementById("output").innerHTML="";
snapshot.forEach(function(childSnapshot) {childKey=childSnapshot.key;childData = 
childSnapshot.val();if(childKey!="purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  //Start code
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
  like_button = "<button class='btn btn-warning' id='>"+firebase_message_id+"'value='"+like+"' onclick='UpdateLike(this.id)'>"
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like(s): "+like+"</span></button><hr>"
  row = name_with_tag+message_with_tag+like_button+span_with_tag;
  //End code
}});});}
getData();


function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes  
     });

}
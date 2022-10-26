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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}




//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyCMr0IRreECQRpUyQ6LAdpTWmJk7pwj_bg",
        authDomain: "classtest-cc74b.firebaseapp.com",
        projectId: "classtest-cc74b",
        storageBucket: "classtest-cc74b.appspot.com",
        messagingSenderId: "362881426500",
        appId: "1:362881426500:web:fd24086beb607472088811",
        measurementId: "G-RXGLQ3FQHY"
      };
      

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
       like = message_data['like'];
       name_with_tage = "<h4>" + name + "img class='user_tick' src='tick.png'><h/4>";
       message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
       like_button = "<button class='btn btn-warning' id=" + firebase_message_id+ " value=" +like+" onclick='updateLike(this.id)'>";
       span_with_tag= "<span class = 'glyphicon glyphicon-thumbs-up'> Likw: "+ like +"</span></button><hr>";

       row = name_with_tag + message_with_tag + like_button + span_with_tag;
       document.getElementById("ouput").innerHTML += row;
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updates_likes = Number(likes) + 1;
      console.log(updates_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updates_likes
      });
}

function changetheme ()
{
  document.getElementById("body").style.backgroundColor="white";
  
  document.getElementById("nameheading").style.backgroundColor="darkorange";
}
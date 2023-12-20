function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.hrml";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML
        Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
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
})};
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
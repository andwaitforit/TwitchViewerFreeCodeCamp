function twitchData(streamers) {
    var api = "https://wind-bow.glitch.me/twitch-api/streams/";
    var callback = "?callback=?";
    var url = api + streamers + callback;
    console.log(url);
    $.getJSON(url).done(function (data){
        var offlineHtml = document.getElementById('offlineResults');
        var onlineHtml = document.getElementById('onlineResults');
    
if (data.stream){

    console.log("Online");


    onlineHtml.innerHTML += "<div class ='online'>" + "<a href='" + data.stream.channel.url + "' target='_blank'>" + "<p2 class='lolTitle'>" + data.stream.channel.game + " is streaming</p2>" + "</a><br>"+"<img src='" + data.stream.preview.medium + "'alt = 'User logo' class='user-logo'>"+"<br></div>";
    /* var onlinePic = document.createElement("img");
        onlinePic.src =  data.stream.preview.medium;
  onlineHtml.innerHTML += onlinePic;*/


    console.log(onlineHtml);
    console.log(data.stream.preview.medium);
    console.log(data.stream.channel.url);
    
} else { console.log("offline");

 offlineHtml.innerHTML += "<div class='offline'> <br><a href=https://www.twitch.tv/" + streamers + ">" + "<p2 class='fccTitle'>"+ streamers+ "'s stream is offline </p2>"+"</a></div>";

console.log(offlineHtml);



$(offlineHtml).appendTo("#onlineResults");
$(onlineHtml).appendTo("#onlineResults");
}
    })

    }

    /*example api call
    https://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?
    */
function showOnline(){
var x = document.getElementById("offlineResults");
if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showOffline(){
var x = document.getElementById("onlineResults");
if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




    //Opens twitch channel in new window on button click
$(document).ready(function() {
    $('#fcc').on("click", function() {
        var siteUrl = "https://www.twitch.tv/freecodecamp"
        console.log("Hello");
        console.log(siteUrl);

        window.open(siteUrl)
    });
    $('#lol').on("click", function() {
        var siteUrl = "https://www.twitch.tv/imaqtpie"
        console.log("Hello");
        console.log(siteUrl);

        window.open(siteUrl)
    });
    $('#tpp').on("click", function() {
        var siteUrl = "https://www.twitch.tv/twitchplayspokemon"
        console.log("Hello");
        console.log(siteUrl);

        window.open(siteUrl)
    });



   
 
 var streamers = ["Freecodecamp","Imaqtpie","Twitchplayspokemon","tsm_myth","drdisrespectlive"];
 streamers.forEach(function(val){
    twitchData(val);
 })

    });
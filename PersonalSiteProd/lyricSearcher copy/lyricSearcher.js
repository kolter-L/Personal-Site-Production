console.log("testing testing 123");


$(document).ready(() => {

    var searchButton = document.getElementById("search");
    const lyricsDiv = $('.lyrics');

    searchButton.addEventListener("click", function() {

        var artist = $('.artist').val();
        var song = $('.song').val();

        var endPoint = `https://api.lyrics.ovh/v1/${artist}/${song}`;


        $.get(endPoint).then((data) => {

            const lyricsText = data.lyrics;


            lyricsDiv.append(lyricsText);

            }).catch((e) => {

                alert("ERROR: This Endpoint Does not Exist: " + endPoint);

        })
    });
})



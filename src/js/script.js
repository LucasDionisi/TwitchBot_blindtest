function run() {
    const scores = Scoreboard.getInstance().getScores();
    const songlist = Songlist.getInstance().getSonglist();

    var tabScore = $('table#scores');
    scores.forEach(score => {
        var elem = `<tr><td>${score.user}</td><td>${score.points}</td></tr>`;
        tabScore.append(elem);
    });

    var tabSonglist = $('table#songlist');
    var i = 1;
    songlist.forEach(song => {
        var elem = `<tr><td>${i}</td><td>${song.artist}</td><td>${song.title}</td><td>${song.points}</td><td><img class="icon" src="resources/icons/play.svg" alt="start song"></td><td><img class="icon" src="resources/icons/edit.svg" alt="start song"></td><td><img class="icon" src="resources/icons/delete.svg" alt="start song"></td></tr>`;
        i++;
        tabSonglist.append(elem);
    });


    $("#addSongBtn").on('click', function () {
        var fields = ["#artistInput", "#titleInput", "#pointsInput"];
        var isValid = true;

        for (var i = 0; i < fields.length; i++) {
            var fieldValue = $(fields[i]).val();
            if (fieldValue === "") {
                $(fields[i]).css("border-color", "red");
                isValid = false;
            } else {
                $(fields[i]).css("border-color", "");
            }
        }

        if (!isValid) {
            alert("Veuillez remplir tous les champs.");
        } else {
            console.log("Artiste: " + $("#artistInput").val());
            console.log("Titre: " + $("#titleInput").val());
            console.log("Points: " + $("#pointsInput").val());
        }
    });

    $("input").on("input", function () {
        if ($(this).val() !== "") {
            $(this).css("border-color", "");
        }
    });
}

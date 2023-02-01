function run() {
    refreshSongList();
    refreshScoreboard();
}

function refreshSongList() {
    const songlist = Songlist.getInstance().getSonglist();

    var tabSonglist = $('div#songlist table tbody');
    tabSonglist.empty();

    songlist.forEach((song, index )=> {
        var elem = `
            <tr>
                <td>${index+1}</td>
                <td>${song.artist}</td>
                <td>${song.title}</td>
                <td>${song.points}</td>
                <td><img class="icon play" src="resources/icons/play.svg" title="GO" alt="start song"></td>
                <td><img class="icon edit" src="resources/icons/edit.svg" title="edit" alt="edit a song"></td>
                <td><img class="icon delete" src="resources/icons/delete.svg" title="supprimer" alt="start song" data-index="${index}">
                </td>
            </tr>
        `;
        tabSonglist.append(elem);
    });

    $('img.delete').on('click', function () {
        Songlist.getInstance().removeSong(this.dataset.index);
        refreshSongList();
    })
}

function refreshScoreboard() {
    const scores = Scoreboard.getInstance().getScores();
    
    var tabScore = $('div#scores table tbody');
    tabScore.empty();

    scores.forEach(score => {
        var elem = `<tr><td>${score.user}</td><td>${score.points}</td></tr>`;
        tabScore.append(elem);
    });
}

$('#addSongBtn').on('click', function () {
    var fields = ['#artistInput', '#titleInput', '#pointsInput'];
    var isValid = true;

    for (var i = 0; i < fields.length; i++) {
        var fieldValue = $(fields[i]).val();
        if (fieldValue === '') {
            $(fields[i]).css('border-color', 'red');
            isValid = false;
        } else {
            $(fields[i]).css('border-color', '');
        }
    }

    if (!isValid) {
        alert('Veuillez remplir tous les champs.');
    } else {
        const artist = $('#artistInput').val();
        const title  = $('#titleInput').val();
        const points = $('#pointsInput').val();

        Songlist.getInstance().addSong(artist, title, points);
        refreshSongList();
    }
});

$('input').on('input', function () {
    if ($(this).val() !== '') {
        $(this).css('border-color', '');
    }
});

$('img#hide').on('click', function () {
    $("#songlist table").toggleClass("blur");
});
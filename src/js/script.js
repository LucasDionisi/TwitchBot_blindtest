
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



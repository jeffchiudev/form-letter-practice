$(document).ready(function() {
    $("#letterForm").submit(function(event) {
        const nameInput = $("input#name").val();

        $(".name").text(nameInput);

        $("#filled-letter").show();
        
        event.preventDefault();
    });
});
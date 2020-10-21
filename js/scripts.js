$(document).ready(function() {
    $("#letterForm").submit(function(event) {
        $(".name").append("blah blah");
        $("#filled-letter").show();
        event.preventDefault();
    });
})
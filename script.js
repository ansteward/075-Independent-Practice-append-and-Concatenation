$(".to-pack-button").click( function() {
let thing = $(".to-pack-input").val();
$(".packing-list").append("<li>" + thing + "</li>");

});
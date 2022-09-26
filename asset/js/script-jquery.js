
// open menu responsive
$(".open-menu").on("click", function() {
    $(".responsive-menu").show("slow")
})

// close menu responsive
$(".close-responsive-menu").on("click", function() {
    $(".responsive-menu").hide("slow")
})

// close menu when scroll
$(".responsive-menu .item").on("click", function() {
    $(".responsive-menu").hide("slow")
})
let i = 0
function change(inc) {
    i = inc
    if (i >= $(".m").length) {
        i = 0;
    }
    $(".m").hide()
    $("#" + i).slideDown(1000)
}
change(0)
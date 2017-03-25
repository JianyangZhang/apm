export function afterFinalMount() {
    $("#network").css("height", $(window).height() - 30);
    $("#right_click_menu").hide();

    $("#network").mousedown(function(e) {
        if (e.button == 2) {
            document.getElementById("network").oncontextmenu = function() {
                return false;
            };
            $("#right_click_menu").css("left", e.pageX + 1);
            $("#right_click_menu").css("top", e.pageY + 1);
            $("#right_click_menu").fadeIn(10);
        }
    });

    $("body").on("click", function() {
        $("#right_click_menu").fadeOut(10);
    });
}

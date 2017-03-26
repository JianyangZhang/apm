export function didUpdate(isLocked: boolean) {
    $("#right_click_menu").hide();
    $("#network").mousedown(function(e) {
        if (e.button == 2 && !isLocked) {
            document.getElementById("network").oncontextmenu = function() {
                return false;
            };
            $("#right_click_menu").css("left", e.pageX + 1);
            $("#right_click_menu").css("top", e.pageY + 1);
            $("#right_click_menu").show();
        } else if (e.button == 2 && isLocked) {
            $("#right_click_menu").hide();
            document.getElementById("network").oncontextmenu = function() {
                return true;
            };
        }
    });
}

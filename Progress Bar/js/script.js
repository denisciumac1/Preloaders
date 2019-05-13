$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "aqua",
        line_width: 17,
        height: "250px",
        width: "250px",
        percent: 0,
        counter_clockwise: false,
        starting_position: 25
    }).circularProgress('animate', 90, 2000);
});

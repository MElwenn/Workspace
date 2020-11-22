$(document).ready(() => {
    $(".desk").click((event) => {
        let desk = $(event.target);
        if (desk.hasClass("free")) {
            desk.removeClass("free");
            desk.addClass("reserved-by-me");
        } else if (desk.hasClass("reserved-by-me")) {
            desk.removeClass("reserved-by-me");
            desk.addClass("free");
        }
    });
});
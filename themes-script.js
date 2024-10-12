jQuery(document).ready(function($) {
    // Hides
    $(".nav-resp").click(function() {
        $("#arch-menu").toggleClass("sidblock");
        $(".nav-resp").toggleClass("active");
    });

    $(".nav-advc").click(function() {
        $("#advc-menu").toggleClass("advcblock");
        $(".nav-advc").toggleClass("dactive");
    });

    $(".search-resp").click(function() {
        $("#form-search-resp").toggleClass("formblock");
        $(".search-resp").toggleClass("active");
    });
});

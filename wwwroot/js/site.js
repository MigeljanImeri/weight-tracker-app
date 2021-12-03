var currentURI = document.baseURI.substring(document.baseURI.lastIndexOf("/") + 1)

document.addEventListener("DOMContentLoaded", function () {
    calculateActiveStatus();
});

function calculateActiveStatus() {
    $(".nav-bar-element-link").removeClass("active");
    $(".nav-bar-element-link").each(function() {
        if ($(this).attr("href") == currentURI) {
            console.log($(this).attr("href") + " has right stuff");
            $(this).addClass("active");
        }
    });    
}
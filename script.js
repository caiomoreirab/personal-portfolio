document.addEventListener("DOMContentLoaded", function() {
    var page = window.location.pathname.split("/").pop();

    var menuItems = document.querySelectorAll(".texto--menu");


    menuItems.forEach(function(item) {
        item.classList.remove("active");
    });


    menuItems.forEach(function(item) {
        var href = item.getAttribute("href");

        if (href === page) {
            item.classList.add("active");
        }
    });
});

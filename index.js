let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let ham = document.querySelector(".ham");
let cross = document.querySelector(".cross");

hamburger.addEventListener("click", function () {

    if (sidebar.style.left === "0px") {

        sidebar.style.left = "-280px";

        ham.style.display = "block";
        cross.style.display = "none";

    } else {

        sidebar.style.left = "0px";

        ham.style.display = "none";
        cross.style.display = "block";

    }

});
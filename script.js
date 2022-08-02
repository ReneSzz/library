const modalBackground = document.getElementsByClassName("bgModal");

const button = document.getElementsByClassName("button")
const closeButton = document.getElementById("close");


button[0].addEventListener('click', function(e) {
modalBackground[0].style.display = "flex";



});


closeButton.addEventListener('click', function (e) {
    modalBackground[0].style.display = "none";

});
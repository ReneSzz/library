const modalBackground = document.getElementsByClassName("bgModal");
const button = document.getElementsByClassName("button")
const closeButton = document.getElementById("close");

//  form variables. 
let title = "";
let author = ""; 
let pageNumbers = ""; 
let readOrNot = ""; 
let library = [];


function Book(title, author, pageNumbers, readOrNot) { 
   
    this.title = title; 
    this.author = author;
    this.pageNumbers = pageNumbers;
    this.readOrNot = readOrNot;
    this.info = function (){
        console.log(this.title, this.author, this.pageNumbers, readOrNot)
    }
}

let submitButton = document.getElementById("submit");

submitButton.addEventListener('click', function (e){
    i = 0;
    title = document.getElementById("bookName").value;
    author = document.getElementById("authorName").value;
    pageNumbers = document.getElementById("pageNumbers").value;
    readOrNot = document.getElementById("readOrNot").checked;
    library[i] = new Book (title, author, pageNumbers, readOrNot)
    library[i].info();

    
//closes form on submit.
modalBackground[0].style.display = "none";

});




button[0].addEventListener('click', function(e) {
modalBackground[0].style.display = "flex";



});


closeButton.addEventListener('click', function (e) {
    modalBackground[0].style.display = "none";

});
const modalBackground = document.getElementsByClassName("bgModal");
const button = document.getElementsByClassName("button")
const closeButton = document.getElementById("close");
const books = document.getElementById("books");
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


function populateLibrary (title, author, pageCount, finished){
    for (let i= 0; i < library.length; i++) {
       
    let bookCard =  document.createElement('div');
    let newBookTitle = document.createElement('h2');
    newBookTitle.innerText = library[i].title; 
    let newBookAuthor = document.createElement('p');
    newBookAuthor.innerText = library[i].author;
    let newPageCount = document.createElement('p');
    newPageCount.innerText = library[i].pageNumbers;
    let newBookRead = document.createElement('p');
    newBookRead.innerText = library[i].readOrNot;
    bookCard.classList.add('book');
    
    
    
    
    books.appendChild(bookCard);
 
    bookCard.appendChild(newBookTitle);
    bookCard.appendChild(newBookAuthor);
    bookCard.appendChild(newPageCount);
    bookCard.appendChild(newBookRead);
    
}
}






submitButton.addEventListener('click', function (e){
    i = 0;
    title = document.getElementById("bookName").value;
    author = document.getElementById("authorName").value;
    pageNumbers = document.getElementById("pageNumbers").value;
    readOrNot = document.getElementById("readOrNot").checked;
    library[i] = new Book (title, author, pageNumbers, readOrNot)
    populateLibrary(title, author, pageNumbers, readOrNot);
    i++


    
//closes form on submit.
modalBackground[0].style.display = "none";

});




button[0].addEventListener('click', function(e) {
modalBackground[0].style.display = "flex";



});


closeButton.addEventListener('click', function (e) {
    modalBackground[0].style.display = "none";

});
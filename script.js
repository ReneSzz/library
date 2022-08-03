const modalBackground = document.getElementsByClassName("bgModal");
const button = document.getElementsByClassName("button");
let closeButton = document.getElementsByClassName('close');
let bookContainer = document.getElementById('bookContainer');
const books = document.getElementById("books");
let deleteBook = document.createElement('button');
deleteBook.innerText = "Delete";
let allBooks = document.getElementsByClassName('book');
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
    if (library.length > 0 ) {
    for (let index = 0; index < library.length-1; index++) {
        allBooks[0].parentNode.removeChild(allBooks[0]);
        
    }
}
    
         
    for (let i = 0; i < library.length; i++) {
       
       
              
                
          
    let bookCard =  document.createElement('div');
    let deleteBook = document.createElement('button');
    let newBookTitle = document.createElement('h2');
    let newBookAuthor = document.createElement('p');
    let newPageCount = document.createElement('p');
      
        
 
    bookCard.setAttribute(`data-book-number`, `${i}`);
    deleteBook.innerText = "Delete";
    newBookTitle.innerText = library[i].title;
   newBookAuthor.innerText = library[i].author;
    newPageCount.innerText = `${library[i].pageNumbers} Pages`;
    let newBookRead = document.createElement('p');
    
    if (library[i].readOrNot == false) {
   newBookRead.innerText = "Not finished reading.";
   newBookRead.style.backgroundColor = "red"; }
    else {
     newBookRead.innerText = "Finished!";
     newBookRead.style.backgroundColor = "lightgreen";
    }
    newBookRead.addEventListener('click', function (e){
        if (newBookRead.innerText == "Finished!") {
         newBookRead.innerText = "Not finished reading.";
    newBookRead.style.backgroundColor = "red"; 
        }
        else if (newBookRead.innerText !== "Finished!"){
         newBookRead.innerText = "Finished!";
         newBookRead.style.backgroundColor = "lightgreen";
        }
 
     })
    // newBookRead.innerText = library[i].readOrNot;
    bookCard.classList.add('book');
    
    console.log(library);
   
   
   
    books.appendChild(bookCard);
    bookCard.appendChild(newBookTitle);
    bookCard.appendChild(newBookAuthor);
    bookCard.appendChild(newPageCount);
    bookCard.appendChild(newBookRead);
    bookCard.appendChild(deleteBook);
    
   
   
    // deleteBook.addEventListener('click', function (e){
    //     var attribute = this.parentElement.getAttribute("data-book-number");
        
    //     deleteBook.parentNode.parentNode.removeChild(deleteBook.parentNode);
    //     library.splice(attribute, 1);
    // });
    }





}






submitButton.addEventListener('click', function (e){
    
    title = document.getElementById("bookName").value;
    author = document.getElementById("authorName").value;
    pageNumbers = document.getElementById("pageNumbers").value;
    readOrNot = document.getElementById("readOrNot").checked;
    library.push(new Book (title, author, pageNumbers, readOrNot))
    populateLibrary(title, author, pageNumbers, readOrNot);

   
    


    
//closes form on submit.
modalBackground[0].style.display = "none";

});




button[0].addEventListener('click', function(e) {
modalBackground[0].style.display = "flex";



});


closeButton[0].addEventListener('click', function (e) {
    modalBackground[0].style.display = "none";

});




   


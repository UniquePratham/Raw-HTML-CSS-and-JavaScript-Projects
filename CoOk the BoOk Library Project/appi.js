console.log(("This is CoOk the bOoK Library System. This is appi.js"));
// Todos"
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view
// 4. Duplicate Books check
// 5. Search the books
// 6. Delete All books at once button

// This is OOP using Prototype & its inheritance - es5

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add methods to display prototype

// Implement the add function
Display.prototype.add = function (book) {
    // console.log("Adding to UI");
    tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    else {
        return true;
    }
}

// Implement the show function

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById("message");
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>!!! Message: </strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                         </div>`;
    setTimeout(function () {
        message.innerHTML = ``;
    }, 2000)
}

// Add submit event listener to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(event) {
    console.log('You have submiited library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    else if (others.checked) {
        type = others.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been successfully added !!!');
    }
    else {
        // Show error to the User
        display.show('danger', 'Sorry, Your Book cannot be added !!!');
    }
    event.preventDefault();
}
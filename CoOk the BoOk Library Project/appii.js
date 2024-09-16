console.log("Welcome to CoOk the bOoK Library System. This is appii.js");
// Todos"
// 1. Store all the data to the localStorage - done
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view
// 4. Duplicate Books check - done
// 5. Search the books

// This is OOP using Prototype & its inheritance with special feature - es5

// Add submit event listener to libraryForm to add book, author & type
let lschecking;
let checkValidate;
let checkDuplicate;
let delValue;
let yesnoTag;
let inputVal;
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(event) {
    // console.log('You have submiited library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let others = document.getElementById('others');

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
    let displayed = new Display();
    displayed.Lscheck();
    if (lschecking) {
        displayed.validate(book);
        if (checkValidate) {
            displayed.SavetoLs(book);
            displayed.clear();
            displayed.DisplayfromLs();
        }
        else {
            displayed.alert('danger', 'Book Cannot be added !', ' Minimum 5 characters are required !!!');
        }
    }
    else {
        displayed.validate(book);
        if (checkValidate) {
            displayed.duplicate(book);
            if (checkDuplicate) {
                displayed.SavetoLs(book);
                displayed.clear();
                displayed.DisplayfromLs();
            }
            else {
                displayed.alert('danger', 'Same Book Name cannot be added!!!', 'Duplicate Book Entry Found!');
            }
        }
        else {
            displayed.alert('danger', 'Book Cannot be added !', ' Minimum 5 characters are required !!!');
        }
    }
    event.preventDefault();
}


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

// Implement the SavetoLocalStorage function
Display.prototype.SavetoLs = function (book) {
    let bookList = localStorage.getItem("bookList");
    if (bookList == null) {
        booklistObj = [];
    } else {
        booklistObj = JSON.parse(bookList);
    }
    booklistObj.push(book);
    localStorage.setItem("bookList", JSON.stringify(booklistObj));
    console.log("Save to Local Storage function");
}

// Implement the DisplayfromLocalStorage function
Display.prototype.DisplayfromLs = function () {
    let bookList = localStorage.getItem("bookList");
    if (bookList == null) {
        booklistObj = [];
    } else {
        booklistObj = JSON.parse(bookList);
    }
    let html = "";
    booklistObj.forEach(function (element, index) {
        html += ` <tr>
                    <td >${element.name}</td>
                    <td >${element.author}</td>
                    <td >${element.type}</td>
                    <td ><button class="btn btn-dark px-4 py-1 mx-2 my-1" onclick="showModel()">&times;</button></td>
                  </tr>`;
        delValue = index;
    });
    let tableBody = document.getElementById("tableBody");
    let empty = document.getElementById("Empty");
    if (booklistObj.length != 0) {
        tableBody.innerHTML = html;
        empty.innerText = ``;
    } else {
        tableBody.innerHTML = ``;
        empty.innerText = `Nothing to show! Use "Add a Book" section above to add books.`;
    }
    // console.log("Display from Local Storage function");
}

// Implement the clear function
Display.prototype.clear = function () {
    // console.log("Clear page  function");
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    // console.log("Validation function");
    if (book.name.length < 3 || book.author.length < 3) {
        checkValidate = false;
    }
    else {
        checkValidate = true;
    }
}

// Implement the duplicate function
Display.prototype.duplicate = function (book) {
    // console.log("Duplicate function");
    let bookList = localStorage.getItem("bookList");
    if (bookList == null) {
        booklistObj = [];
    } else {
        booklistObj = JSON.parse(bookList);
    }
    let store = 0;
    booklistObj.forEach(function (element) {
        // console.log(element);
        if (element.name != book.name) {
            store += 1;
        }
        else {
            checkDuplicate = false;
        }
    });
    if (store == booklistObj.length) {
        checkDuplicate = true;
    }
}

// Implement the stylish alert function
Display.prototype.alert = function (type, boldMessage, backMessage) {
    // console.log("Alert function");
    let dltmessage = document.getElementById("dlt-message");
    let msg = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong> ${boldMessage} </strong> ${backMessage} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    </div>`;
    dltmessage.innerHTML = msg;
    setTimeout(() => {
        dltmessage.innerHTML = ``;
    }, 3000);
}

// Implement the  Local Storage clear or not check function
Display.prototype.Lscheck = function () {
    // console.log("Local Storage is clear or not check function");
    let bookList = localStorage.getItem("bookList");
    if (bookList == null) {
        booklistObj = [];
    } else {
        booklistObj = JSON.parse(bookList);
    }
    if (booklistObj.length == 0) {
        lschecking = true;
    }
    else {
        lschecking = false;
    }
}

// Implement the Delete Function 
Display.prototype.deleteBook = function (delValue) {
    // console.log("This is Yes function ");
    let bookList = localStorage.getItem("bookList");
    if (bookList == null) {
        booklistObj = [];
    } else {
        booklistObj = JSON.parse(bookList);
    }
    booklistObj.splice(delValue, 1);
    localStorage.setItem("bookList", JSON.stringify(booklistObj));
    modelWrap.innerHTML = ``;
    let element = document.querySelector(".modal-backdrop");
    let elementNew = document.createElement("p");
    element.replaceWith(elementNew);
    let elementbody = document.querySelector("body");
    // console.log(elementbody);
    elementbody.removeAttribute('style');
    elementbody.removeAttribute('class');
}

// Implement the Search Function
Display.prototype.searched = function (inputVal) {
    console.log('Input event fired!', inputVal);
    const searchCol = document.getElementById("tableBody");
    const tr = searchCol.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        ename = tr[i].getElementsByTagName("td")[0].innerText.toLowerCase();
        eauthor = tr[i].getElementsByTagName("td")[1].innerText.toLowerCase();
        etype = tr[i].getElementsByTagName("td")[2].innerText.toLowerCase();
        console.log(ename);
        console.log(eauthor);
        console.log(etype);
        if (ename.includes(inputVal) || eauthor.includes(inputVal) || etype.includes(inputVal)) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    };
}

// To display dialog model to confirm the delete
function showModel() {
    modelWrap = document.getElementById("message");
    modelWrap.innerHTML = ` <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Please ! Confirm to delete this Book!
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            Are you sure, You want to delete this Book ?
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary No" data-dismiss="modal" onclick="deleteNo()">Cancel</button>
            <button type="button" class="btn btn-primary Yes" onclick="deleteYes(${delValue})">Yes! Delete</button>
            </div>
            </div>
            </div>
            </div>`;
    var modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
    modal.show();
}
// To delete the book
// To display books after reload
let refreshPage = new Display();
refreshPage.DisplayfromLs();
function deleteYes(delValue) {
    refreshPage.deleteBook(delValue);
    refreshPage.alert('success', 'Deletion Successful ! ', ' Your Book is deleted Successfully !!! ')
    refreshPage.DisplayfromLs();

}
function deleteNo() {
    refreshPage.alert('danger', 'Deletion Un-successful ! ', ' Your Book not deleted !');
}

// To search the book with name, author & type
let search = document.getElementById("searchFind");
// console.log(search);
search.addEventListener("input", searchFunc);
function searchFunc(ee) {
    inputVal = search.value.toLowerCase();
    console.log("This is searchFunc function");
    refreshPage.searched(inputVal);
    refreshPage.DisplayfromLs();
}

// $(document).ready(function () {
//     $("#searchFind").on("keyup", function () {
//         var value = $(this).val().toLowerCase();
//         $("#tableBody tr").filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//     });
// // });
// function myFunction() {
//     let input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchFind");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tableBody");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         ename = tr[i].getElementsByTagName("td")[0];
//         eauthor = tr[i].getElementsByTagName("td")[1];
//         etype = tr[i].getElementsByTagName("td")[2];
//         if (td) {
//             nameValue = ename.textContent || ename.innerText;
//             authorValue = eauthor.textContent || eauthor.innerText;
//             typeValue = etype.textContent || etype.innerText;
//             if (nameValue.toUpperCase().indexOf(filter) > -1 || authorValue.toUpperCase().indexOf(filter) > -1 || typeValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }


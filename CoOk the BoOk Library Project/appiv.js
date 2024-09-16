console.log('This is ES6 Version of Project 4. This is appiv.js. Welcome to CoOk the bOoK Library System');
let lschecking;
let checkValidate;
let checkDuplicate;
let delValue;
let yesnoTag;
let inputVal;
let booklistObj;
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    SavetoLs(book) {
        let bookList = localStorage.getItem("bookList");
        if (bookList == null) {
            booklistObj = [];
        } else {
            booklistObj = JSON.parse(bookList);
        }
        booklistObj.push(book);
        localStorage.setItem("bookList", JSON.stringify(booklistObj));
        // console.log("Save to Local Storage function");
    }

    DisplayfromLs() {
        let bookList = localStorage.getItem("bookList");
        if (bookList == null) {
            booklistObj = [];
        } else {
            booklistObj = JSON.parse(bookList);
        }
        let html = "";
        booklistObj.forEach(function (element, index) {
            delValue = index;
            html += ` <tr id=${index}>
                        <td >${element.name}</td>
                        <td >${element.author}</td>
                        <td >${element.type}</td>
                        <td ><button class="btn btn-dark px-4 py-1 mx-2 my-1" onclick="showModel('Please ! Confirm to delete this Book!','Are you sure, You want to delete this Book ?','deleteNo()','Cancel','deleteYes(${delValue})','Yes! Delete')">&times;</button></td>
                      </tr>`;
        });
        let tableBody = document.getElementById("tableBody");
        let tableHead = document.getElementById("tableHead");
        let empty = document.getElementById("Empty");
        if (booklistObj.length != 0) {
            tableHead.removeAttribute('class');
            tableBody.innerHTML = html;
            empty.innerText = ``;
        } else {
            tableHead.setAttribute('class', 'd-none');
            tableBody.innerHTML = ``;
            empty.innerText = `Nothing to show! Use "Add a Book" section above to add books.`;
        }
        // console.log("Display from Local Storage function");
    }

    clear() {
        // console.log("Clear page  function");
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(book) {
        // console.log("Validation function");
        if (book.name.length < 3 || book.author.length < 3) {
            checkValidate = false;
        }
        else {
            checkValidate = true;
        }
    }

    duplicate(book) {
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

    alert(type, boldMessage, backMessage) {
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

    Lscheck() {
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
    deleteAllbooks() {
        localStorage.clear();
    }

    deleteBook(delValue) {
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

    searched(inputVal) {
        console.log('Input event fired!', inputVal);
        let bookList = localStorage.getItem("bookList");
        if (bookList == null) {
            booklistObj = [];
        } else {
            booklistObj = JSON.parse(bookList);
        }
        // const searchCol = document.getElementById("tableBody");
        let flag = 0;
        for (let i = 0; i < booklistObj.length; i++) {
            let tr = document.getElementById(`${i}`);
            // console.log(tr);
            let ename = tr.getElementsByTagName("td")[0].innerText.toLowerCase();
            let eauthor = tr.getElementsByTagName("td")[1].innerText.toLowerCase();
            let etype = tr.getElementsByTagName("td")[2].innerText.toLowerCase();
            // console.log(ename);
            // console.log(eauthor);
            // console.log(etype);
            if (ename.includes(inputVal) || eauthor.includes(inputVal) || etype.includes(inputVal)) {
                flag += 1;
                tr.removeAttribute("class", "d-none");
            } else {
                tr.setAttribute("class", "d-none");
            }
            if (flag == 0) {
                let empty = document.getElementById("Empty");
                empty.innerText = `Sorry ! No Book Found related with BookName, Author & Type.`;
            }
        };
    }
    showDeleteAll() {
        let deleteAll = document.getElementById('deleteAll');
        let bookList = localStorage.getItem("bookList");
        if (bookList == null) {
            booklistObj = [];
        } else {
            booklistObj = JSON.parse(bookList);
        }
        if (booklistObj.length == 0) {
            deleteAll.removeAttribute('class');
            deleteAll.setAttribute('class', 'btn badge-dark my-2 my-sm-0 d-none');
            // console.log("Local Storage is clear");
        }
        else {
            deleteAll.removeAttribute('class');
            deleteAll.setAttribute('class', 'btn badge-dark my-2 my-sm-0');
            // console.log("Local Storage is not clear");
        }
    }
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(event) {
    // console.log('You have submiited library form');
    let name = document.getElementById('bookName');
    let author = document.getElementById('author');
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
    let book = new Book(`${name.value}`, `${author.value}`, type);
    let displayed = new Display();
    displayed.Lscheck();
    if (lschecking) {
        displayed.validate(book);
        if (checkValidate) {
            displayed.SavetoLs(book);
            displayed.clear();
            displayed.DisplayfromLs();
            displayed.showDeleteall();
        }
        else {
            if (name.value.length < 3) {
                // console.log('name invalid');
                name.removeAttribute('class');
                name.setAttribute('class', 'form-control is-invalid');
                setTimeout(() => {
                    name.value = '';
                    name.removeAttribute('class');
                    name.setAttribute('class', 'form-control');
                }, 3000);
            }
            if (author.value.length < 3) {
                // console.log('author invalid');
                author.removeAttribute('class');
                author.setAttribute('class', 'form-control is-invalid');
                setTimeout(() => {
                    author.value = '';
                    author.removeAttribute('class');
                    author.setAttribute('class', 'form-control');
                }, 3000);
            }
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
                displayed.showDeleteAll();
            }
            else {
                displayed.alert('danger', 'Same Book Name cannot be added!!!', 'Duplicate Book Entry Found!');
            }
        }
        else {
            if (name.length.value < 3) {
                console.log('name invalid');
                name.removeAttribute('class');
                name.setAttribute('class', 'form-control is-invalid');
            }
            if (author.length.value < 3) {
                console.log('author invalid');
                author.removeAttribute('class');
                author.setAttribute('class', 'form-control is-invalid');
            }
            displayed.alert('danger', 'Book Cannot be added !', ' Minimum 5 characters are required !!!');
        }
    }
    event.preventDefault();
}

// To display dialog model to confirm the delete
function showModel(longTitle, bodyDetail, NofunctionName, Nobtn, YesfunctionName, Yesbtn) {
    modelWrap = document.getElementById("message");
    modelWrap.innerHTML = ` <div class="modal fade" id="askingModalCenter" tabindex="-1" role="dialog"
    aria-labelledby="askingModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="askingModalLongTitle">${longTitle}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
            ${bodyDetail}
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary No" data-dismiss="modal" onclick="${NofunctionName}">${Nobtn}</button>
            <button type="button" class="btn btn-primary Yes" onclick="${YesfunctionName}">${Yesbtn}</button>
            </div>
            </div>
            </div>
            </div>`;
    let modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
    modal.show();
}
// To delete the book
// To display books after reload
let refreshPage = new Display();
refreshPage.DisplayfromLs();
refreshPage.showDeleteAll();
let deleteAll = document.getElementById('deleteAll');
deleteAll.addEventListener('click', () => {
    showModel('Please ! Confirm to delete all the Books!', 'Are you sure, You want to delete all the Books ?', 'deleteNoAll()', 'Cancel', 'deleteYesAll()', 'Yes! Delete All');
    refreshPage.DisplayfromLs();
    refreshPage.showDeleteAll();
});
function deleteYesAll() {
    refreshPage.deleteAllbooks();
    refreshPage.alert('success', 'Deletion Successful ! ', ' All the Books are deleted Successfully !!! ')
    refreshPage.DisplayfromLs();
    refreshPage.showDeleteAll();
    modelWrap.innerHTML = ``;
    let element = document.querySelector(".modal-backdrop");
    let elementNew = document.createElement("p");
    element.replaceWith(elementNew);
    let elementbody = document.querySelector("body");
    // console.log(elementbody);
    elementbody.removeAttribute('style');
    elementbody.removeAttribute('class');
}
function deleteNoAll() {
    refreshPage.alert('danger', 'Deletion Un-successful ! ', ' No Books are deleted !');
}
function deleteYes(delValue) {
    refreshPage.deleteBook(delValue);
    refreshPage.alert('success', 'Deletion Successful ! ', ' Your Book is deleted Successfully !!! ')
    refreshPage.DisplayfromLs();
    refreshPage.showDeleteAll();

}
function deleteNo() {
    refreshPage.alert('danger', 'Deletion Un-successful ! ', ' Your Book not deleted !');
}

// To search the book with name, author & type
let search = document.getElementById("searchFind");
// console.log(search);
search.addEventListener("input", searchFunc);
function searchFunc() {
    inputVal = search.value.toLowerCase();
    if (inputVal == "") {
        refreshPage.DisplayfromLs();
        refreshPage.showDeleteAll();
    }
    else {
        // console.log("This is searchFunc function");
        refreshPage.searched(inputVal);
    }
}
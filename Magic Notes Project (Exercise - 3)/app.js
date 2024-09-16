// Basic Needs for Homepage
console.log("Welcome to notes app. This is app.js");
let editingBool = false;
let editChange;
let bookMarksindexes = localStorage.getItem("bookMarkindexes");
if (bookMarksindexes == null) {
  indexObj = [];
} else {
  indexObj = JSON.parse(bookMarksindexes);
}
if (indexObj.length == 0) {
  showNotes();
} else {
  showNoteswhenBookmarked(0, "neutral");
}
// If user adds a note & title, first check the vaildation of minimum character then check the for the duplicate note and then add it to the localStorage
let addBtn = document.getElementById("addBtn");
let addTitle = document.getElementById("addTitle");
let addTxt = document.getElementById("addTxt");
// Title and Text Validation
addTxt.addEventListener("input", () => {
  if (addTxt.value == "") {
    clearTextareaText.style.display = "none";
  } else if (addTxt.value != "") {
    clearTextareaText.style.display = "block";
  }
});
addBtn.addEventListener("click", function () {
  if (addTitle.value.length < 3 || addTxt.value.length < 5) {
    if (addTitle.value.length < 3) {
      addTitle.removeAttribute("class");
      addTitle.setAttribute("class", "form-control is-invalid");
      showAlert(
        "warning",
        "Note Cannot be Added ! ",
        " Notes's Title : Minimum 3 characters are required !!!"
      );
      setTimeout(() => {
        addTitle.removeAttribute("class");
        addTitle.setAttribute("class", "form-control");
      }, 1050);
    }
    if (addTxt.value.length < 5) {
      addTxt.removeAttribute("class");
      addTxt.setAttribute("class", "form-control is-invalid");
      showAlert(
        "warning",
        "Note Cannot be Added ! ",
        " Notes's Text : Minimum 5 characters are required !!!"
      );
      setTimeout(() => {
        addTxt.removeAttribute("class");
        addTxt.setAttribute("class", "form-control");
      }, 1050);
    }
  } else {
    addTitle.removeAttribute("class");
    addTitle.setAttribute("class", "form-control");
    addTxt.removeAttribute("class");
    addTxt.setAttribute("class", "form-control");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    // console.log(notesObj);
    if (notesObj.length == 0) {
      // console.log("Local Storage is clear");
      let myObj = {
        title: addTitle.value,
        text: addTxt.value,
      };
      notesObj.push(myObj);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      addTxt.value = "";
      addTitle.value = "";
      clearTextareaText.style.display = "none";
      let bookMarksindexes = localStorage.getItem("bookMarkindexes");
      if (bookMarksindexes == null) {
        indexObj = [];
      } else {
        indexObj = JSON.parse(bookMarksindexes);
      }
      if (indexObj.length == 0) {
        showNotes();
      } else {
        showNoteswhenBookmarked(0, "neutral");
      }
      showAlert(
        "success",
        "A Note is Added ! ",
        " Your Note is added successfully !!!"
      );
    } else {
      // console.log("Local Storage is not clear");
      let store = 0;
      notesObj.forEach(function (element) {
        // console.log(element);
        if (element.title != addTitle.value) {
          store += 1;
        } else {
          addTitle.removeAttribute("class");
          addTitle.setAttribute("class", "form-control is-invalid");
          setTimeout(() => {
            addTitle.removeAttribute("class");
            addTitle.setAttribute("class", "form-control");
          }, 3000);
          showAlert(
            "warning",
            "Duplicate Note Title Found ! ",
            " Same Title to the Note cannot be added!!!"
          );
        }
      });
      if (store == notesObj.length) {
        let myObj = {
          title: addTitle.value,
          text: addTxt.value,
        };
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
        clearTextareaText.style.display = "none";
        let bookMarksindexes = localStorage.getItem("bookMarkindexes");
        if (bookMarksindexes == null) {
          indexObj = [];
        } else {
          indexObj = JSON.parse(bookMarksindexes);
        }
        if (indexObj.length == 0) {
          showNotes();
        } else {
          showNoteswhenBookmarked(0, "neutral");
        }
        showAlert(
          "success",
          "A Note is Added ! ",
          " Your Note is added successfully !!!"
        );
        //   console.log(notesObj);
      }
    }
    // showDeleteall();
  }
});

// Function to show elements from localStorage
function showNotes() {
  editingBool = false;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // console.log(notesObj);
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="card${index}">
      <div class="card-body">
                      <h4 class="card-title">${element.title}</h4>
                      <p class="card-text"> ${element.text}</p>
                      <i class="fa fa-bookmark-o unbookMark" aria-hidden="true" id="BookMark${index}" value="false"></i>
                      <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
                      <i class="fa fa-pencil-square-o cornerPen" aria-hidden="true" id="Edit${index}"></i>
                      </div>
                      </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
  showDeleteall();
  makeEditButton();
  makeunbookMarkButton();
}
// Function to show elements from localStorage when atleast one note is bookmarked
function showNoteswhenBookmarked(index, checkbool) {
  if (checkbool == "true") {
    showNotes();
    let bookMarkedCard = document.querySelector(".noteCard");
    let bookMarkLogo = bookMarkedCard.querySelector(".fa-bookmark-o");
    bookMarkLogo.classList.remove("fa-bookmark-o");
    bookMarkLogo.classList.remove("unbookMark");
    bookMarkLogo.classList.add("fa-bookmark");
    bookMarkLogo.classList.add("bookMark");
    bookMarkLogo.removeAttribute("value");
    bookMarkLogo.setAttribute("value", "true");
  } else if (checkbool == "false") {
    showNotes();
  } else if (checkbool == "neutral") {
    let bookMarksindexes = localStorage.getItem("bookMarkindexes");
    if (bookMarksindexes == null) {
      indexObj = [];
    } else {
      indexObj = JSON.parse(bookMarksindexes);
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
      if (index < indexObj.length && index != indexObj.length) {
        html += `
          <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="card${index}">
          <div class="card-body">
          <h4 class="card-title">${element.title}</h4>
        <p class="card-text"> ${element.text}</p>
        <i class="fa fa-bookmark bookMark" aria-hidden="true" id="BookMark${index}" value="true"></i>
        <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
        <i class="fa fa-pencil-square-o cornerPen" aria-hidden="true" id="Edit${index}"></i>
        </div>
        </div>`;
      } else {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="card${index}">
        <div class="card-body">
        <h4 class="card-title">${element.title}</h4>
        <p class="card-text"> ${element.text}</p>
        <i class="fa fa-bookmark-o unbookMark" aria-hidden="true" id="BookMark${index}" value="false"></i>
        <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
        <i class="fa fa-pencil-square-o cornerPen" aria-hidden="true" id="Edit${index}"></i>
        </div>
        </div>`;
      }
      let notesElm = document.getElementById("notes");
      if (notesObj.length != 0) {
        notesElm.innerHTML = html;
      } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
    });
    showDeleteall();
    makeEditButton();
    makeunbookMarkButton();
  }
}
// Function to show elements from localStorage according to the search
function showNoteswhenSearch(inputStr) {
  let notes = localStorage.getItem("notes");
  let count = 0;
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // console.log(notesObj);
  let html = "";
  notesObj.forEach(function (element, index) {
    if (
      element.title.toLowerCase().includes(inputStr) ||
      element.text.toLowerCase().includes(inputStr)
    ) {
      html += `
                      <div class="noteCard my-2 mx-2 card" style="width: 18rem;" id="card${index}">
                      <div class="card-body">
                      <h4 class="card-title">${element.title}</h4>
                      <p class="card-text"> ${element.text}</p>
                      <i class="fa fa-bookmark-o unbookMark" aria-hidden="true" id="BookMark${index}" value="false"></i>
                      <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
                      <i class="fa fa-pencil-square-o cornerPen" aria-hidden="true" id="Edit${index}"></i>
                      </div>
                      </div>`;
      count = count + 1;
    }
  });
  let notesElm = document.getElementById("notes");
  // if (notesObj.length != 0) {
  //   notesElm.innerHTML = html;
  // } else {
  //   notesElm.innerHTML = `Nothing to show! Note, You searched has not found.`;
  // }
  if (count != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Note, You searched has not found.`;
  }
  showDeleteall();
  makeEditButton();
}
// BookMark Logic
function bookMarktheNote(event) {
  let tobeBookMarked = event.target;
  if (tobeBookMarked.classList.contains("fa-bookmark-o")) {
    let bookMarkCardBody = tobeBookMarked.parentElement;
    let bookMarkCard = bookMarkCardBody.parentElement;
    let bookMarkCardid = bookMarkCard.id;
    let indextobookMark = parseInt(
      bookMarkCardid.slice(4, bookMarkCardid.length + 1)
    );
    let bookMarksindexes = localStorage.getItem("bookMarkindexes");
    if (bookMarksindexes == null) {
      indexObj = [];
    } else {
      indexObj = JSON.parse(bookMarksindexes);
    }
    let myObj = {
      order: indexObj.length + 1,
      index: indextobookMark,
    };
    indexObj.push(myObj);
    localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    bookMarkObj = notesObj[indextobookMark];
    notesObj.splice(indextobookMark, 1);
    notesObj.splice(0, 0, bookMarkObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNoteswhenBookmarked(indextobookMark, "true");
    setTimeout(() => {
      showNoteswhenBookmarked(0, "neutral");
    }, 50);
  } else if (tobeBookMarked.classList.contains("fa-bookmark")) {
    let unbookMarkCardBody = tobeBookMarked.parentElement;
    let unbookMarkCard = unbookMarkCardBody.parentElement;
    let unbookMarkCardid = unbookMarkCard.id;
    let indextounbookMark = unbookMarkCardid.slice(
      4,
      unbookMarkCardid.length + 1
    );
    let bookMarksindexes = localStorage.getItem("bookMarkindexes");
    if (bookMarksindexes == null) {
      indexObj = [];
    } else {
      indexObj = JSON.parse(bookMarksindexes);
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    if (indexObj.length == 1) {
      bookMarkIndexObj = indexObj[indextounbookMark];
      bookMarkObj = notesObj[indextounbookMark];
      notesObj.splice(indextounbookMark, 1);
      notesObj.splice(bookMarkIndexObj.index, 0, bookMarkObj);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      indexObj.splice(indextounbookMark, 1);
      localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
      bookMarksindexes = localStorage.getItem("bookMarkindexes");
      indexObj = JSON.parse(bookMarksindexes);
    } else if (indexObj.length > 1) {
      if (indextounbookMark == 0) {
        bookMarkIndexObj = indexObj[indexObj.length - 1];
        bookMarkObj = notesObj[indextounbookMark];
        notesObj.splice(indextounbookMark, 1);
        let Xvalue = bookMarkIndexObj.index;
        console.log(Xvalue);
        notesObj.splice(Xvalue, 0, bookMarkObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        let j = indexObj.length - 1;
        indexObj.splice(j, 1);
        localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
        bookMarksindexes = localStorage.getItem("bookMarkindexes");
        indexObj = JSON.parse(bookMarksindexes);
      } else if (indextounbookMark <= indexObj.length - 1) {
        bookMarkIndexObj = indexObj[indexObj.length - 1 - indextounbookMark];
        bookMarkObj = notesObj[indextounbookMark];
        notesObj.splice(indextounbookMark, 1);
        let Xvalue = bookMarkIndexObj.index + 1;
        console.log(Xvalue);
        notesObj.splice(Xvalue, 0, bookMarkObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        let j = indexObj.length - 1 - indextounbookMark;
        indexObj.splice(j, 1);
        localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
        bookMarksindexes = localStorage.getItem("bookMarkindexes");
        indexObj = JSON.parse(bookMarksindexes);
        while (j <= indexObj.length - 1) {
          bookMarkIndexObj = indexObj[j];
          let myObj = {
            order: bookMarkIndexObj.order - 1,
            index: bookMarkIndexObj.index,
          };
          indexObj.splice(j, 1);
          indexObj.splice(j, 0, myObj);
          localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
          bookMarksindexes = localStorage.getItem("bookMarkindexes");
          indexObj = JSON.parse(bookMarksindexes);
          j++;
        }
      }
    }
    showNoteswhenBookmarked(indextounbookMark, "false");
    setTimeout(() => {
      showNoteswhenBookmarked(0, "neutral");
    }, 50);
  }
}

// Make all unbookMark Buttons an eventlistener
function makeunbookMarkButton() {
  let bookMarksindexes = localStorage.getItem("bookMarkindexes");
  if (bookMarksindexes == null) {
    indexObj = [];
  } else {
    indexObj = JSON.parse(bookMarksindexes);
  }
  if (indexObj.length == 0) {
    unbookMarks = document.querySelectorAll(".unbookMark");
    for (unbookMark of unbookMarks) {
      unbookMark.addEventListener("click", bookMarktheNote);
    }
  } else {
    unbookMarks = document.querySelectorAll(".unbookMark");
    for (unbookMark of unbookMarks) {
      unbookMark.addEventListener("click", bookMarktheNote);
    }
    bookMarks = document.querySelectorAll(".bookMark");
    for (bookMark of bookMarks) {
      bookMark.addEventListener("click", bookMarktheNote);
    }
  }
}
// function bookMarktheNote(event) {
//   let tobeBookMarked = event.target;
//   if (tobeBookMarked.classList.contains("fa-bookmark-o")) {
//     let bookMarkCardBody = tobeBookMarked.parentElement;
//     let bookMarkCard = bookMarkCardBody.parentElement;
//     let bookMarkCardid = bookMarkCard.id;
//     let indextobookMark = parseInt(bookMarkCardid.slice(4, bookMarkCardid.length + 1));
//     let bookMarksindexes = localStorage.getItem("bookMarkindexes");
//     if (bookMarksindexes == null) {
//       indexObj = [];
//     } else {
//       indexObj = JSON.parse(bookMarksindexes);
//     }
//     let myObj = {
//       order: indexObj.length + 1,
//       index: indextobookMark,
//     };
//     indexObj.push(myObj);
//     localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       notesObj = [];
//     } else {
//       notesObj = JSON.parse(notes);
//     }
//     bookMarkObj = notesObj[indextobookMark];
//     notesObj.splice(indextobookMark, 1);
//     notesObj.splice(0, 0, bookMarkObj);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     showNoteswhenBookmarked(indextobookMark, "true");
//     setTimeout(() => {
//       showNoteswhenBookmarked(0, "neutral");
//     }, 50);
//   }
//   else if (tobeBookMarked.classList.contains("fa-bookmark")) {
//     let unbookMarkCardBody = tobeBookMarked.parentElement;
//     let unbookMarkCard = unbookMarkCardBody.parentElement;
//     let unbookMarkCardid = unbookMarkCard.id;
//     let indextounbookMark = unbookMarkCardid.slice(4, unbookMarkCardid.length + 1);
//     let bookMarksindexes = localStorage.getItem("bookMarkindexes");
//     if (bookMarksindexes == null) {
//       indexObj = [];
//     } else {
//       indexObj = JSON.parse(bookMarksindexes);
//     }
//     let notes = localStorage.getItem("notes");
//     if (notes == null) {
//       notesObj = [];
//     } else {
//       notesObj = JSON.parse(notes);
//     }
//     if (indexObj.length == 1) {
//       bookMarkIndexObj = indexObj[indextounbookMark];
//       bookMarkObj = notesObj[indextounbookMark];
//       notesObj.splice(indextounbookMark, 1);
//       notesObj.splice(bookMarkIndexObj.index, 0, bookMarkObj);
//       localStorage.setItem("notes", JSON.stringify(notesObj));
//       indexObj.splice(indextounbookMark, 1);
//       localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
//       bookMarksindexes = localStorage.getItem("bookMarkindexes");
//       indexObj = JSON.parse(bookMarksindexes);
//     }
//     else if (indexObj.length > 1) {
//       if (indextounbookMark == 0) {
//         bookMarkIndexObj = indexObj[indexObj.length - 1];
//         bookMarkObj = notesObj[indextounbookMark];
//         notesObj.splice(indextounbookMark, 1);
//         let Xvalue = bookMarkIndexObj.index;
//         console.log(Xvalue);
//         notesObj.splice(Xvalue, 0, bookMarkObj);
//         localStorage.setItem("notes", JSON.stringify(notesObj));
//         let j = indexObj.length - 1;
//         indexObj.splice(j, 1);
//         localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
//         bookMarksindexes = localStorage.getItem("bookMarkindexes");
//         indexObj = JSON.parse(bookMarksindexes);
//       }
//       else if (indextounbookMark <= indexObj.length - 1) {
//         bookMarkIndexObj = indexObj[(indexObj.length - 1) - indextounbookMark];
//         bookMarkObj = notesObj[indextounbookMark];
//         notesObj.splice(indextounbookMark, 1);
//         let Xvalue = bookMarkIndexObj.index + 1;
//         console.log(Xvalue);
//         notesObj.splice(Xvalue, 0, bookMarkObj);
//         localStorage.setItem("notes", JSON.stringify(notesObj));
//         let j = (indexObj.length - 1) - indextounbookMark;
//         indexObj.splice(j, 1);
//         localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
//         bookMarksindexes = localStorage.getItem("bookMarkindexes");
//         indexObj = JSON.parse(bookMarksindexes);
//         while (j <= indexObj.length - 1) {
//           bookMarkIndexObj = indexObj[j];
//           let myObj = {
//             order: bookMarkIndexObj.order - 1,
//             index: bookMarkIndexObj.index,
//           };
//           indexObj.splice(j, 1);
//           indexObj.splice(j, 0, myObj);
//           localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
//           bookMarksindexes = localStorage.getItem("bookMarkindexes");
//           indexObj = JSON.parse(bookMarksindexes);
//           j++;
//         }
//       }
//     }
//     showNoteswhenBookmarked(indextounbookMark, "false");
//     setTimeout(() => {
//       showNoteswhenBookmarked(0, "neutral");
//     }, 50);
//   }
// }

// Event listener for bookmark click
let bookMarkBtns = document.querySelectorAll(".bookmark");
for (let i = 0; i < bookMarkBtns.length; i++) {
  let bookMarkBtn = bookMarkBtns[i];
  bookMarkBtn.addEventListener("click", bookMarktheNote);
}

// Note Editing Logic

// Function to check whether the title and text of the edited noted to be saved are blank or not and also the validation of minimum character required for it to make the save button work fine and show the save model
function checkBlankVaildMinimumCharacstosave(index, goal) {
  if (goal == undefined) {
    goal = "";
  }
  let editingCardBody = document.querySelector(".editingcard-body");
  let checkCard = editingCardBody.parentElement;
  let checkcardTitle = checkCard.querySelector(".card-title>input");
  let checkcardText = checkCard.querySelector(".card-text>textarea");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  checkingNote = notesObj[index];
  if (checkcardTitle.value == "" || checkcardText.value == "") {
    checkcardTitle.removeAttribute("class");
    checkcardTitle.setAttribute("class", "form-control is-invalid");
    setTimeout(() => {
      checkcardTitle.removeAttribute("class");
      checkcardTitle.setAttribute("class", "form-control");
    }, 3000);
    if (checkcardTitle.value == "") {
      showAlert(
        "warning",
        "Note Cannot be Edited ! ",
        " Note's Title cannot be blank !!!"
      );
    } else if (checkcardText.value == "") {
      showAlert(
        "warning",
        "Note Cannot be Edited ! ",
        " Note's Text cannot be blank !!!"
      );
    }
  } else if (
    checkcardTitle.value == checkingNote.title &&
    checkcardText.value == checkingNote.text
  ) {
    justSavetheNote(index);
  } else if (
    checkcardTitle.value.length < 3 ||
    checkcardText.value.length < 5
  ) {
    checkcardTitle.removeAttribute("class");
    checkcardTitle.setAttribute("class", "form-control is-invalid");
    setTimeout(() => {
      checkcardTitle.removeAttribute("class");
      checkcardTitle.setAttribute("class", "form-control");
    }, 3000);
    if (checkcardTitle.value.length < 3) {
      showAlert(
        "warning",
        "Note Cannot be Added ! ",
        " Notes's Title : Minimum 3 characters are required !!!"
      );
    } else if (checkcardText.value.length < 5) {
      showAlert(
        "warning",
        "Note Cannot be Added ! ",
        " Notes's Text : Minimum 5 characters are required !!!"
      );
    }
  } else {
    let store = 0;
    notesObj.forEach(function (element, i) {
      // console.log(element);
      // console.log(i);
      if (element.title != checkcardTitle.value) {
        store += 1;
        // console.log("Store=Store+1 -1");
      } else if (i == index) {
        store += 1;
        // console.log("Store=Store+1 -2");
      } else {
        checkcardTitle.removeAttribute("class");
        checkcardTitle.setAttribute("class", "form-control is-invalid");
        setTimeout(() => {
          checkcardTitle.removeAttribute("class");
          checkcardTitle.setAttribute("class", "form-control");
        }, 3000);
        showAlert(
          "warning",
          "Duplicate Note Title Found ! ",
          " Same Title to the Note cannot be added!!!"
        );
      }
    });
    if (store == notesObj.length) {
      showModelEdit(index, goal);
      editChange = goal;
    }
  }
}

// Cancel Button Function in edit
function editCancelButton(index) {
  editingBool = false;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  checkingNote = notesObj[index];
  let editingCardBody = document.querySelector(".editingcard-body");
  let mainCard = editingCardBody.parentElement;
  html1 = `
  <div class="card-body">
  <h4 class="card-title">${checkingNote.title}</h4>
  <p class="card-text"> ${checkingNote.text}</p>
  <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
  <i class="fa fa-pencil-square-o cornerPen" title-"Edit" aria-hidden="true" id="Edit${index}"></i>
  </div>
  </div>`;
  mainCard.innerHTML = html1;
  setTimeout(() => {
    let cornerPens = document.querySelectorAll(".cornerPen");
    // console.log(editingBool);
    for (cornerPen of cornerPens) {
      cornerPen.removeEventListener("click", editButton);
    }
  }, 100);
  setTimeout(() => {
    makeEditButton();
  }, 200);
}
// Function to just saving the note
function justSavetheNote(index) {
  showAlert(
    "success",
    "Your Note is saved ! ",
    " without an edit Successfully!!!"
  );
  editingBool = false;
  let editingCardBody = document.querySelector(".editingcard-body");
  let mainCard = editingCardBody.parentElement;
  let savecardTitle = mainCard.querySelector(".card-title>input").value;
  let savecardText = mainCard.querySelector(".card-text>textarea").value;
  html1 = `
            <div class="card-body">
            <h4 class="card-title">${savecardTitle}</h4>
            <p class="card-text"> ${savecardText}</p>
            <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
            <i class="fa fa-pencil-square-o cornerPen" title-"Edit" aria-hidden="true" id="Edit${index}"></i>
            </div>
            </div>`;
  mainCard.innerHTML = html1;
  setTimeout(() => {
    let cornerPens = document.querySelectorAll(".cornerPen");
    // console.log(editingBool);
    for (cornerPen of cornerPens) {
      cornerPen.removeEventListener("click", editButton);
    }
  }, 100);
  setTimeout(() => {
    makeEditButton();
  }, 200);
}

// Function to save notes if user clicks on input or textbox while editing note open
addTitle.addEventListener("click", () => {
  if (editingBool == true) {
    let editingCardBody = document.querySelector(".editingcard-body");
    let checkCard = editingCardBody.parentElement;
    let penid = checkCard.id;
    let indextoEdit = penid.slice(4, penid.length + 1);
    checkBlankVaildMinimumCharacstosave(indextoEdit, "Previous ");
  }
});
addTxt.addEventListener("click", () => {
  if (editingBool == true) {
    let editingCardBody = document.querySelector(".editingcard-body");
    let checkCard = editingCardBody.parentElement;
    let penid = checkCard.id;
    let indextoEdit = penid.slice(4, penid.length + 1);
    checkBlankVaildMinimumCharacstosave(indextoEdit, "Previous ");
  }
});
// Function to clear save text of input and textarea
function clearsaveTextareaTextandInput() {
  let editingCardBody = document.querySelector(".editingcard-body");
  let mainCard = editingCardBody.parentElement;
  let savecardTitle = mainCard.querySelector(".card-title>input");
  let savecardText = mainCard.querySelector(".card-text>textarea");
  savecardTitle.value = "";
  savecardText.value = "";
}
// Function of edit button logic
function editButton(event) {
  if (!editingBool) {
    editingBool = true;
    let pen = event.target;
    let penid = pen.id;
    let indextoEdit = penid.slice(4, penid.length + 1);
    let cardidName = `card${indextoEdit}`;
    let editableCard = document.getElementById(cardidName);
    let editcardTitle = editableCard.querySelector(".card-title").innerText;
    let editcardText = editableCard.querySelector(".card-text").innerText;
    html = `
    <div class="editingcard-body">
    <h4 class="card-title marpad"><input type="text" class="form-control" id="addTitle" aria-describedby="title" value="${editcardTitle}"></h4>
    <p class="card-text marpad"><textarea class="form-control" id="addTxt" rows="3">${editcardText}</textarea></p>
    <button id="save${indextoEdit}" class="btn btn-primary marpad" onclick="checkBlankVaildMinimumCharacstosave(${indextoEdit})">Save Note</button>
    <button class="btn btn-primary" id="clearsaveTextareaTextandInput" onclick="clearsaveTextareaTextandInput()"><i class="fa fa-trash-o"></i></button>
    <button id="cancel${indextoEdit}" class="btn btn-danger flex-end marpad" onclick="editCancelButton(${indextoEdit})">&times</button>
    </div>
    </div>`;
    editableCard.innerHTML = html;
  } else {
    // console.log("Else");
    makeEditButtonAgain();
    editingBool = true;
    let pen = event.target;
    let penid = pen.id;
    let indextoEdit = penid.slice(4, penid.length + 1);
    // console.log(indextoEdit);
    let cardidName = `card${indextoEdit}`;
    let editableCard = document.getElementById(cardidName);
    let editcardTitle = editableCard.querySelector(".card-title").innerText;
    let editcardText = editableCard.querySelector(".card-text").innerText;
    // console.log(editableCard);
    html2 = `
    <div class="editingcard-body">
    <h4 class="card-title marpad"><input type="text" class="form-control" id="addTitle" aria-describedby="title" value="${editcardTitle}"></h4>
    <p class="card-text marpad"><textarea class="form-control" id="addTxt" rows="3">${editcardText}</textarea></p>
    <button id="save${indextoEdit}" class="btn btn-primary marpad" onclick="checkBlankVaildMinimumCharacstosave(${indextoEdit})">Save Note</button>
    <button class="btn btn-primary" id="clearsaveTextareaTextandInput" onclick="clearsaveTextareaTextandInput()"><i class="fa fa-trash-o"></i></button>
    <button id="cancel${indextoEdit}" class="btn btn-danger marpad flex-end" onclick="editCancelButton(${indextoEdit})">&times</button>
    </div>
    </div>`;
    editableCard.innerHTML = html2;
  }
}
// Function to make the Edit Button a event listener and edit the note
function makeEditButton() {
  let cornerPens = document.querySelectorAll(".cornerPen");
  // console.log(editingBool);
  for (cornerPen of cornerPens) {
    cornerPen.addEventListener("click", editButton);
  }
}

// Function to apply makeEditButton to all again
function makeEditButtonAgain() {
  let editingCardBody = document.querySelector(".editingcard-body");
  let mainCard = editingCardBody.parentElement;
  let mainCardid = mainCard.id;
  let indextosave = mainCardid.slice(4, mainCardid.length + 1);
  let savecardTitle = mainCard.querySelector(".card-title>input").value;
  let savecardText = mainCard.querySelector(".card-text>textarea").value;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  checkingNote = notesObj[indextosave];
  if (
    savecardTitle == checkingNote.title &&
    savecardText == checkingNote.text
  ) {
    html1 = `
    <div class="card-body">
    <h4 class="card-title">${savecardTitle}</h4>
    <p class="card-text"> ${savecardText}</p>
    <button id="${indextosave}" class="btn btn-primary" onclick="showModel(${indextosave})">Delete Note</button>
    <i class="fa fa-pencil-square-o cornerPen" title-"Edit" aria-hidden="true" id="Edit${indextosave}"></i>
    </div>
    </div>`;
    mainCard.innerHTML = html1;
    setTimeout(() => {
      let cornerPens = document.querySelectorAll(".cornerPen");
      // console.log(editingBool);
      for (cornerPen of cornerPens) {
        cornerPen.removeEventListener("click", editButton);
      }
    }, 100);
    setTimeout(() => {
      makeEditButton();
    }, 200);
  } else if (
    savecardTitle != checkingNote.title ||
    savecardText != checkingNote.text
  ) {
    checkBlankVaildMinimumCharacstosave(indextosave, "Previous ");
  }
}

// Model Box for Edit
function showModelEdit(index, football) {
  modelWrap = document.getElementById("message");
  modelWrap.innerHTML = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Please ! Confirm to save the ${football}Note!
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
        Are you sure, You want to save the edit of the ${football}Note ?
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary No" data-dismiss="modal" onclick="NoEdit(${index})">Cancel</button>
        <button type="button" class="btn btn-primary Yes" onclick="YesEdit(${index})">Yes! Save</button>
        </div>
        </div>
        </div>
        </div>`;
  var modal = new bootstrap.Modal(modelWrap.querySelector(".modal"));
  modal.show();
}

// Yes Edit
function YesEdit(index) {
  editingBool = false;
  // console.log("This is Yes function ");
  let notes = localStorage.getItem("notes");
  showAlert(
    "success",
    "Your Note is saved ! ",
    " Your Note is edited Successfully!!!"
  );
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let cardidName = `card${index}`;
  let editableCard = document.getElementById(cardidName);
  // console.log(editableCard);
  let editcardTitle = editableCard.querySelector(".card-title>input");
  let editcardText = editableCard.querySelector(".card-text>textarea");
  // console.log(editcardText.value);
  // console.log(editcardTitle.value);
  if (editcardTitle.value.length >= 3 && editcardText.value.length >= 5) {
    let myObj = {
      title: editcardTitle.value,
      text: editcardText.value,
    };
    notesObj.splice(index, 1);
    notesObj.splice(index, 0, myObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    // console.log(editChange, "editchange");
    if (editChange === "Previous ") {
      editingBool = true;
      let cardidName = `card${index}`;
      let editableCard = document.getElementById(cardidName);
      let editcardTitle = editableCard.querySelector(".card-title>input").value;
      let editcardText = editableCard.querySelector(
        ".card-text>textarea"
      ).value;
      html = `
      <div class="card-body">
    <h4 class="card-title">${editcardTitle}</h4>
    <p class="card-text"> ${editcardText}</p>
    <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
    <i class="fa fa-pencil-square-o cornerPen" title-"Edit" aria-hidden="true" id="Edit${index}"></i>
    </div>
    </div>`;
      editableCard.innerHTML = html;
    } else if (editChange === "") {
      showNotes();
    }
    // console.log(notesObj);
  }
  makeEditButton();
  modelWrap.innerHTML = ``;
  let element = document.querySelector(".modal-backdrop");
  let elementNew = document.createElement("p");
  element.replaceWith(elementNew);
  let elementbody = document.querySelector("body");
  // console.log(elementbody);
  elementbody.removeAttribute("style");
  elementbody.removeAttribute("class");
}

// No Edit
function NoEdit(index) {
  // console.log("This is No function");
  editingBool = false;
  modelWrap.innerHTML = ``;
  let editingCardBody = document.querySelector(".editingcard-body");
  let mainCard = editingCardBody.parentElement;
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  savecard = notesObj[index];
  savecardTitle = savecard.title;
  savecardText = savecard.text;
  html1 = `
                 <div class="card-body">
                 <h4 class="card-title">${savecardTitle}</h4>
                 <p class="card-text"> ${savecardText}</p>
                 <button id="${index}" class="btn btn-primary" onclick="showModel(${index})">Delete Note</button>
                 <i class="fa fa-pencil-square-o cornerPen" title-"Edit" aria-hidden="true" id="Edit${index}"></i>
                 </div>
                 </div>`;
  mainCard.innerHTML = html1;
  setTimeout(() => {
    let cornerPens = document.querySelectorAll(".cornerPen");
    // console.log(editingBool);
    for (cornerPen of cornerPens) {
      cornerPen.removeEventListener("click", editButton);
    }
  }, 100);
  setTimeout(() => {
    makeEditButton();
  }, 200);
}

// Function to delete a note
//   console.log("I am deleting", index);
function showModel(index) {
  modelWrap = document.getElementById("message");
  modelWrap.innerHTML = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Please ! Confirm to delete this Note!
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
        Are you sure, You want to delete this Note ?
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary No" data-dismiss="modal" onclick="No()">Cancel</button>
        <button type="button" class="btn btn-primary Yes" onclick="Yes(${index})">Yes! Delete</button>
        </div>
        </div>
        </div>
        </div>`;
  var modal = new bootstrap.Modal(modelWrap.querySelector(".modal"));
  modal.show();
}
function showModelAll() {
  modelWrap = document.getElementById("message");
  modelWrap.innerHTML = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Please ! Confirm to delete all the Notes!
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
        Are you sure, You want to delete all the Notes ?
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary No" data-dismiss="modal" onclick="NoAll()">Cancel</button>
        <button type="button" class="btn btn-primary Yes" onclick="YesAll()">Yes! Delete</button>
        </div>
        </div>
        </div>
        </div>`;
  var modal = new bootstrap.Modal(modelWrap.querySelector(".modal"));
  modal.show();
}
function Yes(index) {
  // console.log("This is Yes function ");
  let notes = localStorage.getItem("notes");
  let bookMarksindexes = localStorage.getItem("bookMarkindexes");
  showAlert(
    "success",
    "Deletion Successful! ",
    " Your Note is Deleted Successfully!!!"
  );
  if (bookMarksindexes == null) {
    indexObj = [];
  } else {
    indexObj = JSON.parse(bookMarksindexes);
  }
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  for (let i = 0; i < indexObj.length; i++) {
    if (indexObj[i].index === index) {
      indexObj.splice(index, 1);
    }
  }
  localStorage.setItem("bookMarkindexes", JSON.stringify(indexObj));
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
  modelWrap.innerHTML = ``;
  let element = document.querySelector(".modal-backdrop");
  let elementNew = document.createElement("p");
  element.replaceWith(elementNew);
  let elementbody = document.querySelector("body");
  // console.log(elementbody);
  elementbody.removeAttribute("style");
  elementbody.removeAttribute("class");
}
function No() {
  // console.log("This is No function");
  showAlert(
    "danger",
    "Deletion Un-successful! ",
    " Your Note is not Deleted!!!"
  );
  modelWrap.innerHTML = ``;
}

function NoAll() {
  // console.log("This is No function");
  showAlert(
    "danger",
    "Deletion Un-successful! ",
    " Your Notes are not Deleted!!!"
  );
  modelWrap.innerHTML = ``;
}

// Function for searching the note
let search = document.getElementById("searchTxt");
search.addEventListener("click", () => {
  let editingCardBody = document.querySelector(".editingcard-body");
  let checkCard = editingCardBody.parentElement;
  let penid = checkCard.id;
  let indextoEdit = penid.slice(4, penid.length + 1);
  checkBlankVaildMinimumCharacstosave(indextoEdit, "Previous ");
});
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  showNoteswhenSearch(inputVal);
  // console.log('Input event fired!', inputVal);
  // let noteCards = document.getElementsByClassName("noteCard");
  // Array.from(noteCards).forEach(function (element) {
  // console.log(element);
  //   let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
  //   let cardTitle = element.getElementsByTagName("h4")[0].innerText.toLowerCase();
  // console.log(typeof cardTxt);
  //   if (cardTxt.includes(inputVal) || cardTitle.includes(inputVal)) {
  //     count = count + 1;
  // console.log(cardTxt);
  //     element.style.display = "block";
  //     console.log("Show Element : ", element);
  //   } else {
  //     element.style.display = "none";
  //     console.log("Hide Element : ", element);
  //   }
  //   console.log(count);
  //   if (count == 0) {
  //     console.log(count);
  //     let notesElm = document.getElementById("notes");
  //     notesElm.innerHTML = `Nothing to show! Note, You searched has not found.`;
  //   }
  // console.log(cardTxt);
  // });
});

let deleteAll = document.getElementById("deleteAll");
deleteAll.addEventListener("click", () => {
  showModelAll();
});

function YesAll() {
  localStorage.clear();
  showNotes();
  modelWrap.innerHTML = ``;
  let element = document.querySelector(".modal-backdrop");
  let elementNew = document.createElement("p");
  element.replaceWith(elementNew);
  let elementbody = document.querySelector("body");
  // console.log(elementbody);
  elementbody.removeAttribute("style");
  elementbody.removeAttribute("class");
}

function showDeleteall() {
  let deleteAll = document.getElementById("deleteAll");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  if (notesObj.length == 0) {
    deleteAll.removeAttribute("class");
    deleteAll.setAttribute("class", "btn badge-primary my-2 my-sm-0 d-none");
    // console.log("Local Storage is clear");
  } else {
    deleteAll.removeAttribute("class");
    deleteAll.setAttribute("class", "btn badge-primary my-2 my-sm-0");
    // console.log("Local Storage is not clear");
  }
}

// Shows alert
function showAlert(type, boldMessage, backMessage) {
  // console.log("Alert function");
  let dltmessage = document.getElementById("dlt-message");
  let msg = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong> ${boldMessage} </strong> ${backMessage} 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
  </div>`;
  dltmessage.innerHTML = msg;
  setTimeout(() => {
    dltmessage.innerHTML = ``;
  }, 3000);
}

clearTextareaText.addEventListener("click", () => {
  addTxt.value = "";
  clearTextareaText.style.display = "none";
});

// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){
// let element=document.getElementsByClassName()
//     let inputVal = search.value.toLowerCase();
//     console.log('Input event fired!', inputVal);
//     let noteCards =JSON.parse(localStorage.getItem('notes'));
//     // console.log(noteCards);
//     for (let i = 0; i <noteCards.length; i++) {
//       noteCards[i]=noteCards[i].toLowerCase;
//       if (nodeCards[i].includes(inputVal) ) {

//       }
//     }
// });

/*
Further Features:
1. Add Title/Note
2. Duplicate Entries Validation
3. Blank Entries Validation
4. Mark a note as Important - (idea is to make border as red and small marking as important to display above the title while adding note as user to check the check-box if it is important note or note and if important then make another object & store the important note content separately in another object and display the important obj first in showNotes and then the remaining object)*
5. Separate notes by user*
6. Sync and host to web server *
7. Stylish Delete
8. Search with title and text
9. Delete All Button in Nav Bar
10. Model for Warning for Delete All Button
11. Editable Notes (Title and Text)
12. Use of Save Button to save the Edit
13. Use of Enter Key*
14. Clear/Cross button in input field to clear the text already existing in it*
*/

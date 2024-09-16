console.log("This is Exercise-5ii");
let check;
let inputSearch = document.getElementById('inputSearch');
inputSearch.addEventListener('input', inputeventHandler);
function inputeventHandler() {
    let isearch = inputSearch.value;
    if (isearch.length == 0) {
        check = false;
    }
    else {
        check = true;
    }
}
let search = document.getElementById('search');
search.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    if (check == true) {
        const xhr=new XMLHttpRequest();
        xhr.open('GET','https://wordsapiv1.p.mashape.com/words/example',true);
        xhr.onprogress = function () {
                console.log(" On progess ( Loading.....!!!! )");
            }
        xhr.onload=function () {
            console.log(this.response);
        }
        xhr.send();
        tableBody = document.getElementById('tableBody');
        let str = ``;
        for (let i = 0; i < this.response.results.length; i++) {
            str += `
            <tr>
                <th scope="col" class="p-2 m-2">${i + 1}</th>
                <th scope="col" class="p-2 m-2">${this.response.results[i].definition}</th>
            </tr>`
            tableBody.innerHTML = str;
        };
    }
    else {
        console.error("Input is empty");
    }
}
// Things I can do 
// 1. If input is empty then show a alert
// 2. To show dropdown-menu for the required item to show
// 3. To check input value & show the results accordingly
// 4. To remove table headings before search 
// 5. And Many More
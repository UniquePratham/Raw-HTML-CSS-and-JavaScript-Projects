console.log('This is Ajax Tutorial');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn');
    // Instantiate an XHR Object - a xhr object is must-made
    const xhr = new XMLHttpRequest();

    // Open the Object
    // From where to bring the data ?
    // Which type of request will it be ?
    // GET request - Only fetch (to bring)
    // We will send the url as results are only fetch i.e tells what's in the url !

    // POST request - We will send data as well to fetch the data accordingly as sended data
    // We wiil send the url as well as data and then fetches the data accordingly & gives the responses accrding to data

    // true - It means the statements aren't block i.e Asynchronous Request
    // false - It means the statements are block i.e Synchronous Request

    // GET Request
    // xhr.open('GET', 'Cutie.txt', true);
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', false);
    // xhr.open('GET', 'Cuties.txt', true); - it will give error as it doesn't exist

    // POST Request
    // xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.open('POST', 'https://dummyjson.com/products/add', true);
    // xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on-progess ( Its optional to use ; It is widely used to show a loading screen in websites )
    // xhr.onprogress = function () {
    //     console.log(" On progess ( Loading.....!!!! )");
    // }

    // // On-ready-state-change function
    // xhr.onreadystatechange = function () {
    //     console.log('Ready State is', xhr.readyState);
    //     // 5 ready state is there 0 - Unsent, 1 - Opened(open() is called), 2 - Headers_Received(send() is called), 3 - Loading, 4 - Done
    // }

    // What to do when everything is loaded in website i.e when response is ready ; We have to display the fetch data. So,
    xhr.onload = function () {
        // If there is no file named Cutie.text then it shows error. So to check the status; we can use
        // if status is ok then show the response otherwise show self declared error - we can use this
        // Basic HTML codes to remember - 
        // 200 - all ok 
        // 400 - Bad Request
        // 401 - Unauthorized
        // 403 - Forbidden
        // 404 - Not Found
        // 500 - Internal Server Error
        // 503 - Service Unavailable
        // Rest, we can found out anytime with a quick Google Search - HTML Status Code

        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.error("Some problem / error occured !!! ");
        }
    }

    // NEVER SEND PASSWORDS & OTHER CONFIDENTIAL THINGS WITH GET REQUEST ; ALWAYS SEND WITH POST REQUEST BECAUSE OF SECURITY

    // Everything is done now ; Now its time to send the request whether its GET or POST
    params = `{"id":1,"title":"Pratham","description":"An apple mobilencijfdncihfuhf which is nothing like apple","price":549,"discountPercentage":12.96,"rating":4.69,"stock":94,"brand":"Apple","category":"smartphones","thumbnail":"https://dummyjson.com/image/i/products/1/thumbnail.jpg","images":["https://dummyjson.com/image/i/products/1/1.jpg","https://dummyjson.com/image/i/products/1/2.jpg","https://dummyjson.com/image/i/products/1/3.jpg","https://dummyjson.com/image/i/products/1/4.jpg","https://dummyjson.com/image/i/products/1/thumbnail.jpg"]}`;
    xhr.send(params);

    // This code is not blocking it as it is asynchronous request i.e true
    // If we do false it will printed last as this statement is as it is synchronous request i.e blocking code;
    // If we do true it will printed at its order without being blocked because of asynchronous request i.e non-blocking code;
    console.log("We are done");
}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {

    console.log('You have clicked the popBtn');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById("list");
            let str = "";
            for (key in obj) {
                str += `<li>${obj[key].title}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.error("Some problem / error occured !!! ");
        }
    }
    xhr.send();
    console.log('We are done getting post from link from XHR');
}
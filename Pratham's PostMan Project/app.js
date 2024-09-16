console.log("This is Pratham's PostMan Project for GET/POST Request");
let contentTypeBox = document.getElementById('contentTypeBox');
let requestJSONBox = document.getElementById('requestJSONBox');
let parametersBox = document.getElementById('parametersBox');
let getRadio = document.getElementById('get');
let postRadio = document.getElementById('post');
let jsonRadio = document.getElementById('jsonRadio');
let customParameterRadio = document.getElementById('customParameterRadio');
let addParam = document.getElementById('addParam');
let addedParams = document.getElementById('addedParams');
let sendRequest = document.getElementById('sendRequest');
// let responseText = document.getElementById('responseText');
let responseCodePrism = document.getElementById('responseCodePrism');
let recentUrls = document.getElementById('recentUrls');
let clearAll = document.getElementById('clearAll');
// Hiding contentTypeBox, reuqestJSONBox, & parametersBox initially & recent Urls & clearAll button
contentTypeBox.style.display = 'none';
requestJSONBox.style.display = 'none';
parametersBox.style.display = 'none';
recentUrls.style.display = 'none';
clearAll.style.display = 'none';
// When postRadio button is clicked; contentTypeBox will be shown
postRadio.addEventListener('click', () => {
    contentTypeBox.style.display = 'flex';
})
// When getRadio button is clicked; again all of them will be hidden
getRadio.addEventListener('click', () => {
    contentTypeBox.style.display = 'none';
    requestJSONBox.style.display = 'none';
    parametersBox.style.display = 'none';
    clearAll.style.display = 'none';
    jsonRadio.checked = false;
    customParameterRadio.checked = false;
})
// When jsonRadio button is clicked after clicking postRadio button; requestJSONBox will be shown & parametersBox will still be hidden
jsonRadio.addEventListener('click', () => {
    requestJSONBox.style.display = 'flex';
    parametersBox.style.display = 'none';
    clearAll.style.display = 'block';
})
// When customParameterRadio button is clicked after clicking postRadio button; parametersBox will be shown & requestJSONBox will be hidden
customParameterRadio.addEventListener('click', () => {
    requestJSONBox.style.display = 'none';
    parametersBox.style.display = 'block';
    clearAll.style.display = 'block';
})
// Initializing n.o fo parameters
let addedParamCount = 0;
let deletedParam = 0;
let data = {};
// Utility Functions
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
// When the User clicks on '+' button, more parameters should be added
addParam.addEventListener('click', () => {
    let string = `<div class="row g-2 my-2">
                    <label for="inputUrl" class="col-sm-2 col-form-label">Parameter${addedParamCount + 2} :</label>
                    <div class="col">
                        <input type="text" class="form-control border-warning" placeholder="Enter Parameter${addedParamCount + 2} Key"
                            id="parameterKey${addedParamCount + 2}" aria-label="Parameter${addedParamCount + 2} :">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control border-warning" placeholder="Enter Parameter${addedParamCount + 2} Value"
                            id="parameterValue${addedParamCount + 2}" aria-label="Parameter${addedParamCount + 2} :">
                    </div>
                    <div class="col">
                        <button class="btn btn-warning deleteParam" id="countParams${addedParamCount + 2}">-</button>
                    </div>
                </div>`;
    // Convert the element string to DOM Node
    let paramElement = getElementFromString(string);
    addedParams.appendChild(paramElement);
    // Adding an event listener to remove the parameter on clicking '-' button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
    }
    let countParams = document.getElementById(`countParams${addedParamCount + 2}`);
    countParams.addEventListener('click', () => {
        deletedParam += 1;
        if (deletedParam == addedParamCount) {
            deletedParam = 0;
            addedParamCount = 0;
        }
    })
    addedParamCount++;
})
// When User clicks on Send Request Button after filling requirements
sendRequest.addEventListener('click', () => {
    // responseText.innerText = "";
    responseCodePrism.innerText = "";
    sendRequest.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
    // responseText.removeAttribute('placeholder');
    // responseText.setAttribute('placeholder', 'Please Wait... Fetching Your Response!');
    responseCodePrism.innerText = "Please Wait... Fetching Your Response!";
    let inputUrl = document.getElementById('inputUrl');
    if (getRadio.checked) {
        // let regex = /^[a-zA-Z0-9]{2,6}:\/\/[a-zA-Z0-9]{2,20}\.[a-zA-Z0-9]{2,20}?.[a-zA-Z0-9\/]{1,20}?$/;
        let regex = /^[a-zA-Z0-9]{1,6}:\/\/[a-zA-Z0-9]{2,20}\.[a-zA-Z0-9]{2,15}\.|\/?[a-zA-Z0-9]{2,15}?\.|\/?[a-zA-Z0-9]{2,15}?\.|\/?[a-zA-Z0-9]{2,15}?/;
        if (regex.test(inputUrl.value)) {
            fetch(inputUrl.value, {
                method: 'GET',
            })
                .then(response => response.text())
                // .then(text => { responseText.innerText = text; });
                .then(text => { responseCodePrism.innerText = text; });
            Prism.highlightAll();
            sendRequest.innerText = 'Sent';
            inputUrl.setAttribute("disabled", "");
            setTimeout(() => {
                sendRequest.innerText = 'Send Request';
                // responseText.removeAttribute('placeholder');
                // responseText.setAttribute('placeholder', 'Your Response will be shown here!');
                recentUrls.style.display = 'flex';
                let recent = `<li class="list-group-item border-warning clickItems btn text-lg-start">${inputUrl.value}</li>`;
                document.querySelector("#recentUrls>div>ul").innerHTML += (recent);
                let clickItems = document.getElementsByClassName('clickItems');
                inputUrl.value = "";
                for (item of clickItems) {
                    item.addEventListener('click', (e) => {
                        inputUrl.value = e.target.innerText;
                        e.target.remove();
                        if (document.querySelector("#recentUrls>div>ul").innerText == "") {
                            recentUrls.style.display = "none";
                            // responseText.innerText = "";
                            responseCodePrism.innerText = "Your Response will be shown here!";
                        }
                    })
                }
                inputUrl.removeAttribute("disabled", "");
            }, 2500);
        }
        else {
            setTimeout(() => {
                sendRequest.innerText = 'Failed';
                // responseText.removeAttribute('placeholder');
                // responseText.setAttribute('placeholder', 'Your Url is not valid! Please Check the Url');
                responseCodePrism.innerText = "Your Url is not valid! Please Check the Url";
                inputUrl.setAttribute("disabled", "");
                setTimeout(() => {
                    sendRequest.innerText = 'Send Request';
                    // responseText.removeAttribute('placeholder');
                    // responseText.setAttribute('placeholder', 'Your Response will be shown here!');
                    responseCodePrism.innerText = "Your Response will be shown here!";
                    inputUrl.removeAttribute("disabled", "");
                }, 2500);
            }, 2000);

        }
    }
    else if (postRadio.checked) {
        let regex2 = /^[a-zA-Z0-9]{1,6}:\/\/[a-zA-Z0-9]{2,20}\.[a-zA-Z0-9]{2,15}\.|\/?[a-zA-Z0-9]{2,15}?\.|\/?[a-zA-Z0-9]{2,15}?\.|\/?[a-zA-Z0-9]{2,15}?/;
        if (regex2.test(inputUrl.value)) {
            let contentType = document.querySelector("input[name='contentType']:checked").value;
            if (contentType == "params") {
                data = {};
                for (let i = 0; i < addedParamCount + 1; i++) {
                    if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                        let key = document.getElementById('parameterKey' + (i + 1)).value;
                        let value = document.getElementById('parameterValue' + (i + 1)).value;
                        data[key] = value;
                    }
                }
                data = JSON.stringify(data);
            }
            else if (contentType == "json") {

                if (document.getElementById('validateJson').checked) {
                    data = document.getElementById('requestJSONText').value;
                }
                else {
                    data = document.getElementById('requestJSONText').value;
                    console.log(data);
                    data = data.substr(1, data.length - 2);
                    console.log(data);
                    data = JSON.stringify({ data });
                    console.log(data);
                    // data = document.getElementById('requestJSONText').value;
                    // console.log(data);
                    // data = JSON.stringify(data);
                    // console.log(data);
                    // data = JSON.parse(data);
                    // console.log(data);
                }
            }
            fetch(inputUrl.value, {
                method: 'POST',
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Accept': 'application/json'
                }
            })
                .then(response => response.text())
                .then((text) => {
                    // responseText.innerText = text;
                    responseCodePrism.innerText = text;
                    Prism.highlightAll();
                })
            sendRequest.innerText = 'Sent';
            inputUrl.setAttribute("disabled", "");
            setTimeout(() => {
                sendRequest.innerText = 'Send Request';
                // responseText.removeAttribute('placeholder');
                // responseText.setAttribute('placeholder', 'Your Response will be shown here!');
                recentUrls.style.display = 'flex';
                let recent = `<li class="list-group-item border-warning clickItems btn text-lg-start">${inputUrl.value}</li>`;
                document.querySelector("#recentUrls>div>ul").innerHTML += (recent);
                let clickItems = document.getElementsByClassName('clickItems');
                inputUrl.value = "";
                for (item of clickItems) {
                    item.addEventListener('click', (e) => {
                        inputUrl.value = e.target.innerText;
                        e.target.remove();
                        if (document.querySelector("#recentUrls>div>ul").innerText == "") {
                            recentUrls.style.display = "none";
                            // responseText.innerText = "";
                            responseCodePrism.innerText = "Your Response will be shown here!";
                        }
                    })
                }
                inputUrl.removeAttribute("disabled", "");
            }, 2500);
        }
        else {
            setTimeout(() => {
                sendRequest.innerText = 'Failed';
                // responseText.removeAttribute('placeholder');
                // responseText.setAttribute('placeholder', 'Your Url is not valid! Please Check the Url');
                responseCodePrism.innerText = "Your Url is not valid! Please Check the Url";
                inputUrl.setAttribute("disabled", "");
                setTimeout(() => {
                    sendRequest.innerText = 'Send Request';
                    // responseText.removeAttribute('placeholder');
                    // responseText.setAttribute('placeholder', 'Your Response will be shown here!');
                    responseCodePrism.innerText = "Your Response will be shown here!";
                    inputUrl.removeAttribute("disabled", "");
                }, 2500);
            }, 2000);

        }
    }
})
// When User Clicks On ClearAll Button content written in RequestJsonBox or RequestCustomParameterBox gets reset or blank
clearAll.addEventListener('click', () => {
    let contentType = document.querySelector("input[name='contentType']:checked").value;
    let inputUrl = document.getElementById('inputUrl');
    if (contentType == 'json') {
        document.getElementById('requestJSONText').value = "";
        document.getElementById('validateJson').checked = false;
        inputUrl.value = "";
        // responseText.value = "";
        responseCodePrism.innerText = "Your Response will be shown here!";
    }
    else if (contentType == 'params') {
        inputUrl.value = "";
        // responseText.value = "";
        responseCodePrism.innerText = "Your Response will be shown here!";
        addedParams.innerText = "";
        deletedParam = 0;
        addedParamCount = 0;
        document.getElementById('parameterKey1').value = "";
        document.getElementById('parameterValue1').value = "";
    }
}) 
console.log('This is a alarm clock app.js file');

// Grabbing the todayDate, currentTime, AmPm, Card, AmPmCheck
let todayDate = document.getElementById('todayDate');
let currentTime = document.getElementById('currentTime');
let AmPm = document.getElementById('AmPm');
let Card = document.getElementById('card');
let AmPmCheck = document.getElementById('AmPmCheck');

// To show Current Date & Time
let date = new Date();
let day = date.getDay();
// console.log(day);
let toDay;
switch (day) {
    case 0:
        toDay = "Sunday";
        break;
    case 1:
        toDay = "Monday";
        break;
    case 2:
        toDay = "Tuesday";
        break;
    case 3:
        toDay = "Wednesday";
        break;
    case 4:
        toDay = "Thursday";
        break;
    case 5:
        toDay = "Friday";
        break;
    case 6:
        toDay = "Saturday";
        break;

    default:
        break;
}
let month = date.getMonth();
// console.log(month);
let toMonth;
switch (month) {
    case 0:
        toMonth = "January";
        break;
    case 1:
        toMonth = "February";
        break;
    case 2:
        toMonth = "March";
        break;
    case 3:
        toMonth = "April";
        break;
    case 4:
        toMonth = "May";
        break;
    case 5:
        toMonth = "June";
        break;
    case 6:
        toMonth = "July";
        break;
    case 7:
        toMonth = "August";
        break;
    case 8:
        toMonth = "September";
        break;
    case 9:
        toMonth = "October";
        break;
    case 10:
        toMonth = "November";
        break;
    case 11:
        toMonth = "December";
        break;

    default:
        break;
}

// console.log(toDay);
// console.log(toMonth);
todayDate.innerText = `Today's Date --> ${toDay} - ${date.getDate()} ${toMonth} ${date.getFullYear()}`;
// console.log(date);
// console.log(typeof date);
setInterval(updateTime, 1000);

function updateTime() {
    let dated = new Date();
    currentTime.innerText = `Current Time --> ${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()} `;
    let houred = dated.getHours();
    if (houred >= 12) {
        AmPm.innerText = 'P.M.';
    }
    else {
        AmPm.innerText = 'A.M.';
    }
    // console.log(houred);
    // console.log(typeof houred);
}

// Creating alert function

function alert(type, boldMessage, backMessage) {
    // console.log("Alert function");
    let alertbox = document.getElementById("alertbox");
    let msg = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong> ${boldMessage} </strong> ${backMessage} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times</span></button>
    </div>`;
    alertbox.innerHTML = msg;
    setTimeout(() => {
        alertbox.innerHTML = ``;
    }, 3000);
}

// Taking input alarmDate if user want to set alarm for another date
let dateFormat = document.getElementById('dateFormat');
if (dateFormat.value == "within24") {
    document.getElementById('dateInput').removeAttribute("class");
    document.getElementById('dateInput').setAttribute("class", "input-group mb-3 justify-content-center d-none");
    fullalarmClock();
}
dateFormat.addEventListener('change', () => {
    if (dateFormat.value == "chooseDate") {
        document.getElementById('dateInput').removeAttribute("class");
        document.getElementById('dateInput').setAttribute("class", "input-group mb-3 justify-content-center");
        let setAlarm = document.getElementById('setAlarm');
        setAlarm.addEventListener('click', () => {
            let alarmDate = document.getElementById('alarmDate');
            if (alarmDate.value == "") {
                alert('warning', "Please! Enter Date !!! ", "to set alarm for the date")
            }
            else {
                reg = /(^[23][0-9][0-9][0-9])-([0][0-9]|[1][012])-([0][0-9]|[1][0-9]|[2][0-9]|[3][01])$/
                if (reg.test(alarmDate.value)) {
                    if (alarmDate.value.substr(5, 2) == 00 || alarmDate.value.substr(8, 2) == 00) {
                        alert('danger', 'Alarm Un-successfull !!! ', 'Alarm is not set - Please give proper date to set alarm')
                    }
                    else {
                        let matchableDatevalue = MatchableDate(alarmDate.value);
                        console.log("MatchbleDate Value is ", matchableDatevalue);
                        alarmDateClock(matchableDatevalue);
                    }
                }
                else {
                    alert('danger', 'Alarm Un-successfull !!! ', 'Alarm is not set - Please give proper date to set alarm')
                }
            }
        })
    }
    else if (dateFormat.value == "within24") {
        document.getElementById('dateInput').removeAttribute("class");
        document.getElementById('dateInput').setAttribute("class", "input-group mb-3 justify-content-center d-none");
        fullalarmClock();
    }
})

// Making function to match entered Date with current Date to ring alarm
function alarmDateClock(dateCheck) {
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth();
    let dateDate = date.getDate();
    let matchDate = `${dateYear}-${dateMonth}-${dateDate}`;
    console.log("MatchDate is ", matchDate);
    if (matchDate == dateCheck) {
        fullalarmClock();
    }
}

function fullalarmClock() {
    // Without selecting Time Format
    setAlarm.addEventListener('click', () => {
        alert('warning', 'Alarm cannot be set !!! ', 'Please choose the Time Format to set the alarm ');
    })

    // To enable radio button's for 12-Hour Format & Checking validation accordingly

    let timeFormat = document.getElementById('timeFormat');
    timeFormat.addEventListener('change', () => {
        // console.log(timeFormat.value);
        if (timeFormat.value == 12) {
            // AM = document.getElementById('AM');
            // PM = document.getElementById('PM');
            document.getElementById("AM").removeAttribute("disabled");
            document.getElementById("PM").removeAttribute("disabled");
            document.getElementById("AmPmCheck").removeAttribute("class");
            document.getElementById("AmPmCheck").setAttribute("class", "input-group mb-2 justify-content-center");
            // Validation of Input Time of Alarm
            let alarmTime = document.getElementById('alarmTime');
            let setAlarm = document.getElementById('setAlarm');
            setAlarm.addEventListener('click', () => {
                let regex = /^([0][0-9]|1[0-2]):([0-5][0-9]):([0-5][0-9])$/;
                if (regex.test(alarmTime.value)) {
                    if (document.getElementById("AM").checked) {
                        // console.log((`The string "${alarmTime.value}" matches the exression ${regex.source} `));
                        // Default 24 hour format - Time for AM
                        // Setting alarm
                        alarmSet12AM(alarmTime.value);
                    }
                    else if (document.getElementById("PM").checked) {
                        // console.log((`The string "${alarmTime.value}" matches the exression ${regex.source} `));
                        // Default 24 hour format - Time for PM
                        // Setting alarm
                        alarmSet12PM(alarmTime.value);
                    }
                    else {
                        alert('warning', 'Alarm cannot be set !!! ', 'Please Choose whether A.M. or P.M. ! ')
                    }
                }
                else {
                    alert('danger', 'Alarm Un-successfull !!! ', 'Alarm is not set - Please give proper time to set alarm')
                    // console.log((`The string "${alarmTime}" does not match the exression ${regex.source} `));
                }
            })
        }
        else if (timeFormat.value == 24) {
            document.getElementById("AM").setAttribute("disabled", "");
            document.getElementById("PM").setAttribute("disabled", "");
            document.getElementById("AmPmCheck").removeAttribute("class");
            document.getElementById("AmPmCheck").setAttribute("class", "input-group mb-2 justify-content-center d-none");
            // Validation of Input Time of Alarm
            let alarmTime = document.getElementById('alarmTime');
            let setAlarm = document.getElementById('setAlarm');
            setAlarm.addEventListener('click', () => {
                let regex = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
                if (regex.test(alarmTime.value)) {
                    alert('success', 'Alarm Successfull !!! ', 'Alarm is set successfully');
                    // console.log((`The string "${alarmTime.value}" matches the exression ${regex.source} `));
                    alarmSet24(alarmTime.value);
                }
                else {
                    alert('danger', 'Alarm Un-successfull !!! ', 'Alarm is not set - Please give proper time to set alarm');
                    // console.log((`The string "${alarmTime}" does not match the exression ${regex.source} `));
                }
            })
        }
        else {
            document.getElementById("AM").setAttribute("disabled", "");
            document.getElementById("PM").setAttribute("disabled", "");
            document.getElementById("AmPmCheck").removeAttribute("class");
            document.getElementById("AmPmCheck").setAttribute("class", "input-group mb-2 justify-content-center d-none");
            // Validation of Input Time of Alarm
            let alarmTime = document.getElementById('alarmTime');
            let setAlarm = document.getElementById('setAlarm');
            setAlarm.addEventListener('click', () => {
                let regex = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
                if (regex.test(alarmTime.value)) {
                    alert('warning', 'Alarm cannot be set !!! ', 'Please choose the Time Format to set the alarm ');
                    // console.log((`The string "${alarmTime.value}" matches the exression ${regex.source} `));
                }
                else {
                    alert('danger', 'Alarm Un-successfull !!! ', 'Alarm is not set - Please give proper time to set alarm');
                    // console.log((`The string "${alarmTime}" does not match the exression ${regex.source} `));
                }
            })
        }
    })
}

// Audio Playing Function
function play() {
    var audio = new Audio('Soda.mp3');
    audio.play();
}

// Making Card
function cardDOM(timeDOM) {
    let str = `<div class="card" style="width: 18rem;">
    <div class="card-body input-group m-2 justify-content-center">
        <h5 class="card-title text-decoration-underline">Upcoming Alarm</h5>
        <h4 class="card-text d-block">At ${timeDOM}</h4>
        <button class="btn btn-primary d-block">Delete Alarm</button>
    </div>
</div>`;
    Card.innerHTML += str;
}

// Clear Card
function cardclearDOM() {
    let str = ``;
    Card.innerHTML = str;
}

// To make input Time MatchableTime Function
function MatchableTime(timeAll) {
    // console.log(timeAll.charAt(3));
    // console.log(timeAll.charAt(6));
    if (timeAll.charAt(3) == 0) {
        let timeAllone = timeAll.substr(0, 3)
        let timeAlltwo = timeAll.substr(4, 4)
        timeAll = timeAllone + timeAlltwo;
        // console.log(timeAll);
        // console.log(timeAllone);
        // console.log(timeAlltwo);
        if (timeAll.charAt(5) == 0) {
            let timeAlloneone = timeAll.substr(0, 5)
            let timeAllonetwo = timeAll.substr(6, 1)
            timeAll = timeAlloneone + timeAllonetwo;
            // console.log(timeAlloneone);
            // console.log(timeAllonetwo);
            // console.log(timeAll);
            return timeAll;
        }
        else {
            return timeAll;
        }
    }
    else if (timeAll.charAt(6) == 0) {
        let timeAlltwoone = timeAll.substr(0, 6)
        let timeAlltwotwo = timeAll.substr(7, 1)
        timeAll = timeAlltwoone + timeAlltwotwo;
        // console.log(timeAlltwoone);
        // console.log(timeAlltwotwo);
        // console.log(timeAll);
        return timeAll;
    }
    else {
        timeAll = timeAll;
        // console.log(timeAll);
        return timeAll;
    }
}
// To make input Date MatchableDate Function
function MatchableDate(dateAll) {
    // console.log(dateAll.charAt(5));
    // console.log(dateAll.charAt(8));
    if (dateAll.charAt(5) == 0) {
        let dateAllone = dateAll.substr(0, 5);
        let stageOne = dateAll.charAt(6);
        let stageTwo = Number(stageOne);
        let dateAlltwo = --stageTwo;
        let dateAllthree = dateAll.substr(7, 3);
        dateAll = dateAllone + dateAlltwo.toString() + dateAllthree;
        // console.log(dateAll);
        // console.log(dateAllone);
        // console.log(dateAlltwo);
        // console.log(dateAllthree);
        if (dateAll.charAt(7) == 0) {
            let dateAlloneone = dateAll.substr(0, 7);
            let dateAllonetwo = dateAll.substr(8, 1);
            dateAll = dateAlloneone + dateAllonetwo;
            // console.log(dateAlloneone);
            // console.log(dateAllonetwo);
            // console.log(dateAll);
            return dateAll;
        }
        else {
            return dateAll;
        }
    }
    else {
        if (dateAll.substr(5, 2) == 10) {
            let dateAlloneten = dateAll.substr(0, 5);
            let stageOneten = dateAll.substr(5, 2);
            let stageTwoten = Number(stageOneten);
            let dateAlltwoten = --stageTwoten;
            let dateAllthreeten = dateAll.substr(7, 3);
            dateAll = dateAlloneten + dateAlltwoten.toString() + dateAllthreeten;
            // console.log(dateAll);
            // console.log(dateAlloneten);
            // console.log(dateAlltwoten);
            // console.log(dateAllthreeten);
            if (dateAll.charAt(7) == 0) {
                let dateAlltwoone = dateAll.substr(0, 7);
                let dateAlltwotwo = dateAll.substr(8, 1);
                dateAll = dateAlltwoone + dateAlltwotwo;
                // console.log(dateAlltwoone);
                // console.log(dateAlltwotwo);
                // console.log(dateAll);
                return dateAll;
            }
            else {
                return dateAll;
            }
        }
        else if (dateAll.substr(5, 2) == 11) {
            let dateAlloneeleven = dateAll.substr(0, 5);
            let stageOneeleven = dateAll.substr(5, 2);
            let stageTwoeleven = Number(stageOneeleven);
            let dateAlltwoeleven = --stageTwoeleven;
            let dateAllthreeeleven = dateAll.substr(7, 3);
            dateAll = dateAlloneeleven + dateAlltwoeleven.toString() + dateAllthreeeleven;
            console.log(dateAll);
            // console.log(dateAlloneeleven);
            // console.log(dateAlltwoeleven);
            // console.log(dateAllthreeeleven);
            if (dateAll.charAt(8) == 0) {
                let dateAlltwoone = dateAll.substr(0, 8);
                let dateAlltwotwo = dateAll.substr(9, 1);
                dateAll = dateAlltwoone + dateAlltwotwo;
                // console.log(dateAlltwoone);
                // console.log(dateAlltwotwo);
                // console.log(dateAll);
                return dateAll;
            }
            else {
                return dateAll;
            }
        }
        else if (dateAll.substr(5, 2) == 12) {
            let dateAllonetwelve = dateAll.substr(0, 5);
            let stageOnetwelve = dateAll.substr(5, 2);
            let stageTwotwelve = Number(stageOnetwelve);
            let dateAlltwotwelve = --stageTwotwelve;
            let dateAllthreetwelve = dateAll.substr(7, 3);
            dateAll = dateAllonetwelve + dateAlltwotwelve.toString() + dateAllthreetwelve;
            // console.log(dateAll);
            // console.log(dateAllonetwelve);
            // console.log(dateAlltwotwelve);
            // console.log(dateAllthreetwelve);
            if (dateAll.charAt(8) == 0) {
                let dateAlltwoone = dateAll.substr(0, 8);
                let dateAlltwotwo = dateAll.substr(9, 1);
                dateAll = dateAlltwoone + dateAlltwotwo;
                // console.log(dateAlltwoone);
                // console.log(dateAlltwotwo);
                // console.log(dateAll);
                return dateAll;
            }
            else {
                return dateAll;
            }
        }
    }
}

// Alarm for 12 Hour Format AM
let matchTime12AM;
let matchTime12AMvaluecheck = 0;
let time12AMhour
function alarmSet12AM(time12AM) {
    time12AM = MatchableTime(time12AM);
    // console.log(time12AM);
    if (time12AM.charAt(0) == 0) {
        time12AM = time12AM.substr(1, --time12AM.length);
        // console.log(time12AM);
        matchTime12AMvaluecheck = 1;
    }
    time12AMDOM = `${time12AM} AM `;
    if (matchTime12AMvaluecheck == 1) {
        time12AMhour = Number(time12AM.substr(0, 1));

    }
    else {
        time12AMhour = Number(time12AM.substr(0, 2));
    }
    if (time12AMhour < 12) {
        alert('success', 'Alarm Successfull !!! ', 'Alarm is set successfully')
        cardDOM(time12AMDOM);
        // console.log('12 Hour Format AM alarm to be set ', time12AM);
        setInterval(updatematchTime12AM, 1000);
        function updatematchTime12AM() {
            let dated = new Date();
            if (AmPm.innerText == 'A.M.') {
                matchTime12AM = `${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()}`;
                // console.log(matchTime12AM);
                // console.log(typeof matchTime12AM);
                if (matchTime12AM == time12AM) {
                    play();
                    cardclearDOM();
                }
            }
            else if (AmPm.innerText == 'P.M.') {
                if (AmPm.innerText == 'A.M.') {
                    matchTime12AM = `${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()}`;
                    // console.log(matchTime12AM);
                    // console.log(typeof matchTime12AM);
                    if (matchTime12AM == time12AM) {
                        play();
                        cardclearDOM();
                    }
                }
            }
        }
    }
    else {
        alert('warning', '00 AM cannot be made 12 AM !!! ', 'Please write 00 AM instead 12 AM');
    }
}

// Alarm for 12 Hour Format PM
let matchTime12PM;
function alarmSet12PM(time12PM) {
    time12PM = `${MatchableTime(time12PM)}`;
    time12PMDOM = `${time12PM} PM `;
    let time12PMhour = Number(time12PM.substr(0, 2));
    // console.log(time12PMhour);
    if (time12PMhour != 0) {
        alert('success', 'Alarm Successfull !!! ', 'Alarm is set successfully')
        cardDOM(time12PMDOM);
        // console.log('12 Hour Format PM alarm to be set ', time12PM);
        setInterval(updatematchTime12PM, 1000);
        function updatematchTime12PM() {
            let dated = new Date();
            let matchTime12PMhour = dated.getHours();
            let matchTime12PMhoured;
            // console.log(time12PM);
            // console.log(matchTime12PMhour);
            // console.log(typeof matchTime12PMhour);
            // console.log(matchTime12PM);
            // console.log(typeof matchTime12PM);
            if (AmPm.innerText == 'P.M.') {
                if (matchTime12PMhour == 12) {
                    matchTime12PM = `${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()}`;
                    if (matchTime12PM == time12PM) {
                        play();
                        cardclearDOM();
                    }
                }
                else {
                    switch (matchTime12PMhour) {
                        case 13:
                            matchTime12PMhoured = 01;
                            break;
                        case 14:
                            matchTime12PMhoured = 02;
                            break;
                        case 15:
                            matchTime12PMhoured = 05;
                            break;
                        case 16:
                            matchTime12PMhoured = 04;
                            break;
                        case 17:
                            matchTime12PMhoured = 05;
                            break;
                        case 18:
                            matchTime12PMhoured = 06;
                            break;
                        case 19:
                            matchTime12PMhoured = 07;
                            break;
                        case 20:
                            matchTime12PMhoured = 08;
                            break;
                        case 21:
                            matchTime12PMhoured = 09;
                            break;
                        case 22:
                            matchTime12PMhoured = 10;
                            break;
                        case 23:
                            matchTime12PMhoured = 11;
                            break;
                        default:
                            break;
                    }
                    matchTime12PM = `${matchTime12PMhoured}:${dated.getMinutes()}:${dated.getSeconds()}`;
                    if (matchTime12PM == time12PM) {
                        console.log('Matches');
                        play();
                        cardclearDOM();
                    }
                }
            }
            else if (AmPm.innerText == 'A.M.') {
                if (AmPm.innerText == 'P.M.') {
                    if (matchTime12PMhour == 12) {
                        matchTime12PM = `${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()}`;
                        if (matchTime12PM == time12PM) {
                            play();
                            cardclearDOM();
                        }
                    }
                    else {
                        switch (matchTime12PMhour) {
                            case 13:
                                matchTime12PMhoured = 01;
                                break;
                            case 14:
                                matchTime12PMhoured = 02;
                                break;
                            case 15:
                                matchTime12PMhoured = 05;
                                break;
                            case 16:
                                matchTime12PMhoured = 04;
                                break;
                            case 17:
                                matchTime12PMhoured = 05;
                                break;
                            case 18:
                                matchTime12PMhoured = 06;
                                break;
                            case 19:
                                matchTime12PMhoured = 07;
                                break;
                            case 20:
                                matchTime12PMhoured = 08;
                                break;
                            case 21:
                                matchTime12PMhoured = 09;
                                break;
                            case 22:
                                matchTime12PMhoured = 10;
                                break;
                            case 23:
                                matchTime12PMhoured = 11;
                                break;
                            default:
                                break;
                        }
                        matchTime12PM = `${matchTime12PMhoured}:${dated.getMinutes()}:${dated.getSeconds()}`;
                        if (matchTime12PM == time12PM) {
                            // console.log('Play Sound');
                            play();
                            cardclearDOM();
                        }
                    }
                }
            }
        }
    }
    else {
        alert('warning', '12 PM cannot be made 00 PM !!! ', 'Please write 12 PM instead 00 PM');
    }
}

// Alarm for 24 Hour Format

function alarmSet24(time24) {
    time24 = MatchableTime(time24);
    time24DOM = `${time24}`;
    // console.log('24 Hour Format alarm to be set ', time24);
    cardDOM(time24);
    setInterval(updatematchTime24, 1000);
    function updatematchTime24() {
        let dated = new Date();
        let matchTime24 = `${dated.getHours()}:${dated.getMinutes()}:${dated.getSeconds()}`;
        // console.log(matchTime24);
        // console.log(typeof matchTime24);
        if (matchTime24 == time24) {
            play();
            cardclearDOM();
        }
    }
}

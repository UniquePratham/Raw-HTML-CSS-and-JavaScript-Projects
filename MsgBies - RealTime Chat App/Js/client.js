const socket = io('http://localhost:8000', { transports: ['websocket'] });
const inputMessage = document.getElementById('inputMessage');
const btn = document.getElementById('btn');
const messageContainer = document.querySelector('.container');
const headingnavContainer = document.querySelector('.headingnavContainer');
const title = document.querySelector('title');
// const playAudio = (music) => {
//     var audio = new Audio(music);
//     audio.play();
// }
let finalGender;
const process1 = (n, g) => {
    socket.emit('genderDecide', g);
    socket.emit('newuserJoined', n);
}
const displayName = (ge, co, nam) => {
    headingnavContainer.style.display = "flex";
    headingnavContainer.innerHTML = `<i class="fa fa-2x fa-${ge} ${co}" id="faNav"></i>
    <h2 class="navHeading">Hello, ${nam}</h2>`;
    title.innerText = `Hello, ${nam} - MsgBies`;
}
const Name = prompt('Enter Your Name to Join !');
if (Name !== null) {
    let Gender = prompt("Enter 'M' for Male or 'F' for Female !");
    if (Gender.toLowerCase() == 'm' || Gender.toLowerCase() == 'male') {
        finalGender = "Male";
        displayName('male', 'maleBlue', Name);
        process1(Name, finalGender);
    }
    else if (Gender.toLowerCase() == 'f' || Gender.toLowerCase() == 'female') {
        finalGender = "Female";
        displayName('female', 'femalePink', Name);
        process1(Name, finalGender);
    }
    else {
        document.location.reload();
    }
}
else {
    document.location.reload();
}
const append = (message, position, trueFalse, songName) => {
    const messageElement = document.createElement('div');
    if (trueFalse === true) {
        messageElement.classList.add('center');
    }
    const messageinsideElement = document.createElement('div');
    messageElement.append(messageinsideElement);
    messageinsideElement.innerHTML = message;
    messageinsideElement.classList.add('message');
    messageinsideElement.classList.add(position);
    messageContainer.append(messageElement);
    // playAudio(songName);
    var audio = new Audio(songName);
    audio.play();
}
socket.on('userJoined', data => {
    // playAudio('Img&Audio/joinedChat.mp3');
    if (data.finalgender == 'Male') {
        append(`<i class="fa fa-male maleBlue"></i>&nbsp;New User&nbsp;<i class="fa fa-arrow-right maleBlue"></i>&nbsp;<b>${data.Name}</b> Joined Chat`, 'center', true, 'Img&Audio/joinedChat.mp3');
    }
    else {
        append(`<i class="fa fa-female femalePink"></i>&nbsp;New User&nbsp;<i class="fa fa-arrow-right femalePink"></i>&nbsp;<b>${data.Name}</b> Joined Chat`, 'center', true, 'Img&Audio/joinedChat.mp3');
    }
})

socket.on('messageReceived', data => {
    append(`<b>${data.Name}</b>:&nbsp;${data.Message}`, 'left', false, 'Img&Audio/newMessage.mp3');
    // playAudio('Img&Audio/newMessage.mp3');
});
socket.on('lefttheChat', data => {
    // playAudio('Img&Audio/lefttheChat.mp3');
    if (data.Gender == "Male") {
        append(`<i class="fa fa-male maleBlue"></i>&nbsp;${data.Name} Left the Chat ...`, 'center', true, 'Img&Audio/lefttheChat.mp3');
    }
    else {
        append(`<i class="fa fa-female femalePink"></i>&nbsp;${data.Name} Left the Chat ...`, 'center', true, 'Img&Audio/lefttheChat.mp3');
    }
});

btn.addEventListener('click', () => {
    if (inputMessage.value == "") {
        inputMessage.removeAttribute('placeholder')
        inputMessage.setAttribute("placeholder", "Blank Message Cannot Be Sent !");
        setTimeout(() => {
            inputMessage.removeAttribute('placeholder')
            inputMessage.setAttribute("placeholder", "Enter Your Message !");
        }, 1500);
    }
    else {
        const Message = inputMessage.value;
        append(`<b>You</b>:&nbsp;${Message}`, 'right', false, "");
        socket.emit('messageSend', Message);
        inputMessage.value = "";
    }
})
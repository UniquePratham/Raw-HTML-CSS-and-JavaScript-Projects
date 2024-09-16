var audio = document.createElement('audio');
audio.setAttribute('src', 'Resource/sound.mp3');
const car = document.getElementById('car');
audio.loop = true;
car.addEventListener('click', () => {
    audio.play();
})
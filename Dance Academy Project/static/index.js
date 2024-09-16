setInterval(() => {
    document.getElementById('Bright').style.mixBlendMode = 'hard-light';
    setTimeout(() => {
        document.getElementById('Bright').style.mixBlendMode = 'normal'
    }, 1500);
}, 1000);
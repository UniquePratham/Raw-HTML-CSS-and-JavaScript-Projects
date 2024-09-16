setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    if (htime >= 18 || htime <= 6) {
        dayNight.style.background = 'url(PM.png) no-repeat';
        dayNight.style.backgroundSize = '100%';

    }
    else {
        dayNight.style.background = 'url(AM.png) no-repeat';
        dayNight.style.backgroundSize = '100%';
        dayNight.style.height = '8vw';
        dayNight.style.width = '8vw';
        dayNight.style.top = '33%';
        dayNight.style.left = '41.2%';
    }
    if (htime >= 12) {
        ampm.innerHTML = '<b>PM</b>';
    }
    else {
        ampm.innerHTML = '<b>AM</b>';
    }
}, 1000);
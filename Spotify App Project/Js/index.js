console.log("Welcome to My Version of Spotify Clone Project");
//Assigning the variables and data required
const songList = [
  {
    songName: "Dilhara-SwaggerSharma",
    filePath: "Resource/SongAudio/1-Dilhara-SwaggerSharma.mp3",
    coverPath: "Resource/SongCover/1-Dilhara-SwaggerSharma.jpg",
    songDuration: "05:42",
  },
  {
    songName: "Rabba-HeroPanti",
    filePath: "Resource/SongAudio/2-Rabba-HeroPanti.mp3",
    coverPath: "Resource/SongCover/2-Rabba-HeroPanti.jpg",
    songDuration: "04:53",
  },
  {
    songName: "Chaand Baaliyan-Adtiya A",
    filePath: "Resource/SongAudio/3-Chaand Baaliyan-Aditya A.mp3",
    coverPath: "Resource/SongCover/3-Chaand Baaliyan-Adtiya A.jpg",
    songDuration: "01:43",
  },
  {
    songName: "Tera Fitoor-Genius",
    filePath: "Resource/SongAudio/4-Tera Fitoor-Genius.mp3",
    coverPath: "Resource/SongCover/4-Tera Fitoor-Genius.jpg",
    songDuration: "05:33",
  },
  {
    songName: "Dil Meri Na Sune-Genius",
    filePath: "Resource/SongAudio/5-Dil Meri Na Sune-Genius.mp3",
    coverPath: "Resource/SongCover/5-Dil Meri Na Sune-Genius.jpg",
    songDuration: "04:22",
  },
  {
    songName: "Khairiyat Pucho-Chhichhore",
    filePath: "Resource/SongAudio/6-Khairiyat Pucho-Chhichhore.mp3",
    coverPath: "Resource/SongCover/6-Khairiyat Pucho-Chhichhore.jpg",
    songDuration: "04:58",
  },
  {
    songName: "Kaun Tujhe-MSDTheUntoldStory",
    filePath: "Resource/SongAudio/7-Kaun Tujhe-MSDTheUntoldStory.mp3",
    coverPath: "Resource/SongCover/7-Kaun Tujhe-MSDTheUntoldStory.jpg",
    songDuration: "03:35",
  },
  {
    songName: "Raataan Lambiyan-Shershaah",
    filePath: "Resource/SongAudio/8-Raataan Lambiyan-Shershaah.mp3",
    coverPath: "Resource/SongCover/8-Raataan Lambiyan-Shershaah.jpg",
    songDuration: "02:31",
  },
  {
    songName: "Jaan Ban Gaye-Khuda Haafiz",
    filePath: "Resource/SongAudio/9-Jaan Ban Gaye-KhudaHaafiz.mp3",
    coverPath: "Resource/SongCover/9-Jaan Ban Gaye-KhudaHaafiz.jpg",
    songDuration: "03:43",
  },
  {
    songName: "Diljaniya-WrongNumber",
    filePath: "Resource/SongAudio/10-Diljaniya-WrongNumber.mp3",
    coverPath: "Resource/SongCover/10-Diljaniya-WrongNumber.jpg",
    songDuration: "04:16",
  },
  {
    songName: "Mere Samnewali Khidki-Ashish",
    filePath:
      "Resource/SongAudio/11-Mere Samne Wali Khidki Mein-AshishPatil.mp3",
    coverPath:
      "Resource/SongCover/11-Mere Samne Wali Khidki Mein-AshishPatil.jpg",
    songDuration: "02:32",
  },
  {
    songName: "Kajra Mohabbat Wala-AshishPatil",
    filePath: "Resource/SongAudio/12-Kajra Mohabbat Wala-AshishPatil.mp3",
    coverPath: "Resource/SongCover/12-Kajra Mohabbat Wala-AshishPatil.jpg",
    songDuration: "02:09",
  },
  {
    songName: "Maine Jana Mujh Mein-GutarGu",
    filePath: "Resource/SongAudio/13-Maine Jana Mujh Mein Tu Hai-GutarGu.mp3",
    coverPath: "Resource/SongCover/13-Maine Jana Mujh Mein Tu Hai-GutarGu.jpg",
    songDuration: "02:12",
  },
  {
    songName: "Ishq Na Ho Jaye-MFEO",
    filePath: "Resource/SongAudio/14-Ishq Na Ho Jaye-MaidforEachOther.mp3",
    coverPath: "Resource/SongCover/14-Ishq Na Ho Jaye-MaidforEachOther.jpg",
    songDuration: "04:38",
  },
  {
    songName: "Heeriye-ArijitSingh",
    filePath: "Resource/SongAudio/15-Heeriye JasleenRoyal-ft-ArijitSingh.mp3",
    coverPath: "Resource/SongCover/15-Heeriye JasleenRoyal-ft-ArijitSingh.jpg",
    songDuration: "03:19",
  },
  {
    songName: "Apna Bana Le Piya-Bhediya",
    filePath: "Resource/SongAudio/16-Apna Bana Le Piya-ArijitSingh-Bhediya.mp3",
    coverPath:
      "Resource/SongCover/16-Apna Bana Le Piya-ArijitSingh-Bhediya.jpg",
    songDuration: "03:24",
  },
  {
    songName: "Mahiye Jinna Sohna-DarshanRaval",
    filePath:
      "Resource/SongAudio/17-Mahiye Jinna Sohna-DarshanRaval-Album2.0.mp3",
    coverPath:
      "Resource/SongCover/17-Mahiye Jinna Sohna-DarshanRaval-Album2.0.jpg",
    songDuration: "03:05",
  },
  {
    songName: "Mera Joh Safar Hai-IqlipseNova",
    filePath: "Resource/SongAudio/18-Mera Joh Safar Hai-IqlipseNova.mp3",
    coverPath: "Resource/SongCover/18-Mera Joh Safar Hai-IqlipseNova.jpg",
    songDuration: "04:20",
  },
  {
    songName: "Tere Vaaste-ZaraHatkeZaraBachke",
    filePath: "Resource/SongAudio/19-Tere Vaaste-ZaraHatkeZaraBachke.mp3",
    coverPath: "Resource/SongCover/19-Tere Vaaste-ZaraHatkeZaraBachke.jpg",
    songDuration: "03:23",
  },
  {
    songName: "Phir Aur Kya Chahiye-ZHZB",
    filePath:
      "Resource/SongAudio/20-Phir Aur Kya Chahiye-ZaraHatkeZaraBachke.mp3",
    coverPath:
      "Resource/SongCover/20-Phir Aur Kya Chahiye-ZaraHatkeZaraBachke.jpg",
    songDuration: "04:38",
  },
  {
    songName: "Milan Abhi Adha Adhura H-Vivah",
    filePath: "Resource/SongAudio/21-Milan Abhi Aadha Adhura Hai-Vivah.mp3",
    coverPath: "Resource/SongCover/21-Milan Abhi Aadha Adhura Hai-Vivah.jpg",
    songDuration: "06:05",
  },
  {
    songName: "Mera Joh Safar Hai 2.0-IqlipseNova",
    filePath: "Resource/SongAudio/22-Mera Joh Safar Hai 2.0-IqlipseNova.mp3",
    coverPath: "Resource/SongCover/22-Mera Joh Safar Hai 2.0-IqlipseNova.jpg",
    songDuration: "02:16",
  },
  {
    songName: "Chaleya-Jawan",
    filePath: "Resource/SongAudio/23-Chaleya-Jawan.mp3",
    coverPath: "Resource/SongCover/23-Chaleya-Jawan.jpg",
    songDuration: "03:40",
  },
  // {
  //   songName: "",
  //   filePath: "Resource/SongAudio/.mp3",
  //   coverPath: "Resource/SongCover/.jpg",
  //   songDuration: "",
  // },
];
let songIndex = 0;
let savedCurrentTime = 0;
let progress;
let mySpeakerInterval;
let normalloopSongInverval;
let normalautoPlayInterval;
let shuffledSongList = [];
let issongShuffled = false;
let audioElement = issongShuffled
  ? new Audio(`${shuffledSongList[songIndex].filePath}`)
  : new Audio(`${songList[songIndex].filePath}`);
const favNavStopIcon = document.querySelector(".favNavStopIcon");
const songBar = document.querySelector(".songBar");
const songControlIcons = document.querySelector(".songControlIcons");
const songProgressBar = document.getElementById("songProgressBar");
songProgressBar.style.background = `linear-gradient(90deg, green ${songProgressBar.value}%, white 0%)`;
const masterPlayPause = document.getElementById("masterPlayPause");
const previousSong = document.getElementById("previousSong");
const nextSong = document.getElementById("nextSong");
const Speakers = Array.from(document.getElementsByClassName("Speaker"));
const LeftSpeaker = document.getElementById("Left");
const RightSpeaker = document.getElementById("Right");
const playingContent = document.querySelector(".playingContent");
const playingIcon = document.getElementById("playingIcon");
const playingBarSongTitle = document.querySelector(".playingBarSongTitle");
const playingSongCover = document.querySelector(".playingSongCover");
const startTime = document.getElementById("startTime");
const endTime = document.getElementById("endTime");
const otherFeaturesContent = document.querySelector(".otherFeaturesContent");
const autoPlay = document.getElementById("autoPlay");
const loopSong = document.getElementById("loopSong");
const shuffleList = document.getElementById("shuffleList");
const allsongslistContainer = document.querySelector(".allsongslistContainer");
const musicCasette = document.querySelector(".musicCasette");
if (autoPlay.classList.contains("fa-toggle-on")) {
  autoPlay.style.filter = "none";
  autoPlay.style.color = "forestgreen";
}
// Utility Functions
// Function for the colour of progress Bar
// songProgressBar.oninput = function () {
//     songProgressBar.style.background = `linear-gradient(90deg, green ${songProgressBar.value}%, white 0%)`;
// }
// Function to make all button play

// Function to generate a random number array
function generateRandomArray(length) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(i);
  }

  // Fisher-Yates shuffle algorithm
  for (let i = randomArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomArray[i], randomArray[j]] = [randomArray[j], randomArray[i]];
  }

  return randomArray;
}

const makeallButtonPlay = () => {
  Array.from(document.getElementsByClassName("favsongItemIcon")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
// Function to show all playing Designs
const songShowPlayingDesigns = () => {
  favNavStopIcon.style.setProperty("display", "block", "important");
  songBar.style.display = "flex";
  songControlIcons.style.display = "flex";
  otherFeaturesContent.style.display = "flex";
  autoPlay.style.display = "block";
};
// Function to hide all playing Designs
const songHidePlayingDesigns = () => {
  favNavStopIcon.style.display = "none";
  songBar.style.display = "none";
  songControlIcons.style.display = "none";
  otherFeaturesContent.style.display = "none";
  autoPlay.style.display = "none";
};
const startendTimeControl = () => {
  let mincurrentTime = Math.floor(audioElement.currentTime / 60);
  let seccurrentTime = Math.floor(audioElement.currentTime % 60);
  if (seccurrentTime < 10) {
    seccurrentTime = `0${seccurrentTime}`;
  }
  if (mincurrentTime < 10) {
    mincurrentTime = `0${mincurrentTime}`;
  }
  startTime.innerText = `${mincurrentTime}:${seccurrentTime}`;

  // let minDuration = Math.floor(audioElement.duration / 60);
  // let secDuration = Math.floor(audioElement.duration % 60);
  // endTime.innerText = `${minDuration}:${secDuration}`;
  endTime.innerText = issongShuffled
    ? `${shuffledSongList[songIndex].songDuration}`
    : `${songList[songIndex].songDuration}`;
};
const songProgressBarControlling = () => {
  audioElement.addEventListener("timeupdate", () => {
    // Update Seekbar
    progress = parseInt(
      (audioElement.currentTime / audioElement.duration) * 100
    );
    songProgressBar.value = progress;
    songProgressBar.style.background = `linear-gradient(90deg, green ${songProgressBar.value}%, white 0%)`;
    startendTimeControl();
  });
  songProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (songProgressBar.value * audioElement.duration) / 100;
    startendTimeControl();
  });
};
// Speaker Movement
const SpeakersStartMovement = () => {
  clearInterval(mySpeakerInterval);
  mySpeakerInterval = setInterval(() => {
    LeftSpeaker.style.transform = "scale(0.5)";
    RightSpeaker.style.transform = "scale(0.5)";
    // console.log('1');
    setTimeout(() => {
      LeftSpeaker.style.transform = "scale(1.1)";
      RightSpeaker.style.transform = "scale(1.1)";
      // console.log('2');
    }, 500);
  }, 1000);
};
const SpeakersStopMovement = () => {
  clearInterval(mySpeakerInterval);
};
const showplayingDesignContent = () => {
  if (issongShuffled) {
    playingBarSongTitle.innerText = `${shuffledSongList[songIndex].songName}`;
    playingSongCover.setAttribute(
      "src",
      `${shuffledSongList[songIndex].coverPath}`
    );
    playingSongCover.setAttribute(
      "alt",
      `${shuffledSongList[songIndex].songName}`
    );
  } else {
    playingBarSongTitle.innerText = `${songList[songIndex].songName}`;
    playingSongCover.setAttribute("src", `${songList[songIndex].coverPath}`);
    playingSongCover.setAttribute("alt", `${songList[songIndex].songName}`);
  }
  playingSongCover.style.animation = "rotation 3s infinite linear";
  playingSongCover.style.webkitAnimation = "rotation 3s infinite linear";
  playingSongCover.style.animationFillMode = "forwards";
  setTimeout(() => {
    musicCasette.style.display = "flex";
    playingBarSongTitle.style.display = "block";
    playingIcon.style.display = "block";
  }, 100);
};
const hideplayingDesignContent = () => {
  playingSongCover.style.animation = "";
  playingSongCover.style.webkitAnimation = "";
  playingSongCover.style.animationFillMode = "";
  playingBarSongTitle.style.display = "none";
  playingIcon.style.display = "none";
};
const playingPreviousSong = () => {
  audioElement.pause();
  // songIndex = (songIndex - 1 + songList.length) % songList.length;
  if (issongShuffled) {
    if (songIndex > 0 && songIndex <= shuffledSongList.length - 1) {
      songIndex = songIndex - 1;
    } else if (songIndex <= 0) {
      songIndex = shuffledSongList.length - 1;
    }
  } else {
    if (songIndex > 0 && songIndex <= songList.length - 1) {
      songIndex = songIndex - 1;
    } else if (songIndex <= 0) {
      songIndex = songList.length - 1;
    }
  }
  makeallButtonPlay();
  if (masterPlayPause.classList.contains("fa-play-circle-o")) {
    masterPlayPause.classList.remove("fa-play-circle-o");
    masterPlayPause.classList.add("fa-pause-circle-o");
  }
  document.getElementById(`${songIndex}`).classList.remove("fa-play-circle");
  document.getElementById(`${songIndex}`).classList.add("fa-pause-circle");
  audioElement = issongShuffled
    ? new Audio(`${shuffledSongList[songIndex].filePath}`)
    : new Audio(`${songList[songIndex].filePath}`);
  audioElement.play();
  songProgressBarControlling();
  SpeakersStartMovement();
  showplayingDesignContent();
  autoPLayCheck();
};
const playingNextSong = () => {
  audioElement.pause();
  // songIndex = (songIndex + 1) % songList.length;
  if (issongShuffled) {
    if (songIndex >= 0 && songIndex < shuffledSongList.length - 1) {
      songIndex = songIndex + 1;
    } else if (songIndex >= shuffledSongList.length - 1) {
      songIndex = 0;
    }
  } else {
    if (songIndex >= 0 && songIndex < songList.length - 1) {
      songIndex = songIndex + 1;
    } else if (songIndex >= songList.length - 1) {
      songIndex = 0;
    }
  }

  makeallButtonPlay();
  if (masterPlayPause.classList.contains("fa-play-circle-o")) {
    masterPlayPause.classList.remove("fa-play-circle-o");
    masterPlayPause.classList.add("fa-pause-circle-o");
  }
  document.getElementById(`${songIndex}`).classList.remove("fa-play-circle");
  document.getElementById(`${songIndex}`).classList.add("fa-pause-circle");
  audioElement = issongShuffled
    ? new Audio(`${shuffledSongList[songIndex].filePath}`)
    : new Audio(`${songList[songIndex].filePath}`);
  audioElement.play();
  songProgressBarControlling();
  SpeakersStartMovement();
  showplayingDesignContent();
  autoPLayCheck();
};
const autoPlayStart = () => {
  audioElement.pause();
  // songIndex = (songIndex + 1) % songList.length;
  if (issongShuffled) {
    if (songIndex >= 0 && songIndex < shuffledSongList.length - 1) {
      songIndex = songIndex + 1;
    } else if (songIndex >= shuffledSongList.length - 1) {
      songIndex = 0;
    }
  } else {
    if (songIndex >= 0 && songIndex < songList.length - 1) {
      songIndex = songIndex + 1;
    } else if (songIndex >= songList.length - 1) {
      songIndex = 0;
    }
  }

  makeallButtonPlay();
  if (masterPlayPause.classList.contains("fa-play-circle-o")) {
    masterPlayPause.classList.remove("fa-play-circle-o");
    masterPlayPause.classList.add("fa-pause-circle-o");
  }
  document.getElementById(`${songIndex}`).classList.remove("fa-play-circle");
  document.getElementById(`${songIndex}`).classList.add("fa-pause-circle");
  audioElement = issongShuffled
    ? new Audio(`${shuffledSongList[songIndex].filePath}`)
    : new Audio(`${songList[songIndex].filePath}`);
  audioElement.play();
  songProgressBarControlling();
  showplayingDesignContent();
  SpeakersStartMovement();
  autoPLayCheck();
};
const autoPlayStop = () => {
  makeallButtonPlay();
  audioElement.pause();
  masterPlayPause.classList.remove("fa-pause-circle-o");
  masterPlayPause.classList.add("fa-play-circle-o");
  SpeakersStopMovement();
  hideplayingDesignContent();
  musicCasette.style.display = "flex";
  playingSongCover.style.animation = "";
  playingSongCover.style.webkitAnimation = "";
  playingSongCover.style.animationFillMode = "";
  playingBarSongTitle.style.display = "block";
  autoPLayCheck();
};
const autoPLayCheck = () => {
  clearInterval(normalautoPlayInterval);
  normalautoPlayInterval = setInterval(() => {
    if (autoPlay.classList.contains("fa-toggle-on")) {
      if (
        audioElement.ended ||
        audioElement.currentTime == audioElement.duration
      ) {
        autoPlayStart();
      }
    } else if (autoPlay.classList.contains("fa-toggle-off")) {
      if (
        audioElement.ended ||
        audioElement.currentTime == audioElement.duration
      ) {
        autoPlayStop();
        clearInterval(normalautoPlayInterval);
      }
    }
  }, 2000);
};
const loopSongStart = () => {
  clearInterval(normalloopSongInverval);
  normalloopSongInverval = setInterval(() => {
    if (
      audioElement.ended ||
      audioElement.currentTime == audioElement.duration
    ) {
      setTimeout(() => {
        audioElement.play();
        songProgressBarControlling();
        SpeakersStartMovement();
        playingSongCover.style.animation = "rotation 3s infinite linear";
        playingSongCover.style.webkitAnimation = "rotation 3s infinite linear";
        playingSongCover.style.animationFillMode = "forwards";
        playingIcon.style.display = "block";
        makeallButtonPlay();
        if (masterPlayPause.classList.contains("fa-play-circle-o")) {
          masterPlayPause.classList.remove("fa-play-circle-o");
          masterPlayPause.classList.add("fa-pause-circle-o");
        }
        document
          .getElementById(`${songIndex}`)
          .classList.remove("fa-play-circle");
        document
          .getElementById(`${songIndex}`)
          .classList.add("fa-pause-circle");
      }, 500);
    }
  }, 1000);
};
const loopSongStop = () => {
  clearInterval(normalloopSongInverval);
};
// Populating the Songs in the DOM
function populatingSongsinDOM() {
  const songArray = issongShuffled ? shuffledSongList : songList;
  songArray.forEach((element, i) => {
    let songCapsule = `<div class="songItem" >
    <img src="${element.coverPath}" alt="${element.songName}" class="songCover">
    <span class="songTitle">${element.songName}</span>
    <span class="songDuration">${element.songDuration}</span>
    <i class="favsongItemIcon fa fa-play-circle" id="${i}" title="Play"></i>
</div>`;
    allsongslistContainer.innerHTML += songCapsule;
  });
  // SongPlaying function through SongList
  const allfavsongItemIcon = Array.from(
    document.getElementsByClassName("favsongItemIcon")
  );
  allfavsongItemIcon.forEach((element) => {
    element.addEventListener("click", () => {
      if (
        element.classList.contains("fa-play-circle") &&
        audioElement.currentTime <= 0
      ) {
        makeallButtonPlay();
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
        songIndex = parseInt(element.id);
        audioElement = new Audio(`${songArray[songIndex].filePath}`);
        audioElement.play();
        songShowPlayingDesigns();
        songProgressBarControlling();
        masterPlayPause.classList.remove("fa-play-circle-o");
        masterPlayPause.classList.add("fa-pause-circle-o");
        SpeakersStartMovement();
        showplayingDesignContent();
        autoPLayCheck();
        if (autoPlay.classList.contains("fa-toggle-on")) {
          autoPlay.style.filter = "none";
          autoPlay.style.color = "forestgreen";
        }
      } else if (
        element.classList.contains("fa-pause-circle") &&
        (audioElement.currentTime > 0 ||
          audioElement.currentTime <= audioElement.duration)
      ) {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
        savedCurrentTime = audioElement.currentTime;
        audioElement.pause();
        masterPlayPause.classList.remove("fa-pause-circle-o");
        masterPlayPause.classList.add("fa-play-circle-o");
        songProgressBarControlling();
        SpeakersStopMovement();
        hideplayingDesignContent();
        playingSongCover.style.display = "block";
        playingBarSongTitle.style.display = "block";
      } else if (
        element.classList.contains("fa-play-circle") &&
        (audioElement.paused ||
          audioElement.currentTime > 0 ||
          audioElement.currentTime <= audioElement.duration)
      ) {
        makeallButtonPlay();
        savedCurrentTime = audioElement.currentTime;
        audioElement.pause();
        SpeakersStopMovement();
        hideplayingDesignContent();
        element.classList.remove("fa-play-circle");
        element.classList.add("fa-pause-circle");
        songShowPlayingDesigns();
        if (songIndex == parseInt(element.id)) {
          audioElement.currentTime = savedCurrentTime;
          audioElement.play();
          songProgressBarControlling();
          SpeakersStartMovement();
          showplayingDesignContent();
        } else if (songIndex != parseInt(element.id)) {
          savedCurrentTime = 0;
          songIndex = parseInt(element.id);
          audioElement = new Audio(`${songArray[songIndex].filePath}`);
          audioElement.play();
          songProgressBarControlling();
          SpeakersStartMovement();
          showplayingDesignContent();
        }
        masterPlayPause.classList.remove("fa-play-circle-o");
        masterPlayPause.classList.add("fa-pause-circle-o");
        autoPLayCheck();
      }
    });
  });
}
populatingSongsinDOM();
masterPlayPause.addEventListener("click", () => {
  if (masterPlayPause.classList.contains("fa-play-circle-o")) {
    masterPlayPause.classList.remove("fa-play-circle-o");
    masterPlayPause.classList.add("fa-pause-circle-o");
    makeallButtonPlay();
    document.getElementById(songIndex).classList.remove("fa-play-circle");
    document.getElementById(songIndex).classList.add("fa-pause-circle");
    audioElement.currentTime = savedCurrentTime;
    audioElement.play();
    songProgressBarControlling();
    SpeakersStartMovement();
    showplayingDesignContent();
    autoPLayCheck();
  } else if (masterPlayPause.classList.contains("fa-pause-circle-o")) {
    masterPlayPause.classList.remove("fa-pause-circle-o");
    masterPlayPause.classList.add("fa-play-circle-o");
    makeallButtonPlay();
    document.getElementById(songIndex).classList.remove("fa-pause-circle");
    document.getElementById(songIndex).classList.add("fa-play-circle");
    savedCurrentTime = audioElement.currentTime;
    audioElement.pause();
    songProgressBarControlling();
    SpeakersStopMovement();
    hideplayingDesignContent();
    playingSongCover.style.display = "block";
    playingBarSongTitle.style.display = "block";
  }
});
favNavStopIcon.addEventListener("click", () => {
  masterPlayPause.classList.remove("fa-play-circle-o");
  masterPlayPause.classList.add("fa-pause-circle-o");
  makeallButtonPlay();
  audioElement.pause();
  songIndex = 0;
  savedCurrentTime = 0;
  audioElement.currentTime = 0;
  SpeakersStopMovement();
  hideplayingDesignContent();
  songHidePlayingDesigns();
  loopSong.classList.remove("favGreenIcon");
  loopSong.style.display = "none";
  autoPlay.classList.remove("fa-toggle-off");
  autoPlay.classList.add("fa-toggle-on");
  musicCasette.style.display = "none";
  playingSongCover.style.animation = "";
  playingSongCover.style.webkitAnimation = "";
  playingSongCover.style.animationFillMode = "";
});
previousSong.addEventListener("click", () => {
  playingPreviousSong();
});
nextSong.addEventListener("click", () => {
  playingNextSong();
});
autoPlay.addEventListener("click", () => {
  if (autoPlay.classList.contains("fa-toggle-off")) {
    autoPlay.classList.remove("fa-toggle-off");
    autoPlay.classList.add("fa-toggle-on");
    autoPlay.style.filter = "none";
    autoPlay.style.color = "forestgreen";
    loopSong.style.display = "none";
    loopSong.classList.remove("favGreenIcon");
    autoPLayCheck();
    loopSongStop();
  } else if (autoPlay.classList.contains("fa-toggle-on")) {
    autoPlay.classList.remove("fa-toggle-on");
    autoPlay.classList.add("fa-toggle-off");
    autoPlay.style.filter = "invert(1)";
    autoPlay.style.color = "black";
    loopSong.style.display = "block";
    autoPLayCheck();
  }
});
loopSong.addEventListener("click", () => {
  if (loopSong.classList.contains("favGreenIcon")) {
    loopSong.classList.remove("favGreenIcon");
    loopSongStop();
    autoPLayCheck();
  } else {
    loopSong.classList.add("favGreenIcon");
    loopSongStart();
  }
});
shuffleList.addEventListener("click", () => {
  issongShuffled = true;
  shuffleList.classList.add("favGreenIcon");
  setTimeout(() => {
    shuffleList.classList.remove("favGreenIcon");
  }, 200);
  const songListLength = songList.length;
  const randomArray = generateRandomArray(songListLength);
  shuffledSongList = randomArray.map((index) => songList[index]);
  allsongslistContainer.innerHTML = "";
  allsongslistContainer.classList.add("shuffle-animation");
  setTimeout(() => {
    allsongslistContainer.classList.remove("shuffle-animation");
    populatingSongsinDOM();
  }, 2000);
});

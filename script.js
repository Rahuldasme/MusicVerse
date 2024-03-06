var arr = [
  {
    songName: "Binks Sake",
    url: "./songs/Binks_no_sake.m4a",
    img: "./images/brook.jpg",
  },
  {
    songName: "Purpose is Glorious",
    url: "./songs/Loki_Season_2.m4a",
    img: "./images/loki.jpg",
  },
  {
    songName: "Star",
    url: "./songs/Mitski_-_Star.mp3",
    img: "./images/star.jpg",
  },
  {
    songName: "My Love Mine All Mine",
    url: "./songs/Mitski_-_My_Love_Mine_All_Mine.mp3",
    img: "./images/mitski.png",
  },
  {
    songName: "Husn",
    url: "./songs/husn.mp3",
    img: "./images/husn.png",
  },
  {
    songName: "Apocalypse",
    url: "./songs/Apocalypse_-_Cigarettes_After_Sex.mp3",
    img: "./images/apocalypse.jpeg",
  },
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");
var audio = new Audio();
var selectedSong = 0;
var flag = 0;

function mainFunction() {
  var clutter = "";

  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
      <div class="part1">
          <img src=${elem.img} alt="">
          <h2>${elem.songName}</h2>
      </div>
      <h6>3:56</h6>
  </div>`;
  });
  allSongs.innerHTML = clutter;
  audio.src = arr[selectedSong].url;

  poster.style.backgroundImage = `url(images/OIG1.jpeg)`;
}
mainFunction();

allSongs.addEventListener("click", function (dets) {
  selectedSong = dets.target.id;
  mainFunction();
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
  play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
  flag = 1;
  audio.play();
});

play.addEventListener("click", function () {
  if (flag == 0) {
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    mainFunction();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`;
    mainFunction();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    // forward.style.opacity = 0.4;
    selectedSong = 0;
    mainFunction();
    audio.play();
  }
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    // backward.style.opacity = 0.4;
    selectedSong = arr.length - 1;
    mainFunction();
    audio.play();
  }
});

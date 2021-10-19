const music = document.querySelector('audio');
const play = document.getElementById("play");
const img = document.querySelector('img');
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
  name : "dhruv-1",
  title: "Guitar Sikhda",
  artist: "Jassie Gill"
},
{
  name : "dhruv-2",
  title: "Hookah Bar",
  artist: "Himesh Reshamiya"
},
{
  name : "dhruv-3",
  title: "Ignite",
  artist: "Alan Walker"
}
];

let isPlaying = false;  
// for play functionality
const playMusic =  () => {
  isPlaying = true;
  music.play();
  play.classList.replace('fa-play',"fa-pause")
  img.classList.add("anime");
};

// for pause functionality
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace('fa-pause',"fa-play")
  img.classList.remove("anime");
};

play.addEventListener('click', () => {
  isPlaying ? pauseMusic() : playMusic();

})

// changing music data

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "../music/" + songs.name + ".mp3";
  img.src = "../images/" + songs.name + ".png";
};

songIndex = 0;

// loadSong(songs[2]);

const nextSong = () => {
  songIndex = (songIndex + 1)% songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length; 
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);



const audioPlayer = document.getElementById('audioplayer')
const albumArt = document.getElementById("albumArt")
const playBtn = document.getElementById('playBtn')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const songTitle = document.getElementById('songTitle')
const songArtist = document.getElementById('songArtist')
const volumeControl = document.getElementById("volumeControl")
const progressBar = document.getElementById("progressBar")

const songs = [
    {
        "title": "Vakrathunda Mahakaya",
        artist: 'SP Balasubramanyam',
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711344262/vakrathunda_mahakaya.mp3_jxhmdl.mp3",
        albumArtSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5a/24/62/5a24624d-205a-5354-7a2a-897b2bb3173c/cover.jpg/1200x1200bb.jpg"
    },
    {
        "title": "Andhari Bandhuvaya",
        artist: 'SP Balasubramanyam',
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711298472/iSongs.info_Andhari_Bhanduvayya_mwafpm.mp3",
        albumArtSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/5a/24/62/5a24624d-205a-5354-7a2a-897b2bb3173c/cover.jpg/1200x1200bb.jpg"
    },

    {
        "title": 'Kurchi Madatapetti',
        artist: 'Sri Krishna',
        audioSrc: 'https://res.cloudinary.com/nihars3/video/upload/v1710084098/Kurchi_Madathapetti_oe2q29.mp3',
        albumArtSrc: 'https://c.saavncdn.com/000/Guntur-Kaaram-Telugu-2023-20240126145901-500x500.jpg'
    },
    {
        "title": 'Undiporadhey',
        artist: 'Sid Sriram',
        audioSrc: 'https://res.cloudinary.com/nihars3/video/upload/v1710084108/Undiporaadhey_Sad_Version_-_SenSongsMp3.Co_rdbz5e.mp3',
        albumArtSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/66/50/32/665032f8-1261-af69-f9fb-047da403ac4b/cover.jpg/1200x1200bf-60.jpg'
    },
    {
        "title": "Poolamme Pilla",
        artist: "GowraHari",
        audioSrc: "https://pagallworld.co.in/wp-content/uploads/2024/01/Pulamme-Pilla.mp3",
        albumArtSrc: "https://c.saavncdn.com/807/Poolamme-Pilla-From-HanuMan-Telugu-Telugu-2024-20240130001233-500x500.jpg"
    },
    {
        title: "Nuvvena",
        artist: "Shreya Ghoshal & K.M Radhakrishnan",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711351317/Nuvvena_u4nwmw.mp3",
        albumArtSrc: "https://c.saavncdn.com/453/Anand-2004-500x500.jpg"
    },
    {
        title: "Nijana Nenena",
        artist: "Karthik",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711351685/02---Nijanga-Nenena-_-TeluguMaza.IN-_DJSrinu.IN_te3sbz.mp3",
        albumArtSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bd/68/a1/bd68a135-651a-d8b8-1be6-c53af10e5388/cover.jpg/1200x630bb.jpg"
    },
    {
        title: "Arare Arare",
        artist: "Karthik",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711352134/01_-_Arey_Rey_-_SenSongsMp3.co_ypvimk.mp3",
        albumArtSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/d0/ea/f8/d0eaf8bd-7512-77a9-20d1-cd5140dc69c8/8902894686709_cover.jpg/600x600bf-60.jpg"
    },
    {
        title: "Anjanadri Theme Song",
        artist: "GowraHari,Sai charan, Siva Sakthi Datta",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711352355/iSongs.info_05_-_Anjanadri_Theme_Song_1_cvpoix.mp3",
        albumArtSrc: "https://c.saavncdn.com/753/Anjanadri-Theme-Song-From-HanuMan-Telugu-Telugu-2024-20240127011350-500x500.jpg"
    },
    {
        title: "Tum Se",
        artist: "Sachin-Jigar,Raghav Chaitanya,Varun Jain",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711353006/Tum_Se-_PagalSongs.Com.IN_nn3bav.mp3",
        albumArtSrc: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/eb/25/68/eb256897-d444-504e-b64f-977206d3bf40/8903431982186_cover.jpg/1200x1200bf-60.jpg"
    },
    {
        title: "Madhura Madhuratara",
        artist: "P.Unnikrishnan & Harini",
        audioSrc: "https://res.cloudinary.com/mouliklv/video/upload/v1711353292/iSongs.info_05_-_Madhura_Madhuratara_j6ucy7.mp3",
        albumArtSrc: "https://c.saavncdn.com/083/Arjun-2004-500x500.jpg"
    }
];


let currentsongindex = 0

function loadsong(songindex) {

    const song = songs[songindex]
    audioPlayer.src = song.audioSrc
    albumArt.src = song.albumArtSrc
    songTitle.innerText = `Song :  ${song.title}`
    songArtist.innerText = `Singers : ${song.artist}`
}

function playSong() {
    audioPlayer.play()



}

function pauseSong() {
    audioPlayer.pause()


}

function prevSong() {
    currentsongindex = (currentsongindex - 1 + songs.length) % songs.length
    loadsong(currentsongindex)
    playBtn.innerText = "Pause"

    playSong()
}

function nextSong() {
    currentsongindex = (currentsongindex + 1 + songs.length) % songs.length
    
    loadsong(currentsongindex)
    playBtn.innerText = "Pause"

    playSong()
}

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        playSong()

        playBtn.textContent = "Pause"
    }
    else {
        pauseSong()
        playBtn.textContent = "Play"
    }



})

volumeControl.addEventListener('input', function () {
    audioPlayer.volume = volumeControl.value;
});


progressBar.addEventListener('input', function () {
    const seekTime = (audioPlayer.duration / 100) * progressBar.value;

    audioPlayer.currentTime = seekTime;
});


audioPlayer.addEventListener('loadeddata', function () {
    progressBar.value = 0;
});



audioPlayer.addEventListener('timeupdate', function () {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    if (progress == 100) {
        nextSong()
    }
});

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener("click", nextSong)

try {
    loadsong(currentsongindex)
} catch (error) {
    console.log(error)


}




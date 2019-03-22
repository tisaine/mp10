/* Wowza player */
WowzaPlayer.create('playerElement1', {
    "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
    "title": "Arabia",
    "description": "",
    "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Flive%2Farabia%2Fplaylist.m3u8",
    "autoPlay": true,
    "volume": "75",
    "mute": true,
    "loop": false,
    "audioOnly": false,
    "uiShowQuickRewind": false,
    "uiQuickRewindSeconds": "30"
});

WowzaPlayer.create('playerElement2', {
    "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
    "title": "Leppävaara",
    "description": "",
    "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Flive%2Fleppävaara%2Fplaylist.m3u8",
    "autoPlay": true,
    "volume": "75",
    "mute": true,
    "loop": false,
    "audioOnly": false,
    "uiShowQuickRewind": false,
    "uiQuickRewindSeconds": "30"
});

WowzaPlayer.create('playerElement3',
    {
        "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
        "title": "Myllypuro",
        "description": "",
        "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Flive%2Flol%2Fplaylist.m3u8",
        "autoPlay": true,
        "volume": "75",
        "mute": true,
        "loop": false,
        "audioOnly": false,
        "uiShowQuickRewind": false,
        "uiQuickRewindSeconds": "30"
    }
);
WowzaPlayer.create('playerElement4', {
    "license": "PLAY1-36azp-MjHDW-yubjC-YtujY-Yfcy6",
    "title": "Myyrmäki",
    "description": "",
    "sourceURL": "http%3A%2F%2F195.148.104.124%3A1935%2Flive%2Fmyyr%2Fplaylist.m3u8",
    "autoPlay": true,
    "volume": "75",
    "mute": true,
    "loop": false,
    "audioOnly": false,
    "uiShowQuickRewind": false,
    "uiQuickRewindSeconds": "30"
});

/* basic functionality */

$('.video').on('click', function () {
    $('.video').appendTo('.video-selection');
    $(this).appendTo('.video-container');
    console.log('toimii');
});

$('.js-close').on('click', function () {
    $('.timetable').slideUp();
});

$('.click-for-timetable').on('click', function () {
    $('.timetable').slideDown();
});

/* menu for timetables */
$('.menu-item').on('click', function () {
    $('.menu-item').removeClass('active');
    $(this).addClass('active');
    var currItem = $(this).data('item');
    console.log(currItem);
    $('.timetable-section').hide();
    $("#" + currItem + "").show();
});

function openArabia() {
    document.getElementById("arabia").style.width = "300px";
}

function closeArabia() {
    document.getElementById("arabia").style.width = "0";
}
function openLeppavaara() {
    document.getElementById("leppavaara").style.width = "300px";
}

function closeLeppavaara() {
    document.getElementById("leppavaara").style.width = "0";
}
function openMyyrmaki() {
    document.getElementById("myyrmaki").style.width = "300px";
}

function closeMyyrmaki() {
    document.getElementById("myyrmaki").style.width = "0";
}
function openMyllypuro() {
    document.getElementById("myllypuro").style.width = "300px";
}

function closeMyllypuro() {
    document.getElementById("myllypuro").style.width = "0";
}


/*esimerkki*/
/*
playerElement1 = document.querySelector("#playerElement1");
playerElement2 = document.querySelector("#playerElement2");
playerElement3 = document.querySelector("#playerElement3");
playerElement4 = document.querySelector("#playerElement4");
bigScreen = document.querySelector("#bigScreen");
playerRow = document.querySelector("#playerRow");

let oldElem;

const myMove = (elem) => {

  console.log(elem);
  //for (int i; i<0; )
  playerElement1.style.width = 30 + '%';
  playerElement2.style.width = 30 + '%';
  playerElement3.style.width = 30 + '%';
  playerElement4.style.width = 30 + '%';

  elem.style.width = 100 + '%';
  if (oldElem != undefined) {
    playerRow.appendChild(oldElem);

  }
  bigScreen.appendChild(elem);

  oldElem = elem;

};


playerElement1.addEventListener("click", () => {
  myMove(playerElement1);
});
playerElement2.addEventListener("click", () => {
  myMove(playerElement2);
});

playerElement3.addEventListener("click", () => {
  myMove(playerElement3);
});
playerElement4.addEventListener("click", () => {
  myMove(playerElement4);
});
*/
var catpics = ["cat.png","cat1.png","cat2.png","cat3.png"];
var sounds = [];
var randompic = 0;
var randomsound = 0;

function openBox() {
  randompic = Math.floor(Math.random() * catpics.length);
  document.getElementById('catbox').src=catpics[randompic];
  document.getElementById('catbox').setAttribute('onclick','playSound()');
  confetti.start();
  document.getElementById('bodyID').style.animation="backgroundAnim 5s linear 2s infinite normal";
}

function closeBox() {
  document.getElementById('catbox').src="catbox.png";
  document.getElementById('catbox').setAttribute('onclick','openBox()')
}

function playSound() {
  sounds = [document.getElementById("meowSound"),document.getElementById("meowSound2"),document.getElementById("meowSound3")];
  randomsound = Math.floor(Math.random() * sounds.length);
  console.log(sounds[randomsound]);
  sounds[randomsound].play();
}

function dupuisify() {
  catpics = ["dupuis.png","betterdupuis.png"];
  closeBox();
}

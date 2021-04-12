var catpics = ["cat1.png","cat2.png","cat3.png","cat4.png"];
var credits = ['Photo by <a href="https://unsplash.com/@e_d_g_a_r?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edgar</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@remino?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Rémi Rémino</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@michaelsum1228?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Sum</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>','Photo by <a href="https://unsplash.com/@mimvafa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marzie Vafa</a> on <a href="https://unsplash.com/s/photos/cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>']
var sounds = [];
var randompic = 0;
var randomsound = 0;

function openBox() {
  randompic = Math.floor(Math.random() * catpics.length);
  document.getElementById('catbox').src=catpics[randompic];
  document.getElementById('catbox').setAttribute('onclick','playSound()');
  document.getElementById('creditText').innerHTML = credits[randompic]
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
  sounds[randomsound].play();
}

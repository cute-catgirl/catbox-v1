var catpics = ["cat.png","cat1.png","cat2.png"];
var randompic = 0;

function openBox() {
  randompic = Math.floor(Math.random() * catpics.length);
  document.getElementById('catbox').src=catpics[randompic];
  document.getElementById('catbox').onClick="";
  confetti.start();
}

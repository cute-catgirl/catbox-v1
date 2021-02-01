var catpics = ["cat.png","cat1.png","cat2.png"]
var randompic = Math.floor(Math.random() * catpics.length);

function openBox() {
  document.getElementById('catbox').src=catpics[randompic];
  confetti.start();
}

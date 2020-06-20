const UNSPLASH_URL = "http://source.unsplash.com/random";
const body = document.querySelector("body");
function paintBg(){
  body.style.backgroundImage = `url($UNSPALSH_URL})`;
}
function init(){
  paintBg();
}

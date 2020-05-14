const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);


    newImage.onclick = function(showImage) {
  displayedImage.src = showImage.target.src;
  var newImgPath = (showImage.target.src).toString();
  var arrLoc = newImgPath.charAt(newImgPath.length-5);
  }
}

document.getElementById("generate_button").addEventListener("click", generateGreenImage);
var lOaDinGBar = document.getElementsByClassName('loadingbar');
var images = document.querySelectorAll('IMG');
let colours = ['#52FF00', '#52FF00', '#52FF00', '#52FF00', '#FF00E5', '#FF0000', '#000000', '#000000', '#000000'];
let greenImages = ['https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0005.png?v=1611190831313','https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0032.png?v=1611190834645','https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0061.png?v=1611190834723', 'https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0227.png?v=1611190836908'];
function generateGreenImage() {
  // for (var i = 0; i < lOaDinGBar.length; i++) { 
  //   lOaDinGBar[i].style.background = colours[Math.floor(Math.random() * colours.length)];
  //   lOaDinGBar[i].style.display = 'block';
  // }
  let greenImage = greenImages[Math.floor(Math.random() * greenImages.length)];
  for (var i = 0; i < images.length; i++) {
    images[i].src = greenImage;
    lOaDinGBar[i].style.background = colours[Math.floor(Math.random() * colours.length)];
    lOaDinGBar[i].style.display = 'block';
  }
  
  setTimeout(thingsThatShouldBedeleteddotdotdot, 700);
}

function thingsThatShouldBedeleteddotdotdot() {
  for (var i = 0; i < lOaDinGBar.length; i++) { 
    lOaDinGBar[i].style.display = 'none';
  }
  console.log('oh no... stop doing this...');
}

var allPhotosOfMine = document.querySelectorAll('IMG');
function firstthingsfirst() {
  //get image
  for (var i = 0; i < allPhotosOfMine.length; i++) {
    //create loader bar
    var loadingBar = document.createElement('div');
    loadingBar.classList.add('loadingbar');
    //create container for the image and loader bar
    var loadingBarContainer = document.createElement('div');
    loadingBarContainer.classList.add('loadingbarcontainer');
    //set size of this image to the container
    loadingBarContainer.style.width = allPhotosOfMine[i].style.width;
    loadingBarContainer.style.height = allPhotosOfMine[i].style.width;
    //get image parent element
    var parentElement = allPhotosOfMine[i].parentNode;
    //add image and loader bar to the container
    loadingBarContainer.appendChild(allPhotosOfMine[i]);
    loadingBarContainer.appendChild(loadingBar);
    //add this container on the parent container
    parentElement.appendChild(loadingBarContainer);
    console.log(allPhotosOfMine[6].parentNode);
  }
}


//for all images

// var allPhotosOfMine = document.querySelectorAll('IMG');

// function createLoadingBar() {
//   var containerForImageandLoadingBar = document.createElement('div');
//   document.body.appendChild(containerForImageandLoadingBar);
//   containerForImageandLoadingBar.id = 'containerforloader';
//   // containerForImageandLoadingBar.classList.add('containerforloader');
//   for (var i = 0; i < allPhotosOfMine.length; i++) {
//     //parent element
//     var loadingBarContainer = document.createElement('div');
//     loadingBarContainer.classList.add('loadingbarcontainer');
//     var loadingBar = document.createElement('div');
//     loadingBar.classList.add('loadingbar');
    
//     loadingBarContainer.style.width = allPhotosOfMine[i].style.width;
//     loadingBarContainer.style.height = allPhotosOfMine[i].style.width;
//     loadingBarContainer.style.top = allPhotosOfMine[i].getBoundingClientRect().top + 'px';
//     loadingBarContainer.style.left = allPhotosOfMine[i].getBoundingClientRect().left + 'px';
    
//     loadingBarContainer.appendChild(loadingBar);
//     containerForImageandLoadingBar.appendChild(loadingBarContainer);
    
//   }
// }


window.onload = function() {
  setImageSize();
  // createLoadingBar();
  firstthingsfirst();
}

function setImageSize() {
  console.log(document.querySelectorAll('.sixtyfourImages').length);
  let mainImage = document.getElementById('mainimage').clientWidth;
  let twoImages = mainImage / 2.1;
  let fourImages = twoImages / 2.2;
  let eightImages = fourImages / 2.2;
  let sixteenImages = eightImages / 2.3;
  let thirtytwoImages = sixteenImages / 2.2;
  let sixtyfourImages = thirtytwoImages / 2;

  var twoImagesClass = document.getElementsByClassName('twoImagesClass');
  for (var i = 0; i < twoImagesClass.length; i++) {
    twoImagesClass[i].style.width = twoImages + 'px';
  }
  
  for (var i = 0; i < document.querySelectorAll('.fourImagesCont').length; i++) {
    document.querySelectorAll('.fourImagesCont')[i].style.height = twoImages + 'px';
  }

  var fourImagesClass = document.getElementsByClassName('fourImages');
  for (var i = 0; i < fourImagesClass.length; i++) {
    fourImagesClass[i].style.width = fourImages + 'px';
  }
  
  for (var i = 0; i < document.getElementsByClassName('eightImagesCont').length; i++) {
     document.getElementsByClassName('eightImagesCont')[i].style.height = fourImages + 'px';
  }
  for (var i = 0; i < document.getElementsByClassName('twice_16k').length; i++) {
     document.getElementsByClassName('twice_16k')[i].style.height = fourImages + 'px';
  }
  for (var i = 0; i < document.getElementsByClassName('twice_32k_8').length; i++) {
     document.getElementsByClassName('twice_32k_8')[i].style.height = fourImages + 'px';
  }
  for (var i = 0; i < document.getElementsByClassName('twice_64k_16').length; i++) {
     document.getElementsByClassName('twice_64k_16')[i].style.height = fourImages + 'px';
  }

  var eightImagesClass = document.getElementsByClassName('eightImages');
  for (var i = 0; i < eightImagesClass.length; i++) {
    eightImagesClass[i].style.width = eightImages + 'px';
  }
  
   for (var i = 0; i < document.getElementsByClassName('sixteenImagesCont').length; i++) {
     document.getElementsByClassName('sixteenImagesCont')[i].style.height = eightImages + 'px';
  }
  
  for (var i = 0; i < document.getElementsByClassName('twice_64k_8').length; i++) {
     document.getElementsByClassName('twice_64k_8')[i].style.height = eightImages + 'px';
  }

  var sixteenImagesClass = document.getElementsByClassName('sixteenImages');
  for (var i = 0; i < sixteenImagesClass.length; i++) {
    sixteenImagesClass[i].style.width = sixteenImages + 'px';
  }
  
  for (var i = 0; i < document.getElementsByClassName('twice_64k_4').length; i++) {
    document.getElementsByClassName('twice_64k_4')[i].style.height = sixteenImages + 'px';
  }
  
  for (var i = 0; i < document.getElementsByClassName('twice_32k').length; i++) {
    document.getElementsByClassName('twice_32k')[i].style.height = eightImages + 'px';
  }
  
  var sixtyfourImagesClass = document.getElementsByClassName('sixtyfourImages');
  for (var i = 0; i < sixtyfourImagesClass.length; i++) {
    sixtyfourImagesClass[i].style.width = sixtyfourImages + 'px';
  }
  
  var thirtytwoImagesClass = document.querySelectorAll('.thirtytwoImages');
  for (var i = 0; i < thirtytwoImagesClass.length; i++) {
    thirtytwoImagesClass[i].style.width = thirtytwoImages + 'px';
  }
  
  for (var i = 0; i < document.getElementsByClassName('thirtytwoImagesCont').length; i++) { 
    document.getElementsByClassName('thirtytwoImagesCont')[i].style.height = sixteenImages + 'px';
  }
}

// получить ссылки со всех фоток
// extract url and put to an array

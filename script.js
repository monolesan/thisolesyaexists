document.getElementById("generate_button").addEventListener("click", generateGreenImage);
var lOaDinGBar = document.getElementsByClassName('loadingbar');
var images = document.querySelectorAll('IMG');
let colours = ['#52FF00', '#52FF00', '#52FF00', '#52FF00', '#FF00E5', '#FF0000', '#000000', '#000000', '#000000'];
let greenImages = ['https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0005.png?v=1611190831313','https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0032.png?v=1611190834645','https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0061.png?v=1611190834723', 'https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0227.png?v=1611190836908'];

let allnames = ["https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0005.png", "https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0032.png", "https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0061.png", "https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0227.png", "https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0229.png"];
console.log(allnames);

allnames = allnames.sort(() => Math.random() - 0.5)

console.log(allnames);

var photoNumber = 0;

var preloadTheseImages = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        preloadTheseImages[i] = new Image();
        preloadTheseImages[i].src = preload.arguments[i];
    }
}


function generateGreenImage() {
 
  for (var i = 0; i < images.length; i++) {
    images[i].src = allnames[photoNumber];
    
     console.log(photoNumber);
    lOaDinGBar[i].style.background = colours[Math.floor(Math.random() * colours.length)];
    lOaDinGBar[i].style.display = 'block';
  }
  console.log(allnames[photoNumber]);
  photoNumber++;
  
  console.log(photoNumber);
  
  setTimeout(thingsThatShouldBedeleteddotdotdot, 700);
  if (photoNumber === allnames.length) {
    allnames = allnames.sort(() => Math.random() - 0.5)
    photoNumber = 0;
  }
  preload(allnames[photoNumber]);
  
  
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
    // console.log(allPhotosOfMine[6].parentNode);
  }
}

window.onload = function() {
  setImageSize();
  firstthingsfirst();
  preload(allnames[photoNumber]);
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

var gggg = {"uuid":"adSBq97hhhpFNUnc","deleted":true};
console.log(gggg.uuid);
// получить ссылки со всех фоток
// extract url and put to an array

const str = '01-01-2020';

// get everything after first dash
var slug = []; // 01-2020

// var a = "{I want }{apple}";

//1 в а добавить объект текстово
var a = '{"name":"8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","date":"2021-01-12T09:00:07.731Z","url":"https://cdn.glitch.com/775e3c8f-11cc-4a13-9d31-22ad878c2d43%2F8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","type":"image/png","size":704355,"imageWidth":546,"imageHeight":546,"thumbnail":"https://cdn.glitch.com/775e3c8f-11cc-4a13-9d31-22ad878c2d43%2Fthumbnails%2F8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"et51sz38KYra4czW"} {"name":"seed0005.png","date":"2021-01-21T01:00:31.313Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0005.png","type":"image/png","size":978269,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0005.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"fivsjSd0JjV4Q8RF"} {"name":"seed0032.png","date":"2021-01-21T01:00:34.645Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0032.png","type":"image/png","size":929789,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0032.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"0dsj5mWo33WzqVsY"} {"name":"seed0061.png","date":"2021-01-21T01:00:34.723Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0061.png","type":"image/png","size":1021502,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0061.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"SjVQjguoH4TOnCrO"} {"name":"seed0227.png","date":"2021-01-21T01:00:36.908Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0227.png","type":"image/png","size":911847,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0227.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"dzm7V0EBFXWPYuwd"} {"name":"seed0229.png","date":"2021-01-21T01:00:38.036Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0229.png","type":"image/png","size":991069,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0229.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"BCru55smGnfaaqtI"}';
var b = ",";
var position = 6;
// var output = [a.slice(0, position), b, a.slice(position)].join('');
// console.log(output);

//раскоментить это а потом скопировать консоль
// function allslugs(){
//   for (var i =0; i<a.length;i++){
//     slug.push(a[i].indexOf('}'));
//     if(slug[i] === 0) {
//       let output =[a.slice(0, i+1), b, a.slice(i+1)].join('')
//       a = output;
//       console.log(a);
//     }
//   }
// }
// allslugs();
// console.log(slug);

//вставить массив из объектов в lala и скопировать всё в allimages в начале кода
// var allnames =[];
// var lala = [{"name":"8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","date":"2021-01-12T09:00:07.731Z","url":"https://cdn.glitch.com/775e3c8f-11cc-4a13-9d31-22ad878c2d43%2F8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","type":"image/png","size":704355,"imageWidth":546,"imageHeight":546,"thumbnail":"https://cdn.glitch.com/775e3c8f-11cc-4a13-9d31-22ad878c2d43%2Fthumbnails%2F8cc17af4-4f16-41f4-aac5-99a8c5dfafa6.image.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"et51sz38KYra4czW"}, {"name":"seed0005.png","date":"2021-01-21T01:00:31.313Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0005.png","type":"image/png","size":978269,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0005.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"fivsjSd0JjV4Q8RF"}, {"name":"seed0032.png","date":"2021-01-21T01:00:34.645Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0032.png","type":"image/png","size":929789,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0032.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"0dsj5mWo33WzqVsY"}, {"name":"seed0061.png","date":"2021-01-21T01:00:34.723Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0061.png","type":"image/png","size":1021502,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0061.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"SjVQjguoH4TOnCrO"}, {"name":"seed0227.png","date":"2021-01-21T01:00:36.908Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0227.png","type":"image/png","size":911847,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0227.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"dzm7V0EBFXWPYuwd"}, {"name":"seed0229.png","date":"2021-01-21T01:00:38.036Z","url":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fseed0229.png","type":"image/png","size":991069,"imageWidth":1024,"imageHeight":1024,"thumbnail":"https://cdn.glitch.com/0dda0d41-1bcd-4175-8112-99af6f54bae2%2Fthumbnails%2Fseed0229.png","thumbnailWidth":330,"thumbnailHeight":330,"uuid":"BCru55smGnfaaqtI"}];
// for (var i = 0; lala.length; i++){
//   // if (lala[i].name){ 
//   // console.log(lala[i].name);
//   allnames.push(lala[i].url);
//   console.log(allnames);
// }

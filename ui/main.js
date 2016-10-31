console.log('Loaded!');

// move image 
var img = document.getElementById('g');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+5;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
     var interval = setInterval(moveRight, 50);
};
function myFunction() {
    document.getElementById("myForm").reset();
}
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2),
    zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
src="https://maps.googleapis.com/maps/api/js?callback=myMap";
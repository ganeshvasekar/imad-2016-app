console.log('Loaded!');
alert('hi,we are here to hack your system');
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

src="https://goo.gl/RT0j4e";
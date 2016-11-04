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
  $(document).ready(function(){
                $('#i-nav').click(function(){
                   // $('ul').toggleClass('show');
                   alert('hello');
                });
            });
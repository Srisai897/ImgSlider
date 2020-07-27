var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var i = 1;


prev.addEventListener('click', function()
{

    document.querySelectorAll('span')[i-1].classList.remove('num');

  if(i == 1)
  {
    i = 5;
    var p = document.querySelector('img').src = 'img/img-' + i + '.jpg';
  }
  else {
    document.querySelector('img').src = 'img/img-' + (--i) + '.jpg';
  }

  console.log(" i value = " + i);
  document.querySelectorAll('span')[i-1].classList.add("num");


});

next.addEventListener('click', function()
{

    document.querySelectorAll('span')[i-1].classList.remove('num');

  if(i == 5)
  {
    i=1;
    var p = document.querySelector('img').src = 'img/img-' + i + '.jpg';
  }
  else {
    document.querySelector('img').src = 'img/img-' + (++i) + '.jpg';
  }

  console.log(" i value = " + i);
  document.querySelectorAll('span')[i-1].classList.add("num");

});

window.onscroll = function() {myFunction()};// when scroll do this function

var navigation = document.getElementById("navigation");// get element by this id and assign to navigation variable
var sticky = navigation.offsetTop;//  get position of navigation bar and assign to variable sticky

function myFunction() {
  if (window.pageYOffset >= sticky) {// if scroll reach its position that is assigned to variable sticky then execute following
    navigation.classList.add("sticky")// add class sticky(which is in CSS) to variable navigation
  } else {// if it doesn't reach its position do the following
    navigation.classList.remove("sticky");// remove class sticky from variable navigation
  }
}

var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

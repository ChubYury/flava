import  * as say from 'valid.js';
import slick from 'slick-carousel';
import $ from 'jquery';





/******************button_play*****************************/
const bpl = document.getElementById('js-btn-play');
const pause = document.getElementById('js-pause');
const video = document.getElementsByClassName('video__media')[0];
const cover = document.getElementsByClassName('video__cover')[0];

/*pause.addEventListener('click', function(r) {
  if (cover.classList.contains('del') == true) {
    console.log(cover.classList)
    video.pause()
    bpl.classList.toggle('del')
    cover.classList.toggle('del')
  }
});*/


bpl.addEventListener('click', function(e) {
  bpl.classList.toggle('del')
  cover.classList.toggle('del')
  video.play()
  video.setAttribute('autoplay', 'autoplay')
  
});



/******************burger_menu*****************************/
const burger = document.getElementById('js-menu-trigger')
const nav = document.getElementsByClassName('navigation')[0]


const parent = document.getElementById('q')
const elem = parent.getElementsByClassName('navigation__item')[4]

const clone = elem.cloneNode(true)
clone.children[0].innerHTML = 'CREATE ACCOUNT'
/*parent.appendChild(clone)*/

burger.addEventListener('click', function(e) {
  burger.classList.toggle('is-active')
  nav.classList.toggle('is-active')
  
  clone.classList.toggle('btn')
  parent.appendChild(clone)
  
})

/******************timer*****************************/

document.addEventListener('DOMContentLoaded', function () {
  // конечная дата, например 1 июля 2021
  const deadline = new Date("2021-09-13T12:00:00");
  
  // id таймера
  let timerId = null;
  // склонение числительных
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['day ',' days ',' days']);
    $hours.dataset.title = declensionNum(hours, ['hour ',' hours ',' hours']);
    $minutes.dataset.title = declensionNum(minutes, ['minute ',' minutes ',' minutes']);
    $seconds.dataset.title = declensionNum(seconds, ['second ',' seconds ',' seconds']);
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.timer__days');
  const $hours = document.querySelector('.timer__hours');
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  // вызываем функцию countdownTimer
  countdownTimer();
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000);
});

/******************slider actor*****************************/


const slickOption = {
  arrows: true,
  prevArrow: '<a class="control control--prev"><img class="control__img" src="../static/svg/icon-arrow-prev.svg"></a>',
  nextArrow: '<a class="control control--next"><img class="control__img" src="../static/svg/icon-arrow-next.svg"></a>',

  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 4,
      }
    },
  ]
}


$('.multiple-items').slick(slickOption)


/******************slider actor*****************************/


const sp_slider = {
  arrows: false,
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        
        slidesToScroll: 3,
        slidesToShow: 5,
      }
    },
  ]
}


$('.js-sp-slider').slick(sp_slider)


/******************scroll_header*****************************/
const header = document.getElementsByClassName('head')[0];
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
  
	if (scrollDistance >= 70) {
	 	header.classList.add('fixed');
	} else {
	 	header.classList.remove('fixed');
	}
});

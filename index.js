const headerHamburger = document.querySelectorAll('.header-hamburger');
const headerMenu = document.querySelectorAll('.header-menu');
const headerNav = document.querySelectorAll('.header-nav .item');
const headerNavClose = document.querySelectorAll('.header-menu .close');
const homeTab = document.querySelectorAll('.servises-tab');

// RECENT SLIDER VARS
const recentSliderWrapper = document.querySelector('.recent-slider');
const recentSliderWindow = document.querySelector('.recent__work-list');
const recentSliderItem = document.querySelectorAll('.recent__work-item');
const recentSliderBtnPrev = document.querySelector('.recent__work .btn-prev');
const recentSliderBtnNext = document.querySelector('.recent__work .btn-next');

// TESTIMONIALS SLIDER VARS
const testimonialsSliderWrapper = document.querySelector('.testimonials-slider');
const testimonialsSliderWindow = document.querySelector('.testimonials-list');
const testimonialsSliderItem = document.querySelectorAll('.testimonials-item');
const testimonialsSliderBtnPrev = document.querySelector('.testimonials .btn-prev');
const testimonialsSliderBtnNext = document.querySelector('.testimonials .btn-next');
const testimonialsSliderCount = document.querySelector('.testimonials .slider-count');





headerHamburger.forEach((item, i) =>{
  item.addEventListener('click', () =>{
    headerMenu[i].classList.toggle('active')
  })
})


headerNav.forEach(item => {
  item.addEventListener('mouseout', () =>{
    headerNavHover(headerNav, 'mouseout')
  })
  item.addEventListener('mouseover', () =>{
    headerNavHover(headerNav, 'mouseover')
    item.style.opacity = '1'
  })
})


function headerNavHover(list, event) {
  list.forEach(item =>{
    if(event == 'mouseover'){
      item.style.opacity = '.5'
    } else{
      item.style.opacity = '1'
    }
  })
}

headerNavClose.forEach((item, i) =>{
  item.addEventListener('click', () =>{
    headerMenu[i].classList.toggle('active')
  })
})


homeTab.forEach(item => {
  item.addEventListener('click', () =>{
    removeActiveHomeTab(homeTab)
    item.classList.add('active')
  })
})

function removeActiveHomeTab(list) {
  list.forEach(item => {
    item.classList.remove('active')
  })
}

// RECENT SLIDER


let recentSliderItemWidth = recentSliderItem[0].clientWidth
let recentSliderItems = recentSliderItem.length
let recentOffset = 0
let recentSlideShow 
let windowWidth = window.innerWidth

console.log(recentSliderItems)

if(windowWidth < 520){
  recentSlideShow = 1
} else {
  recentSlideShow = 2
}


recentSliderBtnPrev.addEventListener('click', () =>{
  if(recentOffset > 0){
    recentOffset--
    setStyleForRecentSlider()
    recentSliderBtnPrev.classList.remove('unactive')
    recentSliderBtnNext.classList.remove('unactive')
  } else{
    recentSliderBtnPrev.classList.add('unactive')
  }
})

recentSliderBtnNext.addEventListener('click', () =>{
  if(recentOffset + recentSlideShow < recentSliderItems ){
    recentOffset++
    setStyleForRecentSlider()
    recentSliderBtnNext.classList.remove('unactive')
    recentSliderBtnPrev.classList.remove('unactive')
  } else{
    recentSliderBtnNext.classList.add('unactive')
  }
})


function setStyleForRecentSlider() {
  recentSliderWindow.style.transform = `translateX(-${(recentSliderItemWidth + 30) * recentOffset}px)`
}




// TESTIMONIALS SLIDER

testimonialsSliderWrapper
testimonialsSliderWindow
testimonialsSliderItem
testimonialsSliderBtnPrev
testimonialsSliderBtnNext


testimonialsSliderWrapper.style.width = testimonialsSliderItem[0].clientWidth + 'px'

window.addEventListener('resize', () =>{
  testimonialsSliderWrapper.style.width = testimonialsSliderItem[0].clientWidth + 'px'
  console.log(testimonialsSliderItem[0].clientWidth)
})




let testimonialsSliderItems = testimonialsSliderItem.length 


testimonialsSliderCount.textContent = `1/${testimonialsSliderItems}`





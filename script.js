const socials = document.querySelector('#socials')
const telegram = document.querySelector('#telegram')
const twitter = document.querySelector('#twitter')
const coinGecko = document.querySelector('#coingecko')

function telegramLink () {
  console.log('hi')
  window.open('https://t.me/dogebonkonsol')
}

telegram.addEventListener('click', telegramLink)

function twitterLink () {
  window.open('https://twitter.com/dogebonkonsol')
}

twitter.addEventListener('click', twitterLink)

function coinGeckoLink () {
  window.open('https://www.coingecko.com/en/coins/dogebonk-on-sol')
}

coinGecko.addEventListener('click', coinGeckoLink)

const header = document.querySelector('header')
const headerText = document.querySelector('#header_text')
const homeHeader = document.querySelector('#home_header')
const history = document.querySelector('#history')
const historyInfo = document.querySelector('#historyinfo')
const spaceVideo = document.querySelector('#spacevideo')
const home = document.querySelector('#home')
const roadMap = document.querySelector('#roadmap')
const roadMapInfo = document.querySelector('#roadmapinfo')
const footer = document.querySelector('footer')
const body = document.querySelector('body')

body.style.height = '100%'

socials.style.display = 'grid'
historyInfo.style.display = 'none'
roadMapInfo.style.display = 'none'


function historyLink () {
  let historyDisplayStyle = window.getComputedStyle(historyInfo).display

  if (historyDisplayStyle === 'none') {
    historyInfo.style.display = 'grid'
    socials.style.display = 'none'
    roadMapInfo.style.display = 'none'
    body.style.height = '100%'
    headerText.innerText = 'HISTORY'
    homeHeader.style.display = 'none'
    headerText.style.display = 'flex'
    footer.classList.add('overflow_footer')
  }
}

history.addEventListener('click', historyLink)

function videoLink () {
  window.open('https://www.youtube.com/watch?v=UWCbAZlcdm0')
}

spaceVideo.addEventListener('click', videoLink)

function homeLink () {
  let socialsDisplayStyle = window.getComputedStyle(socials).display

  if (socialsDisplayStyle === 'none') {
    socials.style.display = 'grid'
    historyInfo.style.display = 'none'
    roadMapInfo.style.display = 'none'
    footer.classList.add('overflow_footer')
    body.style.height = '100%'
    homeHeader.innerText = 'THE FIRST MEMECOIN IN SPACE, NOW ON SOLANA'
    homeHeader.style.display = 'flex'
    headerText.style.display = 'none'
  }
}

home.addEventListener('click', homeLink)

function roadMapLink () {
  let roadMapDisplayStyle = window.getComputedStyle(roadMapInfo).display

  if (roadMapDisplayStyle === 'none') {
    socials.style.display = 'none'
    historyInfo.style.display = 'none'
    roadMapInfo.style.display = 'grid'
    footer.classList.add('overflow_footer')
    body.style.height = 'auto'
    headerText.innerText = 'ROADMAP'
    homeHeader.style.display = 'none'
    headerText.style.display = 'flex'

    /* const allElements = document.querySelectorAll('*')
    allElements.forEach(function (element) {
      element.classList.add('overflowfooter')
    }) */
  }
}

roadMap.addEventListener('click', roadMapLink)

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

const history = document.querySelector('#history')
const historyInfo = document.querySelector('#historyinfo')
const spaceVideo = document.querySelector('#spacevideo')
const home = document.querySelector('#home')
const roadMap = document.querySelector('#roadmap')
const roadMapInfo = document.querySelector('#roadmapinfo')
const tokenomics = document.querySelector('#tokenomics')
const tokenomicsInfo = document.querySelector('#tokenomicsinfo')

socials.style.display = 'grid'
historyInfo.style.display = 'none'
roadMapInfo.style.display = 'none'
tokenomicsInfo.style.display = 'none'


function historyLink () {
  let historyDisplayStyle = window.getComputedStyle(historyInfo).display

  if (historyDisplayStyle === 'none') {
    historyInfo.style.display = 'grid'
    socials.style.display = 'none'
    roadMapInfo.style.display = 'none'
    tokenomicsInfo.style.display = 'none'
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
    tokenomicsInfo.style.display = 'none'
  }
}

home.addEventListener('click', homeLink)

function roadMapLink () {
  let roadMapDisplayStyle = window.getComputedStyle(roadMapInfo).display

  if (roadMapDisplayStyle === 'none') {
    socials.style.display = 'none'
    historyInfo.style.display = 'none'
    roadMapInfo.style.display = 'grid'
    tokenomicsInfo.style.display = 'none'
  }
}

roadMap.addEventListener('click', roadMapLink)

function tokenomicsLink () {
  let tokenomicsDisplayStyle = window.getComputedStyle(tokenomicsInfo).display

  if (tokenomicsDisplayStyle === 'none') {
    socials.style.display = 'none'
    historyInfo.style.display = 'none'
    roadMapInfo.style.display = 'none'
    tokenomicsInfo.style.display = 'grid'
  }
}

tokenomics.addEventListener('click', tokenomicsLink)

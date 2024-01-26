const telegram = document.querySelector('#telegram')
const twitter = document.querySelector('#twitter')
const coinGecko = document.querySelector('#coingecko')
const logo = document.querySelector('#bonkdog')
const bonkAudio = new Audio('bonk.mp3')

async function dogebonked () {
  return new Promise((resolve) => {
    bonkAudio.currentTime = 0
    bonkAudio.play().catch(error => {
      console.error('Error playing audio:', error)
    })

    logo.style.backgroundImage = "url('dogebonk2.png')"

    let counter = document.querySelector('#counter')
    let currentValue = parseInt(counter.innerText)
    counter.innerText = (currentValue + 1).toString()
    console.log(counter.innerText)

    setTimeout(() => {
      logo.style.backgroundImage = "url('dogebonk1.png')"
      resolve()
    }, 100)
  })
}

logo.addEventListener('click', async () => {
  await dogebonked()
})

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

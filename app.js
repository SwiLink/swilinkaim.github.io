const startBtn = document.querySelector('#start')
const screens = document. querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const congrat = document.querySelector('#congrat')
const boardus = document.querySelector('.boardus')
const input = document.querySelector('#inp')
let time = 0
let count = 0



startBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

board.addEventListener('click', (event)=> {
    if (event.target.classList.contains('circle')){
        count+=1
    }
    congrat.innerHTML = `<h1>Congratulations! Your score is: <span class='primary'>${count}</span></h1>`
})

congrat.innerHTML = `<h1>What's happened? Your score is 0</h1>`

timeList.addEventListener('click', (event)=>{
    event.preventDefault()
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})



function startGame() {
    setInterval(decreaseTime,1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime() {
    if (time===0) {
        finishGame()
    } else {
        let current = --time
        if (current <= 10) {
            timeEl.innerHTML = `00:0${current}`
        } else if (current>10) {
            timeEl.innerHTML = `00:${current}`
        }

    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function finishGame() {
    screens[2].classList.add('up')
    board.addEventListener('click', (event)=> {
        if (event.target.classList.contains('circle')){
            count+=1
        }
    })

}

function createRandomCircle() {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    board.append(circle)
    circle.style.minWidth = circle.style.minHeight = `10px`
    circle.onclick = function cunti() {
        const {width, height} = board.getBoundingClientRect()
        let size = getRandomNumber(0,59)
        let x = getRandomNumber(0, width - size)
        let y = getRandomNumber(0, height - size)
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.style.background = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`

    }
}

function getRandomNumber(min, max) {
    return Math.round(Math.random()*(max-min) + min)
}
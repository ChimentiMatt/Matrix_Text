let symbols = '/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/'
let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let allChars = symbols + alpha
let allArray = []
var randomItem = ''
let randomStr = ''

let counter = 0

let newLetter = document.getElementById('testWord')
let appBody = document.getElementById('app')

// make the string of all characters into a list
for (let i = 0; i < allChars.length; i++){
    allArray.push(allChars[i])
}

// get random character
function randomChar() {
    for (let i = 0; i < 1; i ++){
        counter += i
        for (let i = 0; i < 5; i ++){
            randomStr += allArray[Math.floor(Math.random()*allArray.length)] + '<br />';
        }
        appBody.innerHTML += '<div id='+counter+'>'+randomStr+'</div>'
        randomStr= ''
    }
}


randomChar()


text1 = document.getElementById('0')
console.log(text1.id)
randomNum = Math.random() * (-5 + 105) + -5;

document.getElementById('btnTest').addEventListener('click', () =>{
    gsap.to(text1, {color: 'green', y: '100vh', duration: 5})
})


// setInterval(randomChar, 100)


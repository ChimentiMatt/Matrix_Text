let symbols = '/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/∀8∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿'

let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let allChars = symbols + alpha
let allArray = []
var randomItem = ''
let randomStr = ''
let idName = 0
let randomHorizontal = 0
let counter = 0
let closeness = 0

let newLetter = document.getElementById('testWord')
let appBody = document.getElementById('app')
let opNum = 0

let visibility

let min = Math.ceil(0);
let max = Math.floor(symbols.length);
let oneRandomChar = Math.floor(Math.random() * (max - min) + min);


// make the string of all characters into a list
for (let i = 0; i < allChars.length; i++){
    allArray.push(allChars[i])
}

// Add random string to HTML Body
function randomChar() {
 
        for (let i = 0; i < 350; i ++){
            // console.log(counter)
            

            // makes a random string of characters
            for (let x = 0; x < 20; x ++){
                oneRandomChar = Math.floor(Math.random() * (max - min) + min);
                randomStr += allArray[Math.floor(Math.random()*allArray.length)] + '<br />';
            }
            appBody.innerHTML += '<div id='+counter+'>'+randomStr+'<span class="lastLetter">'+symbols[oneRandomChar]+'</span></div>'

            counter += 1
            randomStr= ''
        }
        for (let i = 0; i < 350; i++){
            min = Math.ceil(-5);
            max = Math.floor(110);
            randomHorizontal = Math.random() * (110 + -5) + -5;
        
            randomDuration = Math.random() * (50 - 25) + 25

            // randomStartingY = Math.random() * (300 +100) - 100
            randomDelay = Math.random() * (35 + 0 ) - 0

            // console.log(randomDuration ,'rd')
            if (randomDuration <= 27){
                closeness = 8
                opNum = .2
            }
            else if (randomDuration < 32) {
                closeness = 9
                opNum = .3
            }
            else if (randomDuration < 36) {
                closeness = 10
                opNum = .5
            }
            else if (randomDuration < 40) {
                closeness = 11
                opNum = .8
            }
            else if (randomDuration < 45) {
                closeness = 12
                opNum = .9
            }
            else if (randomDuration < 51) {
                closeness = 18
                opNum = 1
            }
     
            idName = document.getElementById(i)
            idName.style.position = 'absolute'
            idName.style.top = '-65vh'
            animate()    
        }
}


function animate(){
    var tl = gsap.timeline({repeat: -1});
    
    tl.to(idName, {delay: 0, fontSize: closeness, duration: 0, x: randomHorizontal+'vw'})
    tl.to(idName, {delay: randomDelay, y: '210vh', duration: randomDuration, opacity: opNum, ease: 'none'})
}

// let introCounter = 0
// let introId = 0
// let randomIntroStr = ''

// function makeIntro () {
//     // makes a random string of characters
//     for (let x = 0; x < 200; x ++){
//         randomIntroStr += allArray[Math.floor(Math.random()*allArray.length)] ;
//     }
//     appBody.innerHTML += '<div id='+introCounter+'>'+randomIntroStr+'</div>'
//     introCounter += 1

//     randomIntroStr= ''
// }


// document.getElementById('#wakeUp').innerHTML = ''


gsap.to('#wakeUp', {delay: 0, duration: 2.5, opacity: .8})
gsap.to('#wakeUp', {delay: 8, duration: 2.5, opacity: 0})
randomChar()






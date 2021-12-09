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
            appBody.innerHTML += '<div class="stringCollection" id='+counter+'>'+randomStr+'<span class="lastLetter">'+symbols[oneRandomChar]+'</span></div>'

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


let backgroundCount = 1

// gsap.to('#wakeUpNeo', {delay: 5, duration: 0, opacity: 0})
randomChar()

var tli = gsap.timeline({repeat: -1});
// Wake
tli.to('#wake19', {delay: 2, duration: 0, display: 'block'})
tli.to('#wake20', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake21', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake22', {delay: .2, duration: 0, display: 'block'})

// up,
tli.to('#wake23', {delay: .6, duration: 0, display: 'block'})
tli.to('#wake24', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake25', {delay: .2, duration: 0, display: 'block'})

// Neo
tli.to('#wake26', {delay: .6, duration: 0, display: 'block'})
tli.to('#wake27', {delay: .1, duration: 0, display: 'block'})
tli.to('#wake28', {delay: .1, duration: 0, display: 'block'})

// ...
tli.to('#wake29', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake30', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake31', {delay: .13, duration: 0, display: 'block'})

//remove words
tli.to('#wake19, #wake20, #wake21, #wake22, #wake23, #wake24, #wake25, #wake26, #wake27, #wake28, #wake29, #wake30, #wake31', {delay: 2.5, duration: 0, display: 'none'})

// The
tli.to('#wake1', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake2', {delay: .1, duration: 0, display: 'block'})
tli.to('#wake3', {delay: .2, duration: 0, display: 'block'})

// Matrix
tli.to('#wake4', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake5', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake6', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake7', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake8', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake9', {delay: .3, duration: 0, display: 'block'})

// has
tli.to('#wake10', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake11', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake12', {delay: .3, duration: 0, display: 'block'})

// you
tli.to('#wake13', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake14', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake15', {delay: .3, duration: 0, display: 'block'})

// ...
tli.to('#wake16', {delay: .5, duration: 0, display: 'block'})
tli.to('#wake17', {delay: .5, duration: 0, display: 'block'})
tli.to('#wake18', {delay: .5, duration: 0, display: 'block'})

// remove all letters
tli.to('#wake1, #wake2, #wake3, #wake4, #wake5, #wake6, #wake7, #wake8, #wake9, #wake10, #wake11, #wake12, #wake13, #wake14, #wake15, #wake16, #wake17, #wake18', {delay: 2.5, duration: 0, display: 'none'})

// tli.to('#introSentence', {duration: 0, width: '65vw'})
//Follow
tli.to('#wake32', {delay: 1.5, duration: 0, display: 'block'})
tli.to('#wake33', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake34', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake35', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake36', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake37', {delay: .3, duration: 0, display: 'block'})

// The
tli.to('#wake38', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake39', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake40', {delay: .3, duration: 0, display: 'block'})

// White
tli.to('#wake41', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake42', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake43', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake44', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake45', {delay: .3, duration: 0, display: 'block'})

// Rabbit
tli.to('#wake46', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake47', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake48', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake49', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake50', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake51', {delay: .3, duration: 0, display: 'block'})

// .
tli.to('#wake52', {delay: .3, duration: 0, display: 'block'})

// remove all letters
tli.to('#wake32, #wake33, #wake34, #wake35, #wake36, #wake37, #wake38, #wake39, #wake40, #wake41, #wake42, #wake43, #wake44, #wake45, #wake46, #wake47, #wake48, #wake49, #wake50, #wake51, #wake52', {delay: 2.5, duration: 0, display: 'none'})

//Knock ,
tli.to('#wake53', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake54', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake55', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake56', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake57', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake58', {delay: .3, duration: 0, display: 'block'})

// knock ,
tli.to('#wake59', {delay: .4, duration: 0, display: 'block'})
tli.to('#wake60', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake61', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake62', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake63', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake64', {delay: .3, duration: 0, display: 'block'})

// Neo .
tli.to('#wake65', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake66', {delay: .2, duration: 0, display: 'block'})
tli.to('#wake67', {delay: .3, duration: 0, display: 'block'})
tli.to('#wake68', {delay: .3, duration: 0, display: 'block'})

// remove all letters
tli.to('#wake52, #wake53, #wake54, #wake55, #wake56, #wake57, #wake58, #wake59, #wake60, #wake61, #wake62, #wake63, #wake64, #wake65, #wake66, #wake67, #wake68', {delay: 4, duration: 0, display: 'none'})


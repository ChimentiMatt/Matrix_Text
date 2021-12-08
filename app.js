let symbols = '/[!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?]+/∀8∁∂∃∄∅∆∇∈∉∊∋∌∍∎∏∐∑−∓∔∕∖∗∘∙√∛∜∝∞∟∠∡∢∣∤∥∦∧∨∩∪∫∬∭∮∯∰∱∲∳∴∵∶∷∸∹∺∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃⊄⊅⊆⊇⊈⊉⊊⊋⊌⊍⊎⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿'

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

// make the string of all characters into a list
for (let i = 0; i < allChars.length; i++){
    allArray.push(allChars[i])
}

// Add random string to HTML Body
function randomChar() {
 
        for (let i = 0; i < 200; i ++){
            console.log(counter)
            // makes a random string of characters
            for (let x = 0; x < 20; x ++){
                randomStr += allArray[Math.floor(Math.random()*allArray.length)] + '<br />';
            }
            appBody.innerHTML += '<div id='+counter+'>'+randomStr+'</div>'
            counter += 1
            randomStr= ''
        }
    
}
randomChar()





for (let i = 0; i < 200; i++){
    randomHorizontal = Math.random() * (-5 + 105) + -5;

    randomDuration = Math.random() * (20 + 40) + 20
    if (randomDuration < 20){
        closeness = 6
    }
    else if (randomDuration < 25) {
        closeness = 10
    }
    else if (randomDuration < 30) {
        closeness = 15
    }
    else if (randomDuration < 40) {
        closeness = 20
    }
    idName = document.getElementById(i)
    idName.style.position = 'absolute'
    idName.style.top = '-60vh'


    animate()    


}

function animate(){
    gsap.to(idName, {delay: 0, fontSize: closeness, duration: 0, x: randomHorizontal+'vw'})
    gsap.to(idName, {color: 'green', y: '190vh', duration: randomDuration, ease: 'none'})
}








// setInterval(randomChar, 100)


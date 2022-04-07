const cipherForm    = document.getElementById("cipher-form");
const formatterForm = document.getElementById("formatter-form");
const checkerForm   = document.getElementById("checker-form")

const cipherI = cipherForm.elements["cipher-I"];
const formatterI = formatterForm.elements["formatter-I"];
const checkerI   = checkerForm.elements[0];

let cipherValue = cipherI.value;
let formatterValue = document.getElementById("formatter-form").elements["formatter-I"].value;

// document.getElementById("testinginteract").innerHTML = "Why no log";

// cipherForm.addEventListener("submit", defaultPrevention)
// formatterForm.addEventListener("submit", defaultPrevention)
// Old code that I'm leaving in here as a comment because I spent a bit of time figuring it out and it'll help me remember how to do some things in the future.
// If trying to focus part of a form, reference/method call on the input, not the whole form itself.

document.getElementById("cipher-shift-form").addEventListener("submit", function(event){

    event.preventDefault()
    cipherI.focus();
    // window.getSelection().selectAllChildren(cipherI) For some reason, even though the text is selected, this will not allow one to delete the text with a single keystroke. You need to select the text manually. They keyboard thinks its typing into the entire webpage and not the textarea.
    
    // if (window.getSelection && document.createRange){ //Tests broswer compatability. This part is inspired by https://www.sanwebe.com/2014/04/select-all-text-in-element-on-click#:~:text=To%20select%20all%20text%20inside,the%20range%20of%20the%20element.
    //     let selection = window.getSelection();
    //     let cipherInputRange = document.createRange();
    //     cipherInputRange.selectNodeContents(cipherI);
    //     selection.removeAllRanges();
    //     selection.addRange();
    // }
})

cipherForm.addEventListener("submit", function(event){
    event.preventDefault()
    encryptCipherValue()
})
formatterForm.addEventListener("submit", function(event){
    event.preventDefault()
    formatWebNumber()
})
checkerForm.addEventListener("submit", function(event){
    event.preventDefault();
    validateWebCard()
})

// document.getElementById("formatter-form").onsubmit = defaultPrevention(event)
/*Their Code 
const form = document.getElementById('subscribe');

const form  = document.getElementById('signup');
form.elements[0]; // by index
form.elements['name']; // by name
form.elements['name']; // by id (name & id are the same in this case)

let fullName = name.value;
let emailAddress = email.value;

*/


// Caesar Cipher Code

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function wrapAround (number){
    if (number < 0){
      return (91+number)
    }
    else{
      return number +65
    }
  }

class Caesar{
  
    constructor (shift){
    this.shift = shift
  }

  encrypt(str){
    if(this.shift < 0){
        throw "Positive shifts only plz"
    }
    else if(this.shift % 1 !== 0){
        throw "No decimal shifts you dolt"
    }

    let strArr = str.split('').map(char => char.toUpperCase()) //Creates a variable that is equal to the input string (split into an array of uppercased characters)
    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65 + this.shift) % 26)
      }
      return newChar })
    const resultArray = []
    unicodeArr.map(uni =>{
        if (typeof uni === "number"){
            resultArray.push(String.fromCharCode(uni))
        }
        else{
            resultArray.push(uni)
        }
       })
  return resultArray.join('')
  }


  decrypt(str){
    if(this.shift < 0){
        throw "Positive shifts only plz"
    }
    else if(this.shift % 1 !== 0){
        throw "No decimal shifts you dolt"
    }
    let strArr = str.split('').map(char => char.toUpperCase()) //Creates a variable that is equal to the input string (split into an array of uppercased characters)    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65 - this.shift) % 26) //possibly caught a bug, possibly introduced one: moved first closing bracket from the -65) to the - this.shift) because otherwise I'm mod division-ing the shift, not the unicode code - 65 - the shift. IT WORKS!
      }
      return newChar })
    const resultArray = []
    unicodeArr.map(uni =>{
        if (typeof uni === "number"){
            resultArray.push(String.fromCharCode(uni))
        }
        else{
            resultArray.push(uni)
        }
       })
  return resultArray.join('').toLowerCase()
  }
}

// const rot13 = new Caesar(13);

// Password Generator Code
const hexAlpha = ['a','b','c','d','e','f','(',')','$','@','!','_','+','-',':',';','{','}','*','#','%','^','=']
function generatePass(){ //Makes a password of length 20
    const passArr = []
    for (let d = 0; d < 21; d += 1){
        const nextDigit = Math.floor(Math.random()*33)
        if (nextDigit < 10){
            passArr.push(nextDigit)
        }
        else{
            passArr.push(hexAlpha[nextDigit-10])
        }
    }
    /*if (passArr.length < 20){
        console.log("LENGTH ERROR!")
        console.log(passArr)
    }*/
    return passArr.join('')
}

// Number Formatter Code
function formatNumber(num){
    let isNegative = false;
    if (isNaN(Number(num))){
        throw "Did not input a number"
    }
    const resultArray = []
    const splitAtPeriod = num.toString().split('.');
    const workingNumber = splitAtPeriod[0]
    const workingNumberArray = workingNumber.split('')
    if (workingNumberArray[0] === "-"){
        isNegative = true;
        workingNumberArray.shift()
    }
    
    const endDigits = workingNumberArray.length % 3
    
    if (endDigits !== 0){
        resultArray.push((workingNumberArray.splice(0,endDigits)).join(''))
    }
    const timesToIterate = Math.floor(workingNumberArray.length / 3)
    for (let n=0; n < timesToIterate; n += 1){
        resultArray.push((workingNumberArray.splice(0,3)).join(''))
    }
    let resultString = resultArray.join()
    if (isNegative){
        resultString = '-' + resultString;
    }
    return splitAtPeriod[1] ? resultString + '.' + splitAtPeriod[1] : resultString
}

// Credit Card Checker Code
const isEven = num => (num % 2) === 0 ? true : false;

// function validateCred(array){
//     let arr = array.slice(0);

//     let numCounter = 1; //Sees if the number being considered meets the criterion of "every OTHER number". ie, will be isEven()'d.
//     let sumStorage = 0;
//     while (arr.length > 0){
//       let numberConsidered = arr.pop()
//       if (isEven(numCounter)){
//         numberConsidered *= 2
//         if (numberConsidered > 9){
//           numberConsidered -= 9
//         }
//       }
//       sumStorage += numberConsidered;
//       numCounter += 1
//     }
//     if (sumStorage % 10 === 0){
//       console.log(`Card number: ${array} PASSED checks`)
//       return true
//     }
//     else{
//       console.log(`Card number: ${array} FAILED checks`)
//       return false
//     }
//   }

// The version below is modified and enhanced specifically for this page. What you see above was the original, and could only take arrays.
function validateCred(num){
    if (typeof num !== "number" || isNaN(num)){
        throw("this can only check numbers, not whatever the hell you're inputting!")
    }
    arr = String(num).split('').map(str => Number(str))
    let numCounter = 1; //Sees if the number being considered meets the criterion of "every OTHER number". ie, will be isEven()'d.
    let sumStorage = 0;
    while (arr.length > 0){
      let numberConsidered = arr.pop()
      if (isEven(numCounter)){
        numberConsidered *= 2
        if (numberConsidered > 9){
          numberConsidered -= 9
        }
      }
      sumStorage += numberConsidered;
      numCounter += 1
    }
    if (sumStorage % 10 === 0){
      return true
    }
    else{
      return false
    }
  }

// Interaction With Website

//   Cipher
// Freaking shift was being taken as a string. ALWAYS CHECK THE TYPES OF THE VALUES YOU'RE GETTING FROM THE WEB!!!!!!!!!
function encryptCipherValue(){ 
    try {
        const caesarShift = Number(document.getElementById("cipher-shift-form").elements[0].value);
        const caesarCipher = new Caesar(caesarShift);
        if (typeof caesarShift !== "number" || isNaN(caesarShift)){
            throw("invalid shift inputted")
        }
        document.getElementById("cipher-form").elements["cipher-I"].value = caesarCipher.encrypt(cipherI.value)    
    } catch (error) {
        document.getElementById("cipher-form").elements["cipher-I"].value = `error: ${error}`
    }
}

function decryptCipherValue(){
    try {
        const caesarShift = Number(document.getElementById("cipher-shift-form").elements[0].value);
        const caesarCipher = new Caesar(caesarShift);
        if (typeof caesarShift !== "number" || isNaN(caesarShift)){
            throw("invalid shift inputted")
        }
        document.getElementById("cipher-form").elements["cipher-I"].value = caesarCipher.decrypt(cipherI.value)//Tested, for some reason does not work if this exact value is stored in a constant or variable. Maybe this value can't be stored for some reason?
    } catch (error) {
        document.getElementById("cipher-form").elements["cipher-I"].value = `error: ${error}`
    }
    
}

document.getElementById("encrypt").addEventListener("click", encryptCipherValue)
document.getElementById("decrypt").addEventListener("click", decryptCipherValue)

//  Formatting Numbers

function formatWebNumber(){
    try {
        document.getElementById("formatter-form").elements["formatter-I"].value = formatNumber(document.getElementById("formatter-form").elements["formatter-I"].value)       
    } catch (error) {
        document.getElementById("formatter-form").elements["formatter-I"].value = `error: ${error}`
    }   
}

document.getElementById("format").addEventListener("click", formatWebNumber)

//  Password Generation

function generateWebPass(){
    document.getElementById("passGen-output").innerHTML = generatePass()
}

document.getElementById("generate").addEventListener("click", generateWebPass)

//  Credit Card Checking
// This number is valid: 4539677908016808
function validateWebCard(){
    try {
        document.getElementById("checker-output").innerHTML = validateCred(Number(checkerI.value))   
    } catch (error) {
        document.getElementById("checker-output").innerHTML = `error: ${error}`
    }
}

document.getElementById("check").addEventListener("click", validateWebCard)
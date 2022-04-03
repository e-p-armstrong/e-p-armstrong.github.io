const cipherForm    = document.getElementById("cipher-form")
const formatterForm = document.getElementById("formatter-form")

const cipherI = cipherForm.elements["cipher-I"]
const formatterI = formatterForm.elements["formatter-I"]

let cipherValue = cipherI.value
let formatterValue = document.getElementById("formatter-form").elements["formatter-I"].value


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

const rot13 = new Caesar(13);

// Password Generator Code
const hexAlpha = ['a','b','c','d','e','f','(',')','$','@','!','_','+','-',':',';','{','}']
function generatePass(){ //Makes a password of length 20
    const passArr = []
    for (let d = 0; d < 21; d += 1){
        const nextDigit = Math.floor(Math.random()*28)
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
    if (isNaN(Number(num))){
        throw "Did not input a number"
    }
    const resultArray = []
    const splitAtPeriod = num.toString().split('.');
    const workingNumber = splitAtPeriod[0]
    const endDigits = workingNumber.length % 3
    const workingNumberArray = workingNumber.split('')
    if (endDigits !== 0){
        resultArray.push((workingNumberArray.splice(0,endDigits)).join(''))
    }
    const timesToIterate = Math.floor(workingNumber.length / 3)
    for (let n=0; n < timesToIterate; n += 1){
        resultArray.push((workingNumberArray.splice(0,3)).join(''))
    }
    let resultString = resultArray.join()
    return splitAtPeriod[1] ? resultString + '.' + splitAtPeriod[1] : resultString
}

// Credit Card Checker Code
const isEven = num => (num % 2) === 0 ? true : false;

function validateCred(array){
    let arr = array.slice(0);

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
      console.log(`Card number: ${array} PASSED checks`)
      return true
    }
    else{
      console.log(`Card number: ${array} FAILED checks`)
      return false
    }
  }

// Interaction With Website

//   Cipher

function encryptCipherValue(){
    try {
        document.getElementById("cipher-form").elements["cipher-I"].value = rot13.encrypt(document.getElementById("cipher-form").elements["cipher-I"].value)    
    } catch (error) {
        document.getElementById("cipher-form").elements["cipher-I"].value = `error: ${error}`
    }
    
}

function decryptCipherValue(){
    try {
        document.getElementById("cipher-form").elements["cipher-I"].value = rot13.decrypt(document.getElementById("cipher-form").elements["cipher-I"].value)    //Tested, for some reason does not work if this exact value is stored in a constant or variable. Maybe this value can't be stored for some reason?
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

function validateWebCard(){
    document.getElementById("checker-output").innerHTML = validateCred([5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4])
}

document.getElementById("check").addEventListener("click", validateWebCard)
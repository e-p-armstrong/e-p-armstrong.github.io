import { useState } from "react"
import Para from "../components/para"
import Article from "../components/article"
import Button from "../components/button"


// Caesar cipher stuff
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function wrapAround (number: number){
    if (number < 0){
      return (91+number)
    }
    else{
      return number + 65
    }
}

class Caesar{
    shift: number
  
    constructor (shift: number){
        this.shift = shift
    }

  encrypt(str: string){
    if(this.shift < 0){
        throw "Positive shifts only plz"
    }
    else if(this.shift % 1 !== 0){
        throw "No decimal shifts you dolt"
    }

    let strArr = str.split('').map(char => char.toUpperCase()) //Creates a variable that is equal to the input string (split into an array of uppercased characters)
    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar: string | number = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65 + this.shift) % 26)
      }
      return newChar })
    const resultArray: string[] = []
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


  decrypt(str: string){
    if(this.shift < 0){
        throw "Positive shifts only plz"
    }
    else if(this.shift % 1 !== 0){
        throw "No decimal shifts you dolt"
    }
    let strArr = str.split('').map(char => char.toUpperCase()) //Creates a variable that is equal to the input string (split into an array of uppercased characters)    
    const unicodeArr = strArr.map((char) =>{ //Makes a variable that is equal to the an array of the unicode equivalents of each character in the uppercased string.
      let newChar: string | number = char
      if (alphabet.includes(char)){
        newChar = wrapAround((char.charCodeAt(0) - 65 - this.shift) % 26) //possibly caught a bug, possibly introduced one: moved first closing bracket from the -65) to the - this.shift) because otherwise I'm mod division-ing the shift, not the unicode code - 65 - the shift. IT WORKS!
      }
      return newChar })
    const resultArray: string[] = []
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
function formatNumber(num: number | string){
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
const isEven = (num: number) => (num % 2) === 0;

function validateCred(num: number | string){
    const castedToNumber = Number(num)
    if (typeof castedToNumber !== "number" || isNaN(castedToNumber)){
        throw("this can only check numbers, not whatever the hell you're inputting!")
    }
    const arr = String(castedToNumber).split('').map(str => Number(str))
    let numCounter = 1; //Sees if the number being considered meets the criterion of "every OTHER number". ie, will be isEven()'d.
    let sumStorage = 0;
    while (arr.length > 0){
      let numberConsidered = Number(arr.pop())
      if (isEven(numCounter)) {
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

export default function CodeProjects () {
    // Caesar Cipher stuff
    const [shift, setShift] = useState(13)
    const [message,setMessage] = useState("ATTACKATDAWN")
    function encryptCipherValue(){
        try {
            const caesarShift = Number(shift);
            const caesarCipher = new Caesar(caesarShift);
            if (typeof caesarShift !== "number" || isNaN(caesarShift)){
                throw new Error("invalid shift inputted")
            }
            setMessage(caesarCipher.encrypt(message))
        } catch (error) {
            setMessage(String(error))
        }
    }
    function decryptCipherValue(){
        try {
            const caesarShift = Number(shift);
            const caesarCipher = new Caesar(caesarShift);
            if (typeof caesarShift !== "number" || isNaN(caesarShift)){
                throw new Error("invalid shift inputted")
            }
            setMessage(caesarCipher.decrypt(message))
        } catch (error) {
            setMessage(String(error))
        }
    }
    
    // Number formatter stuff
    const [number,setNumber] = useState("1048596")

    function formatWebNumber(){
        try {
            setNumber(formatNumber(number))
        } catch (error) {
            setNumber(String(error))
        }   
    }
    
    // Password Generator Stuff
    const [password,setPassword] = useState("output appears here")

    function generateWebPass(){
        setPassword(generatePass())
    }


    const [creditCard, setCreditCard] = useState("4539677908016808")
    const [checksOut, setChecksOut] = useState("output appears here")
    //  Credit Card Checking
    // This number is valid: 4539677908016808
    function validateWebCard(){
        try {
            setChecksOut(String(validateCred(creditCard)))
        } catch (error) {
            setChecksOut(String(error))
        }
    }

    return (
        <>
            <Para className="my-6 px-12 text-center text-xl">There are some basic functions on display here, but the coolest thing is how they're integrated with the page.</Para>
            <Para  className="my-6 px-12 text-center text-xl">Oh, and there's the thing linked to by the Jammming infobox. Check that out!</Para>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 lg:mx-6">
                <Article className="relative">
                    <Para className="text-xl font-semibold">A Caesar Cipher</Para>
                    <Para>This one is pretty self-explanatory. I made a Caesar Cipher class that lets you create an object with a given shift, and this object has methods that let you encrypt and decrypt text at will. The version customized for this page lets you change the input, and handles/displays errors/bad inputs smoothly (try-catch). Try encrypting and decrypting any messages you want!</Para>
                    <br /> <br /><br /><br /><br /><br />
                    <div className="grid grid-cols-2 lg:block lg:space-y-3 absolute bottom-28 w-full gap-2 items-center justify-center">
                        <div>
                            <Para>Your desired shift:</Para>
                            <form onSubmit={
                                (event) => {
                                    event?.preventDefault()
                                    document.getElementById("cipher-message")?.focus()
                                }
                                }>
                                <input type="text" onChange={(event) => setShift(Number(event.target.value))} value={shift} onSubmit={() => document.getElementById("cipher-message")?.focus()} className="p-1"/>
                            </form>
                        </div>
                        <div>
                            <Para>Your desired message:</Para>
                            <form onSubmit={
                                (event) => {
                                    event?.preventDefault()
                                    document.getElementById("encrypt-button")?.focus()
                                }
                            }>
                                <input type="text" onChange={(event) => setMessage(event.target.value)} value={message} id="cipher-message" className="p-1"/>
                            </form>
                        </div>
                    </div>
                    <br />
                    <div className="mt-5 w-1/6 absolute bottom-24">
                        <hr />
                    </div>
                    <br /><br /><br />
                    <div className="flex gap-3 my-5 absolute bottom-3">
                        <Button onClick={encryptCipherValue} id="encrypt-button">Encrypt</Button> <Button onClick={decryptCipherValue}>Decrypt</Button>
                    </div>
                </Article>
                <Article className="relative">
                    <Para className="text-xl font-semibold">A Number Formatter</Para>
                    <Para>A neat little function that, relatively efficiently, takes a number, turns it into a string, and adds commas in the correct places such that it is transformed into a (you guessed it) formatted number (commas in-between every three characters). This thing even works with decimals.</Para>
                    <Para>Try it out by entering numbers in the box below! (Try it with decimals!)</Para>
                    <br /><br /><br /><br />
                    <div className="grid grid-cols-2 lg:block lg:space-y-3 absolute bottom-28 w-full gap-2 items-center justify-center">
                        <div>
                            <Para>Your desired number:</Para>
                            <form onSubmit={formatWebNumber}>
                                <input type="text" value={number} className="p-1" onChange={ (event) => setNumber(event.target.value)}/>
                            </form>

                        </div>
                    </div>
                    <div className="mt-5 w-1/6">
                    
                    </div>
                    <div className="mt-5 w-1/6 absolute bottom-24">
                        <hr />
                    </div>
                    <br /><br /><br />
                    <div className="flex gap-3 my-5 absolute bottom-3">
                        <Button onClick={formatWebNumber}>Format</Button>
                    </div>
                </Article>
                <Article className="relative">
                    <Para className="text-xl font-semibold">A Password Generator</Para>
                    <Para>Mashes together a bunch of random characters to make a somewhat secure password, probably. It uses Math.random though so it probably isn't cryptographically sound. I still can't imagine the things it produces would be easy to guess or brute force, however. I made this in about ~2 minutes about a year ago to bloat this page don't judge me.</Para>
                    <br /><br /><br /><br />
                    <div className="grid grid-cols-2 lg:block lg:space-y-3 absolute bottom-28 w-full gap-2 items-center justify-center">
                        <div>
                            <Para>Your password:</Para>
                            <form onSubmit={
                                (event) => {
                                    event.preventDefault()
                                    generateWebPass()
                                }
                                }>
                                <input type="text" value={password} className="p-1"/>
                            </form>

                        </div>
                    </div>
                    <div className="mt-5 w-1/6">
                    
                    </div>
                    <div className="mt-5 w-1/6 absolute bottom-24">
                        <hr />
                    </div>
                    <br /><br /><br />
                    <div className="flex gap-3 my-5 absolute bottom-3">
                        <Button onClick={generateWebPass}>Generate</Button>
                    </div>
                </Article>
                <Article className="relative">
                    <div>
                        <Para className="text-xl font-semibold">Luhn's Algorithm</Para>
                        <Para className="font-semibold">(Credit Card Checker)</Para>
                    </div>
                    <Para> The outcome of a Codecademy "Challenge Project" -- it uses something called Luhn's Algorithm, which detects (most) typographical mistakes in important numbers. Basically, this checks if an array of numbers follows a specific pattern, returns true if it does, and false if it does not.</Para>
                    <br /><br /><br /><br />
                    <div className="grid grid-cols-2 lg:block lg:space-y-3 absolute bottom-28 w-full gap-2 items-center justify-center">
                        <div>
                            <Para>Your credit card number:</Para>
                            <form onSubmit={
                                (event) => {
                                    event.preventDefault()
                                    validateWebCard()
                                }
                                }>
                                <input type="text" value={creditCard} onChange={(event) => setCreditCard(event?.target.value)} className="p-1"/>
                            </form>
                        </div>
                        <div>
                            <Para>The result of the check:</Para>
                            <form onSubmit={
                                (event) => {
                                    event?.preventDefault()
                                    validateWebCard()
                                }
                            }>
                                <input type="text" value={checksOut} id="cipher-message" className="p-1"/>
                            </form>
                        </div>
                    </div>
                    <div className="mt-5 w-1/6">
                    
                    </div>
                    <div className="mt-5 w-1/6 absolute bottom-24">
                        <hr />
                    </div>
                    <br /><br /><br />
                    <div className="flex gap-3 my-5 absolute bottom-3">
                        <Button onClick={validateWebCard}>Generate</Button>
                    </div>
                </Article>
            </div>
        </>
        )
}
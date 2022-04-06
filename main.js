//See the following github repo for the original version of this:
//https://github.com/e-p-armstrong/mixedMessages


const userRelatedNounArray = ["mother","father","dog","cat","daughter","son","second cousin twice removed","brother","sister","ferret","velociraptor","unladen swallow"];
const insultAdjectiveArray = [["detestable","a"],["worthless","a"],["miserable","a"],["pathetic","a"],["unlovable","an"],["unapologetic","an"],["complete","a"],["total","a"],["rude","a"],["ugly","a"],["fat","a"],["stupid","a"]];
const insultNounArray = ["idiot","moron","scoundrel","knave","cur","bastard","vagabond","lowlife","pig","cow","ignoramus"]; //The second element of each item array specifies whether to use 'an' or 'a' -- grammatical correctness is important!


function insult(){
    const adjectiveArray = insultAdjectiveArray[Math.floor((Math.random() * insultAdjectiveArray.length))]
    const firstNoun = userRelatedNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNoun = insultNounArray[Math.floor((Math.random() * insultNounArray.length))]
    const adjective = adjectiveArray[0]
    const particle = adjectiveArray[1]

    return("Your " + firstNoun + " is " + particle + " " + adjective + " " + secondNoun + "!")
}

function updateBlockQuote(){
    document.getElementById("insultElem").innerHTML = insult()
}

document.getElementById("insultButton").addEventListener("click",updateBlockQuote)

console.log("hi")
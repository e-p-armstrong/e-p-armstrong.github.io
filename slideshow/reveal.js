const proofButton = document.querySelector(".button");
console.log(proofButton)
console.log(proofButton.innerHTML)

function liftTheCurtain(){
    console.log("fired!")
    document.querySelector("nav").style.display = "block";
    document.getElementById("explanation").style.display = "none";
    document.getElementById("headerh1").innerHTML = "Welcome To Evan's Corner of the Internet";
    proofButton.innerHTML = "Heh Heh Heh";
    document.querySelectorAll(".to-be-revealed").forEach(function(element){
        element.style.display="block";
        console.log(`to-be-revealed function fired. element = ${element}`)
    })
    document.title = "NOT Google Slides";
    document.head.querySelectorAll("link")[1].href = "./troll.png"
    document.getElementById("beengetting").innerHTML = "^ SEE THAT? That's a navbar.";
}

proofButton.addEventListener("click", liftTheCurtain);
proofButton.focus();
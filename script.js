var birthday = document.querySelector("#bday");
var luckynum = document.querySelector("#lucky");
var btn = document.querySelector("button");
var output = document.querySelector(".result");
var sum = 0;

output.style="visibility:hidden;"

birthday.onchange = function (){
    output.style="display:block;"
    sum = 0; return sum;
};//refreshes system everytime bday gets changed

//function to remove unwanted "-" from date
function clipString(stringtokeep, unwanted) {
    const clippedArray = stringtokeep.split(unwanted);
    const NewString = clippedArray.join("");
    return NewString;
}

//function to add digits of bday
function findsum(x) {
    for (let i = 0; i < x.length; i++) {
        sum = sum + Number(x.charAt(i));
    }
    return sum;
}

//when user clicks button
btn.addEventListener("click", function luckfinder() {
    
    
    const NewDob = clipString(birthday.value, '-');
    sum = findsum(NewDob);

    if(luckynum.value <= 0 ){
        output.innerText = "Please enter some valid lucky num first!😥";
    }
    else if (sum % luckynum.value === 0) {
        output.innerText= "Yuhooooo!!! Your birthday is Luckyyyy 🎉🍀💯😎🤘Partyyyy to banti hai!"
    }
    else output.innerText="Aww ! It's okay , your birthday is not very lucky🙂 We build our own luck👍🏼";
    

})

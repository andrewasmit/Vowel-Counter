// Getting the input value from the submit button
const inputBtn = document.querySelector("#inputBtn")
inputBtn.addEventListener("click", countVowels)

// Setting the Enter button as a button click submit
const userString = document.querySelector('#stringUserInput')
userString.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        event.preventDefault();
        document.getElementById('inputBtn').click();
    }
});


// Defining vowels and counting vowels functions
const vowels = ['a', 'e', 'i', 'o', 'u']
function countVowels(){
let userInput = document.getElementById("stringUserInput").value;
let str = userInput.toLowerCase();
let counter = 0;
let vowelArray = [];
for (let i =0; i<str.length; i++){
if (vowels.includes(str[i])){
    counter++;
    vowelArray.push(str[i]);
    userString.value="";
    }
    if (!vowels.includes(str[i]) && str[i]==='y'){
        console.log(`${str[i]} is sometimes a vowel.`)
        counter++;
        vowelArray.push(str[i]);
        userString.value="";
    }
}
if (counter ===1){
console.log(`This string has ${counter} vowel, which is ${vowelArray}.`);
userString.value="";
} if (counter ===0){
    console.log("This string has no vowels.");
    userString.value="";
} if (counter>1) {console.log(`This string has ${counter} vowels, which are ${vowelArray}.`);
userString.value="";
}};



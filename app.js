const myName = document.getElementById('name')
const input = document.getElementById('name-input')
const nameButton = document.getElementById('name-button')
const pronouns = document.getElementById('pronouns')
const pronounsInput = document.getElementById('pronouns-input')
const pronounsButton = document.getElementById('pronouns-button')
const pinkButton = document.getElementById('pink-button')
const greenButton = document.getElementById('green-button')
const blueButton = document.getElementById('blue-button')
const backgroundColor = document.getElementById('name-tag-background')
const counter = document.getElementById('counter') 

console.log(pronouns, pronounsInput, pronounsButton)

nameButton.addEventListener('click', () => {
    const newName = input.value;
    myName.textContent = newName;
    input.value = " ";
});

pronounsButton.addEventListener('click', () => {
    const newPronouns = pronounsInput.value;
    pronouns.textContent = newPronouns;
    input.value = " ";
});

pinkButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'pink'; 
})

greenButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'lightgreen'; 
})

blueButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'lightblue'; 
})



// let a = 0;
// function onClick () {
//     a++;
//     counter.textContent = a;
// }
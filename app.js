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
const monospace = document.getElementById('monospace')
const cursive = document.getElementById('cursive')
const fantasy = document.getElementById('fantasy')

let clicks = 0;
function onClick () {
    clicks++;
    counter.textContent = clicks;
}

nameButton.addEventListener('click', () => {
    const newName = input.value;
    myName.textContent = newName;
    input.value = " ";
    onClick();
});

pronounsButton.addEventListener('click', () => {
    const newPronouns = pronounsInput.value;
    pronouns.textContent = newPronouns;
    input.value = " ";
    onClick ()
});

pinkButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'pink'; 
    onClick ()
})

greenButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'lightgreen'; 
    onClick ()
})

blueButton.addEventListener ('click', () => {
    backgroundColor.style.backgroundColor = 'lightblue'; 
    onClick ()
})

monospace.addEventListener ('click', () => {
    myName.style.fontFamily = 'monospace'; 
    onClick ()
})

cursive.addEventListener ('click', () => {
    myName.style.fontFamily = 'cursive'; 
    onClick ()
})

fantasy.addEventListener ('click', () => {
    myName.style.fontFamily = 'fantasy'; 
    onClick ()
})

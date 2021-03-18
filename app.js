const myName = document.getElementById('name')
const input = document.getElementById('name-input')
const nameButton = document.getElementById('name-button')
const pinkButton = document.getElementById('pink-button')
const greenButton = document.getElementById('green-button')
const blueButton = document.getElementById('blue-button')
const backgroundColor = document.getElementById('name-tag-background')

console.log(backgroundColor)

nameButton.addEventListener('click', () => {
    const newName = input.value;
    myName.textContent = newName;
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


const myName = document.getElementById('name')
const input = document.getElementById('name-input')
const nameButton = document.getElementById('name-button')

nameButton.addEventListener('click', () => {
    const newName = input.value;
    myName.textContent = newName;
});


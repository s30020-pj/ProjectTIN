document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('button1').addEventListener('click', createNewDiv);

    document.getElementById('button2').addEventListener('click', removeDiv);

    document.getElementById('button3').addEventListener('click', (event) => colorDiv(event));

    document.getElementById('button4').addEventListener('click', addTextToDiv);
});

function createNewDiv() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a new div';
    document.body.insertBefore(newDiv, document.body.firstChild);
}

function removeDiv() {
    const divToRemove = document.body.firstElementChild;
    if (divToRemove) {
        divToRemove.remove(); // Remove the div if it exists
    } else {
        alert('No div to remove');
    }
}

function colorDiv(event) {
    event.target.parentElement.style.backgroundColor = 'red';
}

function addTextToDiv() {
    const divs = document.getElementsByTagName('div');
    for (const div of divs) {
        const text = document.createTextNode('Nowy tekst');
        div.appendChild(text);
    }
}
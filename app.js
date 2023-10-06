//Selects the necessary tag for the checkbox.
let darkModeBtn = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    darkModeBtn.checked = true;
}

//Attaches an event listener to the Dark Mode Button (checked = checking the checkbox on and off).
darkModeBtn.addEventListener('click', function (e) {
    let { checked } = darkModeBtn; //Check Springboard Dark Mode vid for explanation on { checked }
    if (checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : ''
});

//Selects the necessary id's for the form and input fields.
let form = document.querySelector('#form');
let urlInput = document.querySelector('#url');
let topTextInput = document.querySelector('#top');
let bottomTextInput = document.querySelector('#bottom');
let memeContainer = document.querySelector('#meme');

//Attaches an event listener to the form.
form.addEventListener('submit', function (e) {
    e.preventDefault(); //Prevents the page from refreshing once we submit our information.
    console.log('Form submitted');

    //Grabs the values from their respective input fields.
    let urlValue = urlInput.value;
    let topTextValue = topTextInput.value;
    let bottomTextValue = bottomTextInput.value;

    //Creates a new div element for the meme
    let memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');  //Adds this as a class for styling. 

    //Sets the HTML content for the meme div using template literals.
    memeDiv.innerHTML = `
    <img src="${urlValue}" alt="Meme Image">
    <div class="top-text">${topTextValue}</div>
    <div class="bottom-text">${bottomTextValue}</div>
    `;

    //Appends the meme div to the container.
    memeContainer.appendChild(memeDiv);

    //Clears the input fields for the next meme after they've been used.
    urlInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';
}); 

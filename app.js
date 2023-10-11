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

//Start of Meme Generator Components.

//This Event Listener Waits For The HTML Document To be Fully Loaded and Ready (i.e., When The DOM is Ready). Once The Document is Ready, The 
//Function Inside The Event Listener is Executed. This is Used To Ensure That The JavaScript Code Runs After The HTML is Fully Loaded.
document.addEventListener("DOMContentLoaded", function () {
    let memeForm = document.getElementById("meme-form");
    let listGallery = document.querySelector(".gallery");

    //Allows The Web Page To Not Submit Upon Clicking The Submit Button.//Check Springboard Dark Mode vid for explanation on { checked }
    memeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        //Creating The "li" Element
        let memeLi = document.createElement("li");
        memeLi.classList.add("meme-img");

        //Creating The canvas Element To Put Image in Background
        let urlInput = document.getElementById("url-images").value;
        let src = urlInput;
        let img = document.createElement("img");
        img.src = src;

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add("top", "text");
        topTextDiv.innerHTML = document.getElementById("top-text").value;

        let bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("bottom", "text");
        bottomTextDiv.innerHTML = document.getElementById("bottom-text").value;

        //Creating The "Remove" Element
        let removeDiv = document.createElement("div");
        removeDiv.classList.add("black-x");
        removeDiv.innerText = "X";
        removeDiv.style.color = "black";

        //Takeing The Elements Needed To Represent A Meme & Appends Them To A Newly Created "li" Element (memeLi). "memeLi" is Then Appended To The 
        //List (listGallery) To Display The Meme in The Web Page. 
        listGallery.appendChild(memeLi);
        memeLi.appendChild(img);
        memeLi.appendChild(topTextDiv);
        memeLi.appendChild(bottomTextDiv);
        memeLi.appendChild(removeDiv);

        //Creating The Reset To Prepare For The Addition of Another Meme.
        memeForm.reset();
    });

    //The Remove Function is Used To Remove A Meme From The List When A User Clicks The "X" Button Next To That Meme. It Does This by Identifying 
    //The Clicked "X" Button, Finding Its Parent (The "li" Element Representing The Meme), and Then Removing The Entire Meme (Both The Image and The
    //Text) From The Web Page. This Function is Triggered by A Click Event on The "X" Button, Ensuring That The User Can Delete Memes From The List.
    function remove(e) {
        e.target.parentElement.remove();
    }

    //Settting Up an Event Listener To Respond To Click Events Within The "listGallery." When A User Clicks Within This List (For Example, on The 
    //"X" Button of A Meme), The Remove Function is Executed, Allowing The User To Remove The Meme From The List.
    listGallery.addEventListener("click", remove, false);
});
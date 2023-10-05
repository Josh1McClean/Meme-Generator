//Variable & Selector For The
let darkModeBtn = document.querySelector('input[type="checkbox"]');

if (localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    darkModeBtn.checked = true;
}

darkModeBtn.addEventListener('click', function (e) {
    let { checked } = darkModeBtn; //Check Springboard Dark Mode vid for explanation on { checked }
    if (checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : ''
});

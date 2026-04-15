
let body = document.querySelector('body');
let darkBtn = document.querySelector('#dark-btn');
let lightBtn = document.querySelector('#light-btn');

 const local = localStorage.getItem('mode');

if(local) {
    toggleModeBtn()
}

function toggleModeBtn() {
    darkBtn.classList.toggle('hidden');
    lightBtn.classList.toggle('hidden');
    body.classList.toggle('dark-mode');
}

darkBtn.addEventListener('click', function() {
toggleModeBtn()
localStorage.setItem('mode', 'dark-mode');
});

lightBtn.addEventListener('click', function() {
toggleModeBtn()
localStorage.setItem('mode', '');
});

// localStorage.setItem('mode', 'dark-mode');         Local Storagega ma'lumot yuboradi
// const item = localStorage.getItem('mode');         Local Storagedan ma'lumot oladi  brouzerga chiqaradi
// localStorage.clear()                               hammasini tozalaydi
// localStorage.removeItem('mode');                   1tani o'chiradi

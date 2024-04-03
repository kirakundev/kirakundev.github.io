// File: script.js
const typingElement = document.getElementById('typing');
const text = 'Happy Eid Mubarak For You Nmcyla :*';


let index = 0;

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Atur kecepatan mengetik
    } else {
        typingElement.classList.remove('typing-animation'); // Menghapus kelas animasi
    }
}

// Memulai animasi
typingElement.classList.add('typing-animation'); // Menambah kelas animasi
type();


document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const closePopupButton = document.getElementById('closePopup');

    closePopupButton.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
});


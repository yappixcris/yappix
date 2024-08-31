const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const firstCard = document.getElementById('first-card');
const secondCard = document.getElementById('second-card');
const finalCard = document.getElementById('final-card');
const heartsContainer = document.getElementById('hearts-container');

noBtn.addEventListener('mouseover', function() {
    const offsetX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const offsetY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${offsetX}px`;
    noBtn.style.top = `${offsetY}px`;
});

yesBtn.addEventListener('click', function() {
    firstCard.style.display = 'none';
    secondCard.style.display = 'block';
});

const sureNoBtn = document.getElementById('sure-no');
sureNoBtn.addEventListener('mouseover', function() {
    const offsetX = Math.random() * (window.innerWidth - sureNoBtn.offsetWidth);
    const offsetY = Math.random() * (window.innerHeight - sureNoBtn.offsetHeight);

    sureNoBtn.style.position = 'absolute';
    sureNoBtn.style.left = `${offsetX}px`;
    sureNoBtn.style.top = `${offsetY}px`;
});

document.getElementById('sure-yes').addEventListener('click', function() {
    secondCard.style.display = 'none';
    finalCard.style.display = 'block';
    createHearts();
});

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        heartsContainer.appendChild(heart);
    }
}

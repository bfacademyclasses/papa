const surpriseBtn = document.getElementById('surpriseBtn');
const giftBox = document.getElementById('giftBox');
const acceptBtn = document.getElementById('acceptBtn');
const bgMusic = document.getElementById('bgMusic');

function revealSurprise() {
    // Start Papa song
    bgMusic.play();

    // Show gift box
    surpriseBtn.style.display = 'none';
    giftBox.classList.remove('hidden');

    // Confetti effect
    confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
    });
}

window.addEventListener('load', () => {
    if (localStorage.getItem('songPlaying') === 'true') {
        revealSurprise();
    }
});

surpriseBtn.addEventListener('click', () => {
    localStorage.setItem('songPlaying', 'true');
    revealSurprise();
});

acceptBtn.addEventListener('click', () => {
    window.location.href = 'thankyou.html';
});
// Login Function
function login() {
    const yourName = document.getElementById('yourName').value.trim();
    const hisName = document.getElementById('hisName').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    
    if (yourName.toLowerCase() === 'zoe' && hisName.toLowerCase() === 'nouri') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainScene').classList.add('active');
        createSceneHearts();
    } else {
        errorMsg.classList.add('show');
        setTimeout(() => errorMsg.classList.remove('show'), 3000);
    }
}

// Create floating hearts on login page
function createFloatingHearts() {
    const container = document.getElementById('floatingElements');
    const heartTypes = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (8 + Math.random() * 6) + 's';
        container.appendChild(heart);
    }
}

// Create hearts in main scene
function createSceneHearts() {
    const container = document.getElementById('sceneHearts');
    const heartTypes = ['❤️', '💕', '💖', '💗', '💝', '💘', '💓', '💞'];
    const colors = ['#ec4899', '#f472b6', '#ff69b4', '#ff1493', '#db2777'];
    
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.className = 'scene-heart';
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 12 + 's';
        heart.style.animationDuration = (10 + Math.random() * 8) + 's';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(heart);
    }
}

// Open Letter
function openLetter() {
    document.getElementById('letterOverlay').classList.add('active');
}

// Close Letter
function closeLetter() {
    document.getElementById('letterOverlay').classList.remove('active');
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    
    // Enter key support
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') login();
        });
    });
});

// Escape key to close letter
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLetter();
});
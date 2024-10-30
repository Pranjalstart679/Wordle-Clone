function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('.dark-mode-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

function searchAnime() {
    const searchText = document.querySelector('.search-bar').value.toLowerCase();
    const cards = document.querySelectorAll('.anime-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.anime-title').textContent.toLowerCase();
        const genres = card.querySelector('.genre').textContent.toLowerCase();
        
        if (title.includes(searchText) || genres.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterAnime(genre) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const cards = document.querySelectorAll('.anime-card');
    cards.forEach(card => {
        const genres = card.dataset.genres;
        if (genre === 'all' || genres.includes(genre)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function rateAnime(event) {
    const stars = event.currentTarget.children;
    const starIndex = Array.from(stars).indexOf(event.target);
    
    if (starIndex !== -1) {
        for (let i = 0; i < stars.length; i++) {
            if (i <= starIndex) {
                stars[i].className = 'fas fa-star';
            } else {
                stars[i].className = 'far fa-star';
            }
        }
    }
}

function addComment(btn) {
    const commentInput = btn.previousElementSibling;
    const comment = commentInput.value.trim();
    
    if (comment) {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        commentDiv.style.padding = '0.5rem 0';
        commentDiv.style.color = 'var(--secondary-text)';
        
        btn.parentElement.appendChild(commentDiv);
        commentInput.value = '';
    }
}
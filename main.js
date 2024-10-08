const poems = [
    {
        "title": "Романтическая коллекция. Часть I",
        "subtitle": "Последний день лета",
        "text": ''
    },
];

let currentPoemIndex = 0;

function displayPoem(index) {
    const poem = poems[index];

    const poemTitleWithNewLines = poem.title.replace(/\n/g, '\n');
    
    document.getElementById('poem-title').textContent = poemTitleWithNewLines;
    document.getElementById('poem-text').textContent = poem.text;

    if (poem.subtitle) {
        document.getElementById('poem-subtitle').textContent = poem.subtitle;
        document.getElementById('poem-subtitle').style.display = 'block';
    } else {
        document.getElementById('poem-subtitle').style.display = 'none';
    }

    // Управляем видимостью кнопок
    updateButtons(index);
}

function updateButtons(index) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (index === 0) {
        prevBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
    }

    if (index === poems.length - 1) {
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayPoem(currentPoemIndex);

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPoemIndex < poems.length - 1) {
            currentPoemIndex++;
            displayPoem(currentPoemIndex);
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPoemIndex > 0) {
            currentPoemIndex--;
            displayPoem(currentPoemIndex);
        }
    });
});
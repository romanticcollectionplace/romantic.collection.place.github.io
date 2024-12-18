const poems = [
    {
        "title": "Романтическая коллекция. Часть I",
        "subtitle": "Последний день лета",
        "date": "08.10.2024",
        "text": '"Праздник жизни" начал моё лето,\nЗа ним пустой взгляд, метание по углам.\nЗной, сомненья, мысли до рассвета - \nКорабль мой причалил к ложным берегам?\nВдохну и вспомню старую легенду - \n"Иди всегда за лунным светом,\nИ если вера, что с тобой, сильна,\nОсветит он дороги, думы, времена".\nЯ поплыву, не веря в чудеса,\nНо, говорят, тем прекрасно чудо,\nЧто явится оно из ниоткуда,\nИ вновь задует ветер в паруса.\nТёмно море лунным светом обогрето - \nПраздник жизни закончил моё лето.'
    },
    {
        "title": "Романтическая коллекция. Часть II",
        "subtitle": "Лунный луч",
        "date": "09.10.2024",
        "text": 'Давно разрешено сомненье,\nЧто неподвластна нам гроза,\nСудьба, таланты и везенье,\nЧувства - как ни проси ты небеса.\nПутеводитель - лунный луч,\nЧто сквозь плеяду тёмных туч\nУкажет мне путь к Вам - \nДорогу ту я не предам.\nТворение рукописное о Вас я напишу;\nОсенним вечером пройду я по тропинке, \nНа полку высшу в доме у лощинки \nТворение то с трепетом я возложу. \nВзгляну вокруг и улыбнусь я мягко - \nМысль о Вас светится так ярко!'
    },
    {
        "title": "Романтическая коллекция. Часть III",
        "subtitle": "Мираж",
        "date": "20.10.2024",
        "text": 'Сияют и искрятся карие глаза,\nПред ними воплощение мечт - \nСвою ладонь на Вашу положа, \nНа счастье смог себя обречь.\nИ лишь спустя секунды всплеска,\nПорыв наивности одернут резко.\nХладом разума взят на абордаж - \nТо был лишь призрачный мираж.\nНо столь прекрасны те мгновенья,\nЧто мысли только об одном:\nДо горизонтов тех дойду пешком,\nГде встречу то же наслажденье.\nПуть к ним лишь в направлении Вас,\nИ я пойду, не медля ни на час.'
    },
    {
        "title": "Романтическая коллекция. Часть IV",
        "subtitle": "Маятник",
        "date": "19.11.2024",
        "text": 'Маятник качнулся вправо:\nЧувствую - все хорошо,\nИ, накал волнения сбавя,\nСпокойствием разоружён.\nМаятник качнулся влево:\nТрачу жизней девять,\nЛишь бы потушить пожар,\nСжигающий остаток чар.\nМаятник качнулся вправо:\nПытаюсь выдержать баланс,\nГде между нами резонанс,\nИща на маятник управу.\nНо неукротима амплитуда,\nПоддастся ли она чему-то?\n\nМаятник подобен степной вьюге,\nТанцующей на склонах небосвода - \nМылят взгляд его потуги,\nНо не меняют направленье хода.  \nЛюбую непогоду остановит время, \nНо не про маятник та схема:\nТеченье времени его питает,\nИ все выше он взлетает.\nТуда-сюда, туда-сюда.\nНе может же так продолжаться,\nЧто маятником будут диктоваться\nПоступки наши и слова?\n-------------------------------------------\n-------------------------------------------'
    }
];

let currentPoemIndex = 0;

function displayPoem(index) {
    const poem = poems[index];

    const poemTitleWithNewLines = poem.title.replace(/\n/g, '\n');
    
    document.getElementById('poem-title').textContent = poemTitleWithNewLines;
    document.getElementById('poem-text').textContent = poem.text;
    document.getElementById('poem-date').textContent = poem.date;

    if (poem.subtitle) {
        document.getElementById('poem-subtitle').textContent = poem.subtitle;
        document.getElementById('poem-subtitle').style.display = 'block';
    } else {
        document.getElementById('poem-subtitle').style.display = 'none';
    }

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
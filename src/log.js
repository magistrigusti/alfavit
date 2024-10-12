// log.js
export function startNextLetter() {
    const LEFT = 'Л';
    const RIGHT = 'П';
    const BOTH = 'О';
    
    const alphabet = [
        'A', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И',
        'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т',
        'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Э', 'Ю', 'Я'
    ];

    let delay = 1000;
    let sarge = 0;
    let continuum = generateContinium();

    function generateContinium() {
        // Ваша реализация генерации букв
        const letters = alphabet.slice(); // Можно реализовать случайную сортировку
        const moves = Array(letters.length).fill(null).map(() => Math.random() < 0.5 ? LEFT : RIGHT);
        return [letters, moves];
    }

    function nextLetter() {
        if (sarge >= continuum[0].length) {
            continuum = generateContinium();
            sarge = 0;
        }

        // Получаем элемент, который будет отображать буквы
        const voiceLetterElement = document.getElementById('pkAlphabetVoiceLetter');
        const moveLetterElement = document.getElementById('pkAlphabetMoveLetter');

        // Устанавливаем текст букв
        voiceLetterElement.innerHTML = continuum[0][sarge];
        moveLetterElement.innerHTML = continuum[1][sarge];

        // Вычисляем случайные координаты
        const wg = document.getElementById('pkAlphabetBlock');
        const topShift = document.getElementById('pkAlphabetSettings').getBoundingClientRect().bottom;
        
        const randomX = Math.random() * (document.documentElement.clientWidth - wg.clientWidth - 30);
        const randomY = Math.random() * (document.documentElement.clientHeight - wg.clientHeight - 30 - topShift) + topShift;

        // Устанавливаем позицию
        wg.style.left = `${Math.ceil(randomX)}px`;
        wg.style.top = `${Math.ceil(randomY)}px`;
        wg.style.visibility = 'visible'; // Делаем элемент видимым

        sarge++;
        setTimeout(nextLetter, delay);
    }

    return {
        start: nextLetter,
        setDelay: (newDelay) => {
            delay = (newDelay >= 1 && newDelay <= 5000) ? newDelay : delay;
        },
    };
}

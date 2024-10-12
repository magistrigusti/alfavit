import React, { useEffect } from 'react';
import { startNextLetter } from './log.js';
import './App.css';

function App() {
    useEffect(() => {
        const letterController = startNextLetter();
        letterController.start(); // Запускаем отображение букв

        document.getElementById('pkAlphabetDelayButton').onclick = function(e) {
            e.preventDefault();
            const inp = document.getElementById('pkAlphabetDelayInput');
            const n = Number(inp.value);
            
            // Проверка диапазона значений
            if (n >= 100 && n <= 10000) {
                letterController.setDelay(n); // Устанавливаем задержку
            } else {
                alert("Задержка должна быть в пределах от 100 до 5000 мс.");
            }
        };

        // Очистка при размонтировании компонента
        return () => {
            // Дополнительные функции очистки, если нужны
        };
    }, []);

    return (
        <div className="App">
            <div id="pkAlphabet">
                <div id="pkAlphabetSettings">
                    <input 
                        id="pkAlphabetDelayInput" 
                        type="number" 
                        maxLength="4" 
                        size="4" 
                        defaultValue="1000" 
                        min="100" 
                        max="10000" 
                    />
                    <button id="pkAlphabetDelayButton">Интервал (мсек)</button>
                </div>
                <div id="pkAlphabetBlock" style={{ visibility: 'visible', position: 'absolute' }}>
                    <div className="pk-alphabet--letter" id="pkAlphabetVoiceLetter">П</div>
                    <div className="pk-alphabet--letter" id="pkAlphabetMoveLetter">Л</div>
                </div>
            </div>
        </div>
    );
}

export default App;

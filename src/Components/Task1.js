import React from 'react';

export function Name() {
    return (
        <div className="block">
            <img src="square_320_ca7b178620c1c014046d3fd5a9191d58.jpg" alt="Илон Маск" />
            <h2>Илон Маск</h2>
        </div>
    );
}

export function Year() {
    return (
        <div className="block">
            <div>Дата рождения: 25 июня 1971</div>
        </div>
    );
}

export function Biograf() {
    return (
        <div className="block">
            <div className="biog">
                Краткая биография: Родился, пошел в школу,<br />
                пошел в университет, создал компании туда <br />
                сюда и миллиардер
            </div>
        </div>
    );
}



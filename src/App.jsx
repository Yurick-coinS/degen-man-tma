// src/App.jsx
import React, { useState, useEffect } from 'react';
import Maze from './components/Maze.jsx';
import DegenMan from './components/DegenMan.jsx';
import './App.css';

// Получаем объект Telegram за пределами компонента
const tg = window.Telegram.WebApp;

function App() {
  // ВОТ ОНО! Наш "мозг" или "коробочка с памятью".
  // Мы говорим: "React, запомни позицию игрока. Изначально это {x: 10, y: 15}".
  // React дает нам:
  // 1. `playerPosition` — сама переменная, где лежит позиция.
  // 2. `setPlayerPosition` — инструмент, чтобы эту позицию ИЗМЕНИТЬ.
  const [playerPosition, setPlayerPosition] = useState({ x: 10, y: 15 });

  // Этот хук, useEffect, запускает код, когда компонент загружается.
  // Мы используем его, чтобы начать "слушать" нажатия клавиш.
  useEffect(() => {
    // Функция, которая будет срабатывать при каждом нажатии клавиши
    const handleKeyDown = (event) => {
      setPlayerPosition(currentPosition => {
        let newPosition = { ...currentPosition }; // Копируем текущую позицию

        // Смотрим, какая стрелка была нажата, и меняем координату
        switch (event.key) {
          case 'ArrowUp':
            newPosition.y -= 1;
            break;
          case 'ArrowDown':
            newPosition.y += 1;
            break;
          case 'ArrowLeft':
            newPosition.x -= 1;
            break;
          case 'ArrowRight':
            newPosition.x += 1;
            break;
          default:
            return currentPosition; // Если нажали не стрелку, ничего не делаем
        }
        return newPosition;
      });
    };

    // Добавляем "слушателя" к нашему окну
    window.addEventListener('keydown', handleKeyDown);

    // ВАЖНО: когда компонент будет убираться с экрана,
    // мы должны убрать и "слушателя", чтобы он не работал впустую.
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Пустой массив [] означает, что этот эффект запустится только один раз

  // Еще один useEffect для работы с Telegram
  useEffect(() => {
    tg.expand(); // Раскрываем приложение на весь экран
  }, []);


  return (
    <div className="app">
      {/* Мы создаем компонент Лабиринта */}
      <Maze>
        {/* А внутрь него кладем нашего героя, передавая ему его текущую позицию */}
        <DegenMan position={playerPosition} />
      </Maze>

      <div className="controls-info">
        Use Arrow Keys to Move
      </div>
    </div>
  );
}

export default App;
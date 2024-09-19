import React, { useState, useEffect } from 'react';
import '../css/Pomodoro.css';

const Pomodoro = () => {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutos padrão
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutos padrão
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true); // Alterna entre trabalho e pausa
  const [timeLeft, setTimeLeft] = useState(workTime);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsWorkTime(!isWorkTime);
      setTimeLeft(isWorkTime ? breakTime : workTime);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isWorkTime, workTime, breakTime]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(workTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="pomodoro">
      <h2>{isWorkTime ? "Work Time" : "Break Time"}</h2>
      <div className="timer">{formatTime(timeLeft)}</div>
      <div className="buttons-container">
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;

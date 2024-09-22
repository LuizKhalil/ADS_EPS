const Pomodoro = require('./pomodoro');

test('Pomodoro deve iniciar com 1500 segundos', () => {
  const pomodoro = new Pomodoro();
  expect(pomodoro.timeLeft).toBe(1500);
});

test('Pomodoro deve iniciar o temporizador quando chamado start()', () => {
  const pomodoro = new Pomodoro();
  pomodoro.start();
  expect(pomodoro.isRunning).toBe(true);
});

test('Pomodoro deve pausar o temporizador quando chamado pause()', () => {
  const pomodoro = new Pomodoro();
  pomodoro.start();
  pomodoro.pause();
  expect(pomodoro.isRunning).toBe(false);
});

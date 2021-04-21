import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
});

// logic for event 'line' emitted when submit new line key
rl.on('line', (input) => {
  console.log(input.split('').reverse().join(''));
});

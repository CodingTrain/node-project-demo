import * as fs from 'fs';
// import * as cowsay from 'cowsay';
import { say } from 'cowsay';
console.log('choo choo!');

const output = say({ text: 'mooooo' });
console.log(output);

// const words = ['unicorn', 'cupcake', 'rainbow', 'kitten'];
// const output = words.join('\n');
// fs.writeFile('words.txt', output, fileWritten);

// function fileWritten() {
//   console.log('file written!');
// }

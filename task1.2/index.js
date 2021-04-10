import csv from 'csvtojson';
import { createWriteStream } from 'fs';

const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const txtFilePath = './txt/nodejs-hw1-ex2.txt';

const writable = createWriteStream(txtFilePath, 'utf8');

csv()
  .fromFile(csvFilePath)
  .subscribe((json) => new Promise((resolve) => resolve(json))
    .then((csvLine) => {
      writable.write(`${JSON.stringify(csvLine)}\n`);
      console.log('Data written to file!');
    })
    .catch((error) => {
      console.error(error);
    }));

writable.on('error', () => {
  console.error('Error with write data in .txt file!');
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const matchResult_1 = require("./matchResult");
const startTime = performance.now();
const reader = new CsvFileReader_1.CsvFileReader('football');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
const endTime = performance.now();
console.log(`Exectued in ${endTime - startTime} ms`);
console.log(manUnitedWins);
console.log('end');

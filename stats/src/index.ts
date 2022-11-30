import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './matchResult';

const startTime = performance.now();

const reader = new CsvFileReader('football');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

const endTime = performance.now();
console.log(`Exectued in ${endTime - startTime} ms`);
console.log(manUnitedWins);
console.log('end');

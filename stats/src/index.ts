import { CsvFileReader } from './CsvFileReader';

const startTime = performance.now();

const reader = new CsvFileReader('football');
reader.read();

let manUnitedWins = 0;

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

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

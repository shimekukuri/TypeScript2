import { CsvFileReader } from './CsvFileReader';
import { MatchRedaer } from './MatchReader';
import { MatchResult } from './matchResult';

const startTime = performance.now();

const csvFilereader = new CsvFileReader('football');
const matchReader = new MatchRedaer(csvFilereader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
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

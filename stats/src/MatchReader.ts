import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';

export class MatchReader extends CsvFileReader {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      Number.parseInt(row[3]),
      Number.parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

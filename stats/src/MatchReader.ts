import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';
import { MatchData } from './matchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchRedaer {
  static fromCsv(file: string): MatchRedaer {
    return new MatchRedaer(new CsvFileReader(file));
  }

  matches: MatchData[] = [];
  reader: DataReader;

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        Number.parseInt(row[3]),
        Number.parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}

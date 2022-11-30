import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './matchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  filename: string;
  data: MatchData[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  read(): void {
    this.data = fs
      .readFileSync(`${this.filename}.csv`, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

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

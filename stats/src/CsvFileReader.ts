import fs from 'fs';
import { MatchResult } from './matchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export abstract class CsvFileReader {
  filename: string;
  data: MatchData[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  abstract mapRow(row: string[]): MatchData;

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
}

import fs from 'fs';

export class CsvFileReader {
  filename: string;
  data: string[][] = [];

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
      });
  }
}

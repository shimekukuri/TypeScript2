import fs from 'fs';

export abstract class CsvFileReader<TypeOfData> {
  filename: string;
  data: TypeOfData[] = [];

  constructor(filename: string) {
    this.filename = filename;
  }

  abstract mapRow(row: string[]): TypeOfData;

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

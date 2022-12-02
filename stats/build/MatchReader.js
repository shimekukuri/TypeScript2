"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchRedaer = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchRedaer {
    static fromCsv(file) {
        return new MatchRedaer(new CsvFileReader_1.CsvFileReader(file));
    }
    constructor(reader) {
        this.matches = [];
        this.reader = reader;
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                Number.parseInt(row[3]),
                Number.parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
exports.MatchRedaer = MatchRedaer;

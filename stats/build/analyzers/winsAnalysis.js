"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const matchResult_1 = require("../matchResult");
class WinsAnalysis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === matchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName &&
                match[5] === matchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.teamName} won ${wins}`;
    }
}
exports.WinsAnalysis = WinsAnalysis;

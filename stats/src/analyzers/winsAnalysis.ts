import { MatchData } from '../matchData';
import { MatchResult } from '../matchResult';
import { Analyzer } from '../summary';

export class WinsAnalysis implements Analyzer {
  teamName: string;

  constructor(teamName: string) {
    this.teamName = teamName;
  }

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins}`;
  }
}

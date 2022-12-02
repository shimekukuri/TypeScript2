import { MatchRedaer } from './MatchReader';
import { Summary } from './summary';

const startTime = performance.now();

const matchReader = MatchRedaer.fromCsv('football');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

const endTime = performance.now();
console.log(`Exectued in ${endTime - startTime} ms`);
console.log('end');

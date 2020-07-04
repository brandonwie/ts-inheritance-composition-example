import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load(); // read() and .map
// matchReader.matches

const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');

summary.buildAndPrintReport(matchReader.matches);

import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title:'Constants should be defined rather than using magic numbers',
  regex:  /[0-9]{2,}?/g,
  /**
   match occurrences where a number greater than or equal to 100
   */
};

export default issue;

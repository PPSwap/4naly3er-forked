import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Constants should be defined rather than using magic numbers',
  regex: /((?![^\n]*(uint|int|public))[^\n]*)([[:blank:]]|\()((?!(10|1e|32|256|128))[0-9e]{2,})/g,
  /**
   match occurrences where a number greater than or equal to 100 (excluding specific numbers like 10, 1e, 32, 256, and 128) appears in a context that is not a declaration of uint, int, or public.
   
   Example:
   uint256 constant MAX_AMOUNT = 1000;
   */
};

export default issue;

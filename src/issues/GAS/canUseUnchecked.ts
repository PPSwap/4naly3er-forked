import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'For Operations that will not overflow, you could use unchecked',
  regex: /([a-z,A-Z,0-9]*-)|([a-z,A-Z,0-9]*\+)|([a-z,A-Z,0-9]*\*)|([a-z,A-Z,0-9]*\/)/g,
  // ([a-z,A-Z,0-9]*-)
  // myString123-

  // ([a-z,A-Z,0-9]*\+)
  // myString123+

  // ([a-z,A-Z,0-9]*\*)
  // myString123*

  // ([a-z,A-Z,0-9]*\/)
  // myString123/
};

export default issue;

import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Empty Function Body - Consider commenting why',
  regex: /(\{\})|(\{ \})/g,
  // function emptyFunction1() {}
  // function emptyFunction2() { }
};

export default issue;

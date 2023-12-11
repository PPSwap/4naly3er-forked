import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Large number literals texts should use underscore',
  description:
    ' Large number literals texts should use underscore. It is good for readability and underscores are ignored by the compiler',
  regex: /[0-9]{12,}/gm,
};

export default issue;

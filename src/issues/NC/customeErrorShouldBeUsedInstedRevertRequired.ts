import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Custom erros should be used insted of require and revert statement',
  description:
    'Custom erros is more relevent for implementing any error message so cosnider custom error insted of using revert and require.',
  regex: /require\(|revert\(/gm,
};

export default issue;

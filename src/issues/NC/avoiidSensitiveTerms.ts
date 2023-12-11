import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Avoid using sensitive terms',
  description:
    'Sensitive terms like blocklist, whitelist should be ignored and terms like acceptlist and denylist shoudl be used.',
  regex: /whitelist|blacklist /gm,
};

export default issue;

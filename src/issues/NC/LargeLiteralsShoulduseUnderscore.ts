import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Import declarations should import specific identifiers, rather than the whole file',
  description:
    'Import declarations for the whole file usually imports a lot of unnecessary variables and funciton, intesd we need to use specific variable or funciton using the import statement.',
  regex: /import...[^\{]/gm,
};

export default issue;

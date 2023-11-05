import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: 'Long revert strings',
  regex: /(revert|require)\(.*,?.(\"|\').{33,}(\"|\')\)/g,
  // require(someCondition, "Error message with more than 33 characters goes here!");
};

export default issue;

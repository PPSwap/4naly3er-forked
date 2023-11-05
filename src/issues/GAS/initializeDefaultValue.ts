import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.GAS,
  title: "Don't initialize variables with default value",
  regex: /((uint|int)[0-9]*?.*[a-z,A-Z,0-9]+.?=.?0;)|(bool.[a-z,A-Z,0-9]+.?=.?false;)/g,
  // ((uint|int)[0-9]*?.*[a-z,A-Z,0-9]+.?=.?0;)
  // uint age = 0;

  // (bool.[a-z,A-Z,0-9]+.?=.?false;)
  // bool isConditionFalse = false;
};

export default issue;

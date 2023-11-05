import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.H,
  title: 'Using `delegatecall` inside a loop',
  impact: 'When calling `delegatecall` the same `msg.value` amount will be accredited multiple times.',
  regex: /for[^\(]?\([^\)]*\)?.\{((.*[^\}])\n)*.*delegatecall/g,
  // for (uint256 i = 0; i < array.length; i++) {
  //   delegatecall
};

export default issue;

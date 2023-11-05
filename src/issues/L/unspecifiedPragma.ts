import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Unspecific compiler version pragma',
  regex: /pragma solidity (\\^|>)[0-9\.]*/g,
  // pragma solidity ^0.6.0;
  // pragma solidity >0.7.0;
};

export default issue;

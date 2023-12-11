import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Cast to bytes or bytes32 for clearer semantic meaning',
  description:
    'abi.encodePacked() may resutl in some issues due to removing padding insted we can use casting to bytes or bytes32',
  regex: /abi.encodePacked/gm,
};

export default issue;

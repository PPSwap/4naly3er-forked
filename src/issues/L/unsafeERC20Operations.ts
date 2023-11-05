import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Unsafe ERC20 operation(s)',
  regex: /\.transfer\(|\.transferFrom\(|\.approve\(/g,
  // token.transfer(receiver, amount);
  // token.transferFrom(sender, receiver, amount);
  // token.approve(spender, allowance);
};

export default issue;

import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Do not use deprecated library functions',
  regex: /_setupRole\(|safeApprove\(/g,
  // _setupRole(DEFAULT_ADMIN_ROLE, adminAddress);
  // safeApprove(tokenAddress, spenderAddress, allowanceAmount);
};

export default issue;

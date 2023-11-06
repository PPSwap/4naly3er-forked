import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'Return values of `approve()` not checked',
  description:
    "Not all IERC20 implementations `revert()` when there's a failure in `approve()`. The function signature has a boolean return value and they indicate errors that way instead. By not checking the return value, operations that should have marked as failed, may potentially go through without actually approving anything",
  regex: /\n((?![^=\n]*function)[^=\n]*)approve.?\(/g,
  /**
    (?!) negative lookahead: Get all the matches that are not followed by a specific pattern.

    \d(?!px) => 1pt 2px 3em 4px => 1 3
   */
  startLineModifier: 1,
  // approve()
  // approve ()
  // function approve() is not excepted
};

export default issue;

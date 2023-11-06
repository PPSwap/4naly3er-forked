import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.NC,
  title: 'The `nonReentrant` `modifier` should occur before all other modifiers',
  description: 'This is a best-practice to protect against reentrancy in other modifiers',
  regex:
    /function.?\([a-zA-Z]*\)[^\}]*[[:space:]]((?!(external[[:space:]]|override[[:space:]]|view[[:space:]]|pure[[:space:]]|internal[[:space:]]|private[[:space:]]))[a-zA-Z]+[[:space:]])+[^\}]*nonReentrant/g,
  // match function declarations that don't have certain modifiers (external, override, view, pure, internal, private) and include at least one additional non-reentrant modifier.

  // function anotherFunction() internal override view nonReentrant
};

export default issue;

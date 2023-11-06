import { IssueTypes, RegexIssue } from '../../types';

const issue: RegexIssue = {
  regexOrAST: 'Regex',
  type: IssueTypes.L,
  title: 'Consider using ERC721A instead of ERC721',
  description:
    '[ERC721A](https://www.erc721a.org/) is an implementation of IERC721 with significant gas savings for minting multiple NFTs in a single transaction.',
  regex: /ERC721[^A]/g,
  // ERC721Enumerable;
};

export default issue;

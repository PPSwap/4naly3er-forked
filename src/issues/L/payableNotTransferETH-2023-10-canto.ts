import { InputType, IssueTypes, Instance, ASTIssue } from '../../types';
import { findAll } from 'solidity-ast/utils';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.L,
  title: 'payable function does not transfer Eth',
  description: 'Funds sent along with the call to this function will be lost',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('FunctionDefinition', file.ast)) {
          if (node.stateMutability === 'payable') {
            let isFound = false;
            for (const expression of findAll('MemberAccess', node)) {
              if (['transfer', 'call', 'send'].includes(expression.memberName)) {
                isFound = true;
                break;
              }
            }

            if (!isFound) {
              instances.push(instanceFromSRC(file, node.src));
            }
          }
        }
      }
    }
    return instances;
  },
};

export default issue;

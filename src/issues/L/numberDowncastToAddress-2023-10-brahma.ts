import { InputType, IssueTypes, Instance, ASTIssue } from '../../types';
import { findAll } from 'solidity-ast/utils';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title: 'Numbers downcast to addresses may result in collisions',
  description:
    'If a number is downcast to an `address` the upper bytes are truncated, which may mean that more than one value will map to the `address`',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('FunctionCall', file.ast)) {
          if (node.typeDescriptions.typeString === 'address' && node.kind === 'typeConversion') {
            for (const arg of findAll('FunctionCall', node)) {
              if (arg.kind === 'typeConversion') {
                const typeString = arg.typeDescriptions.typeString;
                const uintPattern = /^uint([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

                if (!!typeString && uintPattern.test(typeString)) {
                  instances.push(instanceFromSRC(file, node.src));
                }
              }
            }
          }
        }
      }
    }
    return instances;
  },
};

export default issue;

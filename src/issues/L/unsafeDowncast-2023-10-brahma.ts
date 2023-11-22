import { InputType, IssueTypes, Instance, ASTIssue } from '../../types';
import { findAll } from 'solidity-ast/utils';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title: 'Unsafe downcast',
  description:
    'When a type is downcast to a smaller type, the higher order bits are truncated, effectively applying a modulo to the original value. Without any other checks, this wrapping will lead to unexpected behavior and bugs',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('FunctionCall', file.ast)) {
          if (node.kind === 'typeConversion') {
            const typeString = node.typeDescriptions.typeString;
            const uintPattern = /^uint([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

            if (!!typeString && uintPattern.test(typeString)) {
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

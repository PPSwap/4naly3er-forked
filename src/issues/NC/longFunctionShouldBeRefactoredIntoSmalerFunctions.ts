import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { getStorageVariable, instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Long function shoudl be refactored to multiple smaller functions',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const functiondef of findAll('FunctionDefinition', file.ast)) {
          console.log(functiondef.body?.src);
          if (!!functiondef.body?.src) {
            var temp = functiondef.body?.src;
            const [, lengthStr] = temp.split(':');
            const lengthValue = parseInt(lengthStr, 10);
            if (lengthValue > 30) {
              instances.push(instanceFromSRC(file, functiondef.src));
            }
          }
        }
      }
    }
    return instances;
  },
};

export default issue;

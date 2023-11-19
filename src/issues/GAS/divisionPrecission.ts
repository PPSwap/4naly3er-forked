import { InputType, IssueTypes, Instance, ASTIssue } from '../../types';
import { findAll } from 'solidity-ast/utils';
import { instanceFromSRC } from '../../utils';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title: 'In solidity divission is doesnt have precission, so check the numerator and denominator',
  description:
    "Here is and example: if you devide 1000/400 is  solidity you will get  2, you will lose the precission or the deicmal point values",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('BinaryOperation', file.ast)) {
          // Look for Address(X).balance
          if (  
           node.nodeType === 'BinaryOperation'  && 
           node.operator === "/"
          ) {
            instances.push(instanceFromSRC(file, node.src));
            

          }
        }
      }
    }
    return instances;
  },
};

export default issue;

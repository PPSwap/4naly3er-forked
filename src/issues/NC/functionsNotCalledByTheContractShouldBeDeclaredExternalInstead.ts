import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';
import util from 'util';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Functions not called by the contract should be declared external instead',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    // Declare an array with null to store the name of all the fucntions
    let allTheFunctionsDefinationNameList: string[] = [];
    let allTheFunctionCalledNameList: string[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('FunctionDefinition', file.ast)) {
          if (node != null) {
            // utting the name of all the funciton in an array
            allTheFunctionsDefinationNameList.push(node.name);
            console.log(allTheFunctionsDefinationNameList);
          }

          if (node !== null) {
            instances.push(instanceFromSRC(file, node.src));
          }
        }

        for (const node of findAll('FunctionCall', file.ast)) {
          if ((node.nodeType = 'FunctionCall')) {
            console.log('--------------------------------------');
            console.log(node);
            console.log('--------------------------------------');
            allTheFunctionCalledNameList.push();
            console.log(allTheFunctionCalledNameList);
          }
        }
      }
    }
    return instances;
  },
};

export default issue;

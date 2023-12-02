import { findAll } from 'solidity-ast/utils';
import { ASTIssue, InputType, Instance, IssueTypes, RegexIssue } from '../../types';
import { instanceFromSRC } from '../../utils';
import util from 'util';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.NC,
  title: 'Array is pushed but never poped',
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('MemberAccess', file.ast)) {
          if (node.memberName == 'push') {
            instances.push(instanceFromSRC(file, node.src));
            console.log(node);
            console.log(node.expression);
          }
        }
      }
    }
    return instances;
  },
};

export default issue;

/*
// This is the content inside the node.expression
{
  id: 9,
  name: 'numbers',
  nodeType: 'Identifier',
  overloadedDeclarations: [],
  referencedDeclaration: 4,
  src: '219:7:0',
  typeDescriptions: {
    typeIdentifier: 't_array$_t_uint256_$dyn_storage',
    typeString: 'uint256[] storage ref'
  }
}


But the name: field cant be targeted. Other field like id and nodeType can be tergeted. Need a soltuion for that

*/

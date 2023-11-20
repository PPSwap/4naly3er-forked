import { InputType, IssueTypes, Instance, ASTIssue } from '../../types';
import { findAll } from 'solidity-ast/utils';
import { instanceFromSRC } from '../../utils';
import { convertCompilerOptionsFromJson } from 'typescript';

const issue: ASTIssue = {
  regexOrAST: 'AST',
  type: IssueTypes.GAS,
  title:'Protocol has been updated in one step having potential risk!',
  description: "Consider implementing two-step procedure for updating protocol addresses",
  detector: (files: InputType): Instance[] => {
    let instances: Instance[] = [];

    for (const file of files) {
      if (!!file.ast) {
        for (const node of findAll('Assignment', file.ast)) {
       
          if (  
           node.nodeType === 'Assignment'   
          && node.operator === "="
          && node.rightHandSide.nodeType === 'Identifier'  // If I dont filter this, it will return 2 result because there is another assignment opetaiton on the code.
          && node.rightHandSide.typeDescriptions.typeString === 'address' // If this value comes from the msg.sender then it would be a expression
          ) {
            instances.push(instanceFromSRC(file, node.src));
            // console.log("------------------This is node body----------------------------");
            // console.log(node);

          }
        }
      }
    }
    return instances;
  },
};

export default issue;


/*
------------------This is node body of the assignment node that use === operator ----------------------------
{
  id: 43,
  isConstant: false,
  isLValue: false,
  isPure: false,
  lValueRequested: false,
  leftHandSide: {
    id: 41,
    name: 'owner',
    nodeType: 'Identifier',
    overloadedDeclarations: [],
    referencedDeclaration: 3,
    src: '441:5:0',
    typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
  },
  nodeType: 'Assignment',
  operator: '=',
  rightHandSide: {
    id: 42,
    name: 'newOwner',
    nodeType: 'Identifier',
    overloadedDeclarations: [],
    referencedDeclaration: 26,
    src: '449:8:0',
    typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
  },
  src: '441:16:0',
  typeDescriptions: { typeIdentifier: 't_address', typeString: 'address' }
}

*/

 

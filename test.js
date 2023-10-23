const { log } = require('console');
var solc = require('solc');
const fs = require('fs');
const { findAll } = require('solidity-ast/utils');

const filePath = './contracts/example2/Test.sol';

const data = fs.readFileSync(filePath, 'utf8');
// console.log(data);

var input = {
  language: 'Solidity',
  sources: {
    'Test.sol': {
      content: data,
    },
  },
  settings: {
    outputSelection: { '*': { '': ['ast'] } },
  },
};

// console.log(solc.compile(JSON.stringify(input)));

var the_ast = JSON.parse(solc.compile(JSON.stringify(input))).sources['Test.sol'].ast;

console.log(the_ast);


for (const node of findAll('MemberAccess', the_ast)) {
  // Look for Address(X).balance
  if (
    node.nodeType === 'MemberAccess' &&
    node.memberName === 'balance' &&
    node.expression.nodeType === 'FunctionCall' &&
    node.expression.typeDescriptions.typeString === 'address'
  ) {
    console.log("---------------- the node", node);
    console.log(node.src);
  }
}



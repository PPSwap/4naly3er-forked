var solc = require('solc');
const fs = require('fs');
const { findAll } = require('solidity-ast/utils');

let filePath = process.argv.slice(2)[0];
filePath = filePath || 'contracts/example2/Test.sol';
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


const the_ast = JSON.parse(solc.compile(JSON.stringify(input))).sources['Test.sol'].ast;
// console.log(the_ast);
fs.writeFileSync('./ast.json', JSON.stringify(the_ast));

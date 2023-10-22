const { log } = require('console');
var solc = require('solc');

var input = {
  language: 'Solidity',
  sources: {
    'test.sol': {
      content: 'contract C { function f() public pure { uint a = 2 * 5; } }',
    },
  },
//   settings: {
//     outputSelection: { '*': { '': ['ast'] } },
//   },
};

// console.log(solc.compile(JSON.stringify(input)));

var output = JSON.parse(solc.compile(JSON.stringify(input)));

console.log(output);


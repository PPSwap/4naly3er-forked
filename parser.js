const parser = require('@solidity-parser/parser');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'contracts/example/Test.sol');
const input = fs.readFileSync(filePath, 'utf-8');


try {
    const ast = parser.parse(input);
    fs.writeFileSync('parser-ast.json', JSON.stringify(ast, null, 2));
    console.log('AST saved as ast.json');
} catch (e) {
    if (e instanceof parser.ParserError) {
        console.error(e.errors);
    }
}

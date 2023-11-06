pragma solidity ^0.8.0;

contract Test {
    function testAst() external view {
        uint balance = address(this).balance;
    }

}
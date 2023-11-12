pragma solidity ^0.8.0;
contract postIncrementTest {
     uint256 public balance;

    function testAst() external   {
        balance = 1;
        balance++;
    }
}
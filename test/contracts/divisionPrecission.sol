// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestContract {
    uint numerator = 800;
    uint integerNumber;

    function testFunction() public {
        integerNumber = numerator / 566;
    }

}


// yarn ast test/contracts/aaaExampleAST.sol
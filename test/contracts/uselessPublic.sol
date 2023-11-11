// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint[] arr = [1, 2, 3];

    function fun() public {
        uint num1 = 10;
        
        if (num1 > 5) {
            uint num2 = 20;
            num2 = num2 + num1;
        }
    }
}

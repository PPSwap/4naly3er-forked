// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    function exampleFunction(uint256 number) public pure returns (string memory) {
        if (number > 0) {
            return "Number is positive";
        } else {
            // This block could be ignored, but it provides an alternative logic.
            return "Number is zero or negative";
        }
    }
}

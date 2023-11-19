// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MagicNumberExample {
    // Function that uses magic numbers without constants
    function calculateSomething(uint256 input) public pure returns (uint256) {
        // Using a magic number directly
        uint256 result = input * 4265;

        // Another magic number
        result = result + 775;
        uint x = 4555151515 * 5454545;
        return result;
    }
}

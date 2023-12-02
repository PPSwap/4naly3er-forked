// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NeverPopArray {
    uint256[] public numbers;

    // Function to push a number into the array
    function pushNumber(uint256 _number) public {
        numbers.push(_number);
    }

    // Function to get the length of the array
    function getArrayLength() public view returns (uint256) {
        return numbers.length;
    }
}

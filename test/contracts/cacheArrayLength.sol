// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract cashArrayLength {
    uint[] public myArray;

    function redundantArrayLengthCall() public view {
        for (uint i = 0; i < myArray.length; i++) {
            // do something
        }
    }
}
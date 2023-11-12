// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract calldataViewFunctions {
    string  public myName;

    function calldataToReplaceMemory(string memory name) public  {
         myName = name;
    }
}
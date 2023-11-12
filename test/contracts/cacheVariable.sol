// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract cacheVariable {
    uint public myUint;

    function redundantVariableCall() public  {
        // First time accessign the myUnit variable
        myUint = myUint + 5; 
        // second time accessign the myUnit variable
        myUint = myUint - 6; 
    }
}
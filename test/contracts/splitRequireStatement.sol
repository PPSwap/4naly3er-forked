// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    function fun(address owner, uint amount) external view {
        uint a = 10;
        require(msg.sender == owner && a >= amount, "Invalid conditions for the transaction");
    }
}

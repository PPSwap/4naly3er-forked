// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint[] arr = [1, 2, 3];

    function fun(address owner, uint amount) external {
        uint a = 10;
        require(msg.sender == owner && a >= amount, "Invalid conditions for the transaction");
    }
}

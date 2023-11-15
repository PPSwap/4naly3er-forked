// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    function test() public payable {
        require(msg.value > 0);
    }
}

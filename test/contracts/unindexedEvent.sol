// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    event NewUser(address userAddress, string name);

    function addUser(string memory name) public {
        // Add user to the contract
        emit NewUser(msg.sender, name);
    }
}

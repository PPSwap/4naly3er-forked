// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TxOriginExample {
    address public owner;

    constructor() {
        // Set the owner to the original sender (creator of the contract)
        owner = tx.origin;
    }

    // Function that can only be called by the owner (using tx.origin)
    function onlyOwner() public view returns (string memory) {
        require(tx.origin == owner, "Only the owner can call this function");
        return "Hello, owner!";
    }

    // Function to update the owner (for demonstration purposes)
    function updateOwner() public {
        // Only allow the owner to update the owner (using tx.origin)
        require(tx.origin == owner, "Only the current owner can update the owner");
        
        // Update the owner to the new sender
        owner = msg.sender;
    }
}

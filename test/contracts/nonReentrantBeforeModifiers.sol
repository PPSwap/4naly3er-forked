// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ReentrancyExample {
    bool internal locked;

    // Modifier to prevent reentrancy
    modifier nonReentrant() {
        require(!locked, "Reentrant call detected");
        locked = true;
        _;
        locked = false;
    }

    // Modifier for some other functionality
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // Function using both modifiers
    function doSomething() internal onlyOwner nonReentrant {
        // Perform some action
        // ...
    }
}

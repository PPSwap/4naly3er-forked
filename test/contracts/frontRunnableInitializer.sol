// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InitializationExample {
    address public owner;
    bool public initialized;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    // Initialization function
    function initialize() external {
        require(!initialized, "Already initialized");
        owner = msg.sender;
        initialized = true;
    }

    // Another initialization function with a different name
    function init() external {
        require(!initialized, "Already initialized");
        owner = msg.sender;
        initialized = true;
    }

    // Yet another initialization function with a different name
    function initializer() external {
        require(!initialized, "Already initialized");
        owner = msg.sender;
        initialized = true;
    }

    // Function that can only be called after initialization
    function doSomething() external onlyOwner view returns (string memory) {
        require(initialized, "Not initialized");
        return "Hello, initialized!";
    }
}

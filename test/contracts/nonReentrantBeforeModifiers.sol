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

    function doSomething1(uint abc, address _add) external onlyOwner nonReentrant {
        // should match
    }

    function doSomething2() external nonReentrant onlyOwner {
        // shouldn't match
    }

    function doSomething3() public onlyOwner nonReentrant {
        // should match
    }

    function doSomething4() public nonReentrant {
        // shouldn't match
    }
}

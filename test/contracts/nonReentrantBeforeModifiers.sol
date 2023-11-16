// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    bool private locked;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    modifier nonReentrant() {
        require(!locked, "Reentrant call.");
        locked = true;
        _;
        locked = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function.");
        _;
    }

    // function with both modifiers
    function myFunction() public onlyOwner nonReentrant {
        // function code here
    }
}

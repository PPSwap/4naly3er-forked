// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    address public owner;
    uint256 public value;

    constructor() {
        owner = msg.sender;
    }

    function setValue(uint256 _newValue) public {
        // Only the owner can set the value, otherwise, revert the transaction
        require(msg.sender == owner, "Only the owner can set the value");

        // The new value must be greater than zero, otherwise, revert the transaction
        require(_newValue > 0, "Value must be greater than zero");

        // Set the new value
        value = _newValue;
    }

    function withdraw() public {
        // Only the owner can withdraw, otherwise, revert the transaction
        require(msg.sender == owner, "Only the owner can withdraw");

        // The value must be greater than zero for a withdrawal, otherwise, revert the transaction
        require(value > 0, "Insufficient funds for withdrawal");

        // Transfer the funds to the owner
        payable(owner).transfer(value);

        // Reset the value after withdrawal
        value = 0;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AdvancedToken {
    // State variables
    address public owner;
    mapping(address => uint256) public balances;

    // Events
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Functions
    function mint(address account, uint256 amount) external onlyOwner {
        balances[account] += amount;
        emit Transfer(address(0), account, amount);
    }

    function transfer(address to, uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
    }

    // Fallback function
    receive() external payable {
        revert("Contract does not accept ETH directly");
    }
}

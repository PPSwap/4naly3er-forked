// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LargeNumberExample {
    // Large number literals representing token amounts
    uint256 public totalSupply = 1000000000000000000000000; // 1e24
    uint256 public initialBalance = 1_000_000_000_000_000_000; // 1e18

    // Function to transfer tokens
    function transferTokens(address to, uint256 amount) external {
        require(amount <= initialBalance, "Insufficient balance");

        // Perform the token transfer
        // (For demonstration purposes, no actual transfer logic is implemented)

        // Update balances or perform any other necessary logic
        initialBalance -= amount;

        // Log the transfer event or perform other actions
        emit Transfer(msg.sender, to, amount);
    }

    // Event to log token transfers
    event Transfer(address indexed from, address indexed to, uint256 value);
}

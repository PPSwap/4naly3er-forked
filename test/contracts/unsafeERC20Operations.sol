// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function approve(address spender, uint256 allowance) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract TokenInteractionExample {
    address public owner;
    IERC20 public token;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor(address tokenAddress) {
        owner = msg.sender;
        token = IERC20(tokenAddress);
    }

    // Transfer tokens to a receiver
    function transferTokens(address receiver, uint256 amount) external onlyOwner {
        require(receiver != address(0), "Invalid receiver address");
        require(amount > 0, "Invalid amount");

        // Use the transfer function
        require(token.transfer(receiver, amount), "Transfer failed");
    }

    // Transfer tokens from a sender to a receiver using the allowance mechanism
    function transferTokensFrom(address sender, address receiver, uint256 amount) external onlyOwner {
        require(sender != address(0), "Invalid sender address");
        require(receiver != address(0), "Invalid receiver address");
        require(amount > 0, "Invalid amount");

        // Use the transferFrom function
        require(token.transferFrom(sender, receiver, amount), "TransferFrom failed");
    }

    // Approve a spender to spend a certain amount of tokens
    function approveSpender(address spender, uint256 allowance) external onlyOwner {
        require(spender != address(0), "Invalid spender address");
        require(allowance >= 0, "Invalid allowance");

        // Use the approve function
        require(token.approve(spender, allowance), "Approve failed");
    }

    // Get the balance of the contract
    function getContractBalance() external view returns (uint256) {
        return token.balanceOf(address(this));
    }
}

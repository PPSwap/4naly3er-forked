// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WhitelistBlacklistExample {
    address public owner;
    mapping(address => bool) public whitelist;
    mapping(address => bool) public blacklist;

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    modifier onlyNotBlacklisted(address _user) {
        require(!blacklist[_user], "Address is blacklisted");
        _;
    }

    modifier onlyWhitelisted(address _user) {
        require(whitelist[_user], "Address is not whitelisted");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function addToWhitelist(address _user) external onlyOwner {
        whitelist[_user] = true;
    }

    function removeFromWhitelist(address _user) external onlyOwner {
        whitelist[_user] = false;
    }

    function addToBlacklist(address _user) external onlyOwner {
        blacklist[_user] = true;
    }

    function removeFromBlacklist(address _user) external onlyOwner {
        blacklist[_user] = false;
    }

    function performAction() external onlyNotBlacklisted(msg.sender) onlyWhitelisted(msg.sender) {
        // Perform some action only if the sender is not blacklisted and is whitelisted
        // Add your specific logic here
    }
}

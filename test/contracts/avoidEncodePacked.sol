// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HashExample {
    // Function to calculate the Keccak-256 hash of someData
    function calculateHash(bytes memory someData) public pure returns (bytes32) {
        // Use abi.encodePacked to tightly pack the data before hashing
        return keccak256(abi.encodePacked(someData));
    }
}

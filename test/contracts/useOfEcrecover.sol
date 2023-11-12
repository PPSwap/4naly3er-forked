// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ECRecoverExample {
    // Function to recover the address from a message hash and its signature
    function recoverAddress(bytes32 messageHash, uint8 v, bytes32 r, bytes32 s) external pure returns (address) {
        // Use ecrecover to recover the address
        address recoveredAddress = ecrecover(messageHash, v, r, s);
        require(recoveredAddress != address(0), "Invalid signature");
        return recoveredAddress;
    }

    // Function to hash a message
    function hashMessage(string memory message) external pure returns (bytes32) {
        return keccak256(abi.encodePacked(message));
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    function downcastToAddress(bytes32 guardAddress) public pure returns (address) {
        return address(uint160(uint256(guardAddress)));
    }
}

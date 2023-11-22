// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint256 constant WEEK = 604800; // Number of seconds in a week

    function downcastToAddress(bytes32 guardAddress) public view returns (address) {
        uint32(block.timestamp);
        return address(uint160(uint256(guardAddress)));
    }

    function getCurrentWeek(uint256 time) public pure returns (uint32) {
        uint32 currWeek = uint32((time / WEEK) * WEEK);
        return currWeek;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CastToBytesExample {
    // Using abi.encodePacked()
    function encodeWithAbiPacked(uint256 _value) public pure returns (bytes memory) {
        return abi.encodePacked(_value);
    }

    // Using type cast
    function encodeWithCast(uint256 _value) public pure returns (bytes memory) {
        bytes memory result = new bytes(32);
        assembly {
            mstore(add(result, 32), _value)
        }
        return result;
    }
}

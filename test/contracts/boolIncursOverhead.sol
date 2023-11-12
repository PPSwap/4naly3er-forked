// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract boolIncursOverhead {
    bool public aBoolValue;
    mapping(address => bool) public aBoolValueByAddress;
    struct BoolStruct {
        bool aBoolValue;
        uint aUintValue;
    }


    // The funciton below in now required, optional
    function setA(bool _a) public {
        aBoolValue = _a;
    }
}
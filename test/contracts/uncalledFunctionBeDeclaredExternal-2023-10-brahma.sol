// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    // State variable
    uint256 public data;

    // Constructor
    constructor() {
        data = 0;
    }

    // Function 1: This function will be called in the same file
    function updateData(uint256 _newData) public {
        data = _newData;
    }

    // Function 2: This function will not be called in the same file
    function unusedFunction() public pure returns (string memory) {
        return "This function is not called in the same file";
    }

    function afunctionCall() public {
        this.updateData(55);
    }

    function afunctionCallWithoutThiskeyword() public {
        updateData(55);
    }
}

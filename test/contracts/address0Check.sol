// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddressAssignmentExample {
    address public owner;

    // Function to set the owner of the contract
    function setOwner(address _newOwner) public {
        // No check for address(0) is performed here
        owner = _newOwner;
    }

    // Function to perform an action only by the owner
    function doSomething() public view onlyOwner {
        // Perform some action restricted to the owner
        // ...
    }

    // Modifier to check if the caller is the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }
}

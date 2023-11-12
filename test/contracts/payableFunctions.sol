// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PayableFunctionTest {
address  public owner=msg.sender;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function withdraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TokenApprovalExample {
    address public admin;
    mapping(address => uint256) public allowances;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    constructor(address adminAddress) {
        admin = adminAddress;
    }

    // Function to approve spending a certain amount of tokens
    function safeApprove(
        address tokenAddress,
        address spenderAddress,
        uint256 allowanceAmount
    ) external onlyAdmin {
        // Simulate ERC20 interface check by attempting a transfer
        // Note: This is a basic check and may not cover all cases
        (bool success, bytes memory data) =
            tokenAddress.call(abi.encodeWithSelector(bytes4(keccak256("transfer(address,uint256)")), address(this), 0));

        require(success, "Token does not implement the ERC20 interface");

        // Set the allowance
        allowances[spenderAddress] = allowanceAmount;
    }
}

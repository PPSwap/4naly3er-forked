pragma solidity ^0.8.0;

contract Caller {
    address public target;

    constructor(address _target) {
        target = _target;
    }

    function executeDelegateCalls(uint256 iterations) external {
        for (uint256 i = 0; i < iterations; i++) {
            // Use delegatecall to execute code from the target contract
            (bool success, ) = target.delegatecall(abi.encodeWithSignature("yourFunction()"));
            require(success, "Delegate call failed");
        }
    }
}

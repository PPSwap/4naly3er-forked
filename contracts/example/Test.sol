// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solady/src/utils/SafeTransferLib.sol";

contract Test {
    using SafeTransferLib for address;

    function test(address _address, address _token, uint256 _amount) external {
        _address.safeTransfer(_token, _amount);
    }
}
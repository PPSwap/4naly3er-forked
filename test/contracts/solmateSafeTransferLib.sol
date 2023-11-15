// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "solmate/utils/SafeTransferLib.sol";

contract MyContract {
    using SafeTransferLib for IERC20;

    function transferToken(address tokenAddress, address fromAddress, address toAddress, uint256 amount) public {
        IERC20 token = IERC20(tokenAddress);

        token.safeTransferFrom(fromAddress, toAddress, amount);
    }
}

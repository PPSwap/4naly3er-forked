// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint[] arr = [1, 2, 3];

    function fun() public {
        arr[0] += 5;
        arr[1] = arr[1] + 5;
    }
}

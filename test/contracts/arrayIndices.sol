// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Test {
    uint[] pollob = [1, 2, 3];
    mapping(string => uint) supermap;

    function get() external {
        supermap["pollmix"] = 12345;
        uint tuly = pollob[1];
        uint mypol = supermap["pollmix"];
    }
}

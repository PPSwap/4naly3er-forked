pragma solidity ^0.8.0;

contract Test {
    uint256 a = 0;

    function test(address iasd) external returns (uint256) {
        return 123;
    }

    function testAst() external view {
        uint balance = address(this).balance;
    }

    modifier initializer() {
        _;
    }

    function initialize() initializer external {}
    function init() external { }
    function transfer() external {}

}
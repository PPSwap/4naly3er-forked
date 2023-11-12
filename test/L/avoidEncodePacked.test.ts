import main from '../base';

main('`abi.encodePacked()` should not be used with dynamic types when passing the result to a hash function such as `keccak256()`', 'avoidEncodePacked.sol');
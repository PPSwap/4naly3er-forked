pragma solidity ^0.8.19;

import "./ERC721Enumerable.sol";
import "./Ownable.sol";
import "./Strings.sol";
import "./Base64.sol";
import "./IRandomizer.sol";
import "./INextGenAdmins.sol";
import "./IMinterContract.sol";
import "./ERC2981.sol";

contract NextGenCore is ERC721Enumerable, ERC721A, Ownable, ERC2981 {
    using Strings for uint256;

    // external contracts declaration
    INextGenAdmins private adminsContract;
    // declare variables
    uint256 public newCollectionIndex;

    // smart contract constructor
    constructor(string memory name, string memory symbol, address _adminsContract) ERC721(name, symbol) {
        adminsContract = INextGenAdmins(_adminsContract);
        newCollectionIndex = newCollectionIndex + 1;
        _setDefaultRoyalty(0x1B1289E34Fe05019511d7b436a5138F361904df0, 690);
    }

}

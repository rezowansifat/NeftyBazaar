// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "hardhat/console.sol";
//Internal Import's From @openzeppelin/contracts For NFT
// import  "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import  "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract NeftyBazaar is  ERC721URIStorage{
    // uint256 private _tokenIds;
    uint256 private _tokenIds;
    uint256 private _itemsSold;
    // uint256 private _tokenIdCounter;
    address payable owner;

    uint256 listingPrice = 0.0015 ether;

    mapping (uint256 => MarketItem) private idMarketItem;

    struct MarketItem{
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    event idMarketItemCreated (
        uint256 indexed tokenId,
        address payable seller,
        address payable owner,
        uint256 price,
        bool sold
    );

    //Modifier to Chek owner
    modifier onlyOwner(){
        require(msg.sender == owner, "Only NeftyBazaar can perform this action");
        _;
    }

    //Constructor
    constructor() ERC721("NFT MetaVarse Token", "NeftyBazaar"){
        owner = payable(msg.sender);
    }

    //NFT Listing Charge On MarketPlace
    function updateListingPrice(uint256 _listingPrice)public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    //Fetch The Amoutn Have to Pay for Creating an Nft
    function getListingPrice() public view returns(uint256){
        return listingPrice;
    }
    
    //Create NFT Function
    function createToken(string memory tokenURI, uint256 price) public payable returns(uint256) {
         uint256 newTokenId = _tokenIds;
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIds += 1;

        createMarketItem(newTokenId, price);

        return newTokenId; 
    }

    //Assigning Creation Data to Particular NFT
    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "net price must be greater than 0");
        require(msg.value > listingPrice,"net price must be greater than Listing Price" );
    
        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

         _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId,payable(msg.sender), payable(address(this)), price, false);
    }

    //Resale Existing NFT
    function reSaleToken(uint256 tokenId, uint256 price) public payable{
        require(idMarketItem[tokenId].owner == msg.sender, "Only item owner can perform this action ");

        require(msg.value > listingPrice, "net price must be greater than Listing Price");

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller= payable(msg.sender);
        idMarketItem[tokenId].owner= payable(address(this));

        _itemsSold--;

        _transfer(msg.sender, address(this), tokenId);
    }

    //Sale NFt On Market
    function createMarketSale(uint256 tokenId) public payable{
        //Price Verification
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "Plese Submit the asking price in order to complete the purches");

        //Updating Market Item

        //Assigns the buyer as the new owner of the NFT.
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;

        //Sets the original owner to an empty address (redundant) 
        idMarketItem[tokenId].owner = payable(address(0));

        _itemsSold ++;

        //NFT Transfer
        _transfer(address(this), msg.sender, tokenId);

        //Payment Handling
        payable(owner).transfer(listingPrice);
       payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }


    //Fetch information about unsold market items
    function  fetchMarketItem()public view returns(MarketItem[] memory) {
        uint256 itemCount = _tokenIds;
        uint256 unsoldItemCount = _tokenIds - _itemsSold;
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);

       for(uint256 i =0; i<itemCount; i++){
        if(idMarketItem[i+1].owner == address(this)){
            uint256 currentID= i+1;

            MarketItem storage currentitem = idMarketItem[currentID];

            items[currentIndex] = currentitem;

            currentIndex++;
        }
       }

       return items;
    }

    //PURCHASE ITEM -------------- ses hoi ni
        function fetchMyNFTs() public view returns (MarketItem[] memory) {
        uint256 totalItemCount = _tokenIds;
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idMarketItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
      
}
// SPDX-License-Identifier: MIT
pragma solidity 0.8.8; // use the version of sol..^-verson upward

// EVM, Etherum Virtual Machine
// Polygon, Avalanche, Fantom

// keyword to define a contract = contract

contract SimpleStorage {
    //types include boolean, uint, int, address, bytes

    uint256 public favoriteNumber;

    mapping (string => uint256 ) public nameToFavoriteNumber;

    People public person = People({favoriteNumber:2, name: "Yemi"});

    struct People {
        uint256 favoriteNumber;
        string name;
    }
    
    // empty array
    People[] public people;

    //creating a function
    function store(uint256 _favoriteNumber) public{
        favoriteNumber = _favoriteNumber;
    }

    //view and pure function don't update state and spend gas
    // view can only make you read and 
    //pure disallow reading from blockchain
    function retrive() public view returns(uint256){
        return favoriteNumber;
    }

    function addPerson (string memory _name, uint256 _favoriteNumber) public{
        People memory newPerson = People({favoriteNumber:_favoriteNumber, name:_name});
        //add to array
        people.push(newPerson);
        nameToFavoriteNumber[_name] =_favoriteNumber;

        //call data storage and memory
        //storage exists outside functon and permanent
        //struct mapping array = memory
    }
    //0xd9145CCE52D386f254917e481eB44e9943F39138
 
}
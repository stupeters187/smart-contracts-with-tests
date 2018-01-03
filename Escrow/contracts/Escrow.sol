pragma solidity ^0.4.15;

contract Escrow {

  address public buyer;
  address public seller;
  address public arbiter;

  uint public paymentAmount;

  function Escrow(address _buyer, address _arbiter) public {
    seller = msg.sender;
    buyer = _buyer;
    arbiter = _arbiter;
  }

  function fund() public payable returns (bool){
    require(msg.sender == buyer &&
            msg.value  == paymentAmount);
    return true;
  }
}

pragma solidity ^0.4.15;

contract Escrow {

  address public buyer;
  address public seller;
  address public arbiter;

  uint public paymentAmount;

  function Escrow(address _buyer, address _arbiter, uint _paymentAmount) public {
    seller = msg.sender;
    buyer = _buyer;
    arbiter = _arbiter;
    paymentAmount = _paymentAmount;
  }

  function fund() public payable returns (bool){
    require(msg.sender == buyer &&
            msg.value  == paymentAmount);
    return true;
  }

  function sendToSeller() returns (bool){
    require(msg.sender == buyer || msg.sender == arbiter);
    seller.transfer(this.balance);
    return true;
  }
}

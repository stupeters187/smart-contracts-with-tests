pragma solidity ^0.4.15;

contract HelloWorld{

  string message;

  function HelloWorld(string _message) public {
    message = _message;
  }

  function getMessage() public constant returns (string){
    return message;
  }

  function updateMessage(string _message) public returns (bool){
    message = _message;
    return true;
  }
}

pragma solidity ^0.4.15;

contract HelloWorld{

  string message;

  function HelloWorld(string _message){
    message = _message;
  }

  function updateMessage(string _message) returns (bool){
    message = _message;
    return true;
  }

  function getMessage() constant returns (string){
    return message;
  }

}

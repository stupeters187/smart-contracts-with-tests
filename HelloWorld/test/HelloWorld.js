var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld', function(accounts){
  it("message should not be an empty string", function(){
    var myHelloWorldInstance;
    var _message;
    return HelloWorld.deployed().then(function(instance){
      myHelloWorldInstance = instance;
      return myHelloWorldInstance.getMessage();
    }).then(function(message){
      // _message = message;
      assert.notEqual(message, "", "message cannot be an empty string");
    });
  });

  it("getMessage should return the current message variable", function(){
    var myHelloWorldInstance;
    var _message;
    return HelloWorld.deployed().then(function(instance){
      myHelloWorldInstance = instance;
      return myHelloWorldInstance.getMessage();
    }).then(function(message){
      assert.equal(message, "tstMsg", "not returning message");
    });
  });

  it("updateMessage should update the value of the message variable", function(){
    var myHelloWorldInstance;
    var newMsg;
    return HelloWorld.deployed().then(function(instance){
      myHelloWorldInstance = instance;
      newMsg = "newMsg"
      return myHelloWorldInstance.updateMessage(newMsg);
    }).then(function(){
      return myHelloWorldInstance.getMessage();
    }).then(function(message){
      assert.equal(message, newMsg, "message variable not updated")
    })
  });
});

var Escrow = artifacts.require("./Escrow.sol");

contract('Escrow', function(accounts){

  it("should have a payment amount greater than 0", function(){
    var myEscrowInstance;
    return Escrow.deployed().then(function(instance){
      myEscrowInstance = instance;
      return myEscrowInstance.paymentAmount()
    }).then(function(amount){
      assert.isAbove(amount, 0, "Payment amount must be greater than 0");
    });
  });

  it("should be able to accept ether in the correct payment amount, and only from the buyer", function(){
    var myEscrowInstance;
    return Escrow.deployed().then(function(instance){
      myEscrowInstance = instance;
      return myEscrowInstance.fund({from: web3.eth.accounts[1], value: 1});
    }).then(function(){
      assert.equal(web3.eth.getBalance(myEscrowInstance.address), 1, "Contract unable to accept Ether")
    });
  });
});

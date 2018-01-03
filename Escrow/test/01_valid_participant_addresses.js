var Escrow = artifacts.require("./Escrow.sol");

contract('Escrow', function(accounts){

  it("should have a buyer address that is valid", function(){
    var myEscrowInstance;
    return Escrow.deployed().then(function(instance){
      myEscrowInstance = instance;
      return myEscrowInstance.buyer()
    }).then(function(buyer){
      assert.notEqual(buyer, "0x0", "Buyer does not have a valid address");
    });
  });

  it("should have a seller address that is valid", function(){
    var myEscrowInstance;
    return Escrow.deployed().then(function(instance){
      myEscrowInstance = instance;
      return myEscrowInstance.seller()
    }).then(function(seller){
      assert.notEqual(seller, "0x0", "Seller does not have a valid address");
    });
  });

  it("should have an arbiter address that is valid", function(){
    var myEscrowInstance;
    return Escrow.deployed().then(function(instance){
      myEscrowInstance = instance;
      return myEscrowInstance.arbiter()
    }).then(function(arbiter){
      assert.notEqual(arbiter, "0x0", "Arbiter does not have a valid address");
    });
  });
});

var Escrow = artifacts.require("./Escrow.sol");

contract('Escrow', function(accounts){

  it("should have a buyer address that is valid", () => {
    return Escrow.deployed().then(instance => {
      return instance.buyer()
    }).then(buyer => {
      assert.notEqual(buyer, "0x0", "Buyer does not have a valid address");
    });
  });

  it("should have a seller address that is valid", () => {
    return Escrow.deployed().then(instance => {
      return instance.seller()
    }).then(seller => {
      assert.notEqual(seller, "0x0", "Seller does not have a valid address");
    });
  });

  it("should have an arbiter address that is valid", () => {
    return Escrow.deployed().then(instance => {
      return instance.arbiter()
    }).then(arbiter => {
      assert.notEqual(arbiter, "0x0", "Arbiter does not have a valid address");
    });
  });
});

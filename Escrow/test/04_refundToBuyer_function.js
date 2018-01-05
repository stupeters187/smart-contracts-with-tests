var Escrow = artifacts.require("./Escrow.sol");

contract('Escrow - refundToBuyer function', accounts => {

    it("the seller is able to send funds back to the buyer", () =>{
      let buyer = web3.eth.accounts[1];
      const buyerBalanceBeforeTransfer = web3.eth.getBalance(buyer).toNumber();
      let myEscrowInstance;
      return Escrow.deployed().then(instance => {
        myEscrowInstance = instance;
        myEscrowInstance.fund({from: buyer, value: 1});
        myEscrowInstance.refundToBuyer({from: web3.eth.accounts[0]});
      }).then(() => {
        const buyerBalanceAfterTransfer = web3.eth.getBalance(buyer).toNumber();
        assert.equal(buyerBalanceAfterTransfer, buyerBalanceBeforeTransfer, "buyer did not recieve funds");
      });
    });

    it("the abiter is able to send funds back to the buyer", () =>{
      let buyer = web3.eth.accounts[1];
      const buyerBalanceBeforeTransfer = web3.eth.getBalance(buyer).toNumber();
      let myEscrowInstance;
      return Escrow.deployed().then(instance => {
        myEscrowInstance = instance;
        myEscrowInstance.fund({from: buyer, value: 1});
        myEscrowInstance.refundToBuyer({from: web3.eth.accounts[2]});
      }).then(() => {
        const buyerBalanceAfterTransfer = web3.eth.getBalance(buyer).toNumber();
        assert.equal(buyerBalanceAfterTransfer, buyerBalanceBeforeTransfer, "buyer did not recieve funds");
      });
    });

    it("the contract should send all the funds it contains", () => {
      let buyer = web3.eth.accounts[1];
      let myEscrowInstance;
      return Escrow.deployed().then(instance => {
        myEscrowInstance = instance;
        myEscrowInstance.fund({from: buyer, value: 1});
        myEscrowInstance.refundToBuyer({from: web3.eth.accounts[0]});
      }).then(() => {
        assert.equal(web3.eth.getBalance(myEscrowInstance.address), 0, "contract has remaining funds");
      });
    });
});

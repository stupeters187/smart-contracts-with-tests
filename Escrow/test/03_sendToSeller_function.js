var Escrow = artifacts.require("./Escrow.sol");

contract('Escrow - sendToSeller function', accounts => {

  it("the buyer is able to send the funds to the seller", () => {
    const sellerBalanceBeforeTransfer = web3.eth.getBalance(web3.eth.accounts[0]).toNumber();
    let buyer = web3.eth.accounts[1];
    let myEscrowInstance;
    return Escrow.deployed().then(instance => {
      myEscrowInstance = instance;
      myEscrowInstance.fund({from: buyer, value: 1});
      myEscrowInstance.sendToSeller({from: buyer});
    }).then(() => {
      const sellerBalanceAfterTransfer = web3.eth.getBalance(web3.eth.accounts[0]).toNumber();
      assert.equal(sellerBalanceAfterTransfer, sellerBalanceBeforeTransfer + 1, "seller did not recieve funds");
    });
  });

  it("the arbiter is able to send the funds to the seller", () => {
    const sellerBalanceBeforeTransfer = web3.eth.getBalance(web3.eth.accounts[0]).toNumber();
    let buyer = web3.eth.accounts[1];
    let myEscrowInstance;
    return Escrow.deployed().then(instance => {
      myEscrowInstance = instance;
      myEscrowInstance.fund({from: buyer, value: 1});
      myEscrowInstance.sendToSeller({from: web3.eth.accounts[2]});
    }).then(() => {
      const sellerBalanceAfterTransfer = web3.eth.getBalance(web3.eth.accounts[0]).toNumber();
      assert.equal(sellerBalanceAfterTransfer, sellerBalanceBeforeTransfer + 1, "seller did not recieve funds");
    });
  });

  it("the contract should send all the funds it contains", () => {
    let buyer = web3.eth.accounts[1];
    let myEscrowInstance;
    return Escrow.deployed().then(instance => {
      myEscrowInstance = instance;
      myEscrowInstance.fund({from: buyer, value: 1});
      myEscrowInstance.sendToSeller({from: buyer});
    }).then(() => {
      assert.equal(web3.eth.getBalance(myEscrowInstance.address), 0, "contract has remaining funds");
    });
  });
});

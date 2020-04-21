var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "frog turtle dice list winter sausage moral fortune tunnel joy open person";
//var mnemonic = "wheel sting leisure wife base man fine roast valve silent salmon board";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:8545/", 0, 50);
      },
      network_id: '*',
      gas: 4999999
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};
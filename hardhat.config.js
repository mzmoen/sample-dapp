require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    kovan: {
      url: "https://kovan.infura.io/v3/04b67d1c5d1449548f9c5b956c498177",
      accounts: [`0x${process.env.REACT_APP_WALLET_ADDRESS}`]
    }
  }
};

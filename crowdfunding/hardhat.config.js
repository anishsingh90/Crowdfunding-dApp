/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: "gorli",
    networks: {
      hardhat: {},
      gorili: {
        url: 'https://rpc.ankr.com/eth_goerli',
        accounts: 
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

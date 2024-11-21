// SPDX-License-Identifier: MIT 
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    BCS: {
      provider: () =>
        new HDWalletProvider(
          '0xAb42076878Ba067cb423438861327aa92fc4f431', // ejemplo
          'https://bsc-testnet.infura.io/v3/65b53652f6fd40ba8682f860aa75b0ee'
        ),
      network_id: 4,       // BSC Testnet tiene el network_id 4
      gas: 5500000,        // gas por defecto
      gasPrice: 20000000000, // gas price
    },
  },
  compilers: {
    solc: {
      version: "0.8.28", // especificamos la versión de Solidity
    },
  },
};

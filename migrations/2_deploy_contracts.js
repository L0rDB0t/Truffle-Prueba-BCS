// SPDX-License-Identifier: MIT 
const MiContrato = artifacts.require("MiContrato");

module.exports = function (deployer) {
  deployer.deploy(MiContrato);
};
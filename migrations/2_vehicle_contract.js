var vehcileContract = artifacts.require("Vehicle");

module.exports = function(deployer) {
  deployer.deploy(vehcileContract);
};

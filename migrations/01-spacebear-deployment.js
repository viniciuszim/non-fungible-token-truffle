const Spacebear = artifacts.require("Spacebear2");

module.exports = function(deployer, network, accounts) {
  console.log(network, accounts);
  deployer.deploy(Spacebear);

  // IF gets "null error" while deploying
  // deployer.deploy(Spacebear, { from: accounts[0] });
}
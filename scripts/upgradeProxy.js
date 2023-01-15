const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xc66b3abF9F426fD4f4F83C0ae1db2d0882fD6410';

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
  

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );
  const owner = await upgraded.owner();
  console.log("The current contract owner is: " + owner);
  console.log('Implementation contract address: ' + implementationAddress);
}

main();
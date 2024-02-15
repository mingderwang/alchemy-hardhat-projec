const main = async () => {
const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
// Here, we tell Hardhat which contract we want to deploy. 
// Hardhat then knows how to handle the signer and contract ABI used for deployment. 
const factory = await Factory.deploy();
// deploying our contract
await factory.deployed();
console.log("Factory deployed to:", factory.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

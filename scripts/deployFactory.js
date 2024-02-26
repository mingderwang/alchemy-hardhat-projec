const main = async () => {
const Factory = await ethers.getContractFactory("LightAccountFactory");
// Here, we tell Hardhat which contract we want to deploy. 
// Hardhat then knows how to handle the signer and contract ABI used for deployment. 
const factory = await Factory.deploy("0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789");
// deploying our contract
await factory.deployed();
console.log("Factory deployed to:", factory.address);
  }
  
  main()

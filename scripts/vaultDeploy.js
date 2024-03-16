const { bytecode } = require("../artifacts/contracts/LightAccount.sol/LightAccount.json");
const { encoder, create2Address } = require("../utils/utils.js")

const main = async () => {
    const factoryAddr = "0x23adcfF090C9244672114d3fB89D28a018F528FE";
    const entryPoint = "0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789";
    const saltHex = ethers.utils.id("1234");
    const initCode = bytecode + encoder(["address"], [entryPoint]);

    const create2Addr = create2Address(factoryAddr, saltHex, initCode);
    console.log("precomputed address:", create2Addr);

    const Factory = await ethers.getContractFactory("LightAccountFactory");
    const factory = await Factory.attach(factoryAddr);
    const gasLimit = 6000000; // Example gas limit

    const lockDeploy = await factory.deploy(initCode, saltHex, { gasLimit });
    const txReceipt = await lockDeploy.wait();
    console.log("Deployed to:", txReceipt.events[0].args[0]);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

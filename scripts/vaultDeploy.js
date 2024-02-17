const { bytecode } = require("../artifacts/contracts/Vault.sol/Vault.json");
const { encoder, create2Address } = require("../utils/utils.js")

const main = async () => {
    const factoryAddr = "0xd851C0FC5DeD867033a70626DcDFe10EF7B7f433";
    const unlockTime = 1708185670;
    const saltHex = ethers.utils.id("1234");
    const initCode = bytecode + encoder(["uint"], [unlockTime]);

    const create2Addr = create2Address(factoryAddr, saltHex, initCode);
    console.log("precomputed address:", create2Addr);

    const Factory = await ethers.getContractFactory("DeterministicDeployFactory");
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

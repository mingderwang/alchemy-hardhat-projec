import { formatEther, parseEther } from "viem";
import hre from "hardhat";

const main = async () => {
  const Factory = await hre.viem.deployContract("LightAccountFactory", ["0x5ff137d4b0fdcd49dca30c7cf57e578a026d2789"]);
}
 
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

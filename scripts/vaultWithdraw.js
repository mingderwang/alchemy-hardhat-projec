const withdraw = async () => {
    const Vault = await ethers.getContractFactory("Vault");
    const vaultAddress = "0x4CF4dd3f71B67a7622ac250f8b10d266Dc5aEbcE"; //Replace this with your deployed Vault address
    const vault = await Vault.attach(vaultAddress);
  
    const withdraw = await vault.withdraw();
    const withdrawRes = await withdraw.wait();
    console.log(withdrawRes.events[0].args[0]._hex.toString() / 10 ** 18 + "ETH Withdrawn!");
  };
  
  withdraw()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

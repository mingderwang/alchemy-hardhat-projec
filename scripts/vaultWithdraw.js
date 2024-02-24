const withdraw = async () => {
    const Vault = await ethers.getContractFactory("Vault");
    const vaultAddress = "0xeF7F8A6a215789fAb04814A7e7ED841FcD676F5D"; //Replace this with your deployed Vault address
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

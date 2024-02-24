const deposit = async () => {
    const depositAmount = ethers.utils.parseEther("0.001");
    console.log("Depositing", depositAmount / 10 ** 18 + "ETH...");
    
    const Vault = await ethers.getContractFactory("Vault");
    const vaultAddress = "0xeF7F8A6a215789fAb04814A7e7ED841FcD676F5D" //Replace this with your deployed address
    const vaultContract = await Vault.attach(vaultAddress);
    
    const sendEther = await vaultContract.deposit({ value: depositAmount });
    const depositTxReciept = await sendEther.wait();
    console.log(depositTxReciept.events[0].args[0]._hex.toString() / 10 ** 18 + "ETH deposited!");

  };
  
  deposit()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

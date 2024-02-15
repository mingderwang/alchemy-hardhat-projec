# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## deployment

```shell
➜  npx hardhat verify --network sepolia 0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/DeterministicDeployFactory.sol:DeterministicDeployFactory at 0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4
for verification on the block explorer. Waiting for verification result...

Successfully verified contract DeterministicDeployFactory on Etherscan.
https://sepolia.etherscan.io/address/0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4#code
```

## error

```
  reason: "execution reverted: revert: You can't withdraw yet",
  code: 'UNPREDICTABLE_GAS_LIMIT',
  method: 'estimateGas',
  transaction: {
    from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    to: '0x4CF4dd3f71B67a7622ac250f8b10d266Dc5aEbcE',
    data: '0x3ccfd60b',
    accessList: null
  },
```

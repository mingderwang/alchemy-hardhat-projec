# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
✗ npx hardhat run scripts/deployFactory.js --network arbitrumSepolia
No need to generate any newer typings.
Factory deployed to: 0xd851C0FC5DeD867033a70626DcDFe10EF7B7f433

✗ npx hardhat run scripts/deployFactory.js --network mumbai
No need to generate any newer typings.
Factory deployed to: 0xd851C0FC5DeD867033a70626DcDFe10EF7B7f433

✗ npx hardhat run scripts/deployFactory.js --network sepolia
No need to generate any newer typings.
Factory deployed to: 0xd851C0FC5DeD867033a70626DcDFe10EF7B7f433
```

then, edit your scripts/vaultDeploy.js at line 5

```shell
    const factoryAddr = "0xd851C0FC5DeD867033a70626DcDFe10EF7B7f433";
```

and run

```shell
✗ npx hardhat run scripts/vaultDeploy.js --network arbitrumSepolia
No need to generate any newer typings.
precomputed address: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
Deployed to: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D

✗ npx hardhat run scripts/vaultDeploy.js --network mumbai
No need to generate any newer typings.
precomputed address: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
Deployed to: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D

✗ npx hardhat run scripts/vaultDeploy.js --network sepolia
No need to generate any newer typings.
precomputed address: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
Deployed to: 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
```


## code verification

```shell
✗ npx hardhat verify --network arbitrumSepolia 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D 52943830000

The contract 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D has already been verified on Etherscan.
https://sepolia.arbiscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code

✗ npx hardhat verify --network mumbai 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D 52943830000
Successfully submitted source code for contract
contracts/Vault.sol:Vault at 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Vault on the block explorer.
https://mumbai.polygonscan.com/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code

✗ npx hardhat verify --network sepolia 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D 52943830000
Successfully submitted source code for contract
contracts/Vault.sol:Vault at 0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D
for verification on the block explorer. Waiting for verification result...

Successfully verified contract Vault on the block explorer.
https://sepolia.etherscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code

```


## task account to make sure nonce are equal on each chain

```shell
npx hardhat account --address 0x97e5dD3ea09304249BeC86AfC1a62B6c8EF9a6A0
[
  [ '  |NETWORK|   |NONCE|   |BALANCE|  ' ],
  [ 'Arbitrum Sepolia:', 1, '0.000ETH' ],
  [ 'Sepolia:', 1, '0.684ETH' ],
  [ 'Polygon Mumbai:', 1, '0.499ETH' ]
]
```


## verified code

[https://sepolia.arbiscan.io/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0#code](https://sepolia.arbiscan.io/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0#code)

[https://mumbai.polygonscan.com/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0](https://mumbai.polygonscan.com/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0)

[https://sepolia.etherscan.io/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0](https://sepolia.etherscan.io/address/0xA17cfaB7bc4aD64C56Dd5cCB4F1321c379b14Fa0)

* for Vault.sol

[https://mumbai.polygonscan.com/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code](https://mumbai.polygonscan.com/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code)

[https://sepolia.arbiscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code](https://sepolia.arbiscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code)

[https://sepolia.etherscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code](https://sepolia.etherscan.io/address/0xA1c83098d64DF1bAa04E7C930c033Bf4Cc04Ed0D#code)

## test locktime

```shell
npx hardhat run scripts/showTimeStamp.ts
No need to generate any newer typings.
Lock with 0.001ETH and unlock timestamp 1708185923 deployed to address
```

or deploy and run following code in Remix

```
// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.7;
    
contract Timestamp {
   uint public timestamp;
   function saveTimestamp() public {
      timestamp = block.timestamp;
   }
}
```

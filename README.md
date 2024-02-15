# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
-> npx hardhat run scripts/deployFactory.js --network sepolia
Factory deployed to: 0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4
```

then, edit your scripts/vaultDeploy.js at line 5

```shell
    const factoryAddr = "0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4";
```

and run

```shell
-> npx hardhat run scripts/vaultDeploy.js --network sepolia
precomputed address: 0xa5d1D7D9566a1C085FDdD6977daE66287C608EDd
```


## deployment

```shell
-> npx hardhat verify --network sepolia 0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/DeterministicDeployFactory.sol:DeterministicDeployFactory at 0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4
for verification on the block explorer. Waiting for verification result...

Successfully verified contract DeterministicDeployFactory on Etherscan.
https://sepolia.etherscan.io/address/0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4#code
```

## error

```shell
-> npx hardhat run scripts/vaultDeploy.js --network sepolia
No need to generate any newer typings.
precomputed address: 0xa5d1D7D9566a1C085FDdD6977daE66287C608EDd
Error: transaction failed [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (transactionHash="0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3", transaction={"hash":"0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3","type":2,"accessList":[],"blockHash":null,"blockNumber":null,"transactionIndex":null,"confirmations":0,"from":"0x4ECa28Bd1339DA33396fa4978FE77D3475B47825","gasPrice":{"type":"BigNumber","hex":"0x59f5ee8f"},"maxPriorityFeePerGas":{"type":"BigNumber","hex":"0x59682f00"},"maxFeePerGas":{"type":"BigNumber","hex":"0x59f5ee8f"},"gasLimit":{"type":"BigNumber","hex":"0x0f4240"},"to":"0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4","value":{"type":"BigNumber","hex":"0x00"},"nonce":2,"data":"0x9c4ae2d00000000000000000000000000000000000000000000000000000000000000040387a8233c96e1fc0ad5e284353276177af2186e7afa85296f106336e376669f700000000000000000000000000000000000000000000000000000000000003c5608060405234801561001057600080fd5b506040516103a53803806103a583398101604081905261002f916100bc565b80421061008e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b031916734eca28bd1339da33396fa4978fe77d3475b478251790556100d5565b6000602082840312156100ce57600080fd5b5051919050565b6102c1806100e46000396000f3fe60806040526004361061003f5760003560e01c8063251c1aa3146100445780633ccfd60b1461006d5780638da5cb5b14610084578063d0e30db0146100d6575b600080fd5b34801561005057600080fd5b5061005a60005481565b6040519081526020015b60405180910390f35b34801561007957600080fd5b506100826100de565b005b34801561009057600080fd5b506001546100b19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610064565b610082610251565b60005442101561014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f596f752063616e2774207769746864726177207965740000000000000000000060448201526064015b60405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1633146101d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f796f75206172656e277420746865206f776e65720000000000000000000000006044820152606401610146565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a160015460405173ffffffffffffffffffffffffffffffffffffffff909116904780156108fc02916000818181858888f1935050505015801561024e573d6000803e3d6000fd5b50565b604080513481524260208201527fa3af609bf46297028ce551832669030f9effef2b02606d02cbbcc40fe6b47c55910160405180910390a156fea26469706673582212200a5c625b42272816f95f03f3cc2c0587b442ad6141b7fc9d040e56e38fe9453564736f6c634300081700330000000000000000000000000000000000000000000000000000000065cdb63f000000000000000000000000000000000000000000000000000000","r":"0xa052f375b5c66390512fff9cb0da69e9b24bce9b213a9c8e3a50691b2787492a","s":"0x36dfcc47ca29e71be349a2f66197e82f89a9b2135dc50bad6b89af4c36a964f1","v":1,"creates":null,"chainId":11155111}, receipt={"to":"0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4","from":"0x4ECa28Bd1339DA33396fa4978FE77D3475B47825","contractAddress":null,"transactionIndex":56,"gasUsed":{"type":"BigNumber","hex":"0x0117a3"},"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x4471a40b6079c8fb8bb774adb07c257e6f515bdf95918ff2cada6ac5aa2433cc","transactionHash":"0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3","logs":[],"blockNumber":5292341,"confirmations":1,"cumulativeGasUsed":{"type":"BigNumber","hex":"0x5de62b"},"effectiveGasPrice":{"type":"BigNumber","hex":"0x59d82ea7"},"status":0,"type":2,"byzantium":true}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/private/tmp/s/node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/private/tmp/s/node_modules/.pnpm/@ethersproject+logger@5.7.0/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at EthersProviderWrapper.<anonymous> (/private/tmp/s/node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/src.ts/base-provider.ts:1549:24)
    at step (/private/tmp/s/node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/lib/base-provider.js:48:23)
    at Object.next (/private/tmp/s/node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/lib/base-provider.js:29:53)
    at fulfilled (/private/tmp/s/node_modules/.pnpm/@ethersproject+providers@5.7.2/node_modules/@ethersproject/providers/lib/base-provider.js:20:58) {
  reason: 'transaction failed',
  code: 'CALL_EXCEPTION',
  transactionHash: '0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3',
  transaction: {
    hash: '0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3',
    type: 2,
    accessList: [],
    blockHash: null,
    blockNumber: null,
    transactionIndex: null,
    confirmations: 0,
    from: '0x4ECa28Bd1339DA33396fa4978FE77D3475B47825',
    gasPrice: BigNumber { value: "1509289615" },
    maxPriorityFeePerGas: BigNumber { value: "1500000000" },
    maxFeePerGas: BigNumber { value: "1509289615" },
    gasLimit: BigNumber { value: "1000000" },
    to: '0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4',
    value: BigNumber { value: "0" },
    nonce: 2,
    data: '0x9c4ae2d00000000000000000000000000000000000000000000000000000000000000040387a8233c96e1fc0ad5e284353276177af2186e7afa85296f106336e376669f700000000000000000000000000000000000000000000000000000000000003c5608060405234801561001057600080fd5b506040516103a53803806103a583398101604081905261002f916100bc565b80421061008e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b031916734eca28bd1339da33396fa4978fe77d3475b478251790556100d5565b6000602082840312156100ce57600080fd5b5051919050565b6102c1806100e46000396000f3fe60806040526004361061003f5760003560e01c8063251c1aa3146100445780633ccfd60b1461006d5780638da5cb5b14610084578063d0e30db0146100d6575b600080fd5b34801561005057600080fd5b5061005a60005481565b6040519081526020015b60405180910390f35b34801561007957600080fd5b506100826100de565b005b34801561009057600080fd5b506001546100b19073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610064565b610082610251565b60005442101561014f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f596f752063616e2774207769746864726177207965740000000000000000000060448201526064015b60405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1633146101d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f796f75206172656e277420746865206f776e65720000000000000000000000006044820152606401610146565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a160015460405173ffffffffffffffffffffffffffffffffffffffff909116904780156108fc02916000818181858888f1935050505015801561024e573d6000803e3d6000fd5b50565b604080513481524260208201527fa3af609bf46297028ce551832669030f9effef2b02606d02cbbcc40fe6b47c55910160405180910390a156fea26469706673582212200a5c625b42272816f95f03f3cc2c0587b442ad6141b7fc9d040e56e38fe9453564736f6c634300081700330000000000000000000000000000000000000000000000000000000065cdb63f000000000000000000000000000000000000000000000000000000',
    r: '0xa052f375b5c66390512fff9cb0da69e9b24bce9b213a9c8e3a50691b2787492a',
    s: '0x36dfcc47ca29e71be349a2f66197e82f89a9b2135dc50bad6b89af4c36a964f1',
    v: 1,
    creates: null,
    chainId: 11155111,
    wait: [Function (anonymous)]
  },
  receipt: {
    to: '0x567DaC60eb2F76641BB7a39d8B8294b286D9cBC4',
    from: '0x4ECa28Bd1339DA33396fa4978FE77D3475B47825',
    contractAddress: null,
    transactionIndex: 56,
    gasUsed: BigNumber { value: "71587" },
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    blockHash: '0x4471a40b6079c8fb8bb774adb07c257e6f515bdf95918ff2cada6ac5aa2433cc',
    transactionHash: '0x1f51464c548586d9ee96b1ee44fc4589c19eb6a4f9d3686d71caa1d21c16a8b3',
    logs: [],
    blockNumber: 5292341,
    confirmations: 1,
    cumulativeGasUsed: BigNumber { value: "6153771" },
    effectiveGasPrice: BigNumber { value: "1507339943" },
    status: 0,
    type: 2,
    byzantium: true
  }
}
```

## OK

* when I removed lockTime check in Vault.sol

```shell
➜  s git:(main) ✗ npx hardhat run scripts/vaultDeploy.js --network sepolia
No need to generate any newer typings.
precomputed address: 0x709D6c1220A142BD5C4EDC4b1e7D30b44c21Eec0
Deployed to: 0x709D6c1220A142BD5C4EDC4b1e7D30b44c21Eec0
```

## verification

Vault.sol need to verify manually

```shell
npx hardhat verify --network sepolia 0x709D6c1220A142BD5C4EDC4b1e7D30b44c21Eec0
```

import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import { HardhatUserConfig } from 'hardhat/config'
import 'hardhat-deploy'
import "@nomicfoundation/hardhat-viem";
import 'solidity-coverage'
import * as fs from 'fs'
import "@nomicfoundation/hardhat-verify";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";

const {
  infura_API_URL_SEPOLIA,
  API_URL_ARBITRUM_SEPOLIA,
  API_URL_POLYGON_MUMBAI,
  API_URL_SEPOLIA,
  API_URL_ETHEREUM,
  API_URL_POLYGON,
  ARBITRUM_SEPOLIA_API_KEY
} = process.env;

task("account", "returns nonce and balance for specified address on multiple networks")
  .addParam("address")
  .setAction(async address => {
    const web3Ethereum = createAlchemyWeb3(API_URL_ETHEREUM);
    const web3ArbitrumSepolia = createAlchemyWeb3(API_URL_ARBITRUM_SEPOLIA);
    const web3Sepolia = createAlchemyWeb3(API_URL_SEPOLIA);
    const web3Mumbai = createAlchemyWeb3(API_URL_POLYGON_MUMBAI);
    const web3Polygon = createAlchemyWeb3(API_URL_POLYGON);

    const networkIDArr = ["Arbitrum Sepolia:", "Sepolia:", "Polygon Mumbai:"]
    const providerArr = [web3ArbitrumSepolia, web3Sepolia, web3Mumbai];
    const resultArr = [];
    
    for (let i = 0; i < providerArr.length; i++) {
      const nonce = await providerArr[i].eth.getTransactionCount(address.address, "latest");
      const balance = await providerArr[i].eth.getBalance(address.address)
      resultArr.push([networkIDArr[i], nonce, parseFloat(providerArr[i].utils.fromWei(balance, "ether")).toFixed(3) + "ETH"]);
    }
    resultArr.unshift(["  |NETWORK|   |NONCE|   |BALANCE|  "])
    console.log(resultArr);
  });

const mnemonicFileName = process.env.MNEMONIC_FILE ?? `${process.env.HOME}/.secret/testnet-mnemonic.txt`
let mnemonic = 'test '.repeat(11) + 'junk'
if (fs.existsSync(mnemonicFileName)) { 
  mnemonic = fs.readFileSync(mnemonicFileName, 'ascii') 
}

function getNetwork1 (url: string): { url: string, accounts: { mnemonic: string } } {
  return {
    url,
    accounts: { mnemonic }
  }
}

function getNetwork (name: string): { url: string, accounts: { mnemonic: string } } {
  return getNetwork1(`https://${name}.infura.io/v3/${process.env.INFURA_ID}`)
  // return getNetwork1(`wss://${name}.infura.io/ws/v3/${process.env.INFURA_ID}`)
}

const optimizedComilerSettings = {
  version: '0.8.23',
  settings: {
    optimizer: { enabled: true, runs: 1000000 },
    viaIR: true
  }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{
      version: '0.8.23',
      settings: {
        optimizer: { enabled: true, runs: 1000000 }
      }
    }],
    overrides: {
      'contracts/core/EntryPoint.sol': optimizedComilerSettings,
      'contracts/samples/SimpleAccount.sol': optimizedComilerSettings
    }
  },
  defaultNetwork: "dev",
  networks: {
    sepolia: {
      url:  infura_API_URL_SEPOLIA,
      accounts: { mnemonic }
    },
    mumbai: {
      url: API_URL_POLYGON_MUMBAI,
      accounts: { mnemonic }
    },
    polygon: {
      url: API_URL_POLYGON,
      accounts: { mnemonic }
    },
    dev: {
      url: API_URL_SEPOLIA,
      accounts: { mnemonic }
    },
    ethereum: {
      url: API_URL_ETHEREUM,
      accounts: { mnemonic }
    },
    arbitrumSepolia: {
      url: API_URL_ARBITRUM_SEPOLIA,
      accounts: { mnemonic }
    },
    hardhat: {
      forking: {
        url: `https://sepolia.infura.io/v3/${process.env.INFURA_ID}`,
        blockNumber: 5292149
      }
    }
  },
  mocha: {
    timeout: 10000
  },
  // npx hardhat verify --list-networks 
  // to get  Networks supported by hardhat-verify:

  // @ts-ignore
  etherscan: {
    apiKey: {
     sepolia: process.env.ETHERSCAN_API_KEY,
     polygonMumbai: process.env.POLYSCAN_API_KEY,
     optimisticSepolia: process.env.OPTIMISM_ETHERSCAN_API_KEY,
     arbitrumSepolia: ARBITRUM_SEPOLIA_API_KEY
    },
    customChains: [
    {
      network: "optimisticSepolia",
      chainId: 11155420 ,
      urls: {
        apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
        browserURL: "https://sepolia-optimism.etherscan.io"
      }
    }
  ] 
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: false
  }
}

// coverage chokes on the "compilers" settings
if (process.env.COVERAGE != null) {
  // @ts-ignore
  config.solidity = config.solidity.compilers[0]
}

export default config

# hello-world-platon-contract
A simple Solidity project to deploy a HelloWorld.sol smart contract on the PlatON/Alaya network

# Usage
- Clone the repository and enter the repo root.

- Make sure you have node.js v10.12.0 or higher. [details](https://platon-truffle.readthedocs.io/en/v1.0.0/getting-started/installation.html)

## Deploying on the PlatON Dev Network

- Install the dependencies for the project:
```
$ npm install -g platon-truffle@1.0.0
```

- Compile the contracts using:
```
$ platon-truffle compile
```

- Modify the truffle-config.js file with your test network wallet address

- Enter `platon-truffle console` to import your wallet and unlock it:
```
$ platon-truffle console
```
You will see a JS console with web3 imported by default with a prompt like below where you can execute commands. Import your wallet by importing your private key:
```
platon-truffle(development)> web3.platon.personal.importRawKey("<YOUR_WALLET_PRIVATE_KEY>","<YOUR_WALLET_PASSWORD>");
```
You will see your wallet address as:
```
'0x51eD4e59566F426Bb134Fd24ED7c7Cb5D1b75ab9'
```
Unlock your wallet account:
```
 platon-truffle(development)> web3.platon.personal.unlockAccount('<YOUR_WALLET_ADDRESS>','<YOUR_WALLET_PASSWORD>',999999);
 ```
 After successfully unlocking your wallet, you will see the following message:
 ```
 true
 ```

Exit the console by tying Ctrl+C.

- Deploy your contract(s):
```
$ platon-truffle migrate
```
The result is:
```
Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'development'
> Network id:      1
> Block gas limit: 0x8fcf88


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xfc7d5e186e8a7e0aaef612441e4d1d483f785b8402d66719e011b88389b7d18c
   > Blocks: 5            Seconds: 4
   > contract address:    lat1mv0689cx4dqlupmz2zyv5f84l23q33clh3x6k2
   > block number:        5779867
   > block timestamp:     1636886197585
   > account:             lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz
   > balance:             199.9969422
   > gas used:            152890
   > gas price:           20 gvon
   > value sent:          0 LAT
   > total cost:          0.0030578 LAT


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0030578 LAT


2_initial_helloworld.js
=======================

   Deploying 'HelloWorld'
   ----------------------
   > transaction hash:    0xedb393920349fff4d39ec91e73b80763ce05e62d5aa817b9ec7bc7446b0747df
   > Blocks: 4            Seconds: 4
   > contract address:    lat1s2yru2f4qw0tj9map5jd4nj5w2j4dn5geh3uax
   > block number:        5779880
   > block timestamp:     1636886211523
   > account:             lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz
   > balance:             199.9912679
   > gas used:            242060
   > gas price:           20 gvon
   > value sent:          0 LAT
   > total cost:          0.0048412 LAT


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0048412 LAT


Summary
=======
> Total deployments:   2
> Final cost:          0.007899 LAT

```

### Call the HelloWorld contract
- Create the contract object
```
var abi = [{"constant":false,"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"setName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]; //you can refet to HelloWorld/build/contracts/HelloWorld.json

var contractAddr = 'lat17rcz8c3uwaf3ktf0e0d8q0jw4k3dm8z22eer96';//contract address
var helloWorld = new web3.platon.Contract(abi,contractAddr);
```

- Call the contract:
```
platon-truffle(development)> helloWorld.methods.setName("hello world").send({from: 'lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz'}).on('receipt', function(receipt) {console.log(receipt);}).on('error', console.error);
```
We should get a response like:
```
{ blockHash:
   '0xbee45e980a765ed8e87c539a5100d271aa2427a251a34efc1de2706abe805927',
  blockNumber: 5813616,
  contractAddress: null,
  cumulativeGasUsed: 43697,
  from: 'lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz',
  gasUsed: 43697,
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: 'lat1s2yru2f4qw0tj9map5jd4nj5w2j4dn5geh3uax',
  transactionHash:
   '0x7a4d75491b0c4b330e9146cbf7df74e7d3e5dd7451a92c210b70c6743559e4f4',
  transactionIndex: 0,
  events: {} }
{ blockHash:
   '0xbee45e980a765ed8e87c539a5100d271aa2427a251a34efc1de2706abe805927',
  blockNumber: 5813616,
  contractAddress: null,
  cumulativeGasUsed: 43697,
  from: 'lat13u5xqwvdzfpzhdfl8daksy66ssss9tp0fknchz',
  gasUsed: 43697,
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: 'lat1s2yru2f4qw0tj9map5jd4nj5w2j4dn5geh3uax',
  transactionHash:
   '0x7a4d75491b0c4b330e9146cbf7df74e7d3e5dd7451a92c210b70c6743559e4f4',
  transactionIndex: 0,
  events: {} }
```
You can view the transaction and interact with the deployed contract at [devnetscan.platon.network](https://devnetscan.platon.network).
Transaction hash: 0xedb393920349fff4d39ec91e73b80763ce05e62d5aa817b9ec7bc7446b0747df

Contract address: lat1s2yru2f4qw0tj9map5jd4nj5w2j4dn5geh3uax

### Query the contract:
```
platon-truffle(development)> helloWorld.methods.getName().call(null,function(error,result){console.log("name is:" + result);})
```


# installation
   do an `npm install` to install all dependencies.

# .env creation
   create a .env file. then declare RPC_URL with sepolia network and PRIVATE_KEY of your wallet.

# deploying
   1. `npx hardhat run scripts/deploy.js` to run it locally.
   2. `npx hardhat run scripts/deploy.js --network sepolia` to run it on sepolia network as declared in hardhat.config.js.

# running the contract
   There are 3 js scripts in scripts folder besides deploy.js. It can be run to call the function inside the deployed contract. To run it, it needs `npx hardhat run scripts/increment.js --network sepolia` and so on.

# my deployed contract address
   please refer to `0x82FE7feA592a1442525023C1bFe7A88fF1fAFA24` in `sepolia.etherscan.io` to see the example of deployed contract.
const hre = require('hardhat');
const CONTRACT_ADDRESS = "0x82FE7feA592a1442525023C1bFe7A88fF1fAFA24";

async function main() {
    const counter = await hre.ethers.getContractAt('Counter', CONTRACT_ADDRESS);

    const value = await counter.get();

    console.log(`The current value is: ${value}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
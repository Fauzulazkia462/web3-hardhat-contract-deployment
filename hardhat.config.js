require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true
			}
		},
		allowUnlimitedContractSize: true,	
	},
	networks: {
		hardhat: {},
		sepolia: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `${process.env.RPC_URL}`
		}
	}
}
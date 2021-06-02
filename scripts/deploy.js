const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, World!");

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();

    const TokenERC20 = await hre.ethers.getContractFactory("Token_ERC20");
    const MFTToken = await TokenERC20.deploy("MFT Token", "MFT");

    await greeter.deployed();
    await token.deployed();
    await MFTToken.deployed();

    console.log("Greeter deployed to:", greeter.address);
    console.log("Token deployed to:", token.address);
    console.log("ERC20 Token deployed to:", MFTToken.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
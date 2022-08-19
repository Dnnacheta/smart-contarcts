import { ethers } from "hardhat";

async function main() {
  
    const Swap = await ethers.getContractFactory("swap");
    const swap = await Swap.attach(
            "0x7F60F6FE852e4135E03b1Ce24509ac34999487b1" // The deployed contract address
          );
        
          await swap.createOrder("Testing 2", "This is just another test"); // 
        
        
        // const swap = await Swap.deploy();  // 0x7F60F6FE852e4135E03b1Ce24509ac34999487b1
    // console.log("...almost there, just waiting for Goerli Netwrk validation 😃")
    // await swap.deployed();
    // console.log(`This contract is deploy on Goerli Address deployed to ${swap.address}`);
  }

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
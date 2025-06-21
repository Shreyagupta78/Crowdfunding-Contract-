const hre = require("hardhat");

async function main() {
  const Crowdfunding = await hre.ethers.getContractFactory("Crowdfunding");

  // Example: 7 days duration and 1 ETH goal (in wei)
  const duration = 7 * 24 * 60 * 60;
  const goalAmount = hre.ethers.utils.parseEther("1");

  const crowdfunding = await Crowdfunding.deploy(duration, goalAmount);

  await crowdfunding.deployed();

  console.log(`Crowdfunding contract deployed to: ${crowdfunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

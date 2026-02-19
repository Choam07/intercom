import { ethers } from 'ethers';
import { Connection, PublicKey } from '@solana/web3.js';
import axios from 'axios';
import * as cheerio from 'cheerio';
import readline from 'readline';
import chalk from 'chalk';

// RPC Public / gratis
const RPC = {
  ETH: 'https://eth.llamarpc.com',
  BNB: 'https://bsc-dataseed1.binance.org/',
  BASE: 'https://mainnet.base.org',
  SOLANA: 'https://api.mainnet-beta.solana.com'
};

// Setup prompt
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ===== TRAC SCAN (SCRAPING) =====
async function scanTRAC(address) {
  try {
    const url = `https://explorer.trac.network/address/${address}`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const bodyText = $('body').text();
    const match = bodyText.match(/Balance\s*([\d,.]+)/i);

    return match ? match[1] : '0';
  } catch (err) {
    return `Error: ${err.message}`;
  }
}

// ===== MENU =====
console.log(chalk.cyan('\n=== Multi-Chain Scanner ===\n'));
console.log(chalk.yellow('1. Ethereum (ETH)'));
console.log(chalk.yellow('2. BNB Chain (BNB)'));
console.log(chalk.yellow('3. Base (BASE)'));
console.log(chalk.yellow('4. Solana (SOL)'));
console.log(chalk.yellow('5. TRAC/TNK'));
console.log('');

rl.question(chalk.green('Pilih chain (1-5): '), async (choice) => {

  const mapChoice = {
    '1': 'ETH',
    '2': 'BNB',
    '3': 'BASE',
    '4': 'SOL',
    '5': 'TRAC'
  };

  const chain = mapChoice[choice];
  if (!chain) {
    console.log(chalk.red('Pilihan tidak valid'));
    rl.close();
    return;
  }

  rl.question(chalk.green(`Masukkan address ${chain}: `), async (address) => {
    try {
      let balance;

      if (chain === 'ETH') {
        const provider = new ethers.JsonRpcProvider(RPC.ETH);
        balance = await provider.getBalance(address);
        console.log(chalk.blueBright(`ETH Balance: ${ethers.formatEther(balance)} ETH`));
      }

      if (chain === 'BNB') {
        const provider = new ethers.JsonRpcProvider(
          RPC.BNB,
          { name: 'bsc', chainId: 56 }
        );
        balance = await provider.getBalance(address);
        console.log(chalk.magentaBright(`BNB Balance: ${ethers.formatEther(balance)} BNB`));
      }

      if (chain === 'BASE') {
        const provider = new ethers.JsonRpcProvider(RPC.BASE);
        balance = await provider.getBalance(address);
        console.log(chalk.cyanBright(`BASE Balance: ${ethers.formatEther(balance)} BASE`));
      }

      if (chain === 'SOL') {
        const conn = new Connection(RPC.SOLANA);
        const pub = new PublicKey(address);
        balance = await conn.getBalance(pub);
        console.log(chalk.yellowBright(`SOL Balance: ${balance / 1e9} SOL`));
      }

      if (chain === 'TRAC') {
        balance = await scanTRAC(address);
        console.log(chalk.greenBright(`TRAC Balance: ${balance}`));
      }

    } catch (err) {
      console.log(chalk.red('Error:'), err.message);
    } finally {
      rl.close();
    }
  });
});

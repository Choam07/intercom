my trac/ TNC adress : trac1mgw9yk3t7y4k52xtzyp769e4rcwckwvee0tff7a7vfhjh3cyfzhsrgehyq

# 🛠️ Multi-Chain Crypto Scanner

A simple and interactive **multi-chain cryptocurrency balance scanner** for Ethereum (ETH), BNB Chain (BNB), Base (BASE), Solana (SOL), and TRAC/TNK.  
Scan balances of individual addresses easily from the terminal with colorful output.

---1️⃣ Ethereum (ETH)
2️⃣ BNB Chain (BNB)
3️⃣ Base (BASE)
4️⃣ Solana (SOL)
5️⃣ TRAC/TNK Custom Address


- **Select a chain** by typing the number  
- **Option 0** automatically uses the default TRAC address  
- Enter **custom addresses** for other chains  
- Get **real-time balance output** in the console  
- Designed for **single address scan at a time** for accuracy  

---

## ⚡ Features

- ✅ Scan balances for ETH, BNB, BASE, SOL, and TRAC/TNK  
- ✅ Default TRAC address included at the top of menu  
- ✅ Interactive numeric menu for easy navigation  
- ✅ Colorful terminal display using **chalk**  
- ✅ Public RPC support (no API keys required for ETH, BNB, BASE, SOL)  
- ✅ TRAC/TNK balance scraping from official explorer  

---

## 🛠️ Tools & Libraries

- [ethers.js](https://www.npmjs.com/package/ethers) – Ethereum, BNB, BASE RPC  
- [@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js) – Solana RPC  
- [axios](https://www.npmjs.com/package/axios) – HTTP requests  
- [cheerio](https://www.npmjs.com/package/cheerio) – Web scraping TRAC/TNK  
- [chalk](https://www.npmjs.com/package/chalk) – Terminal color styling  
- [readline](https://nodejs.org/api/readline.html) – Interactive user input  

---

## 🚀 Installation

1. Clone this repository:

```bash
git clone https://github.com/YourUsername/intercom.git
cd intercom/scanner


Install dependencies:

npm install ethers @solana/web3.js axios cheerio chalk


Run the scanner:

node multichain.js

📖 Usage

Run the program:

node multichain.js


Choose a chain from the menu (0-5)

0 → TRAC/TNK default address (trac1mgw9yk3t7y4k52xtzyp769e4rcwckwvee0tff7a7vfhjh3cyfzhsrgehyq)

5 → TRAC/TNK custom address

Enter the address (if applicable)

See the balance output directly in the console

🌟 Future Enhancements

Loop scanning multiple addresses without restarting

Export scan results to CSV or JSON

Live balance monitoring for multiple addresses

Additional TRAC/TNK API integration

⚠️ Notes

Only one address at a time is scanned per run

Ensure the address is correct for accurate balance results

Free public RPCs may be slow or temporarily unavailable 

![alt text](<Screenshot 2026-02-19 201929.png>)
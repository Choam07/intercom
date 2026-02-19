# 💻 Skills & Capabilities

This project comes with several features to make multi-chain cryptocurrency monitoring fast and efficient:

## 🔹 Blockchain Scanning
- Ethereum (ETH) ✅
- BNB Chain (BNB) ✅
- Base (BASE) ✅
- Solana (SOL) ✅
- TRAC / TNK ✅ (web scraping balance)

## 🔹 Features
- Scan balance per address individually
- Interactive menu with chain selection
- Colorful and clear console display using **chalk**
- Real-time balance output in console
- Supports public RPCs without API keys for ETH, BNB, BASE, SOL

## 🔹 Tools & Libraries
- [ethers.js](https://www.npmjs.com/package/ethers) – Ethereum, BNB & Base RPC
- [@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js) – Solana balance
- [axios](https://www.npmjs.com/package/axios) – HTTP requests
- [cheerio](https://www.npmjs.com/package/cheerio) – Web scraping TRAC
- [chalk](https://www.npmjs.com/package/chalk) – Console styling & colors
- [readline](https://nodejs.org/api/readline.html) – Interactive user input

## 🔹 User Experience
- Choose chain via numeric menu
- Enter addresses manually
- Scans one address at a time for accuracy
- Automatic error handling if RPC fails or address is invalid

## 🔹 Future Enhancements
- Loop scanning multiple addresses without restarting
- Export scan results to CSV or JSON
- Additional API integration for TRAC/TNK
- Live balance monitoring for multiple chains

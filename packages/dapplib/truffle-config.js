require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million puzzle gesture drop tackle segment'; 
let testAccounts = [
"0x9e65fdd31d13d27392bc9cc8ad510f35d463717df259acabdae70185ef80d7f0",
"0x3ecb0b1367e7caf8337bc44d8c7b4956a1e4f83fba68c291a26ab33c24a7ead3",
"0x8b6fdbfaf78ed1cbb1f247e434b597565a2ef46eb7f741aa946dd33bf3e11177",
"0xc8828449c8a9caa1d69323df96c0851c97b5e08de6158fd165f3f5b34225e6ac",
"0x7147734ec772df253fc746cd2bfee3e08393ecaa347c94ce5499d1ef6667f6c1",
"0x8b3105f6d515749bc834d043dd5e3e6c310f8edd926d363c0656949c24073819",
"0xfdadbd1766eb879f0c6fba6c23d334b025873b6f41f63aedd9a142a5f77f6261",
"0x1383b291bcf1adcd953a195e56a7394a5f47dae6b64d032f3ed191da1caa7e1a",
"0x3a3b2a18788759355002ea6481810a118b44b66db2bf82c54ae3b030c5078e04",
"0x2b369b756670b70a4a3b2412353d77a76c0c4e3f417a639dc139444f46c59e52"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


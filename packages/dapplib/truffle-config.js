require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift reward stereo column hunt glove flower gather'; 
let testAccounts = [
"0x430b8f3ae5698eb535781005a6ec71ac06865438fd9ba7c25841fd0de49d5e07",
"0x3770fde04e1ab4ba4eae22c92107b2c86f298b5a4d21fe16ac90bcab7600b46b",
"0xcfa301559dbb91c9d09635870b334165fd4bc035eb4ff51e2d2ab25791e20924",
"0xaf3fce539ec79a2b2b8d6441fae5247e29ea2d3ae02b37609ef338eabf94e95c",
"0x30711a48900113b6ea00ab5616ffb76751df37265da60870f9818736a34805b9",
"0x371f338c0e91398c11cdd9fa95314b30999026d8b9e108a24d50abc359c823ec",
"0x192e56427edf589ea8ed15fb9a731f61002b7f9fb612359fd2cab6d0e39f6d4b",
"0xed8d49efa3959ae03e8b5b1fe5afe55c2c794416057f4fc75367dbfca4e503ab",
"0x0b7a993478ba8fe68cb355969028794f7ba0de97a2750979b21fae055bf884e1",
"0xc1528a36895233a3fed01fb72113affba039984c9753a3e9693de3ac9d2c8e2a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

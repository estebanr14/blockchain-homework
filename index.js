const Block = require('./block');
const BlockChain = require('./blockchain');

let blockchain = new BlockChain(1);


blockchain.mineBlock(new Block('BLOCK_DATA-1'));
blockchain.mineBlock(new Block('BLOCK_DATA-2'));
blockchain.mineBlock(new Block('BLOCK_DATA-3'));
blockchain.mineBlock(new Block('BLOCK_DATA-4'));
blockchain.mineBlock(new Block('BLOCK_DATA-5'));
blockchain.mineBlock(new Block('BLOCK_DATA-6'));
blockchain.mineBlock(new Block('BLOCK_DATA-7'));
blockchain.mineBlock(new Block('BLOCK_DATA-8'));
blockchain.mineBlock(new Block('BLOCK_DATA-9'));
blockchain.mineBlock(new Block('BLOCK_DATA-10'));

console.log('\n');
console.log('\n');
console.log('BLOCKCHAIN INFO: ');
blockchain.printBlockchain();

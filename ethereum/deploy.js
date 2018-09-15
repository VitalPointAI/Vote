const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'among shrug that bind insane embark smoke pyramid lonely swim canal antenna',
    'https://rinkeby.infura.io/v3/97b23db953c2471a8f9706d69c26d328'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from:accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in the browser and metamask is running.
    web3 = new Web3(window.web3.currentProvider);
} else {
    //we are on the server or the user is not running metmask.
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/97b23db953c2471a8f9706d69c26d328'
    );
    web3 = new Web3(provider);
}

export default web3;
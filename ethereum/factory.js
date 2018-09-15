import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xeF539a6FA718E094724046AD75a65F2BF3701a12'
);

export default instance;

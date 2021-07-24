const axios = require('axios');

const url = new URL('https://api.thecatapi.com/v1/images/search');
const getCatInfo = () => axios.get(url);

module.exports = getCatInfo;

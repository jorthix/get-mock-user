const axios = require('axios');
const URL = 'https://randomuser.me/api/';

const getFullUser = async () => {
    const data = await axios.get(URL)
    return data.data.results[0]
}
const getUserName = async () => {
    const data = await axios.get(URL)
    const { title, first, last } = data.data.results[0].name
    return `${title}, ${first} ${last}`
}

module.exports = {
    getFullUser,
    getUserName
}
import axios from 'axios';
const url: string = 'https://randomuser.me/api/';

export const getFullUser = async () => {
    const data = await axios.get(url);
    return data.data.results[0];
};
export const getUserName = async () => {
    const data = await axios.get(url);
    const { title, first, last } = data.data.results[0].name;
    return `${title}, ${first} ${last}`;
};

module.exports = {
    getFullUser,
    getUserName,
};

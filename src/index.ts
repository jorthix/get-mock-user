import axios from 'axios';
import { Name, Picture, User } from './interface/main';
const url: string = 'https://randomuser.me/api/';

export const getFullUser = async () => {
    const data = await axios.get(url);
    return data.data.results[0] as User;
};
export const getUserName = async () => {
    const data = await axios.get(url);
    const { title, first, last }: Name = data.data.results[0].name;
    return `${title}, ${first} ${last}`;
};
export const getUserPhoto = async (size: "medium" | "large" | "thumbnail" | "all") => {
    const data = await axios.get(url);
    const photos: Picture = data.data.results[0].picture;
    return size === "all" ? photos : photos[size];
};

module.exports = {
    getFullUser,
    getUserName,
    getUserPhoto,
};

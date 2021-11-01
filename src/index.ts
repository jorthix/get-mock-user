import axios from 'axios';
import { Location, Login, LoginShort, Name, Picture, User } from './interface/main';
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
export const getUserLocation = async () => {
    const data = await axios.get(url);
    const location: Location = data.data.results[0].location;
    return location;
};
export const getUserLogin = async (short?: boolean) => {
    const data = await axios.get(url);
    const login: Login = data.data.results[0].login;
    const loginShort: LoginShort = { username: login.username, password: login.password };
    return short ? loginShort : login;
};

module.exports = {
    getFullUser,
    getUserName,
    getUserPhoto,
    getUserLocation,
    getUserLogin
};

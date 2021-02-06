import axios from 'axios';

export const baseURL = 'https://gateway.marvel.com:443/v1/public';

export const API = axios.create({
    baseURL
});

export const ts = '1';
export const APIkey = '71415b16e45fddebfdc73a72c9e1c68c';
export const hash = '79bea8db18f8c3c0ec0b59bfc14ecc22';
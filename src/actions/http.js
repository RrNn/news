import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  timeout: 120000,
  headers: { 'X-Api-Key': 'c344c61ff0de47faa29d9e52d805e8d9' },
});

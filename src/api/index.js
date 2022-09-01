import axios from "axios";

const BASEURL = "https://gutendex.com/books";

export const fetchBooks = (page) => axios.get(`${BASEURL}/?page=${page}`);
export const fetchNextOrPrevBooks = (url) => axios.get(url);

export const fetchSingleBook = (id) => axios.get(`${BASEURL}/${id}`);

export const fetchSearchingResults = (q) =>
  axios.get(`${BASEURL}?search=${q}%20`);

// /books?search=dickens%20great

import axios from "axios";

const BASEURL = "https://gutendex.com/books";

export const fetchBooks = (page) => axios.get(`${BASEURL}/?page=${page}`);
export const fetchNextOrPrevBooks = (url) => axios.get(url);

export const fetchSingleBook = (id) => axios.get(`${BASEURL}/${id}`);

export const fetchSearchingResults = (q) =>
  axios.get(`${BASEURL}?search=${q}%20`);

// // /books?search=dickens%20great

// import axios from "axios";

// const BASEURL = "https://www.googleapis.com/books/v1";
// const API_KEY = "AIzaSyDL2qo6HGuPj8MT_JMfAUXyftwmKamQat8"; // Your API key

// export const fetchBooks = (page = 0, maxResults = 20) =>
//   axios.get(
//     `${BASEURL}/volumes?q=subject:fiction&key=${API_KEY}&startIndex=${
//       page * maxResults
//     }&maxResults=${maxResults}`
//   );

// export const fetchNextOrPrevBooks = (url) => axios.get(url);

// export const fetchSingleBook = (id) =>
//   axios.get(`${BASEURL}/volumes/${id}?key=${API_KEY}`);

// export const fetchSearchingResults = (query, page = 0, maxResults = 20) =>
//   axios.get(
//     `${BASEURL}/volumes?q=${encodeURIComponent(
//       query
//     )}&key=${API_KEY}&startIndex=${page * maxResults}&maxResults=${maxResults}`
//   );

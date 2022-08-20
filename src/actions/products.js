import * as api from "../api";

// Fetching all books according to the page.
export const getBooks = (page) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchBooks(page);
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

// handle next or previous pages of books.
export const getNextOrPrevBooks = (url) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchNextOrPrevBooks(url);
    // console.log(data);
    dispatch({ type: "FETCH_ALL", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

// get single book
export const getSingleBook = (id) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.fetchSingleBook(id);
    // console.log(data);
    dispatch({ type: "FETCH_ONE", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

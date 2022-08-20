const reducer = (
  state = { isLoading: true, books: [], cart: [], chosenBook: null },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "END_LOADING":
      return { ...state, isLoading: false };

    case "FETCH_ALL":
      return {
        ...state,
        books: action.payload.results,
        nextPage: action.payload.next,
        prevPage: action.payload.previous,
        count: action.payload.count,
      };

    case "FETCH_ONE":
      return {
        ...state,
        chosenBook: action.payload,
      };

    case "ADD_TO_CART":
      let checkDub = state.cart.some((item) => item.id === action.payload.id);
      checkDub &&
        alert("Sorry you can not add more than one book from same type.");
      return {
        ...state,
        cart: !checkDub ? [...state.cart, action.payload] : [...state.cart],
      };

    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;

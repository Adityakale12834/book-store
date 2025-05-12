const initialState = {
  isLoading: true,
  books: [],
  cart: [],
  chosenBook: null,
  favorites: [],
  nextPage: null,
  prevPage: null,
  count: 0,
};

// Helper function to convert USD to INR
const convertToINR = (usdAmount) => {
  const exchangeRate = 82.5; // Current USD to INR rate
  return parseFloat((usdAmount * exchangeRate).toFixed(2));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };

    case "END_LOADING":
      return { ...state, isLoading: false };

    case "FETCH_ALL":
      // Add default price if not available and convert to INR
      const booksWithPrices = action.payload.results.map((book) => ({
        ...book,
        priceUSD: book.priceUSD || (9.99 + Math.random() * 10).toFixed(2), // Random price between $9.99-$19.99
        priceINR: convertToINR(
          book.priceUSD || (9.99 + Math.random() * 10).toFixed(2)
        ),
      }));

      return {
        ...state,
        books: booksWithPrices,
        nextPage: action.payload.next,
        prevPage: action.payload.previous,
        count: action.payload.count,
      };

    case "FETCH_ONE":
      // Add prices to single book if not available
      const bookWithPrice = {
        ...action.payload,
        priceUSD:
          action.payload.priceUSD || (9.99 + Math.random() * 10).toFixed(2),
        priceINR: convertToINR(
          action.payload.priceUSD || (9.99 + Math.random() * 10).toFixed(2)
        ),
      };
      return {
        ...state,
        chosenBook: bookWithPrice,
      };

    // Update the ADD_TO_CART case to handle quantity properly
case "ADD_TO_CART":
  const existingItem = state.cart.find(item => item.id === action.payload.id);
  
  if (existingItem) {
    return {
      ...state,
      cart: state.cart.map(item =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPriceUSD: (parseFloat(item.priceUSD) * (item.quantity + 1)).toFixed(2),
              totalPriceINR: convertToINR(parseFloat(item.priceUSD) * (item.quantity + 1))
            }
          : item
      )
    };
  } else {
    const newItem = {
      ...action.payload,
      quantity: 1,
      totalPriceUSD: action.payload.priceUSD,
      totalPriceINR: action.payload.priceINR
    };
    return { ...state, cart: [...state.cart, newItem] };
  }

// Add a new case for updating quantity
case "UPDATE_QUANTITY":
  return {
    ...state,
    cart: state.cart.map(item =>
      item.id === action.payload.id
        ? {
            ...item,
            quantity: action.payload.quantity,
            totalPriceUSD: (parseFloat(item.priceUSD) * action.payload.quantity).toFixed(2),
            totalPriceINR: convertToINR(parseFloat(item.priceUSD) * action.payload.quantity)
          }
        : item
    )
  };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPriceUSD: (
                  parseFloat(item.priceUSD) *
                  (item.quantity + 1)
                ).toFixed(2),
                totalPriceINR: convertToINR(
                  parseFloat(item.priceUSD) * (item.quantity + 1)
                ),
              }
            : item
        ),
      };

    case "DECREMENT_ITEM":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
                totalPriceUSD: (
                  parseFloat(item.priceUSD) * Math.max(1, item.quantity - 1)
                ).toFixed(2),
                totalPriceINR: convertToINR(
                  parseFloat(item.priceUSD) * Math.max(1, item.quantity - 1)
                ),
              }
            : item
        ),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "ADD_TO_FAVORITE":
      const alreadyFavorite = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (alreadyFavorite) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;

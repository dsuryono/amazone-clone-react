export const initialState = {
  basket: [
    {
      id: Math.random(),
      title:
        'Ut magna ea Lorem mollit quis ullamco deserunt velit veniam.Occaecat deserunt aliquip Lorem adipisicing.',
      price: 30.56,
      rating: 4,
      image:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSrwt_DuH0yV0Xaf2xGRxgxQwRwC7xdnRpTumqkudmDjDnL7HEcVJohHfS2YrcAiiu-ObdHDKIXCvKUCeCcGE-7dxs-aZMFK1jeZ6oPb18&usqp=CAE',
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { user } = action;
      return {
        ...state,
        user,
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case 'REMOVE_FROM_BASKET':
      const basket = state.basket.filter((item) => item.id !== action.id);
      return { ...state, basket };

    default:
      return state;
  }
};

export default reducer;

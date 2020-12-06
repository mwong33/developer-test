import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        wishList: [...state.wishList, action.payload]
      };
    case DELETE_ITEM:
      return {
        wishList: state.wishList.filter(item => item !== action.payload)
      };
    default:
      return {
        wishList: ["Item 1", "Item 2", "Item 3", "Item 4"]
      };
  }
};

export default reducer;
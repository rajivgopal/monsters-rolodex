import actionTypes from "./actionTypes";

const initialState = {
  monsters: [],
  searchField: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        monsters: [...action.data]
      };
    case actionTypes.SEARCH_DATA:
      return {
        ...state,
        searchField: action.searchField
      };
    default:
      return state;
  }
};

export default reducer;

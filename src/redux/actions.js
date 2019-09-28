import actionTypes from "./actionTypes";

export const fetchData = () => ({
  type: actionTypes.FETCH_DATA
});

export const fetchDataSuccess = data => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  data
});

export const fetchDataFailed = err => ({
  type: actionTypes.FETCH_DATA_FAIL,
  err
});

export const searchData = searchField => ({
  type: actionTypes.SEARCH_DATA,
  searchField
});

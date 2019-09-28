import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};

const d = (dispatch, ownProps) => {
  return {
    handleChange: e => dispatch(actions.searchData(e.target.value))
  };
};
export default connect(
  null,
  d
)(SearchBox);

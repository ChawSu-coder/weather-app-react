import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <div className="row heading">
        <div className="col-8">
          <input
            type="search"
            name="search-city"
            className="form-control"
            id="city-input"
            placeholder="Enter a city ..."
          />
        </div>
        <div className="col-2">
          <button type="submit" value="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="col-2">
          <button type="button">
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

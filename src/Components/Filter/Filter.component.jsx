import React from "react";
import FilterDropdown from "./filter-dropdown/filter-dropdown.component";
import "./Filter.style.css";
const Filter = ({ products }) => {
  return (
    <div className="filter mt-5 pl-5">
      <div className="card p-4 filter w-10">
        Filter
        <hr style={{ width: "7em" }} />
        <FilterDropdown products={products} />
      </div>
    </div>
  );
};

export default Filter;

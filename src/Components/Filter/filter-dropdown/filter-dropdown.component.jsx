import React from "react";
import { useState } from "react";

const FilterDropdown = ({ products }) => {
  const [productCity, setProductCity] = useState([]);
  const [productState, setProductState] = useState([]);

  const selectState = (e) => {
    const product_name = e.target.value;
    const productstate = products.filter(
      (item) => item.product_name === product_name
    );
    setProductState(productstate);
  };
  const selectCity = (e) => {
    const productcity = products.filter(
      (item) => item.address.state === e.target.value
    );
    setProductCity(productcity);
  };

  const backgroundDetail = {
    background: "rgb(35, 35, 35)",
    color: "rgb(255, 255, 255, 0.5)",
  };

  return (
    <div className="selectProduct">
      <select
        name="Product"
        onChange={selectState}
        style={backgroundDetail}
        className="form-select form-select-sm"
      >
        <option value="Product">Product</option>
        {products.map((product) => (
          <option value={product.product_name}>{product.product_name}</option>
        ))}
      </select>
      <br />
      <select
        name="State"
        onChange={selectCity}
        className="form-select form-select-sm"
        style={backgroundDetail}
      >
        <option value="State">State</option>
        {productState.map((product) => (
          <option value={product.address.state}>{product.address.state}</option>
        ))}
      </select>
      <br />
      <select
        name="State"
        className="form-select form-select-sm"
        style={backgroundDetail}
      >
        <option value="State">City</option>
        {productCity.map((product) => (
          <option value={product.address.city}>{product.address.city}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;

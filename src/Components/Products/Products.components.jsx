import React from "react";
import ProductSection from "../Product-section/Product-section.component";
import { Container } from "react-bootstrap";
import "./Products.style.css";
const Products = ({ products }) => {
  const result = products.reduce((acc, curr) => {
    const brand_name = curr.brand_name;
    if (acc[brand_name] == null) acc[brand_name] = [];
    acc[brand_name].push(curr);
    return acc;
  }, {});

  let finalCategoryData = Object.entries(result);
  console.log(finalCategoryData);

  return (
    <Container>
      {finalCategoryData.map((data, id) => (
        <ProductSection name={data[0]} data={data[1]} key={id} />
      ))}
    </Container>
  );
};

export default Products;

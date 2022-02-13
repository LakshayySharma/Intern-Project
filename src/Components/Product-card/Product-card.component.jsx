import React from "react";
import "./Product-card.style.css";
import convertDate from "../convertDate";
const ProductCard = ({ data }) => {
  return (
    <div className="col" style={{ fontSize: "0.8rem", lineHeight: "1.2rem" }}>
      <div className="card" style={{ background: "rgb(35,35,35)" }}>
        <div className="card-body">
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12" style={{ height: "5rem" }}>
              <img
                src={data.image}
                alt={data.product_name}
                width="60rem"
                height="100%"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-text">{data.product_name}</div>
              <p className="card-text">{data.brand_name}</p>
              <p className="card-text">
                <b>${data.price}</b>
              </p>
            </div>
          </div>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">{data.address.state}</div>
            <div className="col-lg-6 col-sm-12">{convertDate(data.date)}</div>
          </div>
          <div>
            {" "}
            <p className="card-text">{data.discription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

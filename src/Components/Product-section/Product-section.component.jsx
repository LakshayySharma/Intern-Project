import React from "react";
import ProductCard from "../Product-card/Product-card.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Card, Row, Col } from "react-bootstrap";
const ProductSection = ({ name, data }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="pt-3">
      <h4>{name}</h4>
      <hr />
      <div>
        <div
          className="product-list"
          style={{
            padding: "10px",
            background: "rgb(19,19,19)",
            borderRadius: "10px",
          }}
        >
          {/* {(() => {
          for (let i = 0; i < data.length; i = i + 4) {}
        })()} */}
          <Slider {...settings}>
            {data.map((data, id) => {
              return <ProductCard data={data} key={id} />;
              // return (
              //   <Col>
              //     <Card className="bg-dark">
              //       <Card.Body>
              //         <span>{data.brand_name}</span>
              //       </Card.Body>
              //     </Card>
              //   </Col>
              // );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

import { Card, Col, Text } from "@nextui-org/react";
import React from "react";

const NewArrival = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-4/5 lg:w-full h-full">
        <Card css={{ h: "700px", w:"auto" }}>
          <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
              <Text
                size={12}
                weight="bold"
                transform="uppercase"
                color="#ffffffAA"
              >
                Made by Designer
              </Text>
              <Text h4 color="white">
                From the runway to your wardrobe
              </Text>
            </Col>
          </Card.Header>
          <Card.Image
            src="https://loremflickr.com/1000/800/fashion,dress"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Card image background"
          />
        </Card>
        </div>
        <div className="w-4/5">
          <h1 className="text-5xl font-bold">Item Name just arrived!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* section on price of product */}
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="text-2xl font-bold">$ 50.00</p>
              <p className="text-gray-500">In stock</p>
            </div>
            </div>
          <button className="btn btn-primary bg-black rounded-none hover:bg-white hover:text-black">Buy now!</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

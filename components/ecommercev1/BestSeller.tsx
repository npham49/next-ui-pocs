import { Card, Col, Grid, Row, Text } from "@nextui-org/react";

export default function App() {
  const list = [
    {
      title: "Orange",
      img: "https://loremflickr.com/1000/800/fashion,runway",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://loremflickr.com/1000/800/fashion,runway",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "https://loremflickr.com/1000/800/fashion,runway",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://loremflickr.com/1000/800/fashion,runway",
      price: "$5.30",
    },
  ];

  return (
    <div className="2xl:container 2xl:mx-auto min-h-[700px] w-full  flex flex-col mt-12 py-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 pt-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center mb-6">
            Top Selling
          </h1>
        </div>
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={6} sm={3} key={index}>
              <Card css={{h:"400px",w:"100%"}} isPressable>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.img}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt={item.title}
                  />
                </Card.Body>
                <Card.Footer css={{ justifyItems: "flex-start" }}>
                  <Col>
                    <Text b>{item.title}</Text>
                    <Text
                      css={{
                        color: "$accents7",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {item.price}
                    </Text>
                  </Col>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
        
      </div>
      <button className="mb-10 lg:mb-0 btn px-10 bg-gray-900 text-white rounded-none mx-auto hover:bg-white hover:text-black">All Items</button>
    </div>
  );
}

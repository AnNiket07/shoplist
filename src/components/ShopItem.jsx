import React from "react";
import { Card } from "react-bootstrap";

const ShopItem = (props) => {
  const { item } = props;
  return (
    <Card className="shopCard">
      <Card.Body>
        <Card.Title>{item.item}</Card.Title>
        <Card.Text>
          <p>Area: {item.area}</p>
          <p>Category: {item.category}</p>
          <p>{item.openstatus}</p>
         </Card.Text>
        {/* <Card.Text></Card.Text> */}
      </Card.Body>
    </Card>
    // <li key={item.id}>{item.item}{item.area}{item.category}</li>
  );
};

export default ShopItem;

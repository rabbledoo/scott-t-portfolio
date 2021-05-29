import React from "react";
import { Projects } from "../arrays/Projects";
import { Card, Button } from "react-bootstrap";

function Portfolio() {
  return (
    <>
    <div>
      {Projects.map((items) => {
        return (
          <Card style={{ width: "18rem" , display: "flex",flexDirection: "column"}}>
            <Card.Img variant="top" src={items.image} />
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>{items.text}</Card.Text>
              <Button onClick={items.click} variant="success">
                See Live
              </Button>
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </>
  );
}

export default Portfolio;
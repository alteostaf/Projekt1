import React from "react";
import { Container, Form, Button, Card, Col, Row } from "react-bootstrap";
import "./home.css";
import card1 from "./baseImage/card1.jpg";
import card2 from "./baseImage/card2.jpg";
import card4 from "./baseImage/card4.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="test2">
        <Container className="page1">
          <Form className="texts">
            <p className="p1"> FIND THE PERFECT PLACE TO GO </p>
            <p className="p2">
              {" "}
              Recive personalized recommendations for activites,hotels and more{" "}
            </p>
          </Form>
          <Form className="search">
            <Form.Control type="text" placeholder="Search" className="me-2" />
            <Button
              className="btn btn-outline-success-transparent"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Container>
      </div>
      <div className="plan-your-trip">
        <Container>
          <Form className="page2">
            <h6>3 STEPS TO THE PERFECT TRIP</h6>
            <h1>FIND TRAVEL PERFECTION, WITH THE WISDOM OF EXPERSTS</h1>
            <p>
              Naturally head of the class when it comes to luxury travel
              planning, because we do more homework than anyone else with a few
              little sweetners thrown in! Travel to the four corners of the
              world ,without going around in circles.
            </p>
          </Form>
          <Form className="card-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title>Tell us what you want to do</Card.Title>
                <Card.Text>
                  <p>
                    Fill out a 2 minute questionnaire about how you like to
                    travel
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>Share Your Travel Preference & Dates</Card.Title>
                <Card.Text>
                  It all happens online.We recommend everything to your vision
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={card4} />
              <Card.Body>
                <Card.Title>We'll give you tailored recommendations</Card.Title>
                <Card.Text>
                  Once you're happy with your final plan,We handle everything
                  for you
                </Card.Text>
              </Card.Body>
            </Card>
          </Form>
        </Container>
      </div>

      <div className="page3">
        <Container>
          <Form className="page-3">
            <h6>TRIP INSPIRATION</h6>
            <p>FIND THE PERFECT PLACE TO GO ACTIVITIES ,HOTELS,AND MORE</p>
          </Form>

          <Form className="buttons-page3">
            <Button variant="outline-info">ALL</Button>{" "}
            <Button variant="outline-info">ADVENTURE</Button>{" "}
            <Button variant="outline-info">HIGH ADRENALINE</Button>{" "}
            <Button variant="outline-info">WATER SPORTS</Button>{" "}
            <Button variant="outline-info">HISTORY & CULTURE</Button>{" "}
          </Form>

          <Form className="cards-container1">
            <Card
              className="bg-dark text-body-secondary px-0 position-relative border-0 rounded-0"
              style={{ height: "25vh" }}
            >
              <Card.Img
                src={card1}
                alt="Card image"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="position-absolute top-0  start-0 ps-0 pt-2 mb-4 fs-5">
                  Le Catering
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-body-secondary px-0 position-relative border-0 rounded-0"
              style={{ height: "25vh" }}
            >
              <Card.Img
                src={card1}
                alt="Card image"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="position-absolute top-0  start-0 ps-0 pt-2 mb-4 fs-5">
                  Le Catering
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-body-secondary px-0 position-relative border-0 rounded-0"
              style={{ height: "25vh" }}
            >
              <Card.Img
                src={card1}
                alt="Card image"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="position-absolute top-0  start-0 ps-0 pt-2 mb-4 fs-5">
                  Le Catering
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-body-secondary px-0 position-relative border-0 rounded-0"
              style={{ height: "25vh" }}
            >
              <Card.Img
                src={card1}
                alt="Card image"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="position-absolute top-0  start-0 ps-0 pt-2 mb-4 fs-5">
                  Le Catering
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-dark text-body-secondary px-0 position-relative border-0 rounded-0"
              style={{ height: "25vh" }}
            >
              <Card.Img
                src={card1}
                alt="Card image"
                style={{ height: "100vh", objectFit: "cover" }}
              />
              <Card.ImgOverlay>
                <Card.Title className="position-absolute top-0  start-0 ps-0 pt-2 mb-4 fs-5">
                  Le Catering
                </Card.Title>
              </Card.ImgOverlay>
            </Card>

            
          </Form>
        </Container>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat iure, sint recusandae hic fugit quae minus eveniet nemo corporis exercitationem aut laboriosam totam ipsam dignissimos architecto nam possimus. Culpa, voluptas.
        </p>
      </div>
    </div>
  );
};

export default Home;

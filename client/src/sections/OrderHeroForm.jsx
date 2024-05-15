import { useState } from "react";
import Select from "react-select";
import "../assets/styles/order-hero.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ValueContainer from "../components/CustomSelectComponents.js";

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];


  
export default function OrderHeroForm() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="section-reservation">
      <Container>
        <Row>
          <Col md={12} className="reservation pt-5 px-5">
            <div className="block-17">
              <Form className="d-block d-lg-flex">
                <div className="fields d-block d-lg-flex">
                  <Col xs={12} md={2} className="textfield-name one-third">
                    <Form.Group
                      className="mb-lg-0 mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="one-third textfield-phone">
                    <Form.Group
                      className="mb-lg-0 mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="one-third">
                    <Form.Group
                      className="mb-lg-0 mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="one-third">
                    <Form.Group
                      className="mb-lg-0 mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        size="lg"
                        type="text"
                        id="name"
                        name="name"
                        value=""
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={2} className="one-third select-wrap">
                    <Form.Label>Email address</Form.Label>
                    <Select
                      name="food"
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={options}
                      isMulti
                      components={{ ValueContainer }}
                      placeholder="Select food"
                      // closeMenuOnSelect={false}
                      hideSelectedOptions={false}
                    />
                  </Col>
                </div>
                <input
                  type="submit"
                  className="search-submit btn btn-primary"
                  value="Order Now"
                />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

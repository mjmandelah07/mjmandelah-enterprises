import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import "../assets/styles/components/order-hero.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function OrderHeroForm() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="section-reservation" id="order">
      <Container>
        <Row>
          <Col md={12} className="reservation pt-5 px-5">
            <div className="block-17">
              <Form className="d-block d-lg-flex">
                <div className="fields d-block d-lg-flex">
                  <Col xs={12} md={2} className="textfield-name one-third">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      className="form-control"
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#404044",
                            borderWidth: "1px",
                          },
                      }}
                    />
                  </Col>
                  <Col xs={12} md={2} className="one-third textfield-phone">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      className="form-control"
                      sx={{
                        width: "100%",
                        borderRadius: 0,
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#404044",
                            borderWidth: "1px",
                          },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "0",
                        },
                      }}
                    />
                  </Col>
                  <Col xs={12} md={2} className="one-third">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      className="form-control"
                      sx={{
                        width: "100%",
                        borderRadius: 0,
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#404044",
                            borderWidth: "1px",
                          },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "0",
                        },
                      }}
                    />
                  </Col>
                  <Col xs={12} md={2} className="one-third">
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      className="form-control"
                      sx={{
                        width: "100%",
                        borderRadius: 0,
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#404044",
                            borderWidth: "1px",
                          },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "0",
                        },
                      }}
                    />
                  </Col>
                  <Col xs={12} md={2} className="one-third select-wrap">
                    <FormControl
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#404044",
                            borderWidth: "1px",
                          },
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "0",
                        },
                      }}
                    >
                      <InputLabel id="demo-multiple-checkbox-label">
                        Select Food
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Select Food" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        sx={{
                          width: "100%",
                        }}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox
                              checked={personName.indexOf(name) > -1}
                              sx={{
                                "&.Mui-checked, &.MuiCheckbox-indeterminate": {
                                  color: "#ffb606",
                                },
                              }}
                            />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    ;
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

import { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
} from "@mui/material";
import orderBg from "../assets/images/dishes/dish-3.jpg.webp"
import "../assets/styles/components/orderform.css";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: [],
    person: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submit logic here
    console.log("Form submitted", formData);
  };

  const timeOptions = ["Morning", "Afternoon", "Evening", "Night"];
  const personOptions = ["1", "2", "3", "4+"];

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row no-gutters justify-content-center mb-5 pb-5">
          <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
            <h2>Make Your Order</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div
            className="col-md-4  img ftco-animated"
            style={{ backgroundImage: `url(${orderBg})` }}
          ></div>
          <div className="col-md-8  p-5 bg-lightftco-animated">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <TextField
                      fullWidth
                      label="Name"
                      variant="outlined"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <TextField
                      fullWidth
                      label="Phone"
                      variant="outlined"
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <TextField
                      fullWidth
                      label="Date"
                      variant="outlined"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  {/* MUI Multi-select for Time */}
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="time-select-label">Time</InputLabel>
                    <Select
                      labelId="time-select-label"
                      id="time-select"
                      multiple
                      value={formData.time}
                      onChange={handleChange}
                      name="time"
                      label="Time"
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {timeOptions.map((time) => (
                        <MenuItem key={time} value={time}>
                          <Checkbox
                            checked={formData.time.indexOf(time) > -1}
                          />
                          <ListItemText primary={time} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 mb-3">
                  {/* MUI Multi-select for Person */}
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="person-select-label">Person</InputLabel>
                    <Select
                      labelId="person-select-label"
                      id="person-select"
                      multiple
                      value={formData.person}
                      onChange={handleChange}
                      name="person"
                      label="Person"
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {personOptions.map((person) => (
                        <MenuItem key={person} value={person}>
                          <Checkbox
                            checked={formData.person.indexOf(person) > -1}
                          />
                          <ListItemText primary={person} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Order Now"
                      className="btn btn-primary py-3 px-5"
                    />
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

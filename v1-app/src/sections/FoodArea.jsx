import React from "react";
import { Box, Container, Grid, Tabs, Tab, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import FoodItem from "../components/FoodItem";
import { foodData } from "../datas/foodData";
import KebabDiningIcon from "@mui/icons-material/KebabDining";
import EggIcon from "@mui/icons-material/Egg";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import theme from "../utils/theme";
import "../assets/styles/sections/food_area.css";

const FoodArea = () => {
  const [value, setValue] = React.useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    { label: "Main", icon: <KebabDiningIcon />, value: "0" },
    { label: "Combos", icon: <EggIcon />, value: "1" },
    { label: "Sides", icon: <LocalDiningIcon />, value: "2" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <section className="section-padding food-area">
        <Container className="dish-menu">
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginBottom: "3rem", paddingBottom: "3rem" }}
          >
            <div
              className="wow fadeInUp animate__fadeInUp col-md-7 text-center heading-section"
              data-aos="fade-up"
            >
              <Typography variant="subtitle1" className="subheading">
                Our Menu
              </Typography>
              <Typography variant="h2">Discover Our Exclusive Menu</Typography>
            </div>
          </Box>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="food menu tabs"
            centered
            sx={{
              "& .MuiTabs-flexContainer": {
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              },
              "& .MuiTab-root": {
                backgroundColor: "#fafafa",
                boxShadow: "0px 4px 18px -12px rgba(0, 0, 0, 0.75)",
                marginLeft: "4px",
                marginRight: "4px",
                color: "#a5a5ab",
                fontWeight: 700,
                [theme.breakpoints.down("md")]: {
                 width: "100%",
                  display: "block",
                  textAlign: "left",
                 textTransform: "capitalize"
                },
                "&.Mui-selected": {
                  backgroundColor: "#ffb606",
                  color: "#404044",
                  [theme.breakpoints.up("md")]: {
                    marginTop: "-5px",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
            data-aos="fade-up"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                icon={tab.icon}
                iconPosition="start"
                value={tab.value}
              />
            ))}
          </Tabs>

          <Grid container spacing={3} paddingY={7} className="tab-content">
            {foodData[tabs[parseInt(value)].label.toLowerCase()].map(
              (item, index) => (
                <Grid item xs={12} sm={6} md={6} key={index} data-aos="fade-up">
                  <FoodItem
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                </Grid>
              )
            )}
          </Grid>
          <div
            className="col-sm-12 pt-4 text-center ftco-animate fadeInUp ftco-animated mb-5"
            data-aos="fade-up"
          >
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost
            </p>
            <span>
              <a href="#order" className="btn btn-primary btn-outline-primary p-3">
                Order Now
              </a>
            </span>
          </div>
        </Container>
      </section>
    </ThemeProvider>
  );
};

export default FoodArea;

import { Container, Grid } from "@mui/material";
import DishItem from "../components/DishItem";
import { foodData } from "../datas/foodData";
import "../assets/styles/sections/SpecialDish.css";

const SpecialDish = () => {
  return (
    <section className="ftco-section bg-light">
      <Container className="special-dish">
        <Grid container className="d-flex no-gutters">
          {foodData.specials.map((dish, index) => (
            <Grid item xs={12} lg={6} key={index} data-aos="fade-up">
              <DishItem
                image={dish.image}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default SpecialDish;

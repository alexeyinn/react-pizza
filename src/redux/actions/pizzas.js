import axios from "axios";

export const fetchPizzas = () => (dispatch) => {
  axios.get("https://r4eei.csb.app/db.json").then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items
});

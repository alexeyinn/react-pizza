const initialState = {
  items: [],
  isLoaded: false
};
// TODO Выяснить, почему SET_PIZZAS и SET_LOADED в редаксе при первом рендере
// TODO Выяснить, почему в редакс передаются данные о пиццах, прямиком из бэкенда, без переименования в "человеческий вид"
const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload
      };

    default:
      return state;
  }
};

export default pizzas;

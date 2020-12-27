import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые"
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "ABC" }
];

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchPizzas());
    }
  }); //Если возникунут проблемы с получением данных из БД, добавить в конце ,[]

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  });
  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

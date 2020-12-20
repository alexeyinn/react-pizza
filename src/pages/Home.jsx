import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

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
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const dispatch = useDispatch();
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

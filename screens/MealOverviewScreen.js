import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealDetails/MealsList";

export default function MealOverviewScreen({ route, navigation }) {
  //we get this prop because this component is a screen, we can use useRout() instead to get this object
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  //*Use useLayoutEffect instead useEffect of to avoid loading the title after the component loads

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, []);

  return <MealsList items={displayedMeals} />;
}

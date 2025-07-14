// import { useContext } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";
// import { FavoritesContext } from "../context/Favorites-context";
import { MEALS } from "../../data/dummy-data";
import MealsList from "../../components/MealDetails/MealsList";

export default function FavoritesScreen() {
  // const favoritesCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoritesMeals = MEALS.filter((meal) =>
    // favoritesCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text> You dont't have any favorites yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    alignItems: "center",
    justifyContent: "center",
  },
});

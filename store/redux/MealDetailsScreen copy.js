import List from "../../components/List";
import Subtitle from "../../components/Subtitle";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../../components/IconButton";
// import { FavoritesContext } from "../context/Favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export default function MealDetailsScreen({ route, navigation }) {
  //route comes from useNavigation in MealItem
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoritesMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function favoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoritesMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritesMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={"black"}
            onPress={favoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, favoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{selectedMeal.duration}m</Text>
          <Text style={styles.descriptionText}>{selectedMeal.complexity}</Text>
          <Text style={styles.descriptionText}>
            {selectedMeal.affordability}
          </Text>
        </View>
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  descriptionText: {
    marginHorizontal: 4,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 8,
  },
  listContainer: {
    maxWidth: "90%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

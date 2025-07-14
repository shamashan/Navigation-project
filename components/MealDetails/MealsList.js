import { StyleSheet, FlatList, View } from "react-native";
import MealItem from "./MealItem";

export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    //! Used useNavigation instead from MealItem itself
    // function onPressHandler() {
    //   navigation.navigate("MealDetailsScreen", { mealId: item.id });
    // }
    const mealProps = {
      id: item.id,
      title: item.title,
      imageURL: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealProps} />;
  }

  return (
    <View style={StyleSheet.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

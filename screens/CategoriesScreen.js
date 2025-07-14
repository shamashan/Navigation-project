import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItemTile from "../components/CategoryItemTile";

export default function CategoriesScreen({ navigation }) {
  //this navigation comes from App (Navigator)
  function renderCategoryTile(itemData) {
    //this one way. the other way to use useNavigation from the CategoryItemTile itself
    function onPressHandler() {
      navigation.navigate("MealOverview", { categoryId: itemData.item.id });
    }
    return (
      <CategoryItemTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      //renderItem returns object internally
      renderItem={renderCategoryTile}
      numColumns={2}
    />
  );
}

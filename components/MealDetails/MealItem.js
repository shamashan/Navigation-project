import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MealItem({
  id,
  title,
  imageURL,
  affordability,
  complexity,
  duration,
}) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("MealDetailsScreen", { mealId: id });
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPressHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageURL }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{duration}m</Text>
            <Text style={styles.descriptionText}>
              {complexity.toUpperCase()}
            </Text>
            <Text style={styles.descriptionText}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 18,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  }, // this one for getting the shadow and the radius on IOS
  innerContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    margin: 8,
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
  buttonPressed: {
    opacity: 0.5,
  },
});

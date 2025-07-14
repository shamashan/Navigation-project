import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#252424ff",
  },
  subtitleContainer: {
    borderBottomColor: "#252424ff",
    borderBottomWidth: 2,
    padding: 8,
    marginHorizontal: 18,
    marginVertical: 8,
  },
});

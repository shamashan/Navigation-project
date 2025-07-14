import { View, Text, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataItem) => (
    <View style={styles.listItem} key={dataItem}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    textAlign: "left",
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginHorizontal: 15,
    marginVertical: 4,
    backgroundColor: "#272626",
  },
  itemText: {
    color: "#fff",
    textAlign: "center",
  },
});

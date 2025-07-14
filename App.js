import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
//////////////////////////New
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import FavoritesContextProvider from "./store/context/Favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{
          title: "All Categories",
          sceneContainerStyle: { backgroundColor: "#696a6aff" },
          drawerContentStyle: { backgroundColor: "#d5d5d5ff" },
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          // drawerInactiveTintColor
        }}
        name="Categories"
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            ///first screen will be the default if there is no initial rout name
            // initialRouteName="MealsCategory"
            //these will be applied to all screens but the options applied to the screen's options wins
            screenOptions={{
              contentStyle: { backgroundColor: "#696a6aff" },
              headerStyle: { backgroundColor: "#eaeaeaff" },
              headerTintColor: "#2a2a2a",
            }}
            //nested Navigator
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealOverview"
              component={MealOverviewScreen}
              // options={{
              //   title: "All Meals",
              //   contentStyle: { backgroundColor: "#eadf92" },
              //   headerStyle: { backgroundColor: "#f0cf4b" },
              // }}
              //* another approach to pass options dynamically. The first one comes from the component itself
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen
              name="MealDetailsScreen"
              component={MealDetailsScreen}
              options={{
                title: "About the Meal",
                contentStyle: { backgroundColor: "white" },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

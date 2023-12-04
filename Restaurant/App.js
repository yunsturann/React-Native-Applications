import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./screens/SearchScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Restoran Uygulaması" }}>
        <Stack.Screen name="Home" component={SearchScreen} />
        <Stack.Screen name="RestaurantShow" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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

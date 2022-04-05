import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "native-base";
import Todo from "./src/screens/todo";
import Calculator from "./src/screens/calculator";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTab() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Calculator"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["300"] },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline";
          } else if (route.name === "Todo") {
            iconName = focused
              ? "ios-checkbox"
              : "ios-checkbox-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary["800"],
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Todo" component={Todo} />
    </Tab.Navigator>
  );
}

export default function Container() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

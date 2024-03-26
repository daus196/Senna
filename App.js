import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaInicio from "./componentes/TelaInicio";
import TelaSobre from "./componentes/TelaSobre";
import TelaVitorias from "./componentes/TelaVitorias";
import { Entypo, FontAwesome } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eecb01",
          },
          headerTitleStyle: {
            color: "#000",
            fontWeight: "bold",
          },
          tabBarActiveTintColor: "#ba171a",
          tabBarInactiveTintColor: "#000",
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#eecb01",
        }}
      >
        <Tabs.Screen
          name="Inicio"
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="question-circle-o" size={20} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Vitorias"
          component={TelaVitorias}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="trophy" size={20} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

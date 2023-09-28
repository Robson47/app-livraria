import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import FeedBooks from './screens/FeedBook';
import DetailBook from './screens/DetailBook';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
          name="Login"
          component={Login}
          options={{ title: "LOGIN" }}
          style={styles.container}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#161c3d',
      padding: 16
  }
});
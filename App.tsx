import { useEffect, useState } from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import SignIn from "./screens/login/loginScreen";
import ContextWrapper from "./context/ContextWrapper";
import SignUp from "./screens/signUp/signUp";
import MainScreen from "./screens/main/mainScreen";

const Stack = createStackNavigator();
const options: StackNavigationOptions = {
  headerShown: false,
};
export default function App() {
  const [currentUser, setCurrentUser]: any = useState();
  const [loading, setLoading]: any = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setCurrentUser(user);
      }
    });
    return () => unsubscribe();
  }, []);
  console.log(currentUser);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ContextWrapper>
      <NavigationContainer>
        {!currentUser ? (
          <Stack.Navigator screenOptions={options}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        ) : (
          <MainScreen />
        )}
      </NavigationContainer>
    </ContextWrapper>
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

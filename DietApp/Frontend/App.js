import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RouteNavScreen from "./src/screens/route";
import lighttheme from "./assets/theme";
import { useEffect, useLayoutEffect, useState } from "react";
import WeightChange from "./src/screens/diet/weightChange";
import AgeChange from "./src/screens/diet/ageChange";
import HeightChange from "./src/screens/diet/htChange";
import LoaderScreen from "./src/screens/diet/loader";
import LoginScreen from "./src/screens/login";
import SignupScreen from "./src/screens/signup";
import ProfileEdit from "./src/screens/profile/profileedit";
import { getAuthData } from "./src/helpers/authHelper";

const Stack = createNativeStackNavigator();

export default function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter/static/Inter-Black.ttf"),
    Bebas: require("./assets/fonts/Bebas/BebasNeue.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter/static/Inter-SemiBold.ttf"),
  });

  useLayoutEffect(() => {
    getAuthData().then(async (r) => {
      if (r) {
        setAuth(true);
        setLoading(false);
      } else {
        setAuth(false);
        setLoading(false);
      }
    });
  }, []);

  if (fontsLoaded && !loading) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider theme={lighttheme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={`${auth ? "land" : "login"}`}>
              <Stack.Screen
                name="login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="land"
                component={RouteNavScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="weightChange"
                component={WeightChange}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ageChange"
                component={AgeChange}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profileedit"
                component={ProfileEdit}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="heightChange"
                component={HeightChange}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="loader"
                component={LoaderScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    );
  }
}

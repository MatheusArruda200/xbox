import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="screen2"
        options={{
          title: "Consoles",
          headerTitleAlign: "center",
          animation: "ios_from_left",
        }}
      />
      <Stack.Screen
        name="screen3"
        options={{
          title: "Jogos",
          headerTitleAlign: "center",
          animation: "ios_from_left",
        }}
      />
      <Stack.Screen
        name="screen4"
        options={{
          title: "Xcloud",
          headerTitleAlign: "center",
          animation: "ios_from_left",
        }}
      />
    </Stack>
  );
}

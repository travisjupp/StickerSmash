// ROOT LAYOUT FILE
import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack>
      {/* ROUTES */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

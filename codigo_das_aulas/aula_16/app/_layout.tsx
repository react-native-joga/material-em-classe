import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "Agenda", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="create-contact"
          options={{ title: "Adicionar contato", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="update-contact"
          options={{ title: "Atualizar contato", headerTitleAlign: "center" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}

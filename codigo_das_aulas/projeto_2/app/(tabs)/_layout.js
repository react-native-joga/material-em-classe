import { Tabs } from "expo-router"
import { FontAwesome } from "@expo/vector-icons"

export default function TabLayout() {
  const icon = (nome, { color }) => {
    return <FontAwesome name={nome} size={28} color={color} />
  }
  return (
    <Tabs screenOptions={{ headerTitleAlign: "center" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => icon("home", { color }),
        }}
      />

      <Tabs.Screen
        name="lesson"
        options={{
          title: "Aulas",
          tabBarIcon: ({ color }) => icon("book", { color }),
        }}
      />

      <Tabs.Screen
        name="lesson/[id]"
        options={{
          href: null,
          title: "Definição",
          headerBackButtonMenuEnabled: true,
          headerBackButtonDisplayMode: "generic",
        }}
      />
      <Tabs.Screen name="+not-found" options={{ href: null }} com />
    </Tabs>
  )
}

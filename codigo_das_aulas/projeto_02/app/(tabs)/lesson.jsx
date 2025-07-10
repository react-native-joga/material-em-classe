import { useState, useMemo } from "react"
import { FlatList, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import lessonData from "../../utils/lessons-data.json"
import Card from "../../components/card"
import Search from "../../components/search"
import ListEmpty from "../../components/list-empty"

export default function Lesson() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = useMemo(() => {
    const lower = searchTerm.toLowerCase()
    return lessonData.filter((item) =>
      (item.title ?? "").toLowerCase().includes(lower)
    )
  }, [searchTerm])

  return (
    <SafeAreaView style={styles.container}>
      <Search value={searchTerm} changeText={setSearchTerm} />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            month={item.month}
            day={item.day}
            title={item.title}
          />
        )}
        ListEmptyComponent={<ListEmpty />}
        ListEmptyComponentStyle={{ flexGrow: 1 }}
        ListFooterComponent={
          <Card id={"11"} month={"error"} day={"error"} title={"error"} />
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
})

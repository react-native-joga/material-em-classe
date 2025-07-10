import { Redirect, useLocalSearchParams } from "expo-router"
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import lessonData from "../../../utils/lessons-data.json"

export default function ExpandLesson() {
  const { id } = useLocalSearchParams()
  const numericId = Number(id)
  const lesson = lessonData.find((item) => item.id === numericId)

  if (!lesson) {
    return <Redirect href={"/+not-found"} />
  }

  return (
    <SafeAreaView style={{ padding: 15}}>
      <Text style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>
        {lesson.title}
      </Text>
      <Text>{lesson.content}</Text>
    </SafeAreaView>
  )
}

import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonGroup: {
    width: "100%",
    gap: 10,
    marginTop: 10,
  },
  dataContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "100%",
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dataBody: {
    marginTop: 10,
    fontSize: 16,
  },
})

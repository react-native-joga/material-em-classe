import { View, Text, StyleSheet } from 'react-native';

export default function DataDisplay({ data }) {
  return (
    <View style={displayStyles.container}>
      <Text style={displayStyles.title}>{data.title}</Text>
      <Text numberOfLines={5}>{`RESUMO: ${data.summaries}`}</Text>
      <Text style={{ marginTop: 10 }}>{`IDIOMA: ${data.languages}`}</Text>
    </View>
  );
}

const displayStyles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});

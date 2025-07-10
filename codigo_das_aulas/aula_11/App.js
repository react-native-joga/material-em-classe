import { useState, useEffect, Suspense, lazy } from 'react';
import { View, ActivityIndicator, StyleSheet, Button } from 'react-native';

const DataDisplay = lazy(() => import('./DataDisplay'));

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [next, setNext] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    // API usado em sala https://jsonplaceholder.typicode.com/posts
    fetch(`https://gutendex.com/books/${next}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setDataLoaded(true);
      });
  }, [next]);

  return (
    <View style={styles.container}>
      <Suspense fallback={<ActivityIndicator size="small" />}>
        {!dataLoaded ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <DataDisplay data={data} />
        )}

        <Button onPress={() => setNext((item)=> item + 1)} title={'Próximo'} />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

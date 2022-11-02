import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-sdkx';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [result01, setResult01] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 11).then((r) => {
      setResult(r);
    });

    multiply(3, 1000).then((r) => {
      setResult01(r);
    });

    for (let i = 0; i < 100000; i++) {
      multiply(3, i).then((res) => {
        console.log(res);
      });
    }

    // for (let i = 0; i < 10; i++) {
    //   setResult(result * i)
    // }

    // for (let i = 0; i < 10; i++) {
    //   setResult((re) => re * 100);
    // }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>Result: {result01}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

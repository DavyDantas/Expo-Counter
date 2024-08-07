// App.tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Counter from './components/counter';

export function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };

  const subtValue = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Counter count={count} onIncrement={addValue} onDecrement={subtValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

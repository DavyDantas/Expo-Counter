import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function Counter(props:CounterProps) {
  return (
    <View style={styles.container}>
        <View style={styles.counter}>
            <Text style={styles.title}>Contador de Pessoas</Text>
            <View style={styles.counterValue}>
              <Text style={styles.counterText}>{props.count}</Text>
            </View>
        </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={props.onIncrement}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={props.onDecrement}>
            <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5360C4',
  },
  counter:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40, 
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 30,
    fontWeight: '600',
  },
  counterValue: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 230,
    height: 120,
    borderRadius: 20,
  },
  button:{
    width: 270,
    height: 100,
    marginBottom: 40,
    borderRadius: 10,
    backgroundColor: "#2F1C59",
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '600',
    },
  counterText: {
    fontSize: 48,
    color: '#000',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 'auto',
  },
});

export default Counter;

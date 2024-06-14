import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import Button from './components/Button.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <Button></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'end',
    alignItems: 'center',
  },
});
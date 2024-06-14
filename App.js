import React from "react";
import { View, StyleSheet } from 'react-native';
import Button from './components/Button.jsx'
import CatList from './components/CatList.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>
        <CatList />
      </View>
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
  containerLista: {
    width: "80%",
    height: "80%",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
});
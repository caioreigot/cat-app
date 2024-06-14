import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import Button from './components/Button.jsx'
import CatList from './components/CatList.jsx'

export default function App() {
  const [catApiResponse, setCatApiResponse] = useState([]);
  const [catsData, setCatsData] = useState([]);

  useEffect(() => {
    const selected = [];
    let randomSelected = null;

    for (let i = 0; i < 5; i++) {     
      let iterations = 0;
      let alreadyInCatsData = false;

      do {
        iterations++;

        let randomIndex = Math.ceil(Math.random() * (catApiResponse.length - 1));
        randomSelected = catApiResponse[randomIndex];

        catsData.concat(selected).filter((item) => item != null).forEach((cat) => {
          if (cat.id == randomSelected.id) {
            alreadyInCatsData = true;
          }
        });

        // Evitando loop infinito
        if (iterations > 100) {
          break;
        }
      } while(alreadyInCatsData)

      selected.push(randomSelected);
    }

    setCatsData(catsData.concat(selected).filter((item) => item != null));
  }, [catApiResponse]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLista}>
        <CatList catsData={catsData} />
      </View>
      <Button onApiResponseCallback={setCatApiResponse}></Button>
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
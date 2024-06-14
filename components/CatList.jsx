import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";

export default function Lista({catsData}) {
  return (
    <FlatList
      data={catsData}
      contentContainerStyle={styles.flatlist}
      keyExtractor={(element) => element.id}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1, aspectRatio: item.width / item.height }}
            source={{ uri: item.url }} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: {
    width: "100%",
  },
  imageContainer: {
    flexDirection: "column",
    marginVertical: 10,
  },
});
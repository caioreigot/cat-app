import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";

export default function Lista() {
  const fake_data = [
    {
      id: "1",
      url: "https://saude.abril.com.br/wp-content/uploads/2021/03/bichos-foto-vauvau-Getty-Images.png?w=680&h=449&crop=1",
      width: 680,
      height: 449,
    },
    {
      id: "2",
      url: "https://www.specialdog.com.br/assets/uploads/images/gateirosdeprimeiraviagem.png",
      width: 718,
      height: 446,
    },
    {
      id: "3",
      url: "https://www.doglife.com.br/blog/assets/post/gato-filhote-tudo-que-voce-precisa-saber-para-cuidar-bem-61aa5b4f5448461cf9e0a54b/filhote-capa.jpg.jpg?w=1200",
      width: 746,
      height: 497,
    },
    {
      id: "4",
      url: "https://portalvet.royalcanin.com.br/wp-content/uploads/2023/09/gato-persa-02-800x450.jpg",
      width: 800,
      height: 450,
    },
    {
        id: "5",
        url: "https://mundogum.s3.sa-east-1.amazonaws.com/wp-content/uploads/2016/03/06131716/big-cute-eyes-cat-black-scottish-fold-gimo-1room1cat-48.jpg",
        width: 700,
        height: 590,
    }
  ];

  return (
    <FlatList
      data={fake_data}
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
    flexDirection: "row",
    marginVertical: 10,
  },
});
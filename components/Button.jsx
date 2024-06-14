import {Pressable, StyleSheet, View} from "react-native";
import Cat from '../assets/cat.svg';
import axios from "axios";
import { API_KEY } from "@env";

export default function Button({onApiResponseCallback}) {
  return (
    <Pressable
      onPress={async () => {
        const api_response = (
          await axios.get(`https://api.thecatapi.com/v1/images/search?limit=5&api_key=${API_KEY}`)
        ).data;

        onApiResponseCallback(api_response);
      }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#1F4186" : "#2751A8" },
        styles.pressable,
      ]}
    >
      <View style={styles.content}>
        <Cat width={40} height={40} style={styles.icon} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
    height: 50,
    borderRadius: 8,
    width: "50%",
    minWidth: "80px",
    maxWidth: "100px",
    height: undefined,
    aspectRatio: 1 / 1,
    outlineStyle: "none",
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import {Pressable, StyleSheet, View} from "react-native";
import Cat from '../assets/cat.svg';

export default function Button() {
  return (
    <Pressable
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

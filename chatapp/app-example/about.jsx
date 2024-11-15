import { Text, View } from "react-native";

export default function About () {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        color: "white"
      }}>Hello world! about</Text>
    </View>
  );
}

import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
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
      }}>Hello world!</Text>
      <Link href="/about">
      Go to about
      </Link>
    </View>
  );
}

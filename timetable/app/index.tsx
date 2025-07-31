import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>This is my timetable app</Text>
      <Link href="/user">user</Link>
      <Link href="/calendar">calendar</Link>
    </View>
  );
}

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import Main from "./components/Main";
import Top from "./components/Top";

export default function App() {
  const folders = [
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Shopping",
      entry: 190,
      color: "red",
    },
    {
      name: "Recipe",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Shopping",
      entry: 190,
      color: "red",
    },
    {
      name: "Recipe",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Shopping",
      entry: 190,
      color: "red",
    },
    {
      name: "Recipe",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
    {
      name: "Shopping",
      entry: 190,
      color: "red",
    },
    {
      name: "Recipe",
      entry: 190,
      color: "red",
    },
    {
      name: "Trip",
      entry: 190,
      color: "red",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View contentContainerStyle={{ flex: 1 }}>
          <Top foldersCounter={folders.length} />
          <Main folders={folders} />
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    marginHorizontal: 20,
  },
});

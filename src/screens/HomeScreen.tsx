import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          navigation.push("SwipeImage", { index: 0 });
        }}
      >
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

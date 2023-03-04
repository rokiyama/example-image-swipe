import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { testdata } from "../testdata";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "SwipeImage">;

export const SwipeImageScreen = ({ route }: Props) => {
  const { index } = route.params;
  const { width, height } = useWindowDimensions();
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        initialScrollIndex={index}
        data={testdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Image style={{ width, height }} source={{ uri: item.url }} />
          </TouchableOpacity>
        )}
      />
      <Text>count: {count}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { testdata } from "../testdata";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={testdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.push("SwipeImage", { index });
            }}
          >
            <Image
              style={{ width: width / 3, height: width / 3 }}
              source={{ uri: item.url }}
            />
          </TouchableOpacity>
        )}
      />
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

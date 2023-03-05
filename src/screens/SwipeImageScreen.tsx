import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ViewToken,
} from "react-native";
import { testdata } from "../testdata";
import { RootStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<RootStackParamList, "SwipeImage">;

type onViewableItemsChanged =
  | ((info: {
      viewableItems: Array<ViewToken>;
      changed: Array<ViewToken>;
    }) => void)
  | null
  | undefined;

export const SwipeImageScreen = ({ route }: Props) => {
  const { index } = route.params;
  const { width, height } = useWindowDimensions();
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(index);
  const [isSwiping, setIsSwiping] = useState(false);
  // https://github.com/facebook/react-native/issues/30171
  const onViewableItemsChanged = useRef<onViewableItemsChanged>(
    ({ viewableItems }) => {
      if (viewableItems.length < 1 || !viewableItems[0].index) return;
      setCurrentIndex(viewableItems[0].index);
    }
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        initialScrollIndex={index}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewableItemsChanged.current}
        onScrollBeginDrag={() => setIsSwiping(true)}
        onScrollEndDrag={() => setIsSwiping(false)}
        data={testdata}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setCount(count + 1);
            }}
          >
            <Image style={{ width, height }} source={{ uri: item.url }} />
          </TouchableOpacity>
        )}
      />
      <Text>
        index:{index} currentIndex:{currentIndex} count:{count} isSwiping:
        {String(isSwiping)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

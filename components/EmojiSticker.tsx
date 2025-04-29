import { View } from "react-native";
import { Image, type ImageSource } from 'expo-image';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  return (
    <View style={{ top: -350 }}>
      <Animated.Image 
        source={stickerSource} 
        resizeMode="contain"
        style={{ width: imageSize, height: imageSize }} 
      />
    </View>
  );
}


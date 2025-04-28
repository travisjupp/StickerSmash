import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  // STORE IMAGE URI IN STATE
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  // LAUNCH DEVICES IMG LIBRARY FUNC
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // IMG PICKER OPTIONS
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
      });

    if (!result.canceled) {
      // SAVE IMG URI
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* PASS SELECTED IMG TO VIEWER */}
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

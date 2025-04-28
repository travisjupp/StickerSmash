import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  // STORE IMAGE URI IN STATE
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  // SHOW OR HIDE BUTTONS FOR MODAL
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);

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
      // SHOW APP OPTIONS
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // implement later
  };

  const onSaveImageAsync = async () => {
    // implement later
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* PASS SELECTED IMG TO VIEWER */}
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
          </View>
        )}
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});


import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image"; // npx expo install expo-image

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      {/* <Text style={styles.text}>Home screen</Text> */}
      {/* <Link href="/about" style={styles.button}> */}
      {/*   Go to About screen */}
      {/* </Link> */}
      {/* <Link href="/missing" style={styles.button}> */}
      {/*   Link to not found screen */}
      {/* </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  // text: {
  //   color: '#fff',
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: 'underline',
  //   color: '#fff',
  // },
});

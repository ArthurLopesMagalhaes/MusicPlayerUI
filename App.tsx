import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";

import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

const App = () => {
  return (
    <>
      <StatusBar hidden />

      <LinearGradient colors={["#AA6C42", "#472A17"]} style={styles.container}>
        <View style={styles.header}>
          <Icon name="chevron-down" size={32} color="#F8F5F3" />
          <Text style={styles.headerText}>Indie Rock Road Trip</Text>
          <Icon name="more-horizontal" size={20} color="#F8F5F3" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.musicName}>The Runner</Text>
          <Text style={styles.authorName}>Foals</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={{
              uri: "https://img.freepik.com/fotos-gratis/uma-estrada-estreita-e-lamacenta-em-uma-floresta-escura_181624-9675.jpg?w=740&t=st=1676762319~exp=1676762919~hmac=81185c570d106b6b89c4448ee852ca0f649bf5567c3d8971743c04e000443cec",
            }}
          />
          <Slider
            style={{ width: "100%", marginTop: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#E6B886"
            maximumTrackTintColor="#9A785B"
            thumbTintColor="#EBBD8A"
          />
        </View>

        <View style={styles.playerButtons}>
          <Icon name="minus-circle" size={22} color="#B19F92" />
          <Icon name="skip-back" size={32} color="#B19F92" />
          <Icon name="play-circle" size={50} color="#FFFFFF" />
          <Icon name="skip-forward" size={32} color="#FFFFFF" />
          <Icon name="heart" size={22} color="#C8915A" />
        </View>
        <View style={styles.bottomTabs}>
          <Icon name="shuffle" size={22} color="#C8915A" />
          <Icon name="list" size={22} color="#907A6E" />
          <Icon name="volume-2" size={22} color="#907A6E" />
          <Icon name="refresh-cw" size={22} color="#907A6E" />
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#AA6C42",
    paddingHorizontal: 32,
    paddingVertical: 48,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 18,
    color: "#F8F5F3",
    fontWeight: "600",
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 54,
  },
  musicName: {
    fontSize: 21,
    fontWeight: "600",
    color: "#F8F5F3",
  },
  authorName: {
    fontSize: 14,
    marginTop: 4,
    color: "#F8F5F3",
  },
  imgContainer: {
    flex: 1,
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 4,
    borderColor: "#9B775A",
  },
  playerButtons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 54,
  },
  bottomTabs: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default App;

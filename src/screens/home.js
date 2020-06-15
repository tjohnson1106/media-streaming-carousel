import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
  SafeAreaView
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { FontAwesome5, Feather, MaterialIcons } from "@expo/vector-icons";

// TODO 061420201822 Move all inline stylings to styles variable

const Home = () => {
  const [background, setBackground] = useState({
    // pexel
    // uri:
    //   "https://images.pexels.com/photos/133070/pexels-photo-133070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    // cloudinary
    uri:
      "https://res.cloudinary.com/bracket-factory/image/upload/v1592169138/stream/stream01.jpg",
    name: "the film",
    stat: "unknown",
    desc: "film photo"
  });

  // TODO Use CLoudinary to manage photos

  const [gallery, setGallery] = useState([
    {
      image:
        "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "coming soon",
      released: "2019 - Animation 1h 43m",
      key: "2",
      desc: "A staggering work of yet to be seen or even made modern film."
    },
    {
      image:
        "https://images.pexels.com/photos/3526020/pexels-photo-3526020.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Star Wars A New Hope",
      released: "2019 - Animation 1h 43m",
      key: "3",
      desc:
        " Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader. "
    },
    {
      image:
        "https://images.pexels.com/photos/592753/pexels-photo-592753.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "World Map",
      key: "4",
      desc: "I mean it's a world map"
    },
    {
      image:
        "https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      title: "Sky Tape",
      key: "5",
      desc: "Rebel, rebel, you're face is a mess"
    }
  ]);

  const [list, setList] = useState([
    {
      image:
        "https://res.cloudinary.com/bracket-factory/image/upload/v1592179355/stream/streamList01.jpg",
      key: "1"
    },
    {
      image:
        "https://res.cloudinary.com/bracket-factory/image/upload/v1592179355/stream/streamList02.jpg",
      key: "2"
    },
    {
      image:
        "https://res.cloudinary.com/bracket-factory/image/upload/v1592179355/stream/streamList03.jpg",
      key: "3"
    },
    {
      image:
        "https://res.cloudinary.com/bracket-factory/image/upload/v1592179355/stream/streamList04.jpg",
      key: "4"
    },
    {
      image:
        "https://res.cloudinary.com/bracket-factory/image/upload/v1592179355/stream/streamList05.jpg",
      key: "5"
    }
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc
            });
          }}
        >
          <Image source={{ uri: item.image }} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    // fragment implemented because FlatList is nested in ScrollView
    <>
      <ScrollView
        style={{
          backgroundColor: "#000"
        }}
      >
        <View style={styles.carouselContentContainer}>
          <View
            style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000 " }}
          >
            <ImageBackground
              source={{ uri: background.uri }}
              style={styles.imageBg}
              blurRadius={10}
            >
              <SafeAreaView>
                <View style={styles.searchBoxContainer}>
                  <TextInput
                    placeholder="Search Media"
                    placeholderTextColor="#666"
                    style={styles.searchBox}
                  />
                  <Feather
                    name="search"
                    size={22}
                    color="#666"
                    style={styles.searchBoxIcon}
                  />
                </View>
              </SafeAreaView>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  marginLeft: 10,
                  marginVertical: 10
                }}
              >
                Trending
              </Text>

              <View style={styles.carouselContainerView}>
                <Carousel
                  data={gallery}
                  renderItem={renderItem}
                  itemWidth={200}
                  containerWidth={width - 20}
                  separatorWidth={0}
                  ref={carouselRef}
                  inActiveOpacity={0.4}
                />
              </View>

              <View style={styles.mediaInfoContainer}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={styles.mediaName}>{background.name}</Text>
                  <Text style={styles.mediaStat}>{background.stat}</Text>
                </View>

                <TouchableOpacity style={styles.playIconContainer}>
                  <FontAwesome5
                    name="play"
                    size={22}
                    color="02ad94"
                    style={{ marginLeft: 4 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                <Text
                  style={{
                    color: "white",
                    opacity: 0.8,
                    lineHeight: 20
                  }}
                >
                  {background.desc}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{ marginHorizontal: 14 }}>
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 24
            }}
          >
            Continue Watching
          </Text>
          <ImageBackground
            source={{
              uri:
                "https://res.cloudinary.com/bracket-factory/image/upload/v1592177671/stream/stream-record.jpg"
            }}
            style={{ height: 250, width: "100%", backgroundColor: "#000" }}
            resizeMode="cover"
          >
            <Text style={{ color: "white", padding: 14 }}>
              Vinyl: The Sequel
            </Text>

            <TouchableOpacity
              style={{
                ...styles.playIconContainer,
                position: "absolute",
                top: "40%",
                right: "40%"
              }}
            >
              <FontAwesome5
                name="play"
                size={22}
                color="02ad94"
                style={{ marginLeft: 4 }}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
              marginTop: 36
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "bold"
              }}
            >
              My List
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                fontWeight: "normal"
              }}
            >
              View All
            </Text>
          </View>

          <FlatList
            style={{ marginBottom: 30 }}
            data={list}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 300, width: 200 }}
                  />

                  <View
                    style={{
                      position: "absolute",
                      height: 5,
                      width: "100%",
                      backgroundColor: "#02ad94",
                      opacity: 0.8
                    }}
                  ></View>
                  <FontAwesome5
                    name="play"
                    size={38}
                    color="#fff"
                    style={{
                      position: "absolute",
                      top: "45%",
                      left: "45%",
                      opacity: 0.9
                    }}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 720,
    paddingHorizontal: 14
  },
  imageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start"
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center"
  },
  searchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14
  },
  carouselContainerView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center"
  },
  Carousel: {
    flex: 1,
    overflow: "visible"
  },
  carouselImage: {
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "rgba( 0, 0, 0, 0.9)"
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold"
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15
  },
  mediaInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14
  },
  mediaName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6
  },
  mediaStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2, 173, 148, 0.2)",
    marginBottom: 14
  }
});

export default Home;

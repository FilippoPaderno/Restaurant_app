import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './src/constants/theme';

const slides = [
  {
    id: 1,
    title: "Discover Best Restaurants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("./src/assets/onboardScreen1.png"),
  },
  {
    id: 2,
    title: "Choose A Tasty Dish",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("./src/assets/onboardScreen2.png"),
  },
  {
    id: 3,
    title: "Pick Up The Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("./src/assets/onboardScreen3.png"),
  }
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => {
    return (
      <View style={{
        padding: 12,
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: "600",
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return(
            <View style= {{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 100,

            }}>
              <Image source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 400,
              }}
              resizeMode='contain'
              />
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
              }}>
                {item.title}
              </Text>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title,
              }}>
                {item.description}
              </Text>
            </View>
          )
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton={true}
        renderNextButton={() => {
          return buttonLabel('Next')
        }}
        renderSkipButton={() => {
          return buttonLabel('Skip')
        }}
        renderDoneButton={() => {
          return buttonLabel('Done')
        }}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

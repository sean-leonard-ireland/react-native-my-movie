import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            movie: {
              title: "Star Wars",
              release: 1977,
              screenNumber: 1,
            },
          });
        }}
      >
        <View>
          <Text>Star Wars</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            movie: {
              title: "Black Panther",
              release: 2018,
              screenNumber: 1,
            },
          });
        }}
      >
        <View>
          <Text>Black Panther</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        title="The Matrix"
        onPress={() => {
          navigation.navigate("Home_to_Details", {
            movie: {
              title: "The Matrix",
              release: 1999,
              screenNumber: 1,
            },
          });
        }}
      >
        <View>
          <Text>The Matrix</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

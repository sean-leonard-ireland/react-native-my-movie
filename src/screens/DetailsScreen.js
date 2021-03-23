import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  console.log(route);
  const { screenNumber } = route.params;
  return (
    <View style={styles.mainView}>
      <Text>Details Screen</Text>
      <Text style={{ fontSize: 100 }}>{screenNumber}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("Image");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          navigation.push("Details_to_Details", {
            screenNumber: screenNumber + 1,
          });
        }}
      />
      <Button
        title="Go Home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
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

export default DetailsScreen;

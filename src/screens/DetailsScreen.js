import React, { useEffect } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  //console.log(route);
  const movie = route.params.movie;

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://www.omdbapi.com/?apikey=ce09e2b7&t=Star+Wars&y=1977"
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status == 200) {
        console.log(xhr.response);
      } else {
        console.log(`http bad respsonse ${xhr.status}`);
      }
    };
  }, []);

  return (
    <View style={styles.mainView}>
      <Text style={{ fontSize: 20 }}>
        {movie.title} ({movie.release})
      </Text>
      <Text style={{ fontSize: 100 }}>{movie.screenNumber}</Text>
      <Button
        title="Go to Image"
        onPress={() => {
          navigation.navigate("BigImageView");
        }}
      />
      <Button
        title="More Details"
        onPress={() => {
          movie.screenNumber = movie.screenNumber + 1;
          console.log(movie);
          navigation.push("Details_to_Details", { movie: movie });
        }}
      />
      <Button
        title="Go Back to Home"
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

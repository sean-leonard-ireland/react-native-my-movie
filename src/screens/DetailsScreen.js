import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  const movie = route.params.movie;
  //console.log(movie.title);
  //console.log(movie.release);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://www.omdbapi.com/?apikey=ce09e2b7&t=${movie.title}&y=${movie.release}`
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status == 200) {
        let response = JSON.parse(xhr.response);
        console.log(response);
        //console.log(response.Writer);
        setMovieDetails(response);
      } else {
        console.log(`http bad respsonse ${xhr.status}`);
      }
    };
  }, []);

  return (
    <View style={styles.mainView}>
      <Text>{movieDetails == null ? "" : movieDetails.Title}</Text>
      <Text>{movieDetails == null ? "" : movieDetails.Released}</Text>
      <Text>{movieDetails == null ? "" : movieDetails.Plot}</Text>
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

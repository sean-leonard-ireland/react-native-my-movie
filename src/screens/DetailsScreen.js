import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
  //console.log(route);
  const movie = route.params.movie;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "http://www.omdbapi.com/?apikey=ce09e2b7&t=Star+Wars&y=1977"
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status == 200) {
        let response = JSON.parse(xhr.response);
        //console.log(response.Title);
        //console.log(response.Released);
        //console.log(response.Plot);
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

import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MealDetailsScreen = ({ navigation }) => {
  const selectedMeal = navigation.getParam("item");
  console.log({ selectedMeal });
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go to main screen"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const selectedMeal = navigation.getParam("item");
  return {
    headerTitle: selectedMeal.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;

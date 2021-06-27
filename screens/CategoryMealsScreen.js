import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const category = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>Categories Meals Screen</Text>
      <Text>{category.title}</Text>
      <Button
        title="Go To Meals Details!"
        onPress={() => {
          navigation.navigate("MealDetails");
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const category = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: category.title,
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "white",
  };
};

export default CategoryMealsScreen;

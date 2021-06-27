import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const CategoryMealsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Button
        title="Go To Meals Details!"
        onPress={() => {
          navigation.navigate("MealDetails");
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

export default CategoryMealsScreen;

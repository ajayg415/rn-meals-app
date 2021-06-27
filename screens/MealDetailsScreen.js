import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const MealDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>The Meals Details Screen</Text>
      <Button
        title="Go to main screen"
        onPress={() => {
          navigation.popToTop();
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

export default MealDetailsScreen;

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>College Forum</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Skeleton from "./src/Skeleton-placeholder";

const App = ({ }) => (
  <View style={style.container}>
    <Text style={style.heading}>First example</Text>
    <Skeleton />
    <View style={style.separator} />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  separator: {
    height: 40,
  },
  heading: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
    marginVertical: 20,
    color: '#303030',
    textAlign: 'center',
  },
});
App.propTypes = {};
App.defaultProps = {};
export default App;

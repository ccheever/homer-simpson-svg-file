import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import SvgUri from 'react-native-svg-uri';

class TestSvgUri extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <SvgUri width="200" height="200"
                 source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}} /> 
      </View>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TestSvgUri />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Exponent.registerRootComponent(App);

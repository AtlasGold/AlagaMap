import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          alignItems: "flex-start"
        }}>
        <Text>AlagaMap!</Text>
      </View>
    );
  }
}

export default Home;
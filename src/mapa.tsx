import React, { Component } from 'react';
import { Text, View, Button, Platform, StyleSheet,SafeAreaView } from 'react-native';
import MapView, {Marker} from 'react-native-maps';


const Mapa = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={css.container}> 
    
      <MapView style={css.map} initialRegion={{
        latitude: -8.052558407021138,
        longitude: -34.8851752281189,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker
          coordinate={{
            latitude: -8.052558407021138,
            longitude: -34.8851752281189
          }}
        />
      </MapView>
      <View style={css.buttonContainer}>
        <Button title="Reporta Ponto" onPress={() => navigation.navigate('Reporte')}/>
      </View>
    </SafeAreaView>
  );
};

const css = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff'
  },
  buttonContainer:{
    position: 'absolute',
    left:     '55%',
    top:      '80%',
  },
  headContainer:{
      padding: 20,
      paddingTop: Platform.OS == 'android' ? 50 : 0 
  },
  title:{
      fontsize:20,
      fontWeight:"400",
      color: "#322153"
  },
  subtitle:{
    fontsize:14,
    fontWeight:"400",
    color: "#322153"
  },
  map:{
    flex:1
  }
})

export default Mapa;
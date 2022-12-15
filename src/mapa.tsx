import React, { useState,useEffect } from 'react';
import { Text, View, Button, Platform, StyleSheet,SafeAreaView,Alert } from 'react-native';
import {Marker} from 'react-native-maps';
import MapView from "react-native-map-clustering";


const Mapa = ({navigation}: {navigation: any}) => {
  
  const alerta = () =>{
    Alert.alert(
      "Aviso",
      "Clique em algum lugar do mapa para mudar o ponto que deseja cadastrar.",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
      useEffect( () => {
      fetch('https://servidor-alagamaps.vercel.app/api/pontos/todosSeparados')
      .then((response) => response.json())
        .then((json) => setData(json))
      .catch((error) => console.error(error)) 
    },[])
    return (
      
      <SafeAreaView style={css.container}> 

        <MapView style={css.map} initialRegion={{
          latitude: -8.052558407021138,
          longitude: -34.8851752281189,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {data.map((item,index) => {
            return (
            <Marker
            key={index}
            coordinate={{
              latitude:item.lat,
              longitude:item.long 
            }}
            />
            )
          })}
        </MapView>
        <View style={css.buttonContainer}>
          <Button title="Reportar Ponto" onPress={() => {navigation.navigate('Reporte');  alerta()}}/>
          <Button title="Reload" onPress={ () => console.log('ooi') }/>
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
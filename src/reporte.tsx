import React, { useState,useEffect } from 'react';
import { Text, View, Button, Platform, StyleSheet,SafeAreaView, Alert} from 'react-native';
import MapView, { Marker} from 'react-native-maps';

const cadastrarPonto = (longitude:any, latitude:any,navigation:any) => {
  let headerInformacoes = {
    "Content-Type": "application/json",
  };
  let bodyInformacoes = JSON.stringify({
    long: longitude,
    lat: latitude,
  });
  fetch("https://servidor-alagamaps.vercel.app/api/pontos/criar", {
    method: "POST",
    body: bodyInformacoes,
    headers: headerInformacoes,
  })
    .then((data) => {
      Alert.alert("Sucesso!", "Ponto cadastrado com sucesso", [
        { text: "OK", onPress: () => navigation.navigate('Mapa') },
      ]);
    })
    .catch((e) => {
      Alert.alert(
        "Erro!",
        "Parece que houve um erro ao cadastrar o ponto, tente denovo. Caso o problema persistir, entre em contato conosco.",
        [{ text: "OK", onPress: () => console.log("OK") }]
      );
    });
}

const escolherPonto = (longitude:any, latitude:any,navigation:any) => {
  try {
    if (longitude == -34.8851752281189 && latitude == -8.052558407021138) {
      Alert.alert("Erro", "Escolha um lugar diferente para ser cadastrado", [
        { text: "OK", onPress: () => console.log("OK") },
      ]);
    } else {
      Alert.alert(
        "Confirmação",
        "Você tem certeza que deseja adicionar o ponto nessa localização?",
        [
          { text: "SIM", onPress: () => cadastrarPonto(longitude, latitude,navigation) },
          { text: "NÃO", onPress: () => console.log("NÃO") },
        ]
      );
    }
  } catch (e) {
    console.log(e);
  }
};

const Reporte = ({navigation}: {navigation: any}) => {

  const ponto = {
    latitude: -8.052558407021138,
    longitude: -34.8851752281189,
  }
  const [isLoading, setLoading] = useState(true);
  const [marker, setMarker] = useState<any>(ponto);
  

  const colocarMarker = (coordinate:any) =>{
    setMarker(coordinate)
  }
 
  return (
    <SafeAreaView style={css.container}> 

      <MapView style={css.map} initialRegion={{
        latitude: -8.052558407021138,
        longitude: -34.8851752281189,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} onPress={(e) => {colocarMarker(e.nativeEvent.coordinate)}}
      >
        <Marker
          coordinate={{
            latitude: marker.latitude || -8.052558407021138,
            longitude: marker.longitude || -8.052558407021138  
          }}
        />
      </MapView>
      <View style={css.buttonContainer}>
        <Button title="Adicionar Ponto" onPress={() => escolherPonto(marker.longitude, marker.latitude,navigation)}/>
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

export default Reporte;
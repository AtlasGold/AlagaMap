import React, { useState,useEffect } from 'react';
import { Text, View, Button, Platform, StyleSheet,SafeAreaView,Alert,TouchableOpacity } from 'react-native';
import {Marker} from 'react-native-maps';
import MapView from "react-native-map-clustering";
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Mapa = ({navigation}: {navigation?: any}) => {
  
  const alerta = () =>{
    Alert.alert(
      "Aviso",
      "Clique em algum lugar do mapa para mudar o ponto que deseja cadastrar.",
      [
        { text: "OK", onPress: () => console.log("Ok, eu sei usar a tela de reporte.") }
      ]
    );
  }
  const atualizar = () =>{
    fetch('https://servidor-alagamaps.vercel.app/api/pontos/todosSeparados',{
        method: "GET",
        headers: headerInformacoes
      })
      .then((response) => response.json())
        .then((json) => setData(json))
      .catch((error) => console.error(error)) 
  }
  const IconButton = ({ title, onPress, icon }: { title:any, onPress:any, icon:any }) => (
    <TouchableOpacity onPress={onPress}>
      <Text style={css.text}>{title}</Text>
      {icon}
    </TouchableOpacity>
  );

  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  let headerInformacoes = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  };
      useEffect( () => {
      fetch('https://servidor-alagamaps.vercel.app/api/pontos/todosSeparados',{
        method: "GET",
        headers: headerInformacoes
      })
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
        <IconButton
          title={'Menu'}
          onPress={() => { {navigation.navigate('Home');}}}
          icon={<Feather  name="menu" size={30} color="white" style={css.icon} />}
        />
        <IconButton
          title={'Reportar'}
          onPress={() => { {navigation.navigate('Reporte');  alerta()}}}
          icon={<Octicons name="report" size={30} color="white" style={css.icon} />}
        />

        <IconButton
          title={'Atualizar'}
          onPress={() => { {atualizar()}}}
          icon={<Feather name="refresh-ccw" size={30} color="white" style={css.icon} />}
        />

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
    backgroundColor: "#4758F0",
    alignItems:'center',
    padding:20,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  },
  text:{
    color:'#fff',
    alignSelf: 'center'
  },
  icon:{
    alignSelf:'center',
    padding: 5
  }
})

export default Mapa;
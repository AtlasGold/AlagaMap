import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
const Home = ({ navigation }: {navigation:any}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Mapa</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Contatos úteis</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Fale conosco</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Configurações</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Nos avalie</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Sobre</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Card style={styles.list}>
          <Text style={styles.text}>Logout</Text>
        </Card>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
    padding: 8,
  },
  list: {
    padding: 20,
    backgroundColor: '#4758F0',
    borderRadius: 5,
    marginTop: 10,
  },
  text:{
    color:'#fff',
    fontSize: 20
  }
});
export default Home

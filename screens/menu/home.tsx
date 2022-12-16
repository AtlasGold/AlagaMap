import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const url =
  'https://stackoverflow.com/questions/65647568/react-native-creating-sections-in-a-list-with-clickable-link-to-screen#65647648';


const Home = ({ navigation }: {navigation:any}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Mapa</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Contatos úteis</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Fale conosco</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Configurações</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Nos avalie</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mapa')}>
        <Card style={styles.list}>
          <Text>Sobre</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Card style={styles.list}>
          <Text>Logout</Text>
        </Card>
      </TouchableOpacity>
      
    </View>
  );
};

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#4758F0",
    padding: 8,
  },
  list: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
});
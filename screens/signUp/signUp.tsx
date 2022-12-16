import { View, Text, TouchableOpacity, TextInput,Alert } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { signUp } from "../../firebase";

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const [name, setName]: any = useState("");

  // function cadastro(){
  //   if (email == '' || password == '' || name == ''){
  //     Alert.alert(
  //       "Aviso",
  //       "Nenhum campo pode ficar vazio.",
  //       [
  //         { text: "OK", onPress: () => console.log("OK Pressed") }
  //       ]
  //     );
  //   }
  //   else{
  //     cadastrarUsuario(email,password,name)
  //   }
  // }

  // const cadastrarUsuario = (email:any, pwd:any,name:any,navigation:any) => {
  //   let headerInformacoes = {
  //     "Content-Type": "application/json",
  //   };
  //   let bodyInformacoes = JSON.stringify({
  //     nome: name,
  //     pwd: pwd,
  //     email: email
  //   });
  //   fetch("https://servidor-alagamaps.vercel.app/api/usuarios/criar", {
  //     method: "POST",
  //     body: bodyInformacoes,
  //     headers: headerInformacoes,
  //   })
  //     .then((data) => {
  //       Alert.alert("Sucesso!", "Usuário cadastrado com sucesso", [
  //         { text: "OK", onPress: () => navigation.navigate('Mapa') },
  //       ]);
  //     })
  //     .catch((e) => {
  //       Alert.alert(
  //         "Erro!",
  //         "Parece que houve um erro ao cadastrar o usuário, tente novamente mais tarde. Caso o problema persistir, entre em contato conosco.",
  //         [{ text: "OK", onPress: () => console.log("OK") }]
  //       );
  //     });
  // }

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>AlagaMaps</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.containerTitle}>Cadastro</Text>
        <TextInput
          autoComplete="name"
          style={styles.emailInput}
          value={name}
          onChangeText={setName}
          placeholder="Cadastre seu Nome"
          underlineColorAndroid={"white"}
          placeholderTextColor="rgb(197, 198, 204)"
        ></TextInput>
        <TextInput
          autoComplete="email"
          value={email}
          onChangeText={setEmail}
          style={styles.emailInput}
          placeholder="Cadastre seu Email"
          underlineColorAndroid={"white"}
          placeholderTextColor="rgb(197, 198, 204)"
        ></TextInput>
        <TextInput
          autoComplete="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.passwordInput}
          placeholder="Cadastre sua senha"
          underlineColorAndroid={"white"}
          placeholderTextColor="rgb(197, 198, 204)"
        ></TextInput>
        <View style={styles.loginOptions}>
          <Text
            style={styles.loginOptionsTextLeft}
            onPress={() => {
              navigation.goBack("SignIn");
            }}
          >
            Já possuo conta{" "}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            alignContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ color: "rgb(230, 231, 237)" }}>
            Não quer criar uma conta ? {"\n"} {"          "}Sem problemas!
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            onPress={() => {navigation.navigate('Mapa')}}
            style={{
              textAlign: 'center',
              color: "white",
              fontSize: 15,
              marginHorizontal: 98,
              marginVertical: 10,
              borderRadius: 50,
              textShadowColor: "#585858",
              textShadowOffset: { width: 5, height: 5 },
              textShadowRadius: 10,
              marginBottom: 20,
            }}
          >
            Entrar sem Login
          </Text>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.button}
              onPress={async () => await signUp(email, password)}
            >
              <Text style={styles.buttonText}> Cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { signUp } from "../../firebase";

export default function SignUpScreen({ navigation }: any) {
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

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
            onPress={() => {}}
            style={{
              color: "white",
              fontSize: 18,
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

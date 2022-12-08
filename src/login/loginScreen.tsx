import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./style";

export default function LoginScreen() {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>AlagaMaps</Text>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.containerTitle}>Login</Text>
        <TextInput
          autoComplete="email"
          style={styles.emailInput}
          placeholder="Digite seu Email"
          underlineColorAndroid={"white"}
          placeholderTextColor="rgb(197, 198, 204)"
        ></TextInput>
        <TextInput
          autoComplete="password"
          secureTextEntry={true}
          style={styles.passwordInput}
          placeholder="Digite sua senha"
          underlineColorAndroid={"white"}
          placeholderTextColor="rgb(197, 198, 204)"
        ></TextInput>
        <View style={styles.loginOptions}>
          <Text style={styles.loginOptionsTextLeft} onPress={() => {}}>
            {" "}
            Crie sua conta{" "}
          </Text>
          <Text style={styles.loginOptionsTextRigth} onPress={() => {}}>
            {" "}
            Esqueceu a senha ?{" "}
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

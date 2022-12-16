import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    alignContent: "center",
    marginVertical: 50,
  },
  titleText: {
    color: "#5362F0",
    fontSize: 29,
    fontWeight: "bold",
  },
  emailInput: {
    marginHorizontal: 40,
    paddingVertical: 5,
    marginVertical: -5,
    fontSize: 15,
    color: "white",
    marginTop: 10,
  },
  passwordInput: {
    marginHorizontal: 40,
    paddingVertical: 5,
    marginVertical: -5,
    fontSize: 15,
    color: "white",
    marginTop: 10,
    textDecorationLine: "underline line-through",
  },
  loginContainer: {
    backgroundColor: "#4758F0",
    borderRadius: 15,
    marginHorizontal: "9%",
    paddingVertical: 10,
    paddingBottom: 30,
  },
  containerTitle: {
    alignItems: "center",
    alignContent: "center",
    marginHorizontal: "25%",
    color: "white",
    fontSize: 24,
    padding: 20,
  },
  loginOptions: {
    flexDirection: "row-reverse",
    marginVertical: 10,
    marginHorizontal: 40,
  },
  loginOptionsTextLeft: {
    marginLeft: 30,
    fontSize: 13,
    color: "rgb(197, 198, 204)",
  },
  loginOptionsTextRigth: {
    marginRight: 50,
    fontSize: 13,
    marginHorizontal: 20,
    color: "rgb(197, 198, 204)",
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: "20%",
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#5362F0",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

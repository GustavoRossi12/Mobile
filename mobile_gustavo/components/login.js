import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View>  
        <br/>
        <Image style={styles.imagem} source={require("../sources/john.webp")}/>
        <Text style={styles.txt_title}>LOGIN</Text>
        <br/>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Senha" secureTextEntry />
        <Button color="#000000ff" title="Entrar" onPress={() => alert("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({

  txt_title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffff',
  },
    imagem: {
    width: 200,
    height: 250,
  },
});
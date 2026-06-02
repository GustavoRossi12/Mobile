import { View, Text, TextInput,Button,StyleSheet} from "react-native";
import { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Exemplo1AsyncStorege(){
    const [nome,setnome]=useState('')
    const [Senha,steSenha]=useState('')
    const [nomeSalvo, SetNomeSalvo]=useState('')

  const SalvarPessoa = async () => {
    const pessoa={
        nome:nome,
        senha:Senha
    }
  try {
    const jsonValue = JSON.stringify(pessoa);
    await AsyncStorage.setItem('@pessoa', jsonValue);
    alert ('deu certo')
  } catch (e) {
    console.log(e)
    
  }

};
const MostrarPessoa = async () => {
try {
  const jsonValue = await AsyncStorage.getItem('@pessoa');
  if(jsonValue != null){
    const pessoa=JSON.parse(jsonValue)
    SetNomeSalvo(pessoa)}
   
} catch (e) {
    console.log(e)
  
}
};

useEffect(()=>{
    MostrarPessoa();
}, [])

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>CADASTRAR</Text>
            <TextInput
            style={styles.txtinput}
            placeholder="nome"
            value={nome}
            onChangeText={setnome}
            />
            <TextInput
            style={styles.txtinput}
            placeholder="senha"
            value={Senha}
            onChangeText={steSenha}
            secureTextEntry={true}
            />
            <Button title="entrar" onPress={SalvarPessoa} color={'black'}/>

            <Text>
               seu nome: {nomeSalvo?.nome}
            </Text>
            <Text>
               sua senha: {nomeSalvo?.senha}
            </Text>
        </View>

    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange'
    },
    txtinput:{
        borderWidth:1,
        marginBottom:5,
        borderRadius:10
    },
    titulo:{
      fontSize:35,
      marginBottom:8,
      fontWeight:"black"

      
    }

})
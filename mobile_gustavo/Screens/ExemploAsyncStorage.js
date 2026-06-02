import { View, Text, TextInput,Button,StyleSheet} from "react-native";
import { useState,useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ExemploAsyncStorage(){
    const [nome,setnome]=useState('');
    const [nomeSalvo, SetNomeSalvo]=useState('')

    const salvarnome = async () => {
  try {
    await AsyncStorage.setItem('@nomePessoa', nome)
    alert('nome salvo!!')
    setnome('')
  } catch (e) {
   console.log(e)
  }
};


const MostrarNome = async () => {
  try {
    const value = await AsyncStorage.getItem('@nomePessoa');
    if (value !== null) {
      SetNomeSalvo(value);
    }
  } catch (e) {
    console.log(e)
  }
};

useEffect(()=>{
    MostrarNome();
}, [])

    return(
        <View style={styles.container}>
            <TextInput
            placeholder="nome"
            value={nome}
            onChangeText={setnome}
            />
            <Button title="entrar" onPress={salvarnome}/>

            <Text>
               {nomeSalvo}
            </Text>
        </View>

    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }

})
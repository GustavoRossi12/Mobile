import {View, Text, TextInput, Button} from 'react-native';
import { TextInput } from 'react-native-web';

const db = openDB();

export default function Produtos(){
    const [nome,setName] = useState();
    const [valor,setValor] = useState();

    const adicionarProduto = async => {
        await db.runAsync('INSERT INTO produtos (name, valor VALUES (?, ?)', [nome, parseFloat(valor)]);
        alert('produto adicionado!')
    }

    return(
        <View>
            <Text>produtos</Text>
            <TextInput 
            placeholder='Nome'
            value='nome'
            onChangeText={setNome}
            />
            <TextInput 
            placeholder='Valor'
            value='valor'
            onChangeText={setValor}
            />

            <Text>{nome}</Text>
            <Text>{valor}</Text>
            <Button title='cadastrar' onPress={}></Button>
        </View>
    )
}
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { drivers } from './data/drivers';

export default function App() {
  const [piloto, setPiloto] = useState(0);

  const motoristas = drivers[piloto];

  function proximoPiloto() {
    setPiloto((piloto + 1) % drivers.length);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{ uri: motoristas.image }} />

        <Card.Content style={styles.card}>
          <Text style={styles.txt}>{motoristas.name}</Text>
          <Text>{motoristas.description}</Text>
          <Text>Equipe: {motoristas.team}</Text>
          <Text>País: {motoristas.country}</Text>
          <Text>Estrelas: {'★'.repeat(motoristas.stars)}</Text>

          <Button
            mode="contained"
            onPress={proximoPiloto}
            style={styles.button}
          >
            Próximo Piloto
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e26f6f',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },

  card: {
    width: 400,
    marginBottom: 20,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#000',
  },
});
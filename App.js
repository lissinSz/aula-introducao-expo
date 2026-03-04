import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Atividade01 from './src/atividades/ativ-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo01 />
      <Atividade01 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ea1d4',
    padding: 12,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

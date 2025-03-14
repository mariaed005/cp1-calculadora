import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './src/components/Formulario';
import Resultado from './src/components/Resultado';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial/>
      <Resultado/>
      <StatusBar style="auto" />
    </View>
  );
}


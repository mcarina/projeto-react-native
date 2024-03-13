import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './src/screens/Home';

export default function App() {
  return (
    <>
      <Inicio/>
      <StatusBar style="light" />
    </>
  );
}


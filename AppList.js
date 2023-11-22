import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function AppList() {
  return (
    <View style={styles.container}>
      <Text>ChampolaDev Marcio Alexsandro</Text>
      <StatusBar style="light" />
    </View>
  );
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3dd900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

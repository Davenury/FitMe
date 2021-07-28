import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getAllRecipes } from './utils/database_client';
import { createTheme, ThemeProvider, Button } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2569A1'
    }
  }
})

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>XD</Text>
        <Button variant="contained" color="primary">Text</Button>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

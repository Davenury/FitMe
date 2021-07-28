import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY, AUTH_DOMAIN, STORAGE_BUCKET, PROJECT_ID, APP_ID, MESSAGING_SENDER_ID } from '@env'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseUrl: `https://${PROJECT_ID}.firebaseio.com`,
  storageBucket: STORAGE_BUCKET,
  projectId: PROJECT_ID,
  appId: APP_ID,
  messagingSenderId: MESSAGING_SENDER_ID
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


export default function App() {

  return (
    <View style={styles.container}>
      <Text>XD</Text>
      <StatusBar style="auto" />
    </View>
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

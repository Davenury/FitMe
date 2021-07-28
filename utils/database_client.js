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

export const getAllRecipes = async () => {
    const recipes = []
    await db.collection('recipes')
        .get()
        .then((querySnapshot) => querySnapshot.forEach(doc => recipes.push(doc.data())))
        .catch(err => console.log(err))
    return recipes
}
require('dotenv').config()
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyCr76YsbOj3Y2u5-s44KGjkuFCgUBXTgXg",
    authDomain: "fitme-7b106.firebaseapp.com",
    projectId: "fitme-7b106",
    storageBucket: "fitme-7b106.appspot.com",
    messagingSenderId: "279707137457",
    appId: "1:279707137457:web:794db01923e6e4c6937990"
  };

  firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const createRecipe = (day, meal, name, products) => {
    return {
        day,
        meal,
        name,
        products
    }
}

const addToDB = async (document) => {
    await db.collection('recipes').add(document)
}

const recipes = [
    createRecipe('Wendesday', 'Breakfast', 'Omlet', {'Jajka': 3, 'Mąka': 25, 'Olej': 8, 'Dżem': 40, "Banan": 120}),
    createRecipe('Wendesday', 'Lunch', 'Surówka z owoców', {'Owoce': 300}),
    createRecipe('Wendesday', 'Dinner', 'Kurczak w sosie', {'Pierś z kurczaka': 180, 'Ryż': 100, 'Ananas': 110, 'Passata': 400, 'Papryka czerwona': 100, }),
    createRecipe('Wendesday', 'Snack', 'Kabanosy', {'Kabanosy': 45, 'Wafle ryżowe': 50}),
    createRecipe('Wendesday', 'Supper', 'Kanapki', {'Ser mozzarella': 120, 'Bułki grahamki': 90, 'Cebula': 30, 'Rzodkiewka': 30, 'Szynka': 40, 'Surówka': 150}),

    createRecipe('Thursday', 'Breakfast', 'Omlet', {'Jajka': 3, 'Mąka': 25, 'Olej': 8, 'Dżem': 40, "Banan": 120}),
    createRecipe('Thursday', 'Lunch', 'Surówka z owoców', {'Owoce': 300}),
    createRecipe('Thursday', 'Dinner', 'Kurczak w sosie', {'Pierś z kurczaka': 180, 'Ryż': 100, 'Ananas': 110, 'Passata': 400, 'Papryka czerwona': 100, }),
    createRecipe('Thursday', 'Snack', 'Kabanosy', {'Kabanosy': 45, 'Wafle ryżowe': 50}),
    createRecipe('Thursday', 'Supper', 'Kanapki', {'Ser mozzarella': 120, 'Bułki grahamki': 90, 'Cebula': 30, 'Rzodkiewka': 30, 'Szynka': 40, 'Surówka': 150}),

    createRecipe('Friday', 'Breakfast', 'Kanapki z pastą twarogową', {'Bułki grahamki': 90, 'Ser twarogowy': 100, 'Jogurt naturalny': 15, 'Ogórek kwaszony': 240, "Koperek": 4, "Słonecznik": 10, "Kukurydza konserwowa": 50}),
    createRecipe('Friday', 'Lunch', 'Koktail', {'Jogurt naturalny': 200, "Banan": 120, "Kakao 16%": 10, "Daktyle suszone": 15}),
    createRecipe('Friday', 'Dinner', 'Pizza z patelni', {'Jajka': 1, "Mąka": 40, "Śmietana 18%": 40, "Jogurt naturalny": 40, "Cebula": 60, "Papryka czerwona": 60, "Pieczarki": 50, "Ser mozzarella": 60, "Surówka": 250, "Wafle ryżowe": 30 }),
    createRecipe('Friday', 'Snack', 'Fit nutella', {'Fit nutella': 60, 'Wafle ryżowe': 50}),
    createRecipe('Friday', 'Supper', 'Roladki z tortilli', {'Tortilla pełnoziarnista': 1, 'Serek almette': 50, 'Ser żółty': 50, 'Ogórek': 60, 'Papryka czerwona': 80}),

    createRecipe('Saturday', 'Breakfast', 'Jajecznica', {'Jajka': 3, 'Szynka': 40, 'Cebula': 20, 'Bułki grahamki': 120}),
    createRecipe('Saturday', 'Lunch', 'Musli', {'Jogurt naturalny': 150, "Musli z owocami": 50, "Słonecznik": 15}),
    createRecipe('Saturday', 'Dinner', 'Noga z kurczaka', {'Ziemniaki': 300, "Olej": 10, "Noga z kuczaka (z kością)": 250, "Surówka": 400, "Kefir 2%": 200}),
    createRecipe('Saturday', 'Snack', 'Fit nutella', {'Fit nutella': 60, 'Wafle ryżowe': 50}),
    createRecipe('Saturday', 'Supper', 'Kanapki z pastą twarogową', {'Bułki grahamki': 80, 'Ser twarogowy': 100, 'Jogurt naturalny': 15, 'Ogórek kwaszony': 240, "Koperek": 4, "Surówka z rzodkiewki": 50, "Surówka z papryki": 150}),

    createRecipe('Sunday', 'Breakfast', 'Jajecznica', {'Jajka': 3, 'Szynka': 60, 'Cebula': 50, 'Bułki grahamki': 90}),
    createRecipe('Sunday', 'Lunch', 'Skyr', {'Skyr owocowy': 150, "Wafle ryżowe": 60}),
    createRecipe('Sunday', 'Dinner', 'Kotlety', {'Ziemniaki': 240, "Kotlety panierowane": 200, "Surówka z kapusty kwaszonej": 100}),
    createRecipe('Sunday', 'Snack', 'Fit nutella', {'Fit nutella': 60, 'Wafle ryżowe': 50}),
    createRecipe('Sunday', 'Supper', 'Sałatka z kuskusem', {'Kasza kuskus': 60, 'Jajka': 1, 'Surówka wielowarzywna': 400, 'Czosnek': 5, "Ser mozzarella": 50, "Kukurydza konserwowa": 30}),
]

recipes.forEach(item => {
    addToDB(item)
})